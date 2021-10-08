import React from "react";
import { Button, Card, Modal, Form, Row, Col, Input } from "antd";

function AddressComponent() {
  const [formVisible,setFormVisible] = React.useState(false);

  const toggleFormVisibility = () =>{
    setFormVisible(!formVisible);
  }




  const AddressForm = () => {
    return (
      <Modal title="Add New Address" visible={formVisible} onOk={toggleFormVisibility} okText="Save" onCancel={toggleFormVisibility}>
        <Form
     layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={(v)=>console.log(v)}
      autoComplete="off"
    >
      <Form.Item
        label="Enter your location"
        name="location"
        rules={[
          {
            required: true,
            message: 'Please input your location!',
          },
        ]}
      >
        <Input.TextArea rows={3} placeholder="Enter your location" />
      </Form.Item> 

        <Row gutter={10}>
        <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input name!',
          },
        ]}
      >
        <Input placeholder="Enter name"/>
      </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Mobile Number"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input mobile number!',
          },
        ]}
      >
        <Input placeholder="Enter mobile number"/>
      </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Pincode"
        name="pincode"
        rules={[
          {
            required: true,
            message: 'Please input pincode!',
          },
        ]}
      >
        <Input placeholder="Enter pincode"/>
      </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
            message: 'Please input city!',
          },
        ]}
      >
        <Input placeholder="Enter city"/>
      </Form.Item>
            </Col>
        </Row>                   
      
    </Form>
      </Modal>
    )
  }


  return (
    <div className="container-fluid">
      <AddressForm/>
      <Button onClick={toggleFormVisibility}>Add New Address</Button>
      <Card
        style={{ width: "100%", marginTop:"1rem" }}
        actions={[<h6>Edit</h6>, <h6>Delete</h6>]}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: ".5rem 0",
          }}
        >
          <span>Bryan</span>
          <span>Home</span>
        </div>
        <p style={{ padding: "0", margin: "0" }}>
          40 2nd cross Harihara layout dodabetahalli village, vidyaranyapura
          post Bengaluru Vidyaranyapura. Param param public school
        </p>
        <p style={{ padding: "0", margin: "0" }}>Bangalore - 560096</p>
        <p style={{ padding: "0", margin: "0" }}>Karnataka</p>
        <p>Mobile - 9045342111</p>
      </Card>
    </div>
  );
}

export default AddressComponent;
