import { Form, Input, Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";

export function PostFrom() {
  const [createPostForm] = Form.useForm();
  const { isOpenCreatePostFormModal, setOpenCreatePostFormModal } = useAuthenContext();
  const cancelHanlder = () => {
    createPostForm.resetFields()
    setOpenCreatePostFormModal(false);
  };
  const hanlderLogin = (values: any) => {
    console.log(values);
    createPostForm.resetFields()
    setOpenCreatePostFormModal(false);
  }
  return (
    <Modal
      open={isOpenCreatePostFormModal}
      onCancel={hanlderLogin}
      footer={null}
    >
      <h2 className="text-center bold mb-5 font-bold text-lg">Tell us what you think</h2>
      <Form
        name="basic"
        onFinish={hanlderLogin}
        autoComplete="off"
        form={createPostForm}
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
          <Input.TextArea  rows={6}/>
        </Form.Item>

        <Form.Item className="flex justify-center gap-10">
        <Button  className="px-10 mr-10 font-bold" htmlType="submit">
          Upload
        </Button>
        <Button className="px-10 font-bold" htmlType="button" onClick={cancelHanlder}>
          Cancel
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}
