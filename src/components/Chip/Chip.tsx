import "./Chip.css";

interface ChipProps {
  name: string;
  type: "Example" | "Exercise";
}

export function Chip(props: ChipProps) {
  const { type, name } = props;
  return (
    <div
      className={`chip-container ${
        type === "Example" ? "chip-example" : "chip-exercise"
      }`}
    >
      {name}
    </div>
  );
}
