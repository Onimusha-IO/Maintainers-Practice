import Filling from "../../components/Masters/Filling/Filling";
import { useContext } from "react";
import UiContext from "../../context/ui";

const FillingPage = () => {
  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Filling />
    </div>
  );
};

export default FillingPage;
