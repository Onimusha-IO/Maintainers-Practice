import Filling from "../../components/Masters/Filling/Filling";
import Page from "../../components/ui/page/Page";

const FillingPage = () => {
    return <Page tittle={"Rellenos"} content={<Filling />} message={"Nuevo Relleno"} endpoint={"/api/filling"} />;
}

export default FillingPage