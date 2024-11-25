import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { BackButton } from "../../components/BackButton/BackButton";
import { Card } from "../../components/Card/Card";
import { strings } from "../../resources/strings";
import { Routes } from "../../routes/Routes";

export function ChapterThree() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.namingConventionsSub1Title,
      description: strings.namingConventionsSub1Desc,
      route: Routes.Chapter3DefaultConventions,
    },
    {
      title: strings.namingConventionsSub2Title,
      description: strings.namingConventionsSub2Desc,
      route: Routes.Chapter3ReactGuidelines,
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
