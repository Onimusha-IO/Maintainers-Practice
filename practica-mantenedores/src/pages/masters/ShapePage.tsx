import Shape from "../../components/Shape/Shape";
import Page from "../../components/functional/page/Page";

const ShapePage = () => {
  return <Page tittle={"Formas"} content={<Shape />} message={"Nueva Forma"} endpoint={"/api/shape"} />;
};

export default ShapePage;
