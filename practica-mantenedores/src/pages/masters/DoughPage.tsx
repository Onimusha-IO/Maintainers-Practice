import Dough from "../../components/Masters/Dough";
import Page from "../../components/ui/page/Page";

const DoughPage = () => {
  return <Page tittle={"Masas"} content={<Dough />} message={"Nueva Masa"} endpoint={"/api/dough"}/>;
};

export default DoughPage;
