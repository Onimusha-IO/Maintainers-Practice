import Table from "../../ui/table";

const List = ({
  list,
  setAction,
  setShowModal,
  setId,
  setName,
  setTitle,
labels
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
          labels={labels}          />
      )}
    </>
  );
};
export default List;
