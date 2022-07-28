import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getDoughList } from "../../store/slices/MastersSlice";

import Dough from "../../components/Masters/Dough";
import Page from "../../components/ui/page/Page";

import Crud from "../../client/Crud";
import axios from "axios";
import { config } from "../../utils/config";

const DoughPage = () => {
  const [list, setList] = useState<[]>();

  const [action, setAction] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const getList = async () => {
    const server = new Crud(`/api/dough`);
    const res = await server.get("/list");
    setList(res?.data);
  };

  const onClose = () => {
    getList();
    setShowModal(false);
  };

  const [storeList, setStoreList] = useState([]);

  const doughList = useSelector((state: any) => {
    return state.mastersReducer.list;
  });

  const dispatch = useDispatch();

  const doughStoreList = async () => {
    const res = await axios.get(`${config.url}/api/dough/list`, { headers: config.headers });
    dispatch(getDoughList(res.data));
  };

  useEffect(() => {
    getList();
    doughStoreList();
  }, []);
  return (
    <Page
      tittle={"Masas"}
      message={"Nueva Masa"}
      endpoint={"/api/dough"}
      getList={getList}
      setAction={setAction}
      action={action}
      onClose={onClose}
      showModal={showModal}
      setShowModal={setShowModal}
      setId={setId}
      id={id}
      setName={setName}
      name={name}
    >
      <Dough list={doughList} setAction={setAction} action={action} setShowModal={setShowModal} setId={setId} setName={setName} />
    </Page>
  );
};

export default DoughPage;
