
export function CinemaSeatIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Top-down Cinema Seat</title>
      {/* Headrest */}
      <rect x="16" y="5" width="32" height="8" rx="4" fill="currentColor" />
      
      {/* Back support */}
      <rect x="12" y="13" width="40" height="6" rx="3" fill="currentColor" />
      
      {/* Seat cushion */}
      <rect x="12" y="19" width="40" height="20" rx="4" fill="currentColor" />

      {/* Center dividing line (optional) */}
      <path
        d="M32 19 L32 39"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4,4"
      />

      {/* Armrests */}
      <rect x="8" y="19" width="4" height="20" rx="2" fill="currentColor" />
      <rect x="52" y="19" width="4" height="20" rx="2" fill="currentColor" />
      
      {/* Seat base separator */}
      <rect x="16" y="39" width="32" height="4" rx="2" fill="currentColor" />
      
      {/* Front part of the seat */}
      <rect x="16" y="43" width="32" height="8" rx="4" fill="currentColor" />
    </svg>
  );
}
