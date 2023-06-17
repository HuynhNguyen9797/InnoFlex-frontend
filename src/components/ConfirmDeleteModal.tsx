import { Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";

export function ConFirmDeleteModal() {
  const { isOpenDelete, setOpenDelete } = useAuthenContext();
  const cancelHanlder = () => {
   console.log('cancel');
   setOpenDelete(false)
  };
  const hanlderDelete = () => {
    setOpenDelete(false);
    console.log('delete')
  };
  return (
    <Modal
      open={isOpenDelete}
      onCancel={cancelHanlder}
      footer={[
      <Button size='large' key = 'delete' onClick={hanlderDelete}>Delete</Button>, 
      <Button size='large' key = 'cancel' onClick={cancelHanlder}>Cancel</Button>]}
    >
      <h2 className="text-center bold mb-5 font-bold text-lg">
        Are you sure want to delete this post ?
      </h2>
    </Modal>
  );
}
