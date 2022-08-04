import User from "../components/User";

import { useContext } from "react";
import UiContext from "../context/ui";

const HomePage = () => {
  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <User />
    </div>
  );
};

export default HomePage;
