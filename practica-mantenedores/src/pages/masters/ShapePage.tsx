import Shape from "../../components/Masters/Shape/Shape";
import Page from "../../components/ui/page/Page";

const ShapePage = () => {
  return <Page tittle={"Formas"} content={<Shape />} message={"Nueva Forma"} endpoint={"/api/shape"} />;
};

export default ShapePage;
