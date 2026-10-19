export const I18N = {
  vi: {
    appName: "Ăn Gì Đây?",
    appTagline: "Trợ lý chọn món cho sinh viên tại Đài Loan",
    greetingMorning: "Chào buổi sáng! ☀️ Ăn sáng gì trước giờ lên lớp?",
    greetingNoon: "Đói rồi? 🍚 Để tụi mình chọn bữa trưa nhé!",
    greetingEvening: "Tan học rồi! 🍜 Tối nay ăn gì hợp túi tiền?",
    greetingNight: "Đói bụng đêm khuya? 🌙 Tìm đồ ăn khuya ngay!",
    heroTitle: "Đói rồi? Để\ntụi mình chọn!",
    maxBudget: "Ngân sách tối đa cho bữa này",
    areaLabel: "Khu vực tìm quán",
    nearCampus: "Gần campus",
    hualienCity: "Toàn Hualien",
    selectCampus: "Chọn trường / Campus",
    distanceLabel: "Khoảng cách tối đa",
    dietaryLabel: "Khẩu vị & Chế độ ăn",
    findBtn: (count) => `Tìm món hợp túi tiền (${count} món)`,
    quickRandomBtn: "🎲 Chọn ngẫu nhiên 1 món ngay",
    navHome: "Tìm món",
    navResults: "Gợi ý",
    navSaved: "Đã lưu",
    navTracker: "Hôm nay",
    resultsTitle: "Món hợp túi tiền",
    resultsSubtitle: (count, total) =>
      `Đang hiện ${count} gợi ý (trong tổng số ${total} món phù hợp)`,
    shuffleBtn: "Đổi 4 món khác",
    spinPickBtn: "🎲 Chọn giúp 1 món",
    editFilterBtn: "Sửa bộ lọc",
    showAllMatchesBtn: (total) => `Xem tất cả ${total} món phù hợp`,
    showTop4Btn: "Chỉ hiện 4 món gợi ý nhanh",
    awayFromCampus: (dist) => `Cách campus ${dist}`,
    addressLabel: "Địa chỉ quán",
    hoursLabel: "Giờ mở cửa",
    statusOpen: "Đang mở cửa",
    budgetSummary: (budget, rem) =>
      rem >= 0
        ? `Ngân sách NT$${budget} · Còn dư NT$${rem}`
        : `Ngân sách NT$${budget} · Vượt NT$${Math.abs(rem)}`,
    remainingInBudget: (rem) =>
      rem >= 0
        ? `Còn NT$${rem} trong ngân sách`
        : `Vượt ngân sách NT$${Math.abs(rem)}`,
    addonsTitle: "➕ Gọi thêm bằng tiền dư (Tuỳ chọn)",
    orderHelperTitle: "🗣️ Câu gọi món tiếng Đài (Đưa chủ quán hoặc bấm loa)",
    speakOrderBtn: "🔊 Phát âm tiếng Đài",
    copyOrderBtn: "📋 Sao chép",
    copiedToast: "Đã sao chép câu gọi món!",
    openMapBtn: "Mở chỉ đường",
    eatThisTodayBtn: "Hôm nay ăn món này",
    confirmHeaderTitle: (dishName) => `Hôm nay ăn ${dishName.toLowerCase()}!`,
    confirmPassLabel: "THẺ CHỐT MÓN HÔM NAY",
    baseDishLabel: "Món chính",
    addonsSelectedLabel: "Món gọi thêm",
    totalMealPriceLabel: "Tổng cộng bữa ăn",
    changeAnotherBtn: "Đổi món khác",
    savedSectionTitle: "Món đã lưu",
    savedEmptyTitle: "Chưa có món nào trong danh sách lưu",
    savedEmptySub: "Hãy bấm biểu tượng trái tim ♡ ở bất kỳ món ăn nào để lưu lại quán ruột của bạn nhé!",
    exploreNowBtn: "Khám phá món ngon ngay",
    filterModalTitle: "Chỉnh bộ lọc",
    filterSavedArea: "Khu vực tìm kiếm",
    filterDietaryTitle: "Chế độ ăn & Khẩu vị",
    filterAll: "Tất cả",
    resetBtn: "Đặt lại",
    applyBtn: "Áp dụng",
    noMatchTitle: "Không có món nào khớp bộ lọc hiện tại 😢",
    noMatchSub: "Bạn thử tăng ngân sách thêm NT$20 hoặc mở rộng khoảng cách tìm kiếm nhé!",
    resetFilterQuick: "Đặt lại bộ lọc mặc định",
    trackerTitle: "Nhật ký ăn uống & Ngân sách hôm nay",
    mealsCountLabel: "Bữa đã chốt",
    totalSpentLabel: "Tổng đã chi",
    totalSavedLabel: "Tiết kiệm được",
    clearHistoryBtn: "Xoá lịch sử hôm nay",
    emptyHistoryText: "Hôm nay bạn chưa chốt món nào. Hãy chọn 1 món hợp túi tiền nhé!",
    mapModalTitle: "Chỉ đường đến quán",
    walkTime: "Đi bộ",
    bikeTime: "Xe đạp / YouBike",
    scooterTime: "Xe máy",
    openGoogleMaps: "Mở chỉ đường trên Google Maps ↗",
    closeModal: "Đóng",
    toastAddedFav: "Đã lưu vào danh sách yêu thích ❤️",
    toastRemovedFav: "Đã bỏ khỏi danh sách yêu thích",
    toastFilterApplied: "Đã cập nhật bộ lọc!",
    toastMealConfirmed: (name) => `Đã chốt món: ${name}!`,
    tags: {
      filling: "No bụng",
      light: "Nhẹ bụng",
      nonSpicy: "Không cay",
      mildSpicy: "Cay vừa",
      vegetarian: "Ăn chay",
      soup: "Món nước",
      lateNight: "Ăn khuya"
    },
    customOrders: [
      { id: "dine_in", label: "Ăn tại quán · 內用", zh: "內用" },
      { id: "takeout", label: "Mang về · 外帶", zh: "外帶" },
      { id: "no_cilantro", label: "Không rau mùi · 不要香菜", zh: "不要香菜" },
      { id: "less_spicy", label: "Cay ít · 微辣", zh: "微辣" },
      { id: "no_scallion", label: "Không hành · 不要蔥", zh: "不要蔥" }
    ],
    addons: [
      { id: "egg", name: "Trứng ốp la / Trứng kho (加蛋)", zh: "加一顆蛋", price: 15 },
      { id: "rice", name: "Thêm cơm trắng (加飯)", zh: "加飯", price: 10 },
      { id: "black_tea", name: "Hồng trà cổ điển (古早味紅茶)", zh: "一杯古早味紅茶", price: 20 },
      { id: "tofu", name: "Đậu hũ kho (滷豆腐)", zh: "一份滷豆腐", price: 15 },
      { id: "greens", name: "Rau luộc sốt tỏi (燙青菜)", zh: "一份燙青菜", price: 30 }
    ]
  },
  zh: {
    appName: "今天吃什麼？",
    appTagline: "花蓮大學生銅板美食決策助手",
    greetingMorning: "早安！☀️ 上課前想吃點什麼早餐？",
    greetingNoon: "肚子餓了嗎？🍚 幫你決定今天的午餐！",
    greetingEvening: "下課啦！🍜 今晚想吃什麼銅板美食？",
    greetingNight: "宵夜時間到！🌙 找找附近還開著的小吃！",
    heroTitle: "肚子餓了嗎？\n幫你決定吃什麼！",
    maxBudget: "這餐的最高預算",
    areaLabel: "搜尋區域",
    nearCampus: "校園周邊",
    hualienCity: "花蓮市區",
    selectCampus: "選擇校區",
    distanceLabel: "搜尋距離範圍",
    dietaryLabel: "飲食偏好與標籤",
    findBtn: (count) => `尋找符合預算美食 (${count} 道)`,
    quickRandomBtn: "🎲 直接幫我隨機抽一道！",
    navHome: "找美食",
    navResults: "推薦清單",
    navSaved: "已收藏",
    navTracker: "今日餐點",
    resultsTitle: "符合預算的美食",
    resultsSubtitle: (count, total) =>
      `目前顯示 ${count} 道推薦（共 ${total} 道符合條件）`,
    shuffleBtn: "換一批推薦",
    spinPickBtn: "🎲 幫我抽一個",
    editFilterBtn: "修改篩選",
    showAllMatchesBtn: (total) => `展開全部 ${total} 道符合餐點`,
    showTop4Btn: "收合為精選 4 道推薦",
    awayFromCampus: (dist) => `距離校園 ${dist}`,
    addressLabel: "店家地址",
    hoursLabel: "營業時間",
    statusOpen: "營業中",
    budgetSummary: (budget, rem) =>
      rem >= 0
        ? `預算 NT$${budget} · 還剩 NT$${rem}`
        : `預算 NT$${budget} · 超支 NT$${Math.abs(rem)}`,
    remainingInBudget: (rem) =>
      rem >= 0
        ? `預算內還剩 NT$${rem}`
        : `超出預算 NT$${Math.abs(rem)}`,
    addonsTitle: "➕ 用剩餘預算加菜 / 點飲料（選填）",
    orderHelperTitle: "🗣️ 點餐小卡（出示給老闆看或點擊發音）",
    speakOrderBtn: "🔊 語音朗讀點餐",
    copyOrderBtn: "📋 複製文字",
    copiedToast: "已複製點餐內容！",
    openMapBtn: "開啟導航",
    eatThisTodayBtn: "今天吃這道",
    confirmHeaderTitle: (dishName) => `今天吃${dishName}！`,
    confirmPassLabel: "今日已決定餐點",
    baseDishLabel: "主餐",
    addonsSelectedLabel: "加點項目",
    totalMealPriceLabel: "本餐總計",
    changeAnotherBtn: "換別道吃",
    savedSectionTitle: "已收藏口袋名單",
    savedEmptyTitle: "目前還沒有收藏任何美食",
    savedEmptySub: "在推薦清單或餐點頁面點擊愛心 ♡，把喜歡的店收進口袋名單吧！",
    exploreNowBtn: "立即去探索美食",
    filterModalTitle: "調整篩選條件",
    filterSavedArea: "搜尋範圍",
    filterDietaryTitle: "飲食偏好",
    filterAll: "全部",
    resetBtn: "重設",
    applyBtn: "套用",
    noMatchTitle: "找不到符合目前條件的餐點 😢",
    noMatchSub: "試著把預算調高 NT$20 或放寬搜尋距離看看吧！",
    resetFilterQuick: "重設為預設篩選",
    trackerTitle: "今日飲食紀錄與預算統計",
    mealsCountLabel: "已決定餐點",
    totalSpentLabel: "今日總花費",
    totalSavedLabel: "省下預算",
    clearHistoryBtn: "清除今日紀錄",
    emptyHistoryText: "今天還沒有決定吃什麼，快去挑選一道符合預算的美食吧！",
    mapModalTitle: "前往店家路線預覽",
    walkTime: "步行約",
    bikeTime: "單車 / YouBike",
    scooterTime: "機車約",
    openGoogleMaps: "在 Google Maps 開啟導航 ↗",
    closeModal: "關閉",
    toastAddedFav: "已加入收藏清單 ❤️",
    toastRemovedFav: "已從收藏清單移除",
    toastFilterApplied: "已套用篩選條件！",
    toastMealConfirmed: (name) => `已決定今天吃：${name}！`,
    tags: {
      filling: "飽足感",
      light: "輕食",
      nonSpicy: "不辣",
      mildSpicy: "微辣",
      vegetarian: "素食",
      soup: "湯麵/湯品",
      lateNight: "宵夜"
    },
    customOrders: [
      { id: "dine_in", label: "內用", zh: "內用" },
      { id: "takeout", label: "外帶", zh: "外帶" },
      { id: "no_cilantro", label: "不要香菜", zh: "不要香菜" },
      { id: "less_spicy", label: "微辣", zh: "微辣" },
      { id: "no_scallion", label: "不要蔥", zh: "不要蔥" }
    ],
    addons: [
      { id: "egg", name: "加荷包蛋 / 滷蛋", zh: "加一顆蛋", price: 15 },
      { id: "rice", name: "白飯加大", zh: "加飯", price: 10 },
      { id: "black_tea", name: "古早味冰紅茶", zh: "一杯古早味紅茶", price: 20 },
      { id: "tofu", name: "招牌滷豆腐", zh: "一份滷豆腐", price: 15 },
      { id: "greens", name: "季節燙青菜", zh: "一份燙青菜", price: 30 }
    ]
  },
  en: {
    appName: "What to Eat?",
    appTagline: "Smart Meal Finder for Students in Taiwan",
    greetingMorning: "Good morning! ☀️ Grab breakfast before class?",
    greetingNoon: "Hungry? 🍚 Let us pick your lunch within budget!",
    greetingEvening: "Classes over! 🍜 What's for dinner tonight?",
    greetingNight: "Late night study? 🌙 Find open midnight snacks!",
    heroTitle: "Hungry? Let us\npick for you!",
    maxBudget: "Max budget for this meal",
    areaLabel: "Search Area",
    nearCampus: "Near campus",
    hualienCity: "Hualien City",
    selectCampus: "Select Campus",
    distanceLabel: "Max Distance",
    dietaryLabel: "Dietary & Cravings",
    findBtn: (count) => `Find budget meals (${count} matches)`,
    quickRandomBtn: "🎲 Surprise me with 1 dish!",
    navHome: "Finder",
    navResults: "Picks",
    navSaved: "Saved",
    navTracker: "Today",
    resultsTitle: "Budget-friendly picks",
    resultsSubtitle: (count, total) =>
      `Showing ${count} picks (out of ${total} matching dishes)`,
    shuffleBtn: "Shuffle 4 new picks",
    spinPickBtn: "🎲 Pick 1 for me",
    editFilterBtn: "Edit filters",
    showAllMatchesBtn: (total) => `Show all ${total} matching dishes`,
    showTop4Btn: "Show top 4 quick picks only",
    awayFromCampus: (dist) => `${dist} from campus`,
    addressLabel: "Shop Address",
    hoursLabel: "Opening Hours",
    statusOpen: "Open Now",
    budgetSummary: (budget, rem) =>
      rem >= 0
        ? `Budget NT$${budget} · NT$${rem} left`
        : `Budget NT$${budget} · Over by NT$${Math.abs(rem)}`,
    remainingInBudget: (rem) =>
      rem >= 0
        ? `NT$${rem} left in budget`
        : `NT$${Math.abs(rem)} over budget`,
    addonsTitle: "➕ Spend Remaining Change on Sides/Drinks",
    orderHelperTitle: "🗣️ Taiwanese Order Card (Show or Play Audio)",
    speakOrderBtn: "🔊 Speak in Mandarin",
    copyOrderBtn: "📋 Copy",
    copiedToast: "Copied order phrase!",
    openMapBtn: "Get directions",
    eatThisTodayBtn: "Eat this today",
    confirmHeaderTitle: (dishName) => `Eating ${dishName} today!`,
    confirmPassLabel: "TODAY'S CHOSEN MEAL",
    baseDishLabel: "Main Dish",
    addonsSelectedLabel: "Add-ons",
    totalMealPriceLabel: "Total Meal Cost",
    changeAnotherBtn: "Pick another dish",
    savedSectionTitle: "Saved Favorites",
    savedEmptyTitle: "No saved dishes yet",
    savedEmptySub: "Tap the heart ♡ on any dish to bookmark your favorite campus spots!",
    exploreNowBtn: "Find meals now",
    filterModalTitle: "Edit Filters",
    filterSavedArea: "Search Area",
    filterDietaryTitle: "Dietary Preferences",
    filterAll: "All",
    resetBtn: "Reset",
    applyBtn: "Apply",
    noMatchTitle: "No dishes match your strict filters 😢",
    noMatchSub: "Try raising your budget by NT$20 or expanding the distance radius!",
    resetFilterQuick: "Reset to default filters",
    trackerTitle: "Today's Meal Log & Budget Tracker",
    mealsCountLabel: "Meals Picked",
    totalSpentLabel: "Total Spent",
    totalSavedLabel: "Budget Saved",
    clearHistoryBtn: "Clear today's log",
    emptyHistoryText: "You haven't locked in a meal today yet. Let's find something delicious!",
    mapModalTitle: "Route & Directions to Shop",
    walkTime: "Walking",
    bikeTime: "Bicycle / YouBike",
    scooterTime: "Scooter",
    openGoogleMaps: "Open Directions in Google Maps ↗",
    closeModal: "Close",
    toastAddedFav: "Saved to favorites ❤️",
    toastRemovedFav: "Removed from favorites",
    toastFilterApplied: "Filters updated!",
    toastMealConfirmed: (name) => `Locked in: ${name}!`,
    tags: {
      filling: "Filling",
      light: "Light meal",
      nonSpicy: "Non-spicy",
      mildSpicy: "Mild spicy",
      vegetarian: "Vegetarian",
      soup: "Noodle soup",
      lateNight: "Late night"
    },
    customOrders: [
      { id: "dine_in", label: "Dine-in · 內用", zh: "內用" },
      { id: "takeout", label: "Takeout · 外帶", zh: "外帶" },
      { id: "no_cilantro", label: "No cilantro · 不要香菜", zh: "不要香菜" },
      { id: "less_spicy", label: "Mild spicy · 微辣", zh: "微辣" },
      { id: "no_scallion", label: "No scallions · 不要蔥", zh: "不要蔥" }
    ],
    addons: [
      { id: "egg", name: "Fried / Braised Egg (加蛋)", zh: "加一顆蛋", price: 15 },
      { id: "rice", name: "Extra Rice (加飯)", zh: "加飯", price: 10 },
      { id: "black_tea", name: "Old-Style Black Tea (古早味紅茶)", zh: "一杯古早味紅茶", price: 20 },
      { id: "tofu", name: "Braised Tofu (滷豆腐)", zh: "一份滷豆腐", price: 15 },
      { id: "greens", name: "Blanched Greens (燙青菜)", zh: "一份燙青菜", price: 30 }
    ]
  }
};

