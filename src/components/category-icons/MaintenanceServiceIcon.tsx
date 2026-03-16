function MaintenanceServiceIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      width={24}
      height={24}
    >
      <polygon points="20 3 20 5 12 5 12 3 12 1 20 1 20 3" />

      <polyline points="12 3 5 3 5 18 5 31 27 31 27 27" />
      <polyline points="20 3 27 3 27 18 27 23" />

      <polygon points="15 27 27 27 31 27 31 23 27 23 15 23 15 27" />

      <polyline points="15 23 10 25 15 27" />

      <line x1="8" y1="10" x2="24" y2="10" />
      <line x1="8" y1="14" x2="24" y2="14" />
      <line x1="8" y1="18" x2="24" y2="18" />
    </svg>
  );
}

export default MaintenanceServiceIcon;
