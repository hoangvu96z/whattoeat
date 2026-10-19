import React, { useState, useEffect, useRef, useMemo } from 'react';
import { I18N, CAMPUSES, DISHES } from './data';
import { BowlRiceIcon, BowlEggIllustration, BowlCheckIllustration } from './Icons';

const DISTANCES = [
  { label: '500m', meters: 500 },
  { label: '1km', meters: 1000 },
  { label: '3km', meters: 3000 }
];

export default function App() {
  // Language: 'vi' | 'zh' | 'en'
  const [lang, setLang] = useState(() => localStorage.getItem('agd_lang') || 'vi');
  const t = I18N[lang] || I18N.vi;

  // Connected Navigation State: 'home' | 'results' | 'detail' | 'saved' | 'tracker'
  const [activeView, setActiveView] = useState('home');
  const [previousView, setPreviousView] = useState('results');

  // Filter State
  const [budget, setBudget] = useState(100);
  const [area, setArea] = useState('campus'); // 'campus' | 'hualien'
  const [campusId, setCampusId] = useState('ndhu_zhixue');
  const [maxDistance, setMaxDistance] = useState(1000);
  const [selectedTags, setSelectedTags] = useState([]);

  // Draft Filter State inside Filter Bottom Sheet Modal
  const [draftBudget, setDraftBudget] = useState(100);
  const [draftArea, setDraftArea] = useState('campus');
  const [draftCampusId, setDraftCampusId] = useState('ndhu_zhixue');
  const [draftDistance, setDraftDistance] = useState(1000);
  const [draftTags, setDraftTags] = useState([]);

  // Saved Favorites (persisted in localStorage)
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const raw = localStorage.getItem('agd_saved');
      return raw ? JSON.parse(raw) : ['com-ga', 'banh-bao'];
    } catch {
      return ['com-ga', 'banh-bao'];
    }
  });

  // Confirmed Meals Log Today (persisted in localStorage)
  const [todayHistory, setTodayHistory] = useState(() => {
    try {
      const raw = localStorage.getItem('agd_history_v2');
      return raw
        ? JSON.parse(raw)
        : [
            {
              id: 'init-1',
              dishId: 'com-ga',
              addonIds: [],
              budgetAtTime: 100,
              totalPrice: 85,
              ts: Date.now()
            }
          ];
    } catch {
      return [];
    }
  });

  // Currently selected dish & order customizations in Detail screen
  const [selectedDishId, setSelectedDishId] = useState('com-ga');
  const [selectedAddonIds, setSelectedAddonIds] = useState([]);
  const [customOrderIds, setCustomOrderIds] = useState(['dine_in']);

  // Shuffle, Show All & Spin state
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [showAllMatches, setShowAllMatches] = useState(false);
  const [spinningId, setSpinningId] = useState(null);

  // Toast Notification
  const [toastMsg, setToastMsg] = useState('');
  const toastTimerRef = useRef(null);

  // Native Dialog Refs (Modern Web Guidance: light-dismiss-a-dialog)
  const filterDialogRef = useRef(null);
  const mapDialogRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('agd_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('agd_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('agd_history_v2', JSON.stringify(todayHistory));
  }, [todayHistory]);

  // Fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialogs = [filterDialogRef.current, mapDialogRef.current].filter(Boolean);
    if ('closedBy' in HTMLDialogElement.prototype) return;

    const handleBackdropClick = (event) => {
      const dialog = event.currentTarget;
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isDialogContent) {
        dialog.close();
      }
    };

    dialogs.forEach((d) => d.addEventListener('click', handleBackdropClick));
    return () => {
      dialogs.forEach((d) => d.removeEventListener('click', handleBackdropClick));
    };
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMsg('');
    }, 2400);
  };

  // Time-of-day greeting
  const greetingText = useMemo(() => {
    const hr = new Date().getHours();
    if (hr >= 5 && hr < 11) return t.greetingMorning;
    if (hr >= 11 && hr < 16) return t.greetingNoon;
    if (hr >= 16 && hr < 21) return t.greetingEvening;
    return t.greetingNight;
  }, [t]);

  // All dishes matching current filter criteria
  const allMatchingDishes = useMemo(() => {
    return DISHES.filter((d) => {
      if (d.price > budget) return false;
      if (area === 'campus') {
        if (d.distanceMeters > maxDistance) return false;
        if (!d.campuses.includes(campusId)) return false;
      }
      if (selectedTags.length > 0) {
        const hasAll = selectedTags.every((tg) => d.tags.includes(tg));
        if (!hasAll) return false;
      }
      return true;
    });
  }, [budget, area, campusId, maxDistance, selectedTags]);

  // Suggested 4 dishes rotated by shuffleSeed (or all matching dishes if expanded)
  const suggestedDishes = useMemo(() => {
    if (allMatchingDishes.length === 0) return [];
    let list = [...allMatchingDishes];
    if (shuffleSeed > 0 && list.length > 1) {
      const offset = (shuffleSeed * 4) % list.length;
      list = [...list.slice(offset), ...list.slice(0, offset)];
    }
    return showAllMatches ? list : list.slice(0, 4);
  }, [allMatchingDishes, shuffleSeed, showAllMatches]);

  const currentDish = useMemo(
    () => DISHES.find((d) => d.id === selectedDishId) || DISHES[0],
    [selectedDishId]
  );

  const currentCampus = useMemo(
    () => CAMPUSES.find((c) => c.id === campusId) || CAMPUSES[0],
    [campusId]
  );

  const savedDishList = useMemo(
    () => DISHES.filter((d) => savedIds.includes(d.id)),
    [savedIds]
  );

  const addonsTotal = useMemo(() => {
    return t.addons
      .filter((a) => selectedAddonIds.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
  }, [t.addons, selectedAddonIds]);

  const totalCurrentMealPrice = currentDish.price + addonsTotal;
  const remainingBudget = budget - totalCurrentMealPrice;

  // Toggle helpers
  const toggleTag = (tagKey, isDraft = false) => {
    if (isDraft) {
      setDraftTags((prev) =>
        prev.includes(tagKey) ? prev.filter((k) => k !== tagKey) : [...prev, tagKey]
      );
    } else {
      setSelectedTags((prev) =>
        prev.includes(tagKey) ? prev.filter((k) => k !== tagKey) : [...prev, tagKey]
      );
    }
  };

  const toggleSaveDish = (dishId, e) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) => {
      const exists = prev.includes(dishId);
      showToast(exists ? t.toastRemovedFav : t.toastAddedFav);
      return exists ? prev.filter((id) => id !== dishId) : [...prev, dishId];
    });
  };

  const openDishDetail = (dishId, fromView = activeView) => {
    setSelectedDishId(dishId);
    setSelectedAddonIds([]);
    setPreviousView(fromView === 'detail' ? 'results' : fromView);
    setActiveView('detail');
  };

  const toggleAddon = (addonId) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const toggleCustomOrder = (id) => {
    setCustomOrderIds((prev) => {
      // Make dine_in and takeout mutually exclusive
      if (id === 'dine_in') {
        return [...prev.filter((x) => x !== 'takeout' && x !== 'dine_in'), 'dine_in'];
      }
      if (id === 'takeout') {
        return [...prev.filter((x) => x !== 'dine_in' && x !== 'takeout'), 'takeout'];
      }
      return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
    });
  };

  // Build complete Mandarin Order Phrase
  const fullZhOrderSentence = useMemo(() => {
    const addonParts = t.addons
      .filter((a) => selectedAddonIds.includes(a.id))
      .map((a) => a.zh);
    const customParts = t.customOrders
      .filter((c) => customOrderIds.includes(c.id))
      .map((c) => c.zh);

    let sentence = currentDish.zhOrderText;
    if (addonParts.length > 0) {
      sentence += `，還要${addonParts.join('、')}`;
    }
    if (customParts.length > 0) {
      sentence += `（${customParts.join('，')}）`;
    }
    return sentence + '，謝謝！';
  }, [currentDish, t.addons, t.customOrders, selectedAddonIds, customOrderIds]);

  const speakOrderMandarin = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(fullZhOrderSentence);
      utter.lang = 'zh-TW';
      utter.rate = 0.92;
      window.speechSynthesis.speak(utter);
    }
  };

  const copyOrderPhrase = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullZhOrderSentence);
      showToast(t.copiedToast);
    }
  };

  // Random spin on Results or Home
  const handleQuickRandomFromHome = () => {
    const pool = allMatchingDishes.length > 0 ? allMatchingDishes : DISHES;
    const randomDish = pool[Math.floor(Math.random() * pool.length)];
    openDishDetail(randomDish.id, 'home');
  };

  const handleSpinOnResults = () => {
    if (suggestedDishes.length === 0) return;
    let steps = 0;
    const totalSteps = 8 + Math.floor(Math.random() * 4);
    const timer = setInterval(() => {
      const idx = steps % suggestedDishes.length;
      setSpinningId(suggestedDishes[idx].id);
      steps++;
      if (steps >= totalSteps) {
        clearInterval(timer);
        const winner = suggestedDishes[(steps - 1) % suggestedDishes.length];
        setSpinningId(winner.id);
        setTimeout(() => {
          setSpinningId(null);
          openDishDetail(winner.id, 'results');
        }, 550);
      }
    }, 100);
  };

  // Filter Modal Actions
  const openFilterModal = () => {
    setDraftBudget(budget);
    setDraftArea(area);
    setDraftCampusId(campusId);
    setDraftDistance(maxDistance);
    setDraftTags(selectedTags);
    filterDialogRef.current?.showModal();
  };

  const applyFilterModal = () => {
    setBudget(draftBudget);
    setArea(draftArea);
    setCampusId(draftCampusId);
    setMaxDistance(draftDistance);
    setSelectedTags(draftTags);
    setShuffleSeed(0);
    filterDialogRef.current?.close();
    if (activeView === 'home') {
      setActiveView('results');
    }
    showToast(t.toastFilterApplied);
  };

  // Confirm Meal for Today -> Logs & navigates to Tracker/Confirmation View
  const handleConfirmMealToday = () => {
    const newEntry = {
      id: `meal-${Date.now()}`,
      dishId: currentDish.id,
      addonIds: [...selectedAddonIds],
      budgetAtTime: budget,
      totalPrice: totalCurrentMealPrice,
      ts: Date.now()
    };
    setTodayHistory((prev) => [newEntry, ...prev]);
    showToast(t.toastMealConfirmed(currentDish.name[lang]));
    setActiveView('tracker');
  };

  const distLabel = DISTANCES.find((d) => d.meters === maxDistance)?.label || '1km';

  // Google Maps URL for Hualien shop
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${currentDish.shop.zh} ${currentDish.address.zh}`
  )}`;

  const walkMins = Math.max(2, Math.round(currentDish.distanceMeters / 75));
  const bikeMins = Math.max(1, Math.round(currentDish.distanceMeters / 220));
  const scooterMins = Math.max(1, Math.round(currentDish.distanceMeters / 450));

  // ============================================================================
  // View 1: Home (Finder Setup)
  // ============================================================================
  const renderHomeView = () => (
    <main className="app-main">
      <div className="greeting-pill">{greetingText}</div>

      <div className="hero-banner">
        <h1 className="hero-title">{t.heroTitle}</h1>
        <BowlEggIllustration />
      </div>

      {/* Budget Slider Card */}
      <section className="card-panel">
        <label className="section-label" htmlFor="budget-range-input">
          <span>{t.maxBudget}</span>
          <span className="budget-current-val">NT${budget}</span>
        </label>
        <input
          id="budget-range-input"
          type="range"
          className="budget-slider"
          min="50"
          max="200"
          step="5"
          value={budget}
          aria-valuetext={`NT$${budget}`}
          style={{
            '--attr-min': 50,
            '--attr-max': 200,
            '--control-value': budget
          }}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <div className="budget-bounds-row">
          <span>NT$50</span>
          <span>NT$125</span>
          <span>NT$200</span>
        </div>
        <div className="pill-row">
          {[70, 100, 150, 200].map((val) => (
            <button
              key={val}
              type="button"
              className={`pill-btn ${budget === val ? 'active' : ''}`}
              onClick={() => setBudget(val)}
            >
              NT${val}
            </button>
          ))}
        </div>
      </section>

      {/* Area, Campus, Distance & Dietary Card */}
      <section className="card-panel">
        <div className="section-label">{t.areaLabel}</div>
        <div className="segmented-toggle">
          <button
            type="button"
            className={`seg-btn ${area === 'campus' ? 'active' : ''}`}
            onClick={() => setArea('campus')}
          >
            {t.nearCampus}
          </button>
          <button
            type="button"
            className={`seg-btn ${area === 'hualien' ? 'active' : ''}`}
            onClick={() => setArea('hualien')}
          >
            {t.hualienCity}
          </button>
        </div>

        {area === 'campus' && (
          <>
            <div className="campus-select-wrap">
              <span className="campus-select-icon">🏫</span>
              <select
                className="campus-select"
                value={campusId}
                onChange={(e) => setCampusId(e.target.value)}
                aria-label={t.selectCampus}
              >
                {CAMPUSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name[lang]}
                  </option>
                ))}
              </select>
            </div>

            <div className="pill-row">
              {DISTANCES.map((d) => (
                <button
                  key={d.meters}
                  type="button"
                  className={`pill-btn ${maxDistance === d.meters ? 'active' : ''}`}
                  onClick={() => setMaxDistance(d.meters)}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="section-label" style={{ marginTop: 4 }}>
          {t.dietaryLabel}
        </div>
        <div className="pill-row">
          {['vegetarian', 'nonSpicy', 'filling', 'soup', 'lateNight'].map((tagKey) => (
            <button
              key={tagKey}
              type="button"
              className={`pill-btn ${selectedTags.includes(tagKey) ? 'active' : ''}`}
              onClick={() => toggleTag(tagKey, false)}
            >
              {t.tags[tagKey]}
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="primary-cta"
        onClick={() => {
          setShuffleSeed(0);
          setActiveView('results');
        }}
      >
        🔍 {t.findBtn(allMatchingDishes.length)}
      </button>

      <button
        type="button"
        className="secondary-cta"
        onClick={handleQuickRandomFromHome}
      >
        {t.quickRandomBtn}
      </button>
    </main>
  );

  // ============================================================================
  // View 2: Results (Suggested Dishes within Budget)
  // ============================================================================
  const renderResultsView = () => (
    <main className="app-main">
      <div className="subscreen-topbar">
        <button
          type="button"
          className="back-inline-btn"
          onClick={() => setActiveView('home')}
          aria-label="Back"
        >
          ‹
        </button>
        <h2 className="results-title">{t.resultsTitle}</h2>
        <button
          type="button"
          className="back-inline-btn"
          onClick={openFilterModal}
          aria-label={t.editFilterBtn}
        >
          ⚙️
        </button>
      </div>

      <button type="button" className="summary-pill-btn" onClick={openFilterModal}>
        <span>NT${budget}</span>
        <span>·</span>
        <span>
          {area === 'campus' ? currentCampus.shortName[lang] : t.hualienCity}
        </span>
        {area === 'campus' && (
          <>
            <span>·</span>
            <span>{distLabel}</span>
          </>
        )}
        <span>✎</span>
      </button>

      {suggestedDishes.length === 0 ? (
        <div className="card-panel" style={{ textAlign: 'center', padding: '28px 16px' }}>
          <div style={{ fontSize: '2rem' }}>🥣</div>
          <h3 className="dish-name" style={{ whiteSpace: 'normal' }}>
            {t.noMatchTitle}
          </h3>
          <p className="results-count-sub">{t.noMatchSub}</p>
          <button
            type="button"
            className="primary-cta"
            onClick={() => {
              setBudget(120);
              setMaxDistance(1000);
              setSelectedTags([]);
            }}
          >
            {t.resetFilterQuick}
          </button>
        </div>
      ) : (
        <>
          <p className="results-count-sub">
            {t.resultsSubtitle(suggestedDishes.length, allMatchingDishes.length)}
          </p>

          <div className="dish-list">
            {suggestedDishes.map((dish) => {
              const isSaved = savedIds.includes(dish.id);
              const isSpinning = spinningId === dish.id;
              return (
                <div
                  key={dish.id}
                  className={`dish-card ${isSpinning ? 'highlight-spin' : ''}`}
                  onClick={() => openDishDetail(dish.id, 'results')}
                >
                  <img
                    src={dish.image}
                    alt={dish.name[lang]}
                    className="dish-thumb"
                    loading="lazy"
                  />
                  <div className="dish-card-info">
                    <div className="dish-card-top">
                      <div>
                        <div className="dish-name">{dish.name[lang]}</div>
                        <div className="dish-zh-sub">
                          🏪 {dish.shop[lang]}
                          {lang !== 'zh' ? ` · ${dish.name.zh}` : ''}
                        </div>
                      </div>
                      <button
                        type="button"
                        className={`heart-btn ${isSaved ? 'saved' : ''}`}
                        onClick={(e) => toggleSaveDish(dish.id, e)}
                        aria-label="Save dish"
                      >
                        {isSaved ? '❤️' : '♡'}
                      </button>
                    </div>
                    <div className="dish-meta-line">
                      <span className="dish-price">NT${dish.price}</span>
                      <span>·</span>
                      <span>{dish.distanceMeters}m</span>
                      <span>·</span>
                      <span className="dish-rating">★ {dish.rating}</span>
                    </div>
                    <div className="dish-tags">
                      {dish.tags.slice(0, 3).map((tg) => (
                        <span key={tg} className="tag-chip">
                          {t.tags[tg]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="actions-row-2">
            <button
              type="button"
              className="secondary-cta"
              onClick={() => {
                setShowAllMatches(false);
                setShuffleSeed((s) => s + 1);
              }}
            >
              🔄 {t.shuffleBtn}
            </button>
            <button
              type="button"
              className="secondary-cta"
              onClick={openFilterModal}
            >
              ⚙️ {t.editFilterBtn}
            </button>
          </div>

          {allMatchingDishes.length > 4 && (
            <button
              type="button"
              className="secondary-cta"
              onClick={() => setShowAllMatches((prev) => !prev)}
            >
              📋{' '}
              {showAllMatches
                ? t.showTop4Btn
                : t.showAllMatchesBtn(allMatchingDishes.length)}
            </button>
          )}

          <button
            type="button"
            className="primary-cta"
            onClick={handleSpinOnResults}
          >
            {t.spinPickBtn}
          </button>
        </>
      )}
    </main>
  );

  // ============================================================================
  // View 3: Dish Detail & Interactive Taiwanese Order Helper
  // ============================================================================
  const renderDetailView = () => {
    const isSaved = savedIds.includes(currentDish.id);

    return (
      <main className="app-main no-pad">
        <div className="detail-hero-wrap">
          <img
            src={currentDish.image}
            alt={currentDish.name[lang]}
            className="detail-hero-img"
          />
          <div className="detail-top-overlay">
            <button
              type="button"
              className="circle-icon-btn"
              onClick={() => setActiveView(previousView || 'results')}
              aria-label="Back"
            >
              ‹
            </button>
            <button
              type="button"
              className="circle-icon-btn"
              onClick={(e) => toggleSaveDish(currentDish.id, e)}
              aria-label="Favorite"
            >
              {isSaved ? '❤️' : '♡'}
            </button>
          </div>
        </div>

        <div className="detail-content-sheet">
          <div className="detail-title-row">
            <div>
              <h2 className="detail-dish-title">{currentDish.name[lang]}</h2>
              {lang !== 'zh' && (
                <div className="dish-zh-sub">{currentDish.name.zh}</div>
              )}
            </div>
            <span className="detail-dish-price">NT${currentDish.price}</span>
          </div>

          <p className="detail-desc">{currentDish.description[lang]}</p>

          {/* Shop Info Card */}
          <div className="shop-info-card">
            <div className="shop-head">
              <div className="shop-icon-box">🏪</div>
              <div style={{ flex: 1 }}>
                <div className="shop-name">{currentDish.shop[lang]}</div>
                <div className="shop-dist">
                  {t.awayFromCampus(`${currentDish.distanceMeters}m`)} · ★{' '}
                  {currentDish.rating} ·{' '}
                  <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>
                    {t.statusOpen}
                  </span>
                </div>
              </div>
            </div>

            <div className="shop-meta-grid">
              <div className="shop-meta-pill">
                <span>📍</span>
                <div>
                  <strong>{t.addressLabel}</strong>
                  <span>{currentDish.address[lang]}</span>
                </div>
              </div>
              <div className="shop-meta-pill">
                <span>🕒</span>
                <div>
                  <strong>{t.hoursLabel}</strong>
                  <span>{currentDish.hours}</span>
                </div>
              </div>
            </div>

            <div className="dish-tags">
              {currentDish.tags.map((tg) => (
                <span key={tg} className="tag-chip" style={{ background: '#fff' }}>
                  {t.tags[tg]}
                </span>
              ))}
            </div>
          </div>

          {/* Live Budget Calculation Banner */}
          <div className="budget-calc-banner">
            <span>💳 {t.budgetSummary(budget, remainingBudget)}</span>
            <span>NT${totalCurrentMealPrice}</span>
          </div>

          {/* Interactive Add-ons with Remaining Budget */}
          <div className="section-block">
            <span className="section-label">{t.addonsTitle}</span>
            <div className="addons-list">
              {t.addons.map((addon) => {
                const isSelected = selectedAddonIds.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    className={`addon-row ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <span>
                      {isSelected ? '☑️ ' : '⬜ '}
                      {addon.name}
                    </span>
                    <span className="addon-price">+NT${addon.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Taiwanese Point-to-Order Card with Audio Speech */}
          <div className="order-helper-box">
            <span className="order-helper-label">{t.orderHelperTitle}</span>
            <div className="order-zh-large">{fullZhOrderSentence}</div>
            <div className="order-pinyin">{currentDish.pinyinOrder}</div>

            <div className="custom-order-chips">
              {t.customOrders.map((co) => (
                <button
                  key={co.id}
                  type="button"
                  className={`custom-chip ${
                    customOrderIds.includes(co.id) ? 'active' : ''
                  }`}
                  onClick={() => toggleCustomOrder(co.id)}
                >
                  {co.label}
                </button>
              ))}
            </div>

            <div className="order-card-actions">
              <button
                type="button"
                className="mini-action-btn"
                onClick={speakOrderMandarin}
              >
                {t.speakOrderBtn}
              </button>
              <button
                type="button"
                className="mini-action-btn"
                onClick={copyOrderPhrase}
              >
                {t.copyOrderBtn}
              </button>
            </div>
          </div>

          {/* Connected Workflow Actions */}
          <div className="actions-row-2" style={{ marginTop: 4 }}>
            <button
              type="button"
              className="secondary-cta"
              onClick={() => mapDialogRef.current?.showModal()}
            >
              🗺️ {t.openMapBtn}
            </button>
            <button
              type="button"
              className="primary-cta"
              onClick={handleConfirmMealToday}
            >
              ✅ {t.eatThisTodayBtn}
            </button>
          </div>
        </div>
      </main>
    );
  };

  // ============================================================================
  // View 4: Saved Favorites Tab
  // ============================================================================
  const renderSavedView = () => (
    <main className="app-main">
      <div className="subscreen-topbar">
        <h2 className="results-title">
          ❤️ {t.savedSectionTitle} ({savedDishList.length})
        </h2>
      </div>

      {savedDishList.length === 0 ? (
        <div className="card-panel" style={{ textAlign: 'center', padding: '32px 16px' }}>
          <div style={{ fontSize: '2.2rem' }}>🤍</div>
          <h3 className="dish-name" style={{ whiteSpace: 'normal' }}>
            {t.savedEmptyTitle}
          </h3>
          <p className="results-count-sub">{t.savedEmptySub}</p>
          <button
            type="button"
            className="primary-cta"
            onClick={() => setActiveView('results')}
          >
            {t.exploreNowBtn}
          </button>
        </div>
      ) : (
        <div className="dish-list">
          {savedDishList.map((dish) => (
            <div
              key={dish.id}
              className="dish-card"
              onClick={() => openDishDetail(dish.id, 'saved')}
            >
              <img
                src={dish.image}
                alt={dish.name[lang]}
                className="dish-thumb"
              />
              <div className="dish-card-info">
                <div className="dish-card-top">
                  <div>
                    <div className="dish-name">{dish.name[lang]}</div>
                    <div className="dish-zh-sub">{dish.shop[lang]}</div>
                  </div>
                  <button
                    type="button"
                    className="heart-btn saved"
                    onClick={(e) => toggleSaveDish(dish.id, e)}
                  >
                    ❤️
                  </button>
                </div>
                <div className="dish-meta-line">
                  <span className="dish-price">NT${dish.price}</span>
                  <span>·</span>
                  <span>{dish.distanceMeters}m</span>
                  <span>·</span>
                  <span className="dish-rating">★ {dish.rating}</span>
                </div>
                <div className="dish-tags">
                  {dish.tags.slice(0, 3).map((tg) => (
                    <span key={tg} className="tag-chip">
                      {t.tags[tg]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );

  // ============================================================================
  // View 5: Today's Confirmed Meal & Budget Tracker
  // ============================================================================
  const renderTrackerView = () => {
    const latestEntry = todayHistory[0];
    const latestDish = latestEntry
      ? DISHES.find((d) => d.id === latestEntry.dishId) || currentDish
      : currentDish;
    const latestAddons = latestEntry
      ? t.addons.filter((a) => (latestEntry.addonIds || []).includes(a.id))
      : [];
    const latestTotal = latestEntry ? latestEntry.totalPrice : latestDish.price;
    const latestBudget = latestEntry ? latestEntry.budgetAtTime : budget;
    const latestRem = latestBudget - latestTotal;

    const totalSpent = todayHistory.reduce((acc, item) => acc + item.totalPrice, 0);
    const totalSaved = todayHistory.reduce(
      (acc, item) => acc + Math.max(0, item.budgetAtTime - item.totalPrice),
      0
    );

    return (
      <main className="app-main">
        {latestEntry ? (
          <>
            <div className="confirm-hero">
              <BowlCheckIllustration />
              <h2 className="confirm-title">
                {t.confirmHeaderTitle(latestDish.name[lang])}
              </h2>
              <span className="brand-campus-badge">{t.confirmPassLabel}</span>
            </div>

            {/* Active Confirmed Meal Card + Itemized Receipt */}
            <section className="card-panel">
              <div
                className="dish-card"
                style={{ border: 'none', padding: 0, boxShadow: 'none' }}
                onClick={() => openDishDetail(latestDish.id, 'tracker')}
              >
                <img
                  src={latestDish.image}
                  alt={latestDish.name[lang]}
                  className="dish-thumb"
                />
                <div className="dish-card-info">
                  <div className="dish-name">{latestDish.name[lang]}</div>
                  <div className="dish-zh-sub">{latestDish.shop[lang]}</div>
                  <div className="dish-meta-line">
                    <span className="dish-price">NT${latestDish.price}</span>
                    <span>·</span>
                    <span>{latestDish.distanceMeters}m</span>
                  </div>
                </div>
              </div>

              <div className="receipt-line">
                <span>
                  {t.baseDishLabel}: {latestDish.name[lang]}
                </span>
                <strong>NT${latestDish.price}</strong>
              </div>
              {latestAddons.map((ad) => (
                <div key={ad.id} className="receipt-line">
                  <span>+ {ad.name}</span>
                  <strong>NT${ad.price}</strong>
                </div>
              ))}
              <div className="receipt-total">
                <span>{t.totalMealPriceLabel}</span>
                <span style={{ color: 'var(--brand-primary)' }}>
                  NT${latestTotal}
                </span>
              </div>

              <div className="green-saving-pill">
                <span>💵</span>
                <span>{t.remainingInBudget(latestRem)}</span>
              </div>

              <div className="actions-row-2">
                <button
                  type="button"
                  className="primary-cta"
                  onClick={() => {
                    setSelectedDishId(latestDish.id);
                    mapDialogRef.current?.showModal();
                  }}
                >
                  🗺️ {t.openMapBtn}
                </button>
                <button
                  type="button"
                  className="secondary-cta"
                  onClick={() => setActiveView('results')}
                >
                  🔄 {t.changeAnotherBtn}
                </button>
              </div>
            </section>
          </>
        ) : (
          <div className="card-panel" style={{ textAlign: 'center', padding: '24px 16px' }}>
            <p className="results-count-sub">{t.emptyHistoryText}</p>
            <button
              type="button"
              className="primary-cta"
              onClick={() => setActiveView('home')}
            >
              {t.exploreNowBtn}
            </button>
          </div>
        )}

        {/* Daily Budget Stats */}
        <section className="section-block">
          <div className="section-label">
            <span>📊 {t.trackerTitle}</span>
            {todayHistory.length > 0 && (
              <button
                type="button"
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
                onClick={() => setTodayHistory([])}
              >
                {t.clearHistoryBtn}
              </button>
            )}
          </div>
          <div className="tracker-stats-row">
            <div className="stat-mini-card">
              <div className="stat-mini-val">{todayHistory.length}</div>
              <div className="stat-mini-lbl">{t.mealsCountLabel}</div>
            </div>
            <div className="stat-mini-card">
              <div className="stat-mini-val">NT${totalSpent}</div>
              <div className="stat-mini-lbl">{t.totalSpentLabel}</div>
            </div>
            <div className="stat-mini-card">
              <div className="stat-mini-val">NT${totalSaved}</div>
              <div className="stat-mini-lbl">{t.totalSavedLabel}</div>
            </div>
          </div>
        </section>

        {/* Saved Favorites Quick Section (Matches Mockup 05. Confirmation) */}
        {savedDishList.length > 0 && (
          <section className="section-block">
            <span className="section-label">
              ❤️ {t.savedSectionTitle} ({savedDishList.length})
            </span>
            <div className="dish-list">
              {savedDishList.slice(0, 3).map((dish) => (
                <div
                  key={dish.id}
                  className="dish-card"
                  onClick={() => openDishDetail(dish.id, 'tracker')}
                >
                  <img
                    src={dish.image}
                    alt={dish.name[lang]}
                    className="dish-thumb"
                  />
                  <div className="dish-card-info">
                    <div className="dish-card-top">
                      <div className="dish-name">{dish.name[lang]}</div>
                      <button
                        type="button"
                        className="heart-btn saved"
                        onClick={(e) => toggleSaveDish(dish.id, e)}
                      >
                        ❤️
                      </button>
                    </div>
                    <div className="dish-meta-line">
                      <span className="dish-price">NT${dish.price}</span>
                      <span>·</span>
                      <span>{dish.distanceMeters}m</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    );
  };

  return (
    <div className="app-container">
      {/* Sticky Top App Header */}
      <header className="app-topbar">
        <div className="brand-left" onClick={() => setActiveView('home')}>
          <BowlRiceIcon size={32} />
          <div>
            <div className="brand-title">{t.appName}</div>
            <div
              className="brand-campus-badge"
              onClick={(e) => {
                e.stopPropagation();
                openFilterModal();
              }}
            >
              <span>📍</span>
              <span>
                {area === 'campus' ? currentCampus.shortName[lang] : t.hualienCity}
              </span>
              <span>·</span>
              <span>NT${budget}</span>
            </div>
          </div>
        </div>

        {/* Trilingual Switcher: VI / 繁中 / EN */}
        <div className="lang-switcher" role="group" aria-label="Language">
          {[
            { code: 'vi', label: 'VI' },
            { code: 'zh', label: '繁中' },
            { code: 'en', label: 'EN' }
          ].map((item) => (
            <button
              key={item.code}
              type="button"
              className={`lang-btn ${lang === item.code ? 'active' : ''}`}
              onClick={() => setLang(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Active Connected Screen */}
      {activeView === 'home' && renderHomeView()}
      {activeView === 'results' && renderResultsView()}
      {activeView === 'detail' && renderDetailView()}
      {activeView === 'saved' && renderSavedView()}
      {activeView === 'tracker' && renderTrackerView()}

      {/* Toast Notification */}
      <div className={`app-toast ${toastMsg ? 'visible' : ''}`}>
        <span>✨</span>
        <span>{toastMsg}</span>
      </div>

      {/* Connected Bottom Tab Navigation */}
      <nav className="app-bottom-nav" aria-label="App Navigation">
        <button
          type="button"
          className={`nav-tab ${activeView === 'home' ? 'active' : ''}`}
          onClick={() => setActiveView('home')}
        >
          <span className="nav-tab-icon">🔍</span>
          <span>{t.navHome}</span>
        </button>
        <button
          type="button"
          className={`nav-tab ${
            activeView === 'results' || activeView === 'detail' ? 'active' : ''
          }`}
          onClick={() => setActiveView('results')}
        >
          <span className="nav-tab-icon">🍱</span>
          <span>{t.navResults}</span>
        </button>
        <button
          type="button"
          className={`nav-tab ${activeView === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveView('saved')}
        >
          <span className="nav-tab-icon">❤️</span>
          <span>{t.navSaved}</span>
          {savedIds.length > 0 && (
            <span className="nav-badge">{savedIds.length}</span>
          )}
        </button>
        <button
          type="button"
          className={`nav-tab ${activeView === 'tracker' ? 'active' : ''}`}
          onClick={() => setActiveView('tracker')}
        >
          <span className="nav-tab-icon">✅</span>
          <span>{t.navTracker}</span>
          {todayHistory.length > 0 && (
            <span className="nav-badge">{todayHistory.length}</span>
          )}
        </button>
      </nav>

      {/* Native Modal Dialog 1: Filter Bottom Sheet (closedby="any") */}
      <dialog
        ref={filterDialogRef}
        closedby="any"
        className="app-dialog"
        aria-label={t.filterModalTitle}
      >
        <div className="sheet-card">
          <div className="sheet-header">
            <button
              type="button"
              className="sheet-close-btn"
              onClick={() => filterDialogRef.current?.close()}
              aria-label="Close"
            >
              ✕
            </button>
            <span className="sheet-title">{t.filterModalTitle}</span>
            <span style={{ width: 30 }} />
          </div>

          <div className="section-block">
            <label className="section-label" htmlFor="modal-budget-slider">
              <span>{t.maxBudget}</span>
              <span className="budget-current-val">NT${draftBudget}</span>
            </label>
            <input
              id="modal-budget-slider"
              type="range"
              className="budget-slider"
              min="50"
              max="200"
              step="5"
              value={draftBudget}
              aria-valuetext={`NT$${draftBudget}`}
              style={{
                '--attr-min': 50,
                '--attr-max': 200,
                '--control-value': draftBudget
              }}
              onChange={(e) => setDraftBudget(Number(e.target.value))}
            />
            <div className="budget-bounds-row">
              <span>NT$50</span>
              <span>NT$100</span>
              <span>NT$150</span>
              <span>NT$200</span>
            </div>
          </div>

          <div className="section-block">
            <span className="section-label">{t.filterSavedArea}</span>
            <div className="segmented-toggle">
              <button
                type="button"
                className={`seg-btn ${draftArea === 'campus' ? 'active' : ''}`}
                onClick={() => setDraftArea('campus')}
              >
                {t.nearCampus}
              </button>
              <button
                type="button"
                className={`seg-btn ${draftArea === 'hualien' ? 'active' : ''}`}
                onClick={() => setDraftArea('hualien')}
              >
                {t.hualienCity}
              </button>
            </div>

            {draftArea === 'campus' && (
              <>
                <div className="campus-select-wrap">
                  <span className="campus-select-icon">🏫</span>
                  <select
                    className="campus-select"
                    value={draftCampusId}
                    onChange={(e) => setDraftCampusId(e.target.value)}
                  >
                    {CAMPUSES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pill-row">
                  {DISTANCES.map((d) => (
                    <button
                      key={d.meters}
                      type="button"
                      className={`pill-btn ${
                        draftDistance === d.meters ? 'active' : ''
                      }`}
                      onClick={() => setDraftDistance(d.meters)}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="section-block">
            <span className="section-label">{t.filterDietaryTitle}</span>
            <div className="pill-row">
              <button
                type="button"
                className={`pill-btn ${draftTags.length === 0 ? 'active' : ''}`}
                onClick={() => setDraftTags([])}
              >
                {t.filterAll}
              </button>
              {['vegetarian', 'nonSpicy', 'filling', 'soup', 'lateNight'].map(
                (tagKey) => (
                  <button
                    key={tagKey}
                    type="button"
                    className={`pill-btn ${
                      draftTags.includes(tagKey) ? 'active' : ''
                    }`}
                    onClick={() => toggleTag(tagKey, true)}
                  >
                    {t.tags[tagKey]}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="actions-row-2">
            <button
              type="button"
              className="secondary-cta"
              onClick={() => {
                setDraftBudget(100);
                setDraftArea('campus');
                setDraftCampusId('ndhu_zhixue');
                setDraftDistance(1000);
                setDraftTags([]);
              }}
            >
              {t.resetBtn}
            </button>
            <button
              type="button"
              className="primary-cta"
              onClick={applyFilterModal}
            >
              {t.applyBtn}
            </button>
          </div>
        </div>
      </dialog>

      {/* Native Modal Dialog 2: Directions & Route Preview (closedby="any") */}
      <dialog
        ref={mapDialogRef}
        closedby="any"
        className="app-dialog"
        aria-label={t.mapModalTitle}
      >
        <div className="sheet-card">
          <div className="sheet-header">
            <button
              type="button"
              className="sheet-close-btn"
              onClick={() => mapDialogRef.current?.close()}
            >
              ✕
            </button>
            <span className="sheet-title">{t.mapModalTitle}</span>
            <span style={{ width: 30 }} />
          </div>

          <div className="shop-info-card">
            <div className="shop-name">{currentDish.shop[lang]}</div>
            <div className="dish-zh-sub">{currentDish.address.zh}</div>
            <div className="shop-dist">{currentDish.address[lang]}</div>
          </div>

          <div className="tracker-stats-row">
            <div className="stat-mini-card">
              <div className="stat-mini-val">🚶 ~{walkMins}m</div>
              <div className="stat-mini-lbl">{t.walkTime}</div>
            </div>
            <div className="stat-mini-card">
              <div className="stat-mini-val">🚲 ~{bikeMins}m</div>
              <div className="stat-mini-lbl">{t.bikeTime}</div>
            </div>
            <div className="stat-mini-card">
              <div className="stat-mini-val">🛵 ~{scooterMins}m</div>
              <div className="stat-mini-lbl">{t.scooterTime}</div>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-cta"
            style={{ textDecoration: 'none' }}
          >
            {t.openGoogleMaps}
          </a>
        </div>
      </dialog>
    </div>
  );
}
