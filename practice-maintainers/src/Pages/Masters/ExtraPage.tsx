import Extra from "../../components/Masters/Extra/Extra";
import { useContext } from "react";
import UiContext from "../../context/ui";

const ExtraPage = () => {
  const { setShowMenu } = useContext(UiContext);

  return (
    <div
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <Extra />
    </div>
  );
};

export default ExtraPage;
