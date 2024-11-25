import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { BackButton } from "../../components/BackButton/BackButton";
import { Card } from "../../components/Card/Card";
import { strings } from "../../resources/strings";
import { Routes } from "../../routes/Routes";

export function ChapterOne() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.introductionReactSub1,
      description: strings.introductionReactSub1Desc,
      route: Routes.Chapter1,
    },
    {
      title: strings.introductionReactSub2,
      description: strings.introductionReactSub2Desc,
      route: Routes.Chapter12,
    },
    {
      title: strings.introductionReactSub3,
      description: strings.introductionReactSub3Desc,
      route: Routes.Chapter13,
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
