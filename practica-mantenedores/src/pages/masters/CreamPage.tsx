import Cream from "../../components/Cream/Cream";
import Page from "../../components/functional/page/Page";

const CreamPage = () => {
  return <Page tittle={"Cremas"} content={<Cream />} message={"Nueva Crema"} table={"cream"} />;
};

export default CreamPage;
