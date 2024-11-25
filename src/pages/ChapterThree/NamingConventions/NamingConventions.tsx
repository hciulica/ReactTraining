import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function NamingConventions() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.camelCase,
      description: strings.whenUseCamelCase,
      route: Routes.Chapter3DefaultConventions,
    },
    {
      title: strings.pascalCase,
      description: strings.whenUsePascalCase,
      route: Routes.Chapter3DefaultConventions,
    },
    {
      title: strings.snakeCase,
      description: strings.whenSnakeCase,
      route: Routes.Chapter3DefaultConventions,
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
        onClick={() => navigateTo(Routes.Chapter3)}
      />
      <div className="cards-grid-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            highlighted={cardSelected === index}
            onPress={() => handleOnPress(item.route, index)}
          />
        ))}
      </div>
    </>
  );
}