export const CAMPUSES = [
  {
    id: "ndhu_zhixue",
    shortName: { vi: "NDHU Chí Học", zh: "東華志學", en: "NDHU Zhixue" },
    name: {
      vi: "ĐH Đông Hoa (NDHU · Cổng chính Phố Chí Học)",
      zh: "國立東華大學 (志學街商圈)",
      en: "NDHU Main Gate (Zhixue St.)"
    }
  },
  {
    id: "ndhu_backgate",
    shortName: { vi: "NDHU Đa Dung", zh: "東華後門", en: "NDHU Back Gate" },
    name: {
      vi: "ĐH Đông Hoa (Khu KTX & Cổng Đa Dung)",
      zh: "國立東華大學 (多容館/後門商圈)",
      en: "NDHU Dorms & Back Gate"
    }
  },
  {
    id: "tzuchi_main",
    shortName: { vi: "ĐH Từ Tế", zh: "慈濟中央", en: "Tzu Chi Univ" },
    name: {
      vi: "ĐH Từ Tế (Tzu Chi · Khu Trung Ương)",
      zh: "慈濟大學 (中央路校區)",
      en: "Tzu Chi University (Main Campus)"
    }
  },
  {
    id: "tzuchi_jianguo",
    shortName: { vi: "Từ Tế Kiến Quốc", zh: "慈濟建國", en: "Tzu Chi Jianguo" },
    name: {
      vi: "ĐH Từ Tế (Cơ sở Kiến Quốc · Cát An)",
      zh: "慈濟大學 (建國校區·吉安)",
      en: "Tzu Chi University (Jianguo Campus)"
    }
  },
  {
    id: "ndhu_meilun",
    shortName: { vi: "NDHU Mỹ Luân", zh: "東華美崙", en: "NDHU Meilun" },
    name: {
      vi: "ĐH Đông Hoa (Cơ sở Mỹ Luân · Hualien)",
      zh: "國立東華大學 (美崙校區)",
      en: "NDHU Meilun Campus"
    }
  },
  {
    id: "dahan",
    shortName: { vi: "HV Đại Hán", zh: "大漢技術學院", en: "Dahan Inst." },
    name: {
      vi: "Học viện Đại Hán (Dahan · Tân Thành)",
      zh: "大漢技術學院 (新城校區)",
      en: "Dahan Institute of Technology"
    }
  }
];

