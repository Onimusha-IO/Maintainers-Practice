import Filling from "../../components/Filling/Filling";
import Page from "../../components/functional/page/Page";

const FillingPage = () => {
    return <Page tittle={"Rellenos"} content={<Filling />} message={"Nuevo Relleno"} endpoint={"/api/filling"} />;
}

export default FillingPage