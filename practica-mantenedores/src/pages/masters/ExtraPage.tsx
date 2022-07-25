import Extra from "../../components/Masters/Extra/Extra";
import Page from "../../components/ui/page/Page";

const ExtraPage = () => {
  return <Page tittle={"Extras"} content={<Extra />} message={"Nuevo Extra"} endpoint={"/api/extra"} />;
};

export default ExtraPage;
