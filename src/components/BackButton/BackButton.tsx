import { CSSProperties } from "react";
import "./BackButton.css";

interface BackButtonProps {
  onClick: () => void;
  style?: CSSProperties;
}

export function BackButton(props: BackButtonProps) {
  const { onClick, style } = props;

  return (
    <button className="back-button" style={style} onClick={onClick}>
      Back
    </button>
  );
}