export const DISHES = [
  {
    id: "com-ga",
    price: 85,
    rating: 4.9,
    distanceMeters: 350,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/com-ga.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份雞肉飯加半熟荷包蛋",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn jīròu fàn jiā bànshú hébāodàn",
    name: {
      vi: "Cơm gà ốp la lòng đào",
      zh: "銷魂嫩雞肉飯＋半熟蛋",
      en: "Taiwanese Chicken Rice & Egg"
    },
    shop: {
      vi: "Quán Campus Kitchen (Chí Học)",
      zh: "志學鮮嫩雞肉飯專賣",
      en: "Campus Kitchen Zhixue"
    },
    address: {
      vi: "Số 42, Đường Trung Chính, Chí Học, Thọ Phong",
      zh: "花蓮縣壽豐鄉志學村中正路42號",
      en: "No. 42, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–20:30",
    description: {
      vi: "Cơm gà xé phay mềm mọng rưới nước sốt gà hành phi thơm lừng, kèm trứng ốp la lòng đào béo ngậy chuẩn vị sinh viên Đông Hoa.",
      zh: "嚴選去骨嫩雞腿肉搭配特製雞油蔥醬，再放上一顆金黃半熟荷包蛋，東華學生下課必吃！",
      en: "Tender sliced chicken drizzled with savory shallot chicken oil, topped with a sunny-side-up egg."
    }
  },
  {
    id: "mi-bo",
    price: 100,
    rating: 4.8,
    distanceMeters: 600,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/mi-bo.png",
    tags: ["filling", "mildSpicy", "soup"],
    zhOrderText: "老闆你好，我要一碗紅燒牛肉麵",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn hóngshāo niúròu miàn",
    name: {
      vi: "Mì bò hầm Đài Loan",
      zh: "川味紅燒牛肉麵",
      en: "Braised Beef Noodle Soup"
    },
    shop: {
      vi: "Mì Bò Lão Trương (Lao Zhang)",
      zh: "老張記川味牛肉麵",
      en: "Lao Zhang Beef Noodles"
    },
    address: {
      vi: "Số 118, Đường Trung Chính, Thọ Phong",
      zh: "花蓮縣壽豐鄉中正路118號",
      en: "No. 118, Zhongzheng Rd, Shoufeng, Hualien"
    },
    hours: "11:30–21:00",
    description: {
      vi: "Nước dùng hầm xương bò đậm đà thảo mộc Đài Loan, bắp bò hầm mềm tan cùng sợi mì tươi kéo tay và cải thìa giòn ngọt. Có hồng trà miễn phí tại quán!",
      zh: "濃郁紅燒牛骨湯頭，搭配軟嫩入味的牛腱心與Q彈手工拉麵，店內還有免費紅茶無限暢飲！",
      en: "Rich slow-simmered beef broth with tender braised beef shank, chewy handmade noodles, and bok choy."
    }
  },
  {
    id: "banh-bao",
    price: 60,
    rating: 4.7,
    distanceMeters: 250,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/banh-bao.png",
    tags: ["light", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一籠鮮肉小籠湯包",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī lóng xiānròu xiǎolóng tāngbāo",
    name: {
      vi: "Bánh bao Tiểu long bao",
      zh: "爆汁鮮肉小籠包 (8顆)",
      en: "Steamed Juicy Pork Buns"
    },
    shop: {
      vi: "Bánh Bao Công Chính (Chi nhánh Campus)",
      zh: "公正街風味小籠包·學區店",
      en: "Gongzheng Style Steamed Buns"
    },
    address: {
      vi: "Số 15, Ngõ Học Phủ, Chí Học, Hualien",
      zh: "花蓮縣壽豐鄉志學村學府路15號",
      en: "No. 15, Xuefu Ln, Zhixue, Hualien"
    },
    hours: "06:30–22:30",
    description: {
      vi: "Xửng bánh bao vỏ mềm xốp ấm nóng, nhân thịt heo tươi ngọt lịm chấm cùng nước tương tỏi ớt đặc trưng Hualien.",
      zh: "手工現桿老麵外皮，內餡飽滿多汁，搭配蒜蓉醬油與薑絲，銅板價就能吃得超滿足！",
      en: "Steaming bamboo basket of fluffy handmade pork buns bursting with savory broth."
    }
  },
  {
    id: "com-rau-cu",
    price: 75,
    rating: 4.8,
    distanceMeters: 450,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/com-rau-cu.png",
    tags: ["filling", "vegetarian", "nonSpicy"],
    zhOrderText: "老闆你好，我要一個健康蔬食便當（素食）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī gè jiànkāng shūshí biàndāng (sùshí)",
    name: {
      vi: "Cơm rau củ chay Bento",
      zh: "慈心健康蔬食便當",
      en: "Healthy Veggie Rice Bento"
    },
    shop: {
      vi: "Tiệm Chay Green Bento",
      zh: "綠光森林蔬食坊",
      en: "Green Forest Veggie Bento"
    },
    address: {
      vi: "Số 88, Đường Trung Ương, Hualien",
      zh: "花蓮市中央路三段88號",
      en: "No. 88, Sec. 3, Zhongyang Rd, Hualien"
    },
    hours: "10:30–19:30",
    description: {
      vi: "Cơm bento chay thanh đạm giàu dinh dưỡng với đậu hũ áp chảo sốt tương, bông cải xanh, bắp ngọt, cà rốt và trứng kho ngũ vị.",
      zh: "五色時令蔬菜搭配香煎板豆腐與滷蛋，少油少鹽健康無負擔，素食同學的最佳選擇！",
      en: "Colorful vegetarian bento with pan-seared tofu, broccoli, sweet corn, carrots, and braised egg."
    }
  },
  {
    id: "lu-rou-fan",
    price: 55,
    rating: 4.9,
    distanceMeters: 300,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/lu-rou-fan.png",
    tags: ["filling", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一碗大碗滷肉飯加滷蛋",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn dà wǎn lǔròu fàn jiā lǔdàn",
    name: {
      vi: "Cơm thịt kho Lu Rou Fan",
      zh: "古早味滷肉飯＋滷蛋",
      en: "Braised Pork Rice (Lu Rou Fan)"
    },
    shop: {
      vi: "Quán A-Min Cơm Thịt Kho",
      zh: "阿明古早味滷肉飯",
      en: "A-Ming Braised Pork Rice"
    },
    address: {
      vi: "Số 63, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路63號",
      en: "No. 63, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–23:30",
    description: {
      vi: "Món quốc dân cứu đói cuối tháng! Thịt ba chỉ bằm nhỏ kho nước tương ngọt dịu béo mềm, ăn kèm trứng kho và củ cải muối giòn.",
      zh: "月底救星！手切五花肉慢火熬煮出滿滿膠質，淋在熱騰騰白飯上，配上半顆入味滷蛋與醃黃瓜。",
      en: "The ultimate student budget saver! Savory slow-braised minced pork belly over steamed rice with soy egg."
    }
  },
  {
    id: "guo-tie",
    price: 65,
    rating: 4.7,
    distanceMeters: 400,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/guo-tie.png",
    tags: ["light", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要十顆招牌鍋貼加一杯冰豆漿",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào shí kē zhāopái guōtiē jiā yī bēi bīng dòujiāng",
    name: {
      vi: "Há cảo áp chảo & Sữa đậu",
      zh: "招牌脆皮鍋貼 (10顆)",
      en: "Crispy Potstickers (10 pcs)"
    },
    shop: {
      vi: "Bát Phương Vân Tập (Bafang Yunji)",
      zh: "八方雲集 (花蓮學區店)",
      en: "Bafang Yunji Dumplings"
    },
    address: {
      vi: "Số 95, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉中正路95號",
      en: "No. 95, Zhongzheng Rd, Shoufeng, Hualien"
    },
    hours: "10:30–21:30",
    description: {
      vi: "10 chiếc há cảo áp chảo đế vàng giòn rụm, nhân thịt bắp cải ngọt thanh. Món ruột của mọi sinh viên tại Đài Loan!",
      zh: "底部煎得金黃酥脆、內餡鮮甜高麗菜豬肉，搭配一碗酸辣湯或冰豆漿就是完美一餐。",
      en: "10 golden-bottomed pan-fried dumplings stuffed with cabbage and pork."
    }
  },
  {
    id: "ji-pai-bento",
    price: 95,
    rating: 4.9,
    distanceMeters: 320,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/ji-pai-bento.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一個脆皮大雞排便當",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī gè cuìpí dà jīpái biàndāng",
    name: {
      vi: "Cơm gà rán khổng lồ Ji Pai",
      zh: "銷魂脆皮大雞排便當",
      en: "Giant Crispy Chicken Cutlet Bento"
    },
    shop: {
      vi: "Cơm Hộp Hương Thành (Chishang Bento)",
      zh: "香城池上木片便當",
      en: "Xiangcheng Chishang Bento"
    },
    address: {
      vi: "Số 78, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路78號",
      en: "No. 78, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "10:30–20:00",
    description: {
      vi: "Miếng gà phi lê tẩm bột chiên giòn to hơn cả hộp cơm, rắc bột tiêu muối Đài Loan thơm phức, kèm 3 món rau xào, bắp ngọt và trứng kho.",
      zh: "比臉還大的現炸酥脆雞排，撒上特製椒鹽粉，外酥內嫩多汁，搭配三樣家常配菜與池上好米！",
      en: "Massive golden-fried chicken cutlet seasoned with Taiwanese pepper salt over Chishang rice with 3 side dishes."
    }
  },
  {
    id: "dan-bing",
    price: 50,
    rating: 4.8,
    distanceMeters: 200,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/dan-bing.png",
    tags: ["light", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份起司玉米蛋餅加中冰奶",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn qǐsī yùmǐ dànbǐng jiā zhōng bīng nǎi",
    name: {
      vi: "Bánh kếp trứng phô mai bắp",
      zh: "起司玉米蛋餅＋冰奶茶",
      en: "Cheese & Corn Egg Crepe (Danbing)"
    },
    shop: {
      vi: "Tiệm Ăn Sáng Mỹ Chi Thành (Mei & Mei)",
      zh: "早安美芝城 (志學活力店)",
      en: "Morning Mei & Mei Breakfast"
    },
    address: {
      vi: "Số 21, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路21號",
      en: "No. 21, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "06:00–13:30",
    description: {
      vi: "Bữa sáng/trưa nhẹ nhàng chuẩn sinh viên Đài: bánh kếp trứng cuộn phô mai tan chảy và bắp ngọt, rưới tương ngọt Đài Loan.",
      zh: "煎得微酥的蛋餅皮包裹濃郁融化起司與香甜玉米粒，淋上蒜蓉醬油膏，早晨幸福感滿分！",
      en: "Classic Taiwanese rolled egg crepe filled with melted cheddar cheese and sweet corn, drizzled with savory soy paste."
    }
  },
  {
    id: "chou-doufu",
    price: 65,
    rating: 4.8,
    distanceMeters: 520,
    area: "campus",
    campuses: ["ndhu_zhixue", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/chou-doufu.png",
    tags: ["light", "mildSpicy", "vegetarian", "lateNight"],
    zhOrderText: "老闆你好，我要一份脆皮臭豆腐（微辣）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn cuìpí chòudòufu (wéi là)",
    name: {
      vi: "Đậu hũ thối chiên giòn Ngọc Lý",
      zh: "玉里風味脆皮臭豆腐",
      en: "Crispy Golden Stinky Tofu"
    },
    shop: {
      vi: "Đậu Hũ Thối Ngọc Lý (Chi nhánh Hualien)",
      zh: "玉里橋頭臭豆腐 (花蓮店)",
      en: "Yuli Qiaotou Stinky Tofu Hualien"
    },
    address: {
      vi: "Số 15, Đường Hòa Bình, TP. Hualien",
      zh: "花蓮市和平路55號",
      en: "No. 55, Heping Rd, Hualien City"
    },
    hours: "14:00–22:30",
    description: {
      vi: "Đậu hũ lên men tự nhiên chiên ngập dầu vàng ruộm ngoài giòn trong mọng nước, ăn kèm đồ chua bắp cải củ cải bào và sốt tỏi ớt.",
      zh: "外皮炸得金黃酥脆、內部軟嫩多汁，塞入滿滿酸甜爽脆的台式泡菜與蘿蔔絲，越吃越涮嘴！",
      en: "Golden-fried fermented tofu pockets stuffed with tangy pickled cabbage, shredded radish, and chili garlic sauce."
    }
  },
  {
    id: "lau-mini-sinh-vien",
    price: 145,
    rating: 4.9,
    distanceMeters: 480,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/xiao-huo-guo.png",
    tags: ["filling", "mildSpicy", "soup", "lateNight"],
    zhOrderText: "老闆你好，我要一鍋招牌泡菜豬肉小火鍋",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī guō zhāopái pàocài zhūròu xiǎohuǒguō",
    name: {
      vi: "Lẩu mini sinh viên (Bao cơm & kem)",
      zh: "三媽風味個人小火鍋",
      en: "Student Mini Hotpot (Free Rice & Ice Cream)"
    },
    shop: {
      vi: "Lẩu Mini Tam Mã (San Ma Hotpot)",
      zh: "三媽臭臭鍋 (花蓮志學店)",
      en: "San Ma Mini Hotpot Zhixue"
    },
    address: {
      vi: "Số 132, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉中正路132號",
      en: "No. 132, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–23:00",
    description: {
      vi: "Nồi lẩu cá nhân sôi sùng sục đầy ắp thịt heo, đậu hũ, nấm kim châm, cá viên. Ăn tại quán miễn phí cơm trắng, nước ngọt và kem tươi không giới hạn!",
      zh: "寒冷或下雨天首選！滿滿火鍋料與肉片，內用白飯、飲料機、冰淇淋全部無限吃到飽！",
      en: "Individual bubbling hotpot loaded with meat, tofu, enoki mushrooms, and fish balls. Unlimited rice, drinks & ice cream!"
    }
  },
  {
    id: "cong-you-bing",
    price: 45,
    rating: 4.9,
    distanceMeters: 420,
    area: "campus",
    campuses: ["ndhu_zhixue", "tzuchi_main", "ndhu_meilun", "dahan"],
    image: "/assets/cong-you-bing.png",
    tags: ["light", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一份炸彈蔥油餅加蛋（不辣）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn zhàdàn cōngyóubǐng jiā dàn (bù là)",
    name: {
      vi: "Bánh hành chiên trứng bom Hualien",
      zh: "花蓮名產炸彈蔥油餅",
      en: "Hualien Bomb Scallion Pancake"
    },
    shop: {
      vi: "Bánh Hành Bom Xe Vàng (Phố Phục Hưng)",
      zh: "黃車炸彈蔥油餅 (復興街)",
      en: "Yellow Truck Bomb Scallion Pancake"
    },
    address: {
      vi: "Số 102, Đường Phục Hưng, TP. Hualien",
      zh: "花蓮市復興街102號",
      en: "No. 102, Fuxing St, Hualien City"
    },
    hours: "13:00–19:30",
    description: {
      vi: "Món ăn vặt huyền thoại của Hualien! Vỏ bánh hành chiên phồng giòn tan ôm trọn quả trứng gà lòng đào béo ngậy chảy tràn khi cắn.",
      zh: "花蓮排隊名物！餅皮炸得蓬鬆酥脆不油膩，一口咬下金黃半熟蛋液瞬間爆漿流出！",
      en: "Hualien's iconic street snack! Crispy puffed scallion flatbread folded around a molten runny fried egg."
    }
  },
  {
    id: "curry-rice",
    price: 110,
    rating: 4.8,
    distanceMeters: 380,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun"],
    image: "/assets/curry-rice.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份黃金豬排咖哩飯",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn huángjīn zhūpái kālǐ fàn",
    name: {
      vi: "Cơm cà ri heo chiên xù Tonkatsu",
      zh: "日式黃金豬排咖哩飯",
      en: "Crispy Pork Cutlet Curry Rice"
    },
    shop: {
      vi: "Tiệm Cà Ri Hinode (Chí Học)",
      zh: "日出日式咖哩專賣店",
      en: "Hinode Japanese Curry House"
    },
    address: {
      vi: "Số 56, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路56號",
      en: "No. 56, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:30–20:30",
    description: {
      vi: "Sốt cà ri Nhật Bản sánh mịn ninh cùng khoai tây và cà rốt ngọt dịu, ăn kèm miếng thịt heo chiên xù giòn rụm. Được thêm sốt cà ri miễn phí!",
      zh: "濃郁甘甜的日式咖哩醬燉煮馬鈴薯與紅蘿蔔，搭配厚切現炸黃金里肌豬排，內用免費續飯續醬！",
      en: "Thick, savory Japanese curry with potatoes and carrots alongside crispy panko-breaded pork loin. Free rice & curry refills!"
    }
  },
  {
    id: "liang-mian",
    price: 65,
    rating: 4.7,
    distanceMeters: 280,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/liang-mian.png",
    tags: ["light", "nonSpicy", "vegetarian"],
    zhOrderText: "老闆你好，我要一份招牌麻醬涼麵加味噌湯",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn zhāopái májiàng liángmiàn jiā wèicēngtāng",
    name: {
      vi: "Mì lạnh sốt mè & Súp Miso",
      zh: "川味麻醬涼麵＋味噌湯",
      en: "Cold Sesame Noodles & Miso Soup"
    },
    shop: {
      vi: "Mì Lạnh Gia Truyền Lão Trần",
      zh: "老陳手工麻醬涼麵",
      en: "Old Chen Cold Sesame Noodles"
    },
    address: {
      vi: "Số 33, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路33號",
      en: "No. 33, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "09:30–19:30",
    description: {
      vi: "Sợi mì tươi mát lạnh trộn sốt bơ đậu phộng mè rang béo bùi, dưa leo thái sợi giòn mát, đi kèm chén súp Miso đậu hũ nóng hổi.",
      zh: "炎熱天氣開胃首選！Q彈涼麵淋上香濃特製花生麻醬與爽脆小黃瓜絲，配上一碗熱騰騰豆腐味噌湯。",
      en: "Chilled springy noodles tossed in creamy roasted sesame-peanut sauce and julienned cucumber, served with warm tofu miso soup."
    }
  },
  {
    id: "yan-su-ji",
    price: 80,
    rating: 4.9,
    distanceMeters: 310,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/yan-su-ji.png",
    tags: ["light", "mildSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一份無骨鹽酥雞加甜不辣（小辣加九層塔）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn wúgǔ yánsūjī jiā tiánbùlà",
    name: {
      vi: "Gà rán muối tiêu lá quế & Tempura",
      zh: "台灣無骨鹽酥雞＋甜不辣",
      en: "Taiwanese Popcorn Chicken & Tempura"
    },
    shop: {
      vi: "Gà Muối Tiêu Sư Đại (Chí Học)",
      zh: "師大第一家鹽酥雞 (志學店)",
      en: "Shida No.1 Popcorn Chicken"
    },
    address: {
      vi: "Số 109, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路109號",
      en: "No. 109, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "16:30–00:30",
    description: {
      vi: "Combo ăn khuya bất bại của sinh viên! Gà không xương chiên giòn xóc lá húng quế thơm lừng, tỏi tươi và chả cá Tempura dẻo giòn.",
      zh: "大學生宵夜靈魂伴侶！酥炸無骨雞丁搭配爆香九層塔、蒜片與蓬鬆Q彈甜不辣，追劇趕報告必備！",
      en: "The ultimate midnight snack combo! Crispy boneless popcorn chicken fried with fragrant Thai basil, garlic, and chewy fish tempura."
    }
  },
  {
    id: "hoanh-thanh",
    price: 70,
    rating: 4.8,
    distanceMeters: 850,
    area: "hualien",
    campuses: ["tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "ndhu_zhixue", "dahan"],
    image: "/assets/hoanh-thanh.png",
    tags: ["light", "nonSpicy", "soup"],
    zhOrderText: "老闆你好，我要一碗花蓮鮮肉扁食湯",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn Huālián xiānròu biǎnshí tāng",
    name: {
      vi: "Súp Hoành Thánh Hualien",
      zh: "花蓮名產鮮肉扁食湯",
      en: "Hualien Wonton Soup (Bian Shi)"
    },
    shop: {
      vi: "Hoành Thánh Dịch Hương (Ye Xiang)",
      zh: "液香扁食 · 花蓮創始老店",
      en: "Ye Xiang Wonton Hualien"
    },
    address: {
      vi: "Số 42, Đường Tín Nghĩa, TP. Hualien",
      zh: "花蓮市信義街42號",
      en: "No. 42, Xinyi St, Hualien City"
    },
    hours: "09:30–20:30",
    description: {
      vi: "Đặc sản trứ danh của Hualien! Vỏ hoành thánh mỏng mượt như lụa, nhân thịt heo săn chắc trong nước dùng xương trong vắt.",
      zh: "來到花蓮必吃的經典美食！皮薄餡多、肉質鮮美彈牙，大骨清湯撒上芹菜珠與油蔥酥。",
      en: "Hualien's famous local specialty! Silky wontons filled with springy pork in clear bone broth."
    }
  },
  {
    id: "bistek-dem",
    price: 135,
    rating: 4.9,
    distanceMeters: 1500,
    area: "hualien",
    campuses: ["ndhu_zhixue", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/bistek-dem.png",
    tags: ["filling", "mildSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一份鐵板沙朗牛排（黑胡椒醬）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn tiěbǎn shālǎng niúpái (hēihújiāo jiàng)",
    name: {
      vi: "Bít tết chảo gang Chợ Đêm",
      zh: "東大門夜市鐵板牛排",
      en: "Night Market Sizzling Steak"
    },
    shop: {
      vi: "Bít Tết Chảo Gang Đông Đại Môn",
      zh: "東大門牛排館 (自強夜市區)",
      en: "Dongdamen Sizzling Steakhouse"
    },
    address: {
      vi: "Chợ đêm Đông Đại Môn, TP. Hualien",
      zh: "花蓮市中山路50號 (東大門夜市)",
      en: "No. 50, Zhongshan Rd (Dongdamen Night Market)"
    },
    hours: "17:00–23:30",
    description: {
      vi: "Bít tết chảo gang xèo xèo ăn kèm mì xoắn, trứng ốp la và sốt tiêu đen đậm đà. Miễn phí súp bắp kem và trà đá!",
      zh: "熱騰騰鐵板上桌滋滋作響，牛排搭配鐵板螺旋麵與半熟蛋，內用濃湯、紅茶無限量供應！",
      en: "Sizzling iron-plate steak with spiral pasta, sunny-side-up egg, and black pepper sauce."
    }
  },
  {
    id: "mi-chay-tu-te",
    price: 65,
    rating: 4.7,
    distanceMeters: 380,
    area: "campus",
    campuses: ["tzuchi_main", "tzuchi_jianguo", "ndhu_zhixue", "ndhu_meilun", "dahan"],
    image: "/assets/com-rau-cu.png",
    tags: ["vegetarian", "nonSpicy", "soup", "light"],
    zhOrderText: "老闆你好，我要一碗慈濟風味素食湯麵",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn Cíjì fēngwèi sùshí tāngmiàn",
    name: {
      vi: "Mì nấm rau củ thanh đạm",
      zh: "書軒香菇素食湯麵",
      en: "Mushroom Veggie Noodle Soup"
    },
    shop: {
      vi: "Tiệm Chay Tĩnh Tư (Jing Si Veggie)",
      zh: "靜思蔬食麵坊 (慈濟學區)",
      en: "Jing Si Vegetarian Noodle House"
    },
    address: {
      vi: "Số 12, Đường Trang Kính, TP. Hualien",
      zh: "花蓮市莊敬路12號",
      en: "No. 12, Zhuangjing Rd, Hualien City"
    },
    hours: "10:00–20:00",
    description: {
      vi: "Nước dùng ngọt thanh ninh từ nấm hương, củ cải trắng và bắp ngọt, ăn kèm mì sợi mềm, đậu hũ ky và rau xanh tươi mát.",
      zh: "以香菇、白蘿蔔與甜玉米慢火熬煮清甜湯頭，搭配手工豆皮與時令青菜，清爽養生。",
      en: "Sweet vegetable broth simmered with shiitake mushrooms, daikon, and corn, served with yuba and greens."
    }
  },
  {
    id: "com-suon-kho",
    price: 90,
    rating: 4.8,
    distanceMeters: 460,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/lu-rou-fan.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一個懷舊鐵路滷排骨便當",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī gè huáijiù tiělù lǔ páigǔ biàndāng",
    name: {
      vi: "Cơm sườn heo kho Đường Sắt",
      zh: "懷舊鐵路滷排骨便當",
      en: "Taiwan Railway Braised Pork Chop Bento"
    },
    shop: {
      vi: "Cơm Hộp Đường Sắt Hualien",
      zh: "花蓮鐵路懷舊便當本舗",
      en: "Hualien Railway Bento Shop"
    },
    address: {
      vi: "Số 82, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路82號",
      en: "No. 82, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "10:30–20:00",
    description: {
      vi: "Miếng sườn cốt lết bản to chiên sơ rồi hầm mềm trong nước滷 ngũ vị truyền thống, kèm cải chua, đậu phụ ky và trứng kho.",
      zh: "厚切帶骨里肌排先炸後滷，完美吸附古早味中藥滷汁，搭配酸菜、豆干與滷蛋，經典台鐵風味！",
      en: "Thick bone-in pork chop lightly fried then braised in five-spice soy broth, served over rice with pickled mustard greens and soy egg."
    }
  },
  {
    id: "shui-jiao",
    price: 60,
    rating: 4.7,
    distanceMeters: 260,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/guo-tie.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要十二顆高麗菜手工水餃",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào shí'èr kē gāolìcài shǒugōng shuǐjiǎo",
    name: {
      vi: "Sủi cảo luộc nhân bắp cải (12 viên)",
      zh: "手工高麗菜鮮肉水餃 (12顆)",
      en: "Handmade Cabbage Pork Dumplings (12 pcs)"
    },
    shop: {
      vi: "Sủi Cảo Cô Tư (A-Zhu Dumplings)",
      zh: "阿珠姨北方手工水餃",
      en: "Auntie Zhu Handmade Dumplings"
    },
    address: {
      vi: "Số 49, Đường Chí Học, Thọ Phong",
      zh: "花蓮縣壽豐鄉志學村中正路49號",
      en: "No. 49, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–21:00",
    description: {
      vi: "12 viên sủi cảo nặn tay tròn mẩy chỉ NT$60 (NT$5/viên), vỏ dai mềm, nhân thịt heo bắp cải giòn ngọt chấm dầu mè tỏi ớt.",
      zh: "一顆只要5元的超佛心大水餃！手工現包外皮Q彈有嚼勁，內餡飽滿清甜。",
      en: "12 plump handmade boiled dumplings at just NT$5 each, stuffed with crunchy Taiwan cabbage and juicy pork."
    }
  },
  {
    id: "ma-la-tang",
    price: 95,
    rating: 4.8,
    distanceMeters: 390,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun"],
    image: "/assets/mi-bo.png",
    tags: ["filling", "mildSpicy", "soup", "lateNight"],
    zhOrderText: "老闆你好，我要一碗麻辣鴨血臭豆腐泡麵（小辣）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn málà yāxuè chòudòufu pàomiàn",
    name: {
      vi: "Mì huyết vịt đậu hũ cay Tứ Xuyên",
      zh: "麻辣鴨血臭豆腐王子麵",
      en: "Spicy Mala Duck Blood & Tofu Noodles"
    },
    shop: {
      vi: "Quán Cay Tiểu Lạt (Xiao La Mala)",
      zh: "小辣川味麻辣鴨血專賣",
      en: "Xiao La Mala Duck Blood"
    },
    address: {
      vi: "Số 112, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路112號",
      en: "No. 112, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "16:00–23:30",
    description: {
      vi: "Huyết vịt mềm mượt như thạch cùng đậu hũ thối thấm đẫm nước súp Mala cay tê thơm nồng, ăn kèm mì gói Hoàng Tử và nấm kim châm.",
      zh: "滑嫩多汁的入味鴨血與孔洞吸滿麻辣湯汁的臭豆腐，加上一包王子麵與金針菇，宵夜暖胃首選！",
      en: "Silky braised duck blood and porous stinky tofu simmered in fragrant Sichuan mala broth with Prince instant noodles."
    }
  },
  {
    id: "chao-fan",
    price: 75,
    rating: 4.8,
    distanceMeters: 340,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/com-ga.png",
    tags: ["filling", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一份蝦仁火腿蛋炒飯（加大）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn xiārén huǒtuǐ dànchǎofàn",
    name: {
      vi: "Cơm chiên trứng tôm thịt (Miễn phí thêm cơm)",
      zh: "大火快炒蝦仁火腿蛋炒飯",
      en: "Wok-Fried Shrimp & Ham Egg Fried Rice"
    },
    shop: {
      vi: "Quán Cơm Chiên A-Hùng (A-Xiong Wok)",
      zh: "阿雄百元快炒·學生炒飯專賣",
      en: "A-Xiong Student Wok Fried Rice"
    },
    address: {
      vi: "Số 71, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路71號",
      en: "No. 71, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–22:00",
    description: {
      vi: "Cơm chiên lửa lớn tơi hạt thơm mùi chảo gang (Wok Hei), đầy ắp tôm tươi, thịt nguội và trứng gà. Sinh viên được miễn phí tăng khẩu phần cơm!",
      zh: "大火快炒出迷人鍋氣，粒粒分明的黃金炒飯加上鮮蝦仁與火腿丁，學生證內用免費加飯不加價！",
      en: "High-heat wok-tossed golden egg fried rice with shrimp, diced ham, and scallions. Free extra rice for students!"
    }
  },
  {
    id: "com-chay-tu-chon",
    price: 70,
    rating: 4.9,
    distanceMeters: 290,
    area: "campus",
    campuses: ["tzuchi_main", "tzuchi_jianguo", "ndhu_zhixue", "ndhu_backgate", "ndhu_meilun", "dahan"],
    image: "/assets/com-rau-cu.png",
    tags: ["filling", "vegetarian", "nonSpicy"],
    zhOrderText: "老闆你好，我要一個素食便當（糙米飯）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī gè sùshí biàndāng (cāomǐ fàn)",
    name: {
      vi: "Cơm chay tự chọn 4 món & Canh",
      zh: "菩提健康素食自助餐便當",
      en: "Bodhi Vegetarian Buffet Bento (4 Dishes)"
    },
    shop: {
      vi: "Quán Chay Bồ Đề (Bodhi Vegetarian)",
      zh: "菩提健康素食自助餐",
      en: "Bodhi Healthy Vegetarian Buffet"
    },
    address: {
      vi: "Số 140, Đường Trung Ương, TP. Hualien",
      zh: "花蓮市中央路三段140號",
      en: "No. 140, Sec. 3, Zhongyang Rd, Hualien"
    },
    hours: "10:30–19:30",
    description: {
      vi: "Quán cơm chay bình dân cực nổi tiếng gần ĐH Từ Tế & Đông Hoa, tự chọn 4 món rau nấm đậu hũ tươi ngon kèm cơm gạo lứt và canh miễn phí.",
      zh: "多達三十種現炒時蔬、素肉與滷豆製品任選四樣，搭配營養紫米糙米飯，店內附免費熱湯！",
      en: "Popular campus vegetarian buffet where you pick 4 fresh vegetable, mushroom, and tofu dishes over brown/purple rice with free soup."
    }
  },
  {
    id: "banh-mi-quan-tai",
    price: 70,
    rating: 4.8,
    distanceMeters: 1600,
    area: "hualien",
    campuses: ["tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "ndhu_zhixue"],
    image: "/assets/cong-you-bing.png",
    tags: ["light", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一份黑胡椒牛肉官財板（附紅茶）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn hēihújiāo niúròu guāncáibǎn",
    name: {
      vi: "Bánh mì Quan Tài Hualien (Kèm trà)",
      zh: "蔣家花蓮式官財板（附紅茶）",
      en: "Jiang's Hualien Coffin Bread (Free Tea)"
    },
    shop: {
      vi: "Bánh Mì Quan Tài Tưởng Gia (Đông Đại Môn)",
      zh: "蔣家花蓮創意官財板 (東大門夜市)",
      en: "Jiang Family Coffin Bread Dongdamen"
    },
    address: {
      vi: "Khu Tự Cường, Chợ đêm Đông Đại Môn, Hualien",
      zh: "花蓮市東大門夜市自強夜市區E44攤",
      en: "Stall E44, Dongdamen Night Market, Hualien"
    },
    hours: "16:30–23:00",
    description: {
      vi: "Bánh mì sandwich dày nhúng trứng chiên vàng giòn, khoét ruột nhồi đầy thịt bò sốt tiêu đen hoặc gà sốt kem nóng hổi, tặng kèm 1 ly hồng trà sữa!",
      zh: "厚片吐司沾蛋液炸得金黃香酥，內餡填入滿滿黑胡椒牛肉與高麗菜絲，內用免費附贈冰紅茶或奶茶！",
      en: "Thick egg-battered fried toast hollowed out and stuffed with savory black pepper beef and cabbage. Comes with a free iced tea!"
    }
  },
  {
    id: "lau-sua-pho-mai",
    price: 160,
    rating: 4.9,
    distanceMeters: 650,
    area: "campus",
    campuses: ["ndhu_zhixue", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/xiao-huo-guo.png",
    tags: ["filling", "nonSpicy", "soup", "lateNight"],
    zhOrderText: "老闆你好，我要一鍋起司牛奶豬肉鍋",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī guō qǐsī niúnǎi zhūròu guō",
    name: {
      vi: "Lẩu sữa phô mai (Quầy buffet 20 món)",
      zh: "濃郁起司牛奶個人火鍋",
      en: "Creamy Cheese Milk Mini Hotpot"
    },
    shop: {
      vi: "Lẩu Lục Phiến Môn (6 Doors Hotpot)",
      zh: "六扇門時尚湯鍋 (花蓮學區店)",
      en: "6 Doors Trendy Mini Hotpot"
    },
    address: {
      vi: "Số 168, Đường Trung Chính, Hualien",
      zh: "花蓮市中正路168號",
      en: "No. 168, Zhongzheng Rd, Hualien"
    },
    hours: "11:00–23:30",
    description: {
      vi: "Nước lẩu sữa tươi béo ngậy kèm 1 lát phô mai Cheddar tan chảy. Quầy tự phục vụ miễn phí cơm thịt kho Lu Rou Fan, mì gói, bỏng ngô, kem và trà sữa!",
      zh: "香濃牛奶高湯加上一整片起司片，內用自助吧享豬油拌飯、王子麵、爆米花、霜淇淋與飲料無限暢享！",
      en: "Rich milk broth topped with melted cheddar cheese. Includes unlimited buffet bar with braised pork rice, instant noodles, popcorn & soft serve!"
    }
  },
  {
    id: "lu-wei-tu-chon",
    price: 85,
    rating: 4.8,
    distanceMeters: 230,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/xiao-huo-guo.png",
    tags: ["filling", "mildSpicy", "lateNight", "soup"],
    zhOrderText: "老闆你好，我要一份學生滷味套餐（王子麵加高麗菜加豆皮，小辣）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn xuéshēng lǔwèi tàocān (xiǎo là)",
    name: {
      vi: "Đồ kho tự chọn Lu Wei (Combo Sinh Viên)",
      zh: "大呼過癮加熱滷味套餐",
      en: "Braised Lu Wei Combo (Noodles, Veggies & Tofu)"
    },
    shop: {
      vi: "Lu Wei Chợ Đêm Chí Học (Zhi Xue Lu Wei)",
      zh: "志學街大呼過癮加熱滷味",
      en: "Zhixue Street Braised Lu Wei"
    },
    address: {
      vi: "Số 89, Đường Trung Chính, Chí Học, Thọ Phong",
      zh: "花蓮縣壽豐鄉志學村中正路89號",
      en: "No. 89, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "16:00–00:00",
    description: {
      vi: "Món ăn tối & ăn khuya đặc trưng của sinh viên Đài Loan! Mì Hoàng Tử, đậu hũ ky, bắp cải, nấm kim châm và thịt bò viên chần trong nước滷 thảo mộc thơm lừng.",
      zh: "大學生晚餐與宵夜常客！王子麵、高麗菜、炸豆皮、金針菇與貢丸在五香中藥滷汁裡滾煮入味。",
      en: "Classic Taiwanese campus dinner! Prince instant noodles, cabbage, fried yuba, enoki mushrooms, and meatballs simmered in aromatic herbal soy broth."
    }
  },
  {
    id: "cong-zhua-bing",
    price: 55,
    rating: 4.7,
    distanceMeters: 180,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/cong-you-bing.png",
    tags: ["light", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份九層塔里肌豬排蔥抓餅加蛋",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn jiǔcéngtǎ zhūpái cōngzhuābǐng jiā dàn",
    name: {
      vi: "Bánh kếp hành ngàn lớp kẹp thịt trứng",
      zh: "九層塔里肌豬排蔥抓餅＋蛋",
      en: "Flaky Scallion Pancake with Pork Loin & Basil Egg"
    },
    shop: {
      vi: "Xe Bánh Kẹp Cổng Trường (Campus Gate Pancake)",
      zh: "校門口香酥手工蔥抓餅",
      en: "Campus Gate Crispy Scallion Pancake"
    },
    address: {
      vi: "Số 8, Đường Trung Chính (Sát cổng trường NDHU)",
      zh: "花蓮縣壽豐鄉志學村中正路8號",
      en: "No. 8, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–21:00",
    description: {
      vi: "Bánh kếp hành đánh tơi ngàn lớp giòn rụm bên ngoài, dai mềm bên trong, kẹp trứng chiên lá húng quế và thịt thăn heo ướp mềm.",
      zh: "現煎拍打出千層酥脆口感的蔥抓餅，夾入九層塔煎蛋與嫩煎里肌豬排，邊走邊吃超方便！",
      en: "Hand-fluffed thousand-layer crispy scallion flatbread wrapped around Thai basil egg and marinated pork loin."
    }
  },
  {
    id: "com-bo-xao-sa-te",
    price: 90,
    rating: 4.8,
    distanceMeters: 370,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "ndhu_meilun", "dahan"],
    image: "/assets/mi-bo.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一盤沙茶芥蘭牛肉燴飯",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī pán shāchá jièlán niúròu huìfàn",
    name: {
      vi: "Cơm bò xào sốt Sa Tế cải làn",
      zh: "沙茶芥蘭牛肉燴飯",
      en: "Shacha Beef & Chinese Broccoli Gravy Rice"
    },
    shop: {
      vi: "Quán Xào Nhiệt Huyết Đông Hoa",
      zh: "東華百元熱炒學生食堂",
      en: "Dong Hwa Wok Stir-Fry Canteen"
    },
    address: {
      vi: "Số 67, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路67號",
      en: "No. 67, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–21:30",
    description: {
      vi: "Thịt bò mềm xào lửa lớn cùng cải làn giòn ngọt và sốt Shacha (sa tế hải sản Đài Loan, thơm đậm đà không cay) rưới đẫm lên đĩa cơm nóng.",
      zh: "鮮嫩牛肉片搭配清脆芥蘭菜，以台灣靈魂牛頭牌沙茶醬大火勾芡淋在白飯上，香氣撲鼻超下飯！",
      en: "Tender sliced beef and crisp Chinese broccoli stir-fried in rich savory Taiwanese Bull Head Shacha sauce over steamed rice."
    }
  },
  {
    id: "mi-y-kem-nam",
    price: 115,
    rating: 4.7,
    distanceMeters: 410,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun"],
    image: "/assets/curry-rice.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份奶油培根玉米義大利麵（附濃湯紅茶）",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn nǎiyóu péigēn yìdàlìmiàn",
    name: {
      vi: "Mì Ý sốt kem thịt xông khói (Kèm súp & trà)",
      zh: "白醬培根義大利麵（附濃湯紅茶）",
      en: "Creamy Bacon Carbonara Pasta (Free Soup & Tea)"
    },
    shop: {
      vi: "Tiệm Mì Ý Góc Phố (Corner Pasta)",
      zh: "轉角遇到愛·平價義式小廚",
      en: "Corner Student Pasta House"
    },
    address: {
      vi: "Số 29, Ngõ Học Phủ, Chí Học, Hualien",
      zh: "花蓮縣壽豐鄉志學村學府路29號",
      en: "No. 29, Xuefu Ln, Zhixue, Hualien"
    },
    hours: "11:30–20:30",
    description: {
      vi: "Tiệm mì Ý bình dân được sinh viên yêu thích mỗi dịp đổi gió! Sốt kem sữa béo ngậy với thịt xông khói, nấm tươi, miễn phí súp bắp và hồng trà.",
      zh: "學區高CP值平價義式料理！香濃白醬包裹彈牙直麵、煙燻培根與洋菇，內用免費享玉米濃湯與冰紅茶。",
      en: "Cozy student-priced Italian spot serving creamy bacon and mushroom spaghetti with complimentary corn chowder and iced black tea."
    }
  },
  {
    id: "chao-trung-bac-thao",
    price: 70,
    rating: 4.8,
    distanceMeters: 330,
    area: "campus",
    campuses: ["ndhu_zhixue", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/hoanh-thanh.png",
    tags: ["light", "nonSpicy", "soup", "lateNight"],
    zhOrderText: "老闆你好，我要一碗皮蛋瘦肉粥加老油條",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn pídàn shòuròu zhōu jiā yóutiáo",
    name: {
      vi: "Cháo thịt bằm trứng bắc thảo & Quẩy",
      zh: "廣東皮蛋瘦肉粥＋酥脆油條",
      en: "Century Egg & Lean Pork Congee with Youtiao"
    },
    shop: {
      vi: "Quán Cháo Quảng Đông Minh Ký",
      zh: "明記廣東粥品專賣店",
      en: "Ming Ji Cantonese Congee Shop"
    },
    address: {
      vi: "Số 52, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路52號",
      en: "No. 52, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "10:30–22:30",
    description: {
      vi: "Tô cháo ninh nhừ sánh mịn ấm bụng với thịt heo bằm, trứng bắc thảo béo bùi, trứng gà đánh tan, chà bông và quẩy giòn.",
      zh: "米粒熬煮至綿密化開的高湯粥底，加入滿滿皮蛋丁、鮮嫩瘦肉絲、肉鬆與酥脆老油條，暖心又暖胃。",
      en: "Velvety slow-simmered rice porridge with century egg, shredded pork, pork floss, scallions, and crispy fried dough sticks."
    }
  },
  {
    id: "com-nam-nuong-chay",
    price: 85,
    rating: 4.9,
    distanceMeters: 440,
    area: "campus",
    campuses: ["tzuchi_main", "tzuchi_jianguo", "ndhu_zhixue", "ndhu_meilun", "dahan"],
    image: "/assets/com-rau-cu.png",
    tags: ["filling", "vegetarian", "nonSpicy"],
    zhOrderText: "老闆你好，我要一份黑胡椒烤杏鮑菇素排便當",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī fèn kǎo xìngbàogū sùpái biàndāng",
    name: {
      vi: "Cơm nấm đùi gà nướng sốt tiêu (Chay)",
      zh: "炭烤杏鮑菇素排便當",
      en: "Grilled King Oyster Mushroom Steak Bento (Vegan)"
    },
    shop: {
      vi: "Quán Chay Tâm An (Xin An Veggie)",
      zh: "心安創意蔬食料理",
      en: "Xin An Creative Vegan Kitchen"
    },
    address: {
      vi: "Số 105, Đường Trung Ương, TP. Hualien",
      zh: "花蓮市中央路三段105號",
      en: "No. 105, Sec. 3, Zhongyang Rd, Hualien"
    },
    hours: "11:00–19:30",
    description: {
      vi: "Nấm đùi gà tươi thái lát dày khía vân nướng sốt BBQ tiêu đen dai ngọt như bít tết, ăn kèm cơm hạt sen và 3 món rau củ theo mùa.",
      zh: "厚切手工刻花杏鮑菇刷上獨門黑胡椒醬炭烤，口感Q彈多汁，搭配三樣季節鮮蔬與五穀飯。",
      en: "Thick cross-cut king oyster mushrooms grilled with savory black pepper glaze over multigrain rice and seasonal greens."
    }
  },
  {
    id: "mi-thit-bam-kho",
    price: 50,
    rating: 4.7,
    distanceMeters: 220,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/liang-mian.png",
    tags: ["filling", "nonSpicy", "lateNight"],
    zhOrderText: "老闆你好，我要一碗大碗古早味肉燥乾麵加貢丸湯",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī wǎn dà wǎn ròuzào gānmiàn",
    name: {
      vi: "Mì khô trộn thịt kho & Giá hẹ",
      zh: "台南風味古早肉燥乾麵",
      en: "Old-Style Braised Minced Pork Dry Noodles"
    },
    shop: {
      vi: "Tiệm Mì Gia Truyền A-Bà (Grandma Noodles)",
      zh: "阿嬤古早味切仔麵攤",
      en: "Grandma's Traditional Noodle Stall"
    },
    address: {
      vi: "Số 39, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路39號",
      en: "No. 39, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–22:00",
    description: {
      vi: "Tô mì khô đầy đặn giá chỉ NT$50! Sợi mì vàng dai trộn cùng nước sốt thịt bằm hành phi thơm nức mũi, giá đỗ và lá hẹ giòn ngọt.",
      zh: "銅板價50元就能吃超飽！Q彈意麵淋上噴香紅蔥頭肉燥滷汁，伴隨爽脆豆芽菜與韭菜。",
      en: "Generous NT$50 student bowl of springy egg noodles tossed in fragrant fried-shallot minced pork sauce, bean sprouts, and chives."
    }
  },
  {
    id: "com-ga-nuong-teriyaki",
    price: 95,
    rating: 4.9,
    distanceMeters: 360,
    area: "campus",
    campuses: ["ndhu_zhixue", "ndhu_backgate", "tzuchi_main", "tzuchi_jianguo", "ndhu_meilun", "dahan"],
    image: "/assets/ji-pai-bento.png",
    tags: ["filling", "nonSpicy"],
    zhOrderText: "老闆你好，我要一個日式照燒無骨雞腿便當",
    pinyinOrder: "Lǎobǎn nǐ hǎo, wǒ yào yī gè rìshì zhàoshāo wúgǔ jītuǐ biàndāng",
    name: {
      vi: "Cơm đùi gà nướng sốt Teriyaki",
      zh: "炭烤照燒無骨雞腿便當",
      en: "Charcoal Grilled Teriyaki Chicken Leg Bento"
    },
    shop: {
      vi: "Quán Cơm Nướng Mộc Hương (Mu Xiang Grill)",
      zh: "木香炭火燒肉便當",
      en: "Mu Xiang Charcoal Grill Bento"
    },
    address: {
      vi: "Số 86, Đường Trung Chính, Chí Học",
      zh: "花蓮縣壽豐鄉志學村中正路86號",
      en: "No. 86, Zhongzheng Rd, Zhixue, Hualien"
    },
    hours: "11:00–20:00",
    description: {
      vi: "Nguyên chiếc đùi gà rút xương nướng than hoa vàng óng, phết sốt Teriyaki mật ong đậm đà rắc mè trắng, kèm 3 món rau và canh rong biển.",
      zh: "整隻去骨大雞腿以炭火慢烤鎖住肉汁，刷上甘甜日式照燒醬撒上白芝麻，附三樣配菜與紫菜湯！",
      en: "Whole boneless chicken thigh charcoal-grilled with sweet soy teriyaki glaze and sesame seeds, served with 3 sides and seaweed soup."
    }
  }
];

