import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import UiContext from "../../context/ui";
import Header from "../Header/index";
import Body from "./Body";
import Screen from "./Screen";
import Login from "../Login";
import CreateUser from "../CreateUser";

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
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Login />}></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
        </Routes>
      )}
    </Screen>
  );
};

export default Main;
