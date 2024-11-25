import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../App.css";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { Card } from "../../../../components/Card/Card";
import { strings } from "../../../../resources/strings";
import { Routes } from "../../../../routes/Routes";

export function ComponentContent() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.example1,
      description: strings.example1Description,
      route: Routes.Chapter21Component,
      example: "SimpleComponent.tsx",
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
        onClick={() => navigateTo(Routes.Chapter21)}
      />
      <div className="cards-grid-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            highlighted={cardSelected === index}
            example={item.example}
            onPress={() => handleOnPress(item.route, index)}
          />
        ))}
      </div>
    </>
  );
}
