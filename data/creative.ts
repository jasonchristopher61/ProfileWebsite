export interface CreativeCategory {
  title: string;
  icon: string; // lucide-react icon name
  blurb: string;
  placeholder: boolean; // true = no real content supplied yet
}

// Jason mentioned he enjoys music, filmmaking, photography, and game dev —
// no specific titles/projects were supplied, so these are intentionally
// generic placeholders. Swap `placeholder: false` and fill in real details
// (titles, embeds, links) once you have content to show.
export const creativeCategories: CreativeCategory[] = [
  {
    title: "Music & Composition",
    icon: "Music",
    blurb: "Add your tracks, compositions, or production work here — embed a SoundCloud/Spotify player or link out to a release.",
    placeholder: true,
  },
  {
    title: "Filmmaking & Video",
    icon: "Clapperboard",
    blurb: "Add short films, edits, or behind-the-scenes reels — a YouTube/Vimeo embed works great here.",
    placeholder: true,
  },
  {
    title: "Photography",
    icon: "Camera",
    blurb: "Drop in a gallery of your favorite shots — landscapes, street photography, whatever you shoot.",
    placeholder: true,
  },
  {
    title: "Game Development",
    icon: "Gamepad2",
    blurb: "Link to a game jam entry, prototype, or itch.io page once you have one ready to share.",
    placeholder: true,
  },
  {
    title: "Experiments & Side Projects",
    icon: "FlaskConical",
    blurb: "A catch-all for the fun stuff — weekend hacks, AI experiments, anything that doesn't fit a resume.",
    placeholder: true,
  },
];
