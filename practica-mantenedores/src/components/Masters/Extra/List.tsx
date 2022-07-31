import Table from "../../ui/table";

const List = ({
  list,
  setAction,
  setShowModal,
  setId,
  setName,
  setTitle,
  puttitle,
  deleteTitle,
}: any) => {
  return (
    <>
      {list && (
        <Table
          list={list}
          setAction={setAction}
          setShowModal={setShowModal}
          setId={setId}
          setName={setName}
          setTitle={setTitle}
          puttitle={puttitle}
          deleteTitle={deleteTitle}
        />
      )}
    </>
  );
};
export default List;
