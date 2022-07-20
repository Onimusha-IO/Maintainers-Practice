import Dough from "../../components/Dough";
import Page from "../../components/functional/page/Page";

const DoughPage = () => {
  return <Page tittle={"Masas"} content={<Dough />} message={"Nueva Masa"} table={"dough"} />;
};

export default DoughPage;
