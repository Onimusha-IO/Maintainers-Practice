import { faHouseChimney, faGear, faCarSide, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import classNames from "classnames";

import MenuOption from "./MenuOption";

import UiContext from "../../context/ui";

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
          { name: "Formas", path: "/shapePage" },
          { name: "Masas", path: "/doughPage" },
          { name: "Cremas", path: "/creamPage" },
          { name: "Extras", path: "/extraPage" },
          { name: "Rellenos", path: "/fillingPage" },
          { name: "Tamaños", path: "/sizePage" },
          { name: "Sabores", path: "/flavorPage" },
        ]}
        path={"/mastersPage"}
      />
      <MenuOption icon={faCarSide} text="Procesos" subOptions={[]} path={"processesPage"} />
      <MenuOption icon={faFileInvoiceDollar} text="Reportes" subOptions={[]} path={"reportsPage"} />
    </div>
  );
};

export default Menu;
