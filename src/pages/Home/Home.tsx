import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Card } from "../../components/Card/Card";
import { strings } from "../../resources/strings";
import { Routes } from "../../routes/Routes";

export function Home() {
  const navigate = useNavigate();

  const items = [
    {
      title: strings.introductionReactTitle,
      description: strings.introductionReactDesc,
      route: Routes.Chapter1,
    },
    {
      title: strings.howReactWorksTitle,
      description: strings.howReactWorksDesc,
      route: Routes.Chapter2,
    },
    {
      title: strings.namingConventionsTitle,
      description: strings.namingConventionsDesc,
      route: Routes.Chapter3,
    },
    // {
    //   title: strings.basicsOfBuildingTitle,
    //   description: strings.basicsOfBuildingDesc,
    //   route: Routes.Chapter4,
    // },
    // {
    //   title: strings.workingWithFunctions,
    //   description: strings.workingWithFunctionsDesc,
    //   route: Routes.Chapter5,
    // },
  ];

  return (
    <div className="cards-grid-container">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          onPress={() => navigate(item.route)}
        />
      ))}
    </div>
  );
}
