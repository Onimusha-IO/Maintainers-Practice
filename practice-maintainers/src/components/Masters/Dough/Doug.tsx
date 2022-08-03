import List from "./List";

const Dough = ({ list, setAction, setShowModal, setId, setName, setTitle }: any) => {
  const puttitle = "Modificar Masa";
  const deleteTitle = "¿Está seguro que desea eliminar el registro?";

  return (
    <List
      list={list}
      setAction={setAction}
      setShowModal={setShowModal}
      setId={setId}
      setName={setName}
      setTitle={setTitle}
      puttitle={puttitle}
      deleteTitle={deleteTitle}
    />
  );
};

export default Dough;
