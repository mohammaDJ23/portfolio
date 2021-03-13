// packages

import { FunctionComponent } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

// pages

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutMe from "./pages/About-me/About-me";
import Contact from "./pages/Contact/Contact";
import Skills from "./pages/Skills/Skills";

// css

import "./index.css";

const App: FunctionComponent = () => {
  return (
    <Router>
      <main className="full-screen default-background-color">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />

          <Redirect to="home" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
