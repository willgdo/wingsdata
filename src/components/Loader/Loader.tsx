import "./Loader.css";

export const Loader = () => {
  return (
    <div className="plane-loader">
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#ffffff">
          <circle cx="66.5" cy="29.9" r="4.4" opacity="0.90" />
          <circle cx="57.7" cy="35.3" r="4.0" opacity="0.85" />
          <circle cx="49.8" cy="42.0" r="3.7" opacity="0.80" />
          <circle cx="42.9" cy="49.8" r="3.4" opacity="0.75" />
          <circle cx="37.2" cy="58.6" r="3.1" opacity="0.70" />
          <circle cx="32.7" cy="68.2" r="2.8" opacity="0.65" />
          <circle cx="29.5" cy="78.3" r="2.6" opacity="0.60" />
          <circle cx="27.6" cy="88.9" r="2.4" opacity="0.55" />
          <circle cx="27.1" cy="99.7" r="2.2" opacity="0.50" />
          <circle cx="28.0" cy="110.5" r="2.0" opacity="0.45" />
          <circle cx="30.3" cy="121.1" r="1.8" opacity="0.40" />
          <circle cx="33.9" cy="131.3" r="1.6" opacity="0.36" />
          <circle cx="38.9" cy="140.8" r="1.5" opacity="0.32" />
          <circle cx="45.0" cy="149.5" r="1.4" opacity="0.28" />
          <circle cx="52.2" cy="157.1" r="1.3" opacity="0.24" />
          <circle cx="60.4" cy="163.5" r="1.2" opacity="0.20" />
          <circle cx="69.4" cy="168.6" r="1.1" opacity="0.16" />
          <circle cx="79.1" cy="172.2" r="1.0" opacity="0.12" />
          <circle cx="89.3" cy="174.4" r="0.9" opacity="0.08" />
          <circle cx="99.8" cy="175.0" r="0.8" opacity="0.05" />
        </g>

        <path
          d="M 115 22 
         L 104 18 
         L 99 7 
         L 95 7 
         L 97 18 
         L 84 19 
         L 80 14 
         L 77 14 
         L 78 22 
         L 77 30 
         L 80 30 
         L 84 25 
         L 97 26 
         L 95 37 
         L 99 37 
         L 104 26 
         Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
