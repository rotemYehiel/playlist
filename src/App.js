import React from "react";
import MainHeader from "./components/MainHeader";
import Main from "./components/Main";
import { AppLayout } from "./styleComponents/App";

const App = () => {
  return (
    <AppLayout>
      <MainHeader />
      <Main />
    </AppLayout>
  );
};

export default App;
