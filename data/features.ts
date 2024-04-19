type Feature = {
  id: number;
  feature: string;
  title: string;
  text: string;
  imgSrc: string;
};

export const FEATURES: Feature[] = [
  {
    id: 1,
    feature: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imgSrc: "/images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    feature: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgSrc: "/images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    feature: "Easy Sharing",
    title: " Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgSrc: "/images/illustration-features-tab-3.svg",
  },
];
