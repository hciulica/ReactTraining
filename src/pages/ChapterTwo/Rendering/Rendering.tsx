import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function Rendering() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.renderingTitle0,
      description: strings.renderingDesc0,
      route: Routes.Chapter23,
    },
    {
      title: strings.renderingTitle1,
      description: strings.renderingDesc1,
      route: Routes.Chapter23,
    },
    {
      title: strings.renderingTitle2,
      description: strings.renderingDesc2,
      route: Routes.Chapter23,
    },
    {
      title: strings.renderingTitle3,
      description: strings.renderingDesc3,
      route: Routes.Chapter23,
    },
    {
      title: strings.realWorldRendering,
      description: strings.example3Description,
      example: "Example",
      route: Routes.Chapter23Example,
    },
  ];

  const navigate = useNavigate();

  const handleOnPress = (index: number, route: string) => {
    navigate(route);
    setCardSelected(index);
  };

  return (
    <>
      <BackButton
        style={{
          marginLeft: 30,
          marginTop: 40,
          marginBottom: 20,
          alignSelf: "flex-start",
        }}
        onClick={() => navigate(Routes.Chapter2)}
      />
      <div className="cards-grid-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            highlighted={cardSelected === index}
            onPress={() => handleOnPress(index, item.route)}
            example={item.example}
          />
        ))}
      </div>
    </>
  );
}
