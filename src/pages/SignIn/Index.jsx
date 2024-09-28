import { Button, Form, Image, Input, Typography } from "antd";
import { Link } from "react-router-dom";

import signInGreetings from "../../assets/undraw_Login_re_4vu2.png";

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="hidden md:block w-full md:w-1/2 h-full border-r border-r-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={signInGreetings}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center items-center md:w-1/2">
        <Form
          layout="vertical"
          name="sign-in"
          className="rounded-xl w-96 p-8 px-10"
          initialValues={{
            remember: true,
          }}
        >
          <Typography.Title level={4} className="text-center mt-4">
            <p className="text-2xl font-semibold">Sign In</p>
          </Typography.Title>
          <Form.Item
            label="Phone"
            className="mb-3"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },
              { min: 7, message: "Phone should be at least 7 characters" },
            ]}
            hasFeedback
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              { min: 6, message: "Password should be at least 6 characters" },
            ]}
            hasFeedback
          >
            <Input.Password type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full font-bold"
            >
              Sign In
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/signup">Haven't account yet?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
