import React from 'react';

export function BowlRiceIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fluffy Rice Dome */}
      <path
        d="M12 31C12 20.5 21 13 32 13C43 13 52 20.5 52 31H12Z"
        fill="#FFFFFF"
        stroke="#28B463"
        strokeWidth="2.5"
      />
      <path d="M23 23C25 21 28 21 30 23" stroke="#A3D9B8" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 20C37 18.5 40 18.5 42 20" stroke="#A3D9B8" strokeWidth="2" strokeLinecap="round" />
      {/* Bowl Body */}
      <path
        d="M10 31H54C53 44 44.5 52 32 52C19.5 52 11 44 10 31Z"
        fill="#72D59A"
        stroke="#183626"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Bowl Base */}
      <path d="M23 52H41" stroke="#183626" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function BowlEggIllustration() {
  return (
    <svg className="hero-illustration" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft shadow */}
      <ellipse cx="48" cy="82" rx="30" ry="6" fill="rgba(24, 54, 38, 0.1)" />
      {/* Rim & Rice */}
      <ellipse cx="48" cy="42" rx="34" ry="18" fill="#FFFFFF" stroke="#183626" strokeWidth="2.4" />
      {/* Sunny side up egg white */}
      <path
        d="M27 40C27 32 36 27 47 28C58 27 68 33 67 41C66 49 57 53 46 52C35 53 27 47 27 40Z"
        fill="#FFFDF9"
        stroke="#E5D5C5"
        strokeWidth="1.5"
      />
      {/* Egg Yolk */}
      <ellipse cx="48" cy="39" rx="10.5" ry="7.5" fill="#FFB020" stroke="#D97706" strokeWidth="1.5" />
      <ellipse cx="45" cy="37" rx="3" ry="1.8" fill="#FFF3C4" />
      {/* Green Garnish Leaf */}
      <circle cx="62" cy="36" r="3" fill="#28B463" />
      <circle cx="65" cy="39" r="2.5" fill="#219A54" />
      {/* Ceramic Bowl Front */}
      <path
        d="M14 42C15.5 64 29 76 48 76C67 76 80.5 64 82 42C72 52 59 56 48 56C37 56 24 52 14 42Z"
        fill="#58C987"
        stroke="#183626"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Bowl Foot */}
      <path
        d="M34 75.5H62V79C62 80.5 60.5 81.5 59 81.5H37C35.5 81.5 34 80.5 34 79V75.5Z"
        fill="#39A868"
        stroke="#183626"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function BowlCheckIllustration() {
  return (
    <svg className="confirm-icon" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="48" cy="80" rx="26" ry="5" fill="rgba(24, 54, 38, 0.08)" />
      {/* Fluffy Rice */}
      <path
        d="M20 45C20 30 32 21 48 21C64 21 76 30 76 45H20Z"
        fill="#FFFFFF"
        stroke="#4E6E5D"
        strokeWidth="2.2"
      />
      {/* Ceramic Bowl */}
      <path
        d="M17 45H79C77 63 65 75 48 75C31 75 19 63 17 45Z"
        fill="#D8F3E0"
        stroke="#4E6E5D"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M35 75H61" stroke="#4E6E5D" strokeWidth="3" strokeLinecap="round" />
      {/* Green Checkmark Badge */}
      <circle cx="64" cy="27" r="14" fill="#28B463" stroke="#FFFFFF" strokeWidth="3" />
      <path
        d="M58 27.5L62.2 31.5L70.5 23"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
