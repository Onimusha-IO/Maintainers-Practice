import Flavor from '../../components/Masters/Flavor/Flavor';
import Page from '../../components/ui/page/Page';

const FlavorPage = () => {
  return <Page tittle={"Sabores"} content={<Flavor />} message={"Nuevo Sabor"} endpoint={"/api/flavor"} />;
}

export default FlavorPage