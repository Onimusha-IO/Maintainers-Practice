import { Route, Routes } from "react-router-dom";
import Menu from "../../components/Menu";
import HomePage from "../../pages/HomePage";
import CreamPage from "../../pages/masters/CreamPage";
import DoughPage from "../../pages/masters/DoughPage";
import ShapePage from "../../pages/masters/ShapePage";
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
          <Route path="/shapePage" element={<ShapePage />}></Route>
          <Route path="/doughPage" element={<DoughPage />}></Route>
          <Route path="/creamPage" element={<CreamPage />}></Route>
          <Route path="/processesPage" element={<ProcessesPage />}></Route>
          <Route path="/reportsPage" element={<ReportsPage />}></Route>
        </Routes>
      </Content>
    </div>
  );
};

export default Body;
