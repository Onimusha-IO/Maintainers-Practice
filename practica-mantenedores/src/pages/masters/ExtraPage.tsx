import Extra from "../../components/Extra/Extra";
import Page from "../../components/functional/page/Page";

const ExtraPage = () => {
  return <Page tittle={"Extras"} content={<Extra />} message={"Nuevo Extra"} endpoint={"/api/extra"} />;
};

export default ExtraPage;
