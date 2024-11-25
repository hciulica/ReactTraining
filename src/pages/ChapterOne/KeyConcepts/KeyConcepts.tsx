import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Card } from "../../../components/Card/Card";
import { strings } from "../../../resources/strings";
import { Routes } from "../../../routes/Routes";

export function KeyConcepts() {
  const [cardSelected, setCardSelected] = useState<number | null>(null);
  const navigate = useNavigate();

  const items = [
    {
      title: strings.keyConceptsSub31,
      description: strings.keyConceptsSub31Desc,
    },
    {
      title: strings.keyConceptsSub32,
      description: strings.keyConceptsSub32Desc,
    },
    {
      title: strings.keyConceptsSub33,
      description: strings.keyConceptsSub33Desc,
    },
    {
      title: strings.keyConceptsSub34,
      description: strings.keyConceptsSub34Desc,
    },
    {
      title: strings.keyConceptsSub35,
      description: strings.keyConceptsSub35Desc,
    },
    {
      title: strings.keyConceptsSub36,
      description: strings.keyConceptsSub36Desc,
    },
    {
      title: strings.keyConceptsSub37,
      description: strings.keyConceptsSub37Desc,
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
