import Table from "../../ui/table";

const List = ({ list, setAction, setShowModal, setId, setName }: any) => {
  return <>{list && <Table list={list} setAction={setAction} setShowModal={setShowModal} setId={setId} setName={setName} />}</>;
};
export default List;
