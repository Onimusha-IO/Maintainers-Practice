import Dough from "../../components/Masters/Dough";
import { useContext } from "react";
import UiContext from "../../context/ui";

const DoughPage = () => {
  const { setShowMenu } = useContext(UiContext);
  
  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Dough />
    </div>
  );
};

export default DoughPage;
