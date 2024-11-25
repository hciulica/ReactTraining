import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function ReactGuidelines() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);

  const items = [
    {
      title: strings.specificGuidelineFilenameTitle,
      description: strings.specificGuidelineFilenameDesc,
      route: Routes.Chapter3ReactGuidelines,
    },
    {
      title: strings.specificGuidelineCSSTitle,
      description: strings.specificGuidelineCSSDesc,
      route: Routes.Chapter3ReactGuidelines,
    },
    {
      title: strings.specificGuidelineConstantsTitle,
      description: strings.specificGuidelineConstantsDesc,
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
