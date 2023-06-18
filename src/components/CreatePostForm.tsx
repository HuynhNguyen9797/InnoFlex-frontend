import { Form, Input, Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import { createPost, editPost } from "../service/postService";
import { useNavigate } from "react-router-dom";

export function PostFrom() {
  const [createPostForm] = Form.useForm();
  const { reload, setReload, user, isOpenCreatePostFormModal, setOpenCreatePostFormModal, editMode, setEditMode, currentPost, setPost } = useAuthenContext();
  console.log(currentPost);
  const cancelHanlder = () => {
    createPostForm.resetFields();
    setEditMode(false);
    setPost({} as any);
    setOpenCreatePostFormModal(false);
  };
  async function hanlderCreateForm(values: any) {
    const result: any = await createPost(
      user?.id,
      user?.username,
      values.title,
      values.content
    );
    if(result.errorMessage){
      alert(result.errorMessage)
    } else {
      alert("Your Post is created successfully!")
      createPostForm.resetFields();
      setOpenCreatePostFormModal(false);
    }
    setReload(!reload)
  }

  async function handlerEditForm(values: any) {
    const result: any = await editPost(currentPost.id, values.title, values.content);
    if(result.errorMessage){
      alert(result.errorMessage)
    } else {
      alert("Your Post is updated successfully!")
      createPostForm.resetFields();
      setOpenCreatePostFormModal(false);
    }
    setEditMode(false);
    setPost({} as any);
    setReload(!reload);
  }
  return (
    <Modal
      open={isOpenCreatePostFormModal}
      onCancel={cancelHanlder}
      footer={null}
    >
      <h2 className="text-center bold mb-5 font-bold text-lg">
       { editMode ? 'Edit your post' : 'Tell us what you think'}
        </h2>
      <Form
        name="basic"
        onFinish={editMode ? handlerEditForm :  hanlderCreateForm}
        autoComplete="off"
        form={createPostForm}
        initialValues = {{
          title: currentPost ? currentPost.title : '',
          content: currentPost ? currentPost.content : ''
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title" }]}
        >
          <Input className="w-96 ml-6" />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please input your content" }]}
        >
          <Input.TextArea rows={6}/>
        </Form.Item>

        <Form.Item className="flex justify-center gap-10">
        <Button  className="px-10 mr-10 font-bold" htmlType="submit">
          {editMode ? 'Save': 'Upload'}
        </Button>
        <Button className="px-10 font-bold" htmlType="button" onClick={cancelHanlder}>
          Cancel
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}
