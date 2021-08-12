import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import Screen from "./components/Screen/Screen";

const App: FC = () => {
  const [isScreen, setIsScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsScreen(true);
    setTimeout(() => setIsScreen(false), 1000);
  }, []);

  return (
    <BrowserRouter>
      {/* {isScreen && <Screen />} */}
      <div className="page">
       {/* <Screen />  */}
      <Header />
       <main className="content">
         <Menu /> 
         <Switch>
          <Route exact path="/">
            <News />
          </Route>
          <Route exact path="/address">
            <SearchContainer />
          </Route>
        </Switch> 
      </main> 
      </div>
    </BrowserRouter>
  );
};

export default App;
