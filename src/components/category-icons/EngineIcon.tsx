function EngineIcon({ className }: { className: string }) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={24}
      height={24}
    >
      <polyline
        fill="none"
        points="30,14 30,10   35,10 35,6 21,6 21,10 26,10 26,14 "
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polyline
        fill="none"
        points="9,27 5,27 5,21   1,21 1,37 5,37 5,31 9,31 "
        stroke="currentColor"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="  M45,20v5h-3v-8.157C42,15.826,41.189,15,40.191,15H19.99c-0.479,0-0.941,0.195-1.28,0.542L14,21h-3c-1,0-2,1-2,2v12  c0,1.018,1.002,2,2,2h3l4.712,5.461C19.051,42.806,19.511,43,19.99,43h12.855c0.479,0,0.939-0.194,1.278-0.539l7.346-7.482  c0.341-0.346,0.53-0.814,0.53-1.303V31h3v5h4V20H45z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.0077"
      />
      <polygon
        stroke="currenColor"
        fill="currentColor"
        points="32,28 24,39 27,30 22,30 27,20 32,20 27,28 "
      />
    </svg>
  );
}

export default EngineIcon;
