import {
  faHouseChimney,
  faGear,
  faCarSide,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import classNames from "classnames";

import MenuOption from "./MenuOption";

import UiContext from "../../../context/ui";

import styles from "./Menu.module.scss";

const Menu = () => {
  const { showMenu } = useContext(UiContext);

  const classNameMenu = (show: boolean) => {
    return classNames(styles.menuPanel, { [styles.show]: show });
  };

  return (
    <div className={classNameMenu(showMenu)}>
      <MenuOption icon={faHouseChimney} text="Inicio" path={"/homePage"} />
      <MenuOption
        icon={faGear}
        text="Maestros"
        subOptions={[
          { name: "Formas", path: "/masters/shapePage" },
          { name: "Masas", path: "/masters/doughPage" },
          { name: "Sabores", path: "/masters/flavorPage" },
          { name: "Tamaños", path: "/masters/sizePage" },
          { name: "Cremas", path: "/masters/creamPage" },
          { name: "Rellenos", path: "/masters/fillingPage" },
          { name: "Extras", path: "/masters/extraPage" },
          { name: "Sets", path: "/masters/setPage" },
          { name: "Tortas", path: "/masters/cakePage" },
        ]}
        path={""}
      />
      <MenuOption icon={faCarSide} text="Procesos" path={"processesPage"} />
      <MenuOption icon={faFileInvoiceDollar} text="Reportes" path={"reportsPage"} />
    </div>
  );
};

export default Menu;
