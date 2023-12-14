import React from "react";
interface Props {
  Text: string;
  OnClickHandler: () => void;
  BackgroundColor: string;
  Color: string;
}
export const PrimaryButton = ({
  Text,
  OnClickHandler,
  BackgroundColor,
  Color,
}: Props) => {
  return (
    <div>
      <button
        style={{ backgroundColor: `${BackgroundColor}`, color: `${Color}` }}
        className=" rounded w-[10rem] p-2 hover:opacity-70"
        onClick={OnClickHandler}
      >
        {Text}
      </button>
    </div>
  );
};
