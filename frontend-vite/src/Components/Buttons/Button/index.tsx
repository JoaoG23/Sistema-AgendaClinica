import React from "react";

type ColorButton = "primary" | "secondary" | "tertiary" | "final";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?: any;
  color?: ColorButton;
};

interface ColorButtonsStrategy {
  primary: () => string;
  secondary: () => string;
  tertiary: () => string;
  final: () => string;
}

const selectButtonStrategyConcrect: ColorButtonsStrategy = {
  primary: () =>
    "bg-purple-400 text-gray-50 shadow-purple-500/50 hover:bg-purple-500 ease-in duration-300",
  secondary: () =>
    "bg-yellow-500 text-gray-50 shadow-yellow-500/50 hover:bg-yellow-600 ease-in duration-300",
  tertiary: () =>
    "bg-indigo-400 text-gray-50 shadow-indigo-500/50 hover:bg-indigo-500 ease-in duration-300",
  final: () =>
    "bg-red-400 text-gray-50 shadow-res-500/50 hover:bg-red-500 ease-in duration-300",
};

export const Button: React.FC<Propriedades> = ({
  onClick,
  children,
  color,
}) => {
  const selectColorContext = (colorButton: ColorButton): string => {
    return (
      selectButtonStrategyConcrect[colorButton!]() ||
      "text-gray-50 bg-yellow-400"
    );
  };

  const colorSelected = selectColorContext(color!);
  const mainClass: string = `p-1 flex justify-center items-center gap-2 rounded-lg shadow-lg ${colorSelected}`;

  return (
    <button className={mainClass} onClick={onClick}>
      {children}
    </button>
  );
};
