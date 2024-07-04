type HeroTypes = {
  hi: string;
  name: string;
  strong: string;
  desc: string;
};

type NavMenuTypes = { title: string; href: string; description: string }[];

type TweetTypes = { id: string }[];

type TitleProps = {
  tag?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type AnimationListTypes = {
  img: string;
  title: string;
  description?: string;
  url: string;
  isExternal?: boolean;
}[];

export type {
  AnimationListTypes,
  HeroTypes,
  NavMenuTypes,
  TweetTypes,
  TitleProps,
};
