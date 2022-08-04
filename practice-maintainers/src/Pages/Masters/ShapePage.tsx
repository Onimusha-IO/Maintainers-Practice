import Shape from "../../components/Masters/Shape/Shape";
import { useContext } from "react";
import UiContext from "../../context/ui";

const ShapePage = () => {
  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Shape />
    </div>
  );
};

export default ShapePage;
