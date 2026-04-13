import React from 'react';

function DiagnosticsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21,56V76.86A17.07,17.07,0,0,0,38,94h0A17.07,17.07,0,0,0,55,76.86V54" />
      <circle cx="21" cy="48" r="8" />
      <polygon points="71.5 6 76.5 4 71.5 2 71.5 6" />
      <path d="M36,4H31.91C29,4,26.67,7,27,10.35,29.25,30.54,38.69,54,55,54S80.75,30.54,83,10.35C83.33,7,81,4,78.09,4H74" />
      <polygon points="38.5 6 33.5 4 38.5 2 38.5 6" />
      <circle cx="21" cy="48" r="2" />
    </svg>
  );
}

export default DiagnosticsIcon;
