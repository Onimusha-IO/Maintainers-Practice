import { Route, Routes } from "react-router-dom";
import Menu from "../../components/Menu";
import HomePage from "../../pages/HomePage";
import CreamPage from "../../pages/masters/CreamPage";
import DoughPage from "../../pages/masters/DoughPage";
import ExtraPage from "../../pages/masters/ExtraPage";
import FillingPage from "../../pages/masters/FillingPage";
import FlavorPage from "../../pages/masters/FlavorPage";
import ShapePage from "../../pages/masters/ShapePage";
import SizePage from "../../pages/masters/SizePage";
import MastersPage from "../../pages/MastersPage";
import ProcessesPage from "../../pages/ProcessesPage";
import ReportsPage from "../../pages/ReportsPage";
import Content from "../Layouts/Content";

import styles from "./Layouts.module.scss";

const Body = () => {
  return (
    <div className={styles.body}>
      <Menu />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/mastersPage" element={<MastersPage />}></Route>
          <Route path="/shapePage" element={<ShapePage />}></Route>
          <Route path="/doughPage" element={<DoughPage />}></Route>
          <Route path="/creamPage" element={<CreamPage />}></Route>
          <Route path="/extraPage" element={<ExtraPage />}></Route>
          <Route path="/fillingPage" element={<FillingPage />}></Route>
          <Route path="/flavorPage" element={<FlavorPage />}></Route>
          <Route path="/sizePage" element={<SizePage />}></Route>
          <Route path="/processesPage" element={<ProcessesPage />}></Route>
          <Route path="/reportsPage" element={<ReportsPage />}></Route>
        </Routes>
      </Content>
    </div>
  );
};

export default Body;
