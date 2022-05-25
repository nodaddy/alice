import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { insta, contactHero, fb } from '../../assets'
import {
    MailOutlined, PhoneOutlined, HomeOutlined
  } from '@ant-design/icons';

export default function Contact
() {
  return (
    <div>
        <Row style={{marginBottom: '50px'}}>
            <Col span={24}>
                <img style={{width: '100%'}} src={contactHero} alt="loading ..." />
            </Col>
        </Row>

        <Row style={{backgroundColor: '#EFF2EF', padding: '50px 0px', borderRadius: '10px'}}>
        <Col xs={{span: 24}} md={{span: 9}} align="center">
        <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '40px', width: '85%'}} className="onlyDesktop">Contact Info.</h1>
        <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '30px', width: '85%', display: 'none'}} className="onlyMobile">Contact Info.</h1>
        <h3 align="left" style={{fontFamily: 'raleway', width: '85%'}}>
            <MailOutlined /> &nbsp; alicebanting@gmail.com 
            <br/><br/>
            <PhoneOutlined /> &nbsp; 9634328061
            <br/><br/>
            <HomeOutlined /> &nbsp; 4b Luit view<br/>
            Bhupen Hazarika road Kharghuli,<br/>
            Guwahati,<br/>
            781004<br/>
            Assam India
        </h3>
        <br/>
        </Col>
        <Col xs={{span: 24}} md={{span: 15}} style={{padding: '0px 0px'}} align="center">
        <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '40px', width: '85%'}} className="onlyDesktop">Get in touch</h1>
        <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '30px', width: '85%', display: 'none'}} className="onlyMobile">Get in touch</h1>

          <Input placeholder="Name" style={{padding: '10px 20px', borderRadius: '7px', color: 'black', width: '85%'}} />
          <br/>
          <br/>
          <Input placeholder="Contact" style={{padding: '10px 20px', borderRadius: '7px', color: 'black', width: '85%'}} />
          <br/>
          <br/>
          <Input.TextArea rows="5" placeholder="Your Message" style={{padding: '10px 20px', borderRadius: '7px', color: 'black', width: '85%'}} />
          <br/>
          <br/>
          <br/>
          <Button type="primary" style={{backgroundColor: 'teal', borderRadius: '5px', padding: '0px 40px', fontFamily: 'raleway'}}><b>Send</b></Button>
        </Col>
      </Row>
      
    <Row style={{margin: '60px 0px'}}>
        <Col span={24}>
            <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '40px', width: '85%'}} className="onlyDesktop">Connect with me on social media</h1>
            <h1 align="left" style={{fontFamily: 'Playfair Display', fontSize: '30px', width: '85%', display: 'none'}} className="onlyMobile">Connect with me on social media</h1>
        </Col>
        <br/>
        <br/>
        <Col span={12}>
            <img align="left" style={{width: '90%', borderRadius: '10px'}} src={fb} alt="loading ..." />
        </Col>
        <Col span={12}>
            <img align="right" style={{width: '90%', borderRadius: '10px'}} src={insta} alt="loading ..." />
        </Col>
    </Row>
    </div>
  )
}
