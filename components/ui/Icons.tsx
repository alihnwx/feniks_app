export function Logo() {
  return (
    <div className="logo-mark">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="8" fill="#3d6dff" />
        <path
          d="M9 22L17 9L25 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 22L17 14.5L21.5 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
      <div className="logo-text">
        Feniks Logistics<span>International Freight</span>
      </div>
    </div>
  );
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16.5v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 21 16.5z"
        stroke="#7ea1ff"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z"
        stroke="#7ea1ff"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="3" stroke="#7ea1ff" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#7ea1ff" strokeWidth="1.6" />
      <path
        d="M12 6v6l4 2"
        stroke="#7ea1ff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
