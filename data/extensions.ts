export type Extension = {
  title: string;
  minimumVersion: string;
  imgSrc: string;
};

export const EXTENSIONS: Extension[] = [
  {
    title: "Add to Chrome",
    minimumVersion: "Minimum version 62",
    imgSrc: "/images/logo-chrome.svg",
  },
  {
    title: "Add to Firefox",
    minimumVersion: "Minimum version 55",
    imgSrc: "/images/logo-firefox.svg",
  },
  {
    title: "Add to Opera",
    minimumVersion: "Minimum version 46",
    imgSrc: "/images/logo-opera.svg",
  },
];
