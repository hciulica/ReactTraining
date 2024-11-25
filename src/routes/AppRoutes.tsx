import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { SimpleComponent } from "../examples/ExampleOne/SimpleComponent";
import { ContentPage } from "../examples/ExampleThree/ContentPage";
import { Parent } from "../examples/ExampleTwo/NestedComponents";
import { AccountForm } from "../examples/ExerciseOne/AccountForm";
import { ChapterFive } from "../pages/ChapterFive/ChapterFive";
import { ChapterFour } from "../pages/ChapterFour/ChapterFour";
import { ChapterOne } from "../pages/ChapterOne/ChapterOne";
import { ChooseReact } from "../pages/ChapterOne/ChooseReact/ChooseReact";
import { KeyConcepts } from "../pages/ChapterOne/KeyConcepts/KeyConcepts";
import { ChapterThree } from "../pages/ChapterThree/ChapterThree";
import { NamingConventions } from "../pages/ChapterThree/NamingConventions/NamingConventions";
import { ReactGuidelines } from "../pages/ChapterThree/NamingConventions/ReactGuidelines";
import { ChapterTwo } from "../pages/ChapterTwo/ChapterTwo";
import { ComponentArchitecture } from "../pages/ChapterTwo/ComponentArchitecture/ComponentArchitecture";
import { ComponentContent } from "../pages/ChapterTwo/ComponentArchitecture/Content/ComponentContent";
import { NestedComponentContent } from "../pages/ChapterTwo/ComponentArchitecture/Content/NestedComponentContent";
import { Rendering } from "../pages/ChapterTwo/Rendering/Rendering";
import { Home } from "../pages/Home/Home";
import { Routes } from "./Routes";

export function AppRoutes() {
  return (
    <BrowserRoutes>
      <Route path={Routes.Home} element={<Home />} />
      <Route path={Routes.Chapter1} element={<ChapterOne />} />
      <Route path={Routes.Chapter12} element={<ChooseReact />} />
      <Route path={Routes.Chapter13} element={<KeyConcepts />} />
      <Route path={Routes.Chapter2} element={<ChapterTwo />} />
      <Route path={Routes.Chapter21} element={<ComponentArchitecture />} />
      <Route
        path={Routes.Chapter21ComponentContent}
        element={<ComponentContent />}
      />
      <Route path={Routes.Chapter21Component} element={<SimpleComponent />} />
      <Route
        path={Routes.Chapter21ComponentNested}
        element={<NestedComponentContent />}
      />
      <Route
        path={Routes.Chapter21ComponentNestedExample}
        element={<Parent />}
      />
      <Route
        path={Routes.Chapter21ComponentNestedExercise}
        element={<AccountForm />}
      />
      <Route path={Routes.Chapter23} element={<Rendering />} />
      <Route path={Routes.Chapter23Example} element={<ContentPage />} />
      <Route path={Routes.Chapter3} element={<ChapterThree />} />
      <Route
        path={Routes.Chapter3DefaultConventions}
        element={<NamingConventions />}
      />
      <Route
        path={Routes.Chapter3ReactGuidelines}
        element={<ReactGuidelines />}
      />
      <Route path={Routes.Chapter4} element={<ChapterFour />} />
      <Route path={Routes.Chapter5} element={<ChapterFive />} />
    </BrowserRoutes>
  );
}
