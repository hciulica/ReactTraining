import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function ComponentArchitecture() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.componentArchitectureSub11,
      description: strings.componentArchitectureSub11Desc,
      route: Routes.Chapter21ComponentContent,
      example: "Example",
    },
    {
      title: strings.componentArchitectureSub12,
      description: strings.componentArchitectureSub12Desc,
      route: Routes.Chapter21,
    },
    {
      title: strings.componentArchitectureSub13,
      description: strings.componentArchitectureSub13Desc,
      route: Routes.Chapter21ComponentNested,
      example: "Example",
      exercise: "Exercise",
    },
  ];

  const navigate = useNavigate();

  const navigateTo = (route: string) => {
    navigate(route);
  };

  const handleOnPress = (route: string, index: number) => {
    navigateTo(route);
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
        onClick={() => navigateTo(Routes.Chapter2)}
      />
      <div className="cards-grid-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            highlighted={cardSelected === index}
            example={item.example}
            exercise={item.exercise}
            onPress={() => handleOnPress(item.route, index)}
          />
        ))}
      </div>
    </>
  );
}
