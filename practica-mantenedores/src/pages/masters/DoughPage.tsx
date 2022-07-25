import Dough from "../../components/Masters/Dough";
import Page from "../../components/ui/page/Page";

const DoughPage = () => {
  return (
    <Page tittle={"Masas"} message={"Nueva Masa"} endpoint={"/api/dough"}>
      <Dough />
    </Page>
  );
};

export default DoughPage;
