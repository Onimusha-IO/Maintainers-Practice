import Cream from "../../components/Masters/Cream";

import { useContext } from "react";
import UiContext from "../../context/ui";

const CreamPage = () => {
  const { setShowMenu } = useContext(UiContext);
  
  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Cream />
    </div>
  );
};

export default CreamPage;
