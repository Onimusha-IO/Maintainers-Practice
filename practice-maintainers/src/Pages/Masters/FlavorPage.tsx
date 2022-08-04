import Flavor from "../../components/Masters/Flavor/Flavor";
import { useContext } from "react";
import UiContext from "../../context/ui";

const FlavorPage = () => {
  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Flavor />
    </div>
  );
};

export default FlavorPage;
