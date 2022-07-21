import Page from "../../components/functional/page/Page";
import Size from "../../components/Size/Size";

const SizePage = () => {
  return <Page tittle={"Tamaños"} content={<Size />} message={"Nuevo Tamaño"} endpoint={"/api/size"} />;
}

export default SizePage