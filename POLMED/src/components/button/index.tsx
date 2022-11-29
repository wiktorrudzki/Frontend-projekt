import React from "react";
import "./style.css";

interface Props {
  backgroundColor: string;
  color: string;
  fontSize: number | string;
  content: string;
  borderStyle: string;
  borderColor: string;
}

const Button = ({backgroundColor, color, fontSize, content, borderStyle, borderColor}:Props) => {
  return <button className="ButtonClass" style={{backgroundColor,color, fontSize, borderColor, borderStyle}}>{content}</button>;
};
export default Button;
