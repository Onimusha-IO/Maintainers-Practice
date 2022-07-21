import Flavor from '../../components/Flavor/Flavor';
import Page from '../../components/functional/page/Page';

const FlavorPage = () => {
  return <Page tittle={"Sabores"} content={<Flavor />} message={"Nuevo Sabor"} endpoint={"/api/flavor"} />;
}

export default FlavorPage