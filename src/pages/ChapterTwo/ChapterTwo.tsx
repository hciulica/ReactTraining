import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { BackButton } from "../../components/BackButton/BackButton";
import { Card } from "../../components/Card/Card";
import { strings } from "../../resources/strings";
import { Routes } from "../../routes/Routes";

export function ChapterTwo() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.howReactSub21,
      description: strings.howReactSub21Desc,
      route: Routes.Chapter2,
    },
    {
      title: strings.howReactSub22,
      description: strings.howReactSub22Desc,
      route: Routes.Chapter21,
    },
    {
      title: strings.howReactSub23,
      description: strings.howReactSub23Desc,
      route: Routes.Chapter23,
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
        onClick={() => navigateTo(Routes.Home)}
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
