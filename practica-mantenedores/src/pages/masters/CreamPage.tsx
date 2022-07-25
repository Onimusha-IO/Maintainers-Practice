import Cream from "../../components/Masters/Cream/Cream";
import Page from "../../components/ui/page/Page";

const CreamPage = () => {
  return <Page tittle={"Cremas"} content={<Cream />} message={"Nueva Crema"} endpoint={"/api/cream"} />;
};

export default CreamPage;
