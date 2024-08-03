import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values) => {
          console.log({ values });
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            { required: true, message: "Please enter your name" },
            { min: 3 },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="full name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter valid email" },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option vale="Female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="dob" label="Date of Birth" required>
          <DatePicker
            picker="date"
            placeholder="Date of Birth"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[
            { required: true, message: "Please enter your url" },
            { type: "url", message: "Please enter valid url" },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input placeholder="Add you website url" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your Password" },
            { whitespace: true },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "password and confirm password not matching"
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            { required: true },
            {
              validator(_, value) {
                return value
                  ? Promise.resolve()
                  : Promise.reject("agreement should be checed");
              },
            },
          ]}
        >
          <Checkbox>
            Agree to agreement <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item name="submit" wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
