import React from "react";

// Samling af små, ensartede streg-ikoner til note-værktøjslinjen.
// Holdt som rene SVG'er (ingen eksternt ikon-bibliotek), i samme stil
// som projektets øvrige simple, monokrome ikoner.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const UndoIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 7 4 11l4 4" />
    <path d="M4 11h10.5a5.5 5.5 0 1 1 0 11H12" />
  </svg>
);

export const RedoIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m16 7 4 4-4 4" />
    <path d="M20 11H9.5a5.5 5.5 0 1 0 0 11H12" />
  </svg>
);

export const PaintRollerIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="5" width="12" height="5" rx="1" />
    <path d="M8 10v3" />
    <rect x="6" y="13" width="4" height="6" rx="1" />
  </svg>
);

export const EraserIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m9 18 8.5-8.5a2 2 0 0 0 0-2.9l-2.1-2.1a2 2 0 0 0-2.9 0L4 13a2 2 0 0 0 0 2.9L7.1 19H19" />
  </svg>
);

export const HeadingIcon = ({ level = "2", ...p }) => (
  <svg {...base} {...p}>
    <path d="M4 5v14" />
    <path d="M12 5v14" />
    <path d="M4 12h8" />
    <text x="15" y="17" fontSize="9" stroke="none" fill="currentColor" fontFamily="inherit">
      {level}
    </text>
  </svg>
);

export const TextStyleIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 6h14" />
    <path d="M9 6v13" />
    <path d="M15 6v13" />
    <path d="M6 19h6" />
    <path d="M12 19h6" />
  </svg>
);

export const BoldIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7z" />
    <path d="M7 12h7a3.5 3.5 0 0 1 0 7H7z" />
  </svg>
);

export const ItalicIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M11 5h6" />
    <path d="M7 19h6" />
    <path d="M14 5 10 19" />
  </svg>
);

export const StrikethroughIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="M8 6.5c0-1.4 1.6-2.5 4-2.5s4 1 4 2.5" />
    <path d="M8 17.5c0 1.4 1.6 2.5 4 2.5s4-1.1 4-2.5" />
  </svg>
);

export const UnderlineIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 4v7a5 5 0 0 0 10 0V4" />
    <path d="M5 20h14" />
  </svg>
);

export const HighlighterIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m14 4 6 6-8.5 8.5H5V13z" />
    <path d="M4 20h6" />
  </svg>
);

export const LinkIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 14.5 14.5 9.5" />
    <path d="M11 6.5 13 4.6a3.4 3.4 0 0 1 4.9 4.8L16 11.3" />
    <path d="M13 17.5 11 19.4a3.4 3.4 0 0 1-4.9-4.8L8 12.7" />
  </svg>
);

export const PenIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m4 20 1-4 11-11 3 3-11 11z" />
    <path d="m14 6 3 3" />
  </svg>
);

export const PaperclipIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 12.5 15 5a3 3 0 0 1 4.2 4.2l-8.5 8.5a5 5 0 1 1-7-7l8-8" />
  </svg>
);

export const TableIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="5" width="16" height="14" rx="1.5" />
    <path d="M4 10h16" />
    <path d="M4 15h16" />
    <path d="M12 5v14" />
  </svg>
);

export const CheckCircleIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CommentPlusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5.5h16v10H10l-4 3.5v-3.5H4z" />
    <path d="M12 8v5" />
    <path d="M9.5 10.5h5" />
  </svg>
);

export const FontIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 18 10.5 6h1L16 18" />
    <path d="M7.5 14h7" />
  </svg>
);

export const ListIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 6h11" />
    <path d="M9 12h11" />
    <path d="M9 18h11" />
    <circle cx="4.5" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IndentIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M10 6h10" />
    <path d="M10 12h10" />
    <path d="M10 18h10" />
    <path d="m4 9 3 3-3 3" />
  </svg>
);

export const PaletteIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4a8 8 0 1 0 0 16c1 0 1.6-.7 1.6-1.5 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7Z" />
    <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="8.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const SparkleIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v4" />
    <path d="M12 16v4" />
    <path d="M4 12h4" />
    <path d="M16 12h4" />
  </svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ExpandIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4H4v5" />
    <path d="M15 20h5v-5" />
    <path d="m4 4 6 6" />
    <path d="m20 20-6-6" />
  </svg>
);

export const PlusIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
);
