import React from 'react';
import { Button, Card, Divider, Input, Space, Form, Col, Row, DatePicker, Select } from 'antd'
import moment from 'moment';

const { Option } = Select;

function ProfileComponent() {
    const [profileComponent,setProfileComponent] = React.useState(1);

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


    return (
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
            {profileComponent === 1 && <Card style={{width:"100%"}}>
                <h6>Profile Details</h6>
                <Divider/>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Full Name</span>
                    <span >Bryan Gills</span>
                </div>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Mobile Number</span>
                    <span >8745231109</span>
                </div>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Email ID</span>
                    <span >Bryangills@gmail.com</span>
                </div>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Gender</span>
                    <span >MALE</span>
                </div>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Date Of Birth</span>
                    <span >23/09/1995</span>
                </div>
                <div style={{width:"100%", display:"flex", margin:".5rem 0"}}>
                    <span style={{width:"30%"}}>Location</span>
                    <span >Bangalore,Karnataka</span>
                </div>
                <Button className="mt-2" onClick={()=>setProfileComponent(2)}>Edit Profile</Button>
            </Card>}
            {
                profileComponent === 2 && <Card style={{width:"60%"}}>
                     <Form
     layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={(v)=>console.log(v)}
      autoComplete="off"
    >
        <Row gutter={10}>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Firstname"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
        <Input placeholder="Enter firstname"/>
      </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Lastname"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <Input placeholder="Enter lastname"/>
      </Form.Item>
            </Col>
        </Row>


        <Row gutter={10}>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Gender"
        name="gender"
        
      >
        <Select
            placeholder="Select gender"
            allowClear
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
      </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
            <Form.Item
        label="Date of birth"
        name="dob"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} style={{width:"100%"}} />
      </Form.Item>
            </Col>
        </Row>

     
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
        <Input.TextArea rows={4} placeholder="Enter your location" />
      </Form.Item>        
      


      <Form.Item
      >
        <Space><Button type="primary" htmlType="submit">
          Save Profile
        </Button>
        <Button type="ghost" onClick={()=>setProfileComponent(1)}>
          Cancel
        </Button>
        </Space>
      </Form.Item>
    </Form>
                    </Card>
            }
        </div>
    )
}

export default ProfileComponent
