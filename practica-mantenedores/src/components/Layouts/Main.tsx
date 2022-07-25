import { Fragment, useContext } from "react";

import UiContext from "../../context/ui";
import Header from "../Header/index";
import Body from "./Body";
import Screen from "./Screen";
import Login from "../functional/Login";

const Main = () => {
  const { userValidated } = useContext(UiContext);
  return (
    <Screen>
      {userValidated ? (
        <Fragment>
          <Header />
          <Body />
        </Fragment>
      ) : (
        <Login />
      )}
    </Screen>
  );
};

export default Main;
