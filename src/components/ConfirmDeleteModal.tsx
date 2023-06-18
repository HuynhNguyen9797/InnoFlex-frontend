import { Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import { deletePost} from '../service/postService';

export function ConFirmDeleteModal() {
  const { isOpenDelete, setOpenDelete, currentPost , reload, setReload } = useAuthenContext();
  const cancelHanlder = () => {
   setOpenDelete(false)
  };
  const hanlderDelete = async () => {
    const result: any = await deletePost(currentPost.id);
    if(result.errorMessage){
      alert(result.errorMessage)
    } else {
      alert('Delete post successfully!')
    }
    setOpenDelete(false);
    setReload(!reload);
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
