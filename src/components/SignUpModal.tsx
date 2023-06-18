import { Form, Input, Modal, Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import {createUser} from '../service/userService'

export function SignUpModal() {
  const [signUpform] = Form.useForm();
  const { isOpenSignUpModal, setOpenSignUpModal, setUser } = useAuthenContext();
  const cancelHanlder = () => {
    signUpform.resetFields()
    setOpenSignUpModal(false);
  };
  async function hanlderLogin (values: any) {
    console.log(values);
    const result: any = await createUser(values);
    console.log(result)
    if(result.errorMessage){
      alert(result.errorMessage)
    } else {
      const {token, username, id} = result;
      localStorage.setItem('apiToken', token);
      setUser({id, username})
    }
    signUpform.resetFields()
    setOpenSignUpModal(false);
  };
  
  return (
    <Modal
      open={isOpenSignUpModal}
      onCancel={hanlderLogin}
      footer={null}
    >
      <h2 className="text-center bold mb-5 font-bold text-lg">Do not have an account ? Let sign up</h2>
      <Form
        name="basic"
        onFinish={hanlderLogin}
        autoComplete="off"
        form={signUpform}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="ml-7 w-96" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="flex justify-center gap-10">
        <Button  className="px-10 mr-10 font-bold" htmlType="submit">
          Sign up 
        </Button>
        <Button className="px-10 font-bold" htmlType="button" onClick={cancelHanlder}>
          Cancel
        </Button>
      </Form.Item>
      </Form>
    </Modal>
  );
}
