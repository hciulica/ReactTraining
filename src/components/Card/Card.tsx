import { Chip } from "../Chip/Chip";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  highlighted?: boolean;
  onPress?: () => void;
  example?: string;
  exercise?: string;
}

export function Card(props: CardProps) {
  const { title, description, highlighted, onPress, example, exercise } = props;

  return (
    <button
      className={
        highlighted
          ? "card-container card-container-selected"
          : "card-container"
      }
      onClick={onPress}
    >
      <div
        className="chips-container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
        }}
      >
        {!!example && <Chip name={example} type="Example" />}
        {!!exercise && <Chip name={exercise} type="Exercise" />}
      </div>
      <p className="card-title">{title}</p>
      <h3 className="card-description">{description}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      ></div>
    </button>
  );
}
