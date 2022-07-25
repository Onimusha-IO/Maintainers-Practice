import { Route, Routes } from "react-router-dom";
import Menu from "../ui/Menu";
import HomePage from "../../Pages/HomePage";
import CreamPage from "../../Pages/Masters/CreamPage";
import DoughPage from "../../Pages/Masters/DoughPage";
import ExtraPage from "../../Pages/Masters/ExtraPage";
import FillingPage from "../../Pages/Masters/FillingPage";
import FlavorPage from "../../Pages/Masters/FlavorPage";
import ShapePage from "../../Pages/Masters/ShapePage";
import SizePage from "../Masters/Size/Size";
import ProcessesPage from "../../Pages/Processes/ProcessesPage";
import ReportsPage from "../../Pages/Reports/ReportsPage";
import Error from "../functional/Error";
import Content from "../Layouts/Content";

import styles from "./Layouts.module.scss";

const Body = () => {
  return (
    <div className={styles.body}>
      <Menu />
      <Content>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="masters">
            <Route path="shapePage" element={<ShapePage />}></Route>
            <Route path="doughPage" element={<DoughPage />}></Route>
            <Route path="creamPage" element={<CreamPage />}></Route>
            <Route path="extraPage" element={<ExtraPage />}></Route>
            <Route path="fillingPage" element={<FillingPage />}></Route>
            <Route path="flavorPage" element={<FlavorPage />}></Route>
            <Route path="sizePage" element={<SizePage />}></Route>
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="processesPage" element={<ProcessesPage />}></Route>
          <Route path="reportsPage" element={<ReportsPage />}></Route>
        </Routes>
      </Content>
    </div>
  );
};

export default Body;
