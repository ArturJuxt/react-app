import React from "react";
import { Route } from "react-router-dom";

import Content from "../../Components/Content/Content";
import Home from "../../Pages/MainPages/Home/Home";
import News from "../../Pages/MainPages/News/News";
import NewsDetails from "../../Pages/MainPages/News/NewsDetails/NewsDetails";
import HookStep from "../../Pages/MainPages/HookStep/HookStep";
import StepForm from "../../Pages/MainPages/StepForm/StepForm";
import ClassStep from "../../Pages/MainPages/ClassStep/ClassStep";
import NotFound from "../../Pages/MainPages/NotFound/NotFound";

const MainRoute = () => {
  return (
    <div>
      <Route path="/" exact render={() => <Content />} />
      <Route path="/Home" render={() => <Home />} />
      <Route path="/News" exact render={() => <News />} />
      <Route path="/News/:id" render={() => <NewsDetails />} />
      <Route path="/HookStep" render={() => <HookStep />} />
      <Route path="/Step" render={() => <StepForm />} />
      <Route path="/ClassStep" render={() => <ClassStep />} /> 
      <Route path="/404" render={() => <NotFound />} />
    </div>
  );
};

export default MainRoute;
