
type Props = {
  children?: string;
};

export const TitleLarge = ({ children }: Props) => {
  return <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl opacity-70">{children}</h1>;
};
