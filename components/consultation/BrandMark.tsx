import { brandWordmarkPaths } from "@/data/brandWordmark";

export default function BrandMark() {
  return (
    <svg
      className="c-brand-logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 358 80"
      width={358}
      height={80}
      role="img"
      aria-label="好老师升学帮"
      focusable="false"
    >
      <rect x="0" y="4" width="152" height="72" rx="3" fill="#174bb5" />
      <rect
        x="1"
        y="5"
        width="150"
        height="70"
        rx="2"
        fill="none"
        stroke="#fff"
        strokeOpacity=".18"
      />
      <path d={brandWordmarkPaths[0]} fill="#fff" />
      <path d={brandWordmarkPaths[1]} fill="#163365" />
      <path
        d="M312 68H324V56H336V44H348V32"
        fill="none"
        stroke="#2a63ca"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
