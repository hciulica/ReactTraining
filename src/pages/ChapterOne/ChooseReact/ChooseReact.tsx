import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function ChooseReact() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const items = [
    {
      title: strings.introductionReactSub21,
      description: strings.introductionReactSub21Desc,
    },
    {
      title: strings.introductionReactSub22,
      description: strings.introductionReactSub22Desc,
    },
    {
      title: strings.introductionReactSub23,
      description: strings.introductionReactSub23Desc,
    },
    {
      title: strings.introductionReactSub24,
      description: strings.introductionReactSub24Desc,
    },
    {
      title: strings.introductionReactSub25,
      description: strings.introductionReactSub25Desc,
    },
  ];

  return (
    <>
      <BackButton
        style={{
          marginLeft: 30,
          marginTop: 40,
          marginBottom: 20,
          alignSelf: "flex-start",
        }}
        onClick={() => navigate(Routes.Chapter1)}
      />
      <div className="cards-grid-container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            highlighted={index === cardSelected}
            onPress={() => setCardSelected(index)}
          />
        ))}
      </div>
    </>
  );
}
