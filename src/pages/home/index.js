import { Button, Carousel, Col, Row, Input } from 'antd'
import React from 'react'
import { hbImage1, hbImage2, hbImage3, hbImage4, hpCard1, hpCard2, hp1, hp2, hp3, hp4 } from '../../assets'

export default function Home() {
  return (
    <div>
      <Carousel style={{paddingBottom: '79px'}} autoplay afterChange={()=>{}}>
        <div style={{height: '50vh', overflowY: 'hidden'}} >
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage1} alt="i1" />
        </div>
        <div style={{height: '50vh', overflowY: 'hidden'}} >
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage2} alt="i1" />
        </div>
        <div style={{height: '50vh', overflowY: 'hidden'}} >
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage3} alt="i1" />
        </div> 
        <div style={{height: '50vh', overflowY: 'hidden'}} >
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage4} alt="i1" />
        </div> 
      </Carousel>

      <Row style={{paddingBottom: '52px'}}>
        <Col xs={{span: 0}} md={{span: 11}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px'}}>Awaken your soul</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}>
          Welcome to my world, Humans living in this modern age are disconnected from the cosmic language.Disconnected from nature. Disconnected from our bodies. I practice what I teach. I provide a safe space for getting back in connection. Connecting back to planetary influences, natures cycles and our human cycles.
          <br/>
          <br/>
          Yoga is a journey home. The practice awakens our souls so that we can feel connected and open to all that is. It guides us to listen to our body and respond in a way that supports and nourishes, allowing us to heal and restore from deep within. It teaches us to witness the movements of our mind so that we can break free from negative habit patterns, renew our perspective and bring greater balance to our state of being.
          </p>
        </Col>
        <Col xs={{span: 24}} md={{span: 0}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '34px'}}>Awaken your soul</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '15px'}}>
          <img align="right" src={hp1} style={{width: '65%', marginLeft: '10px', marginTop: '8px'}}  alt="..." />
          Welcome to my world, Humans living in this modern age are disconnected from the cosmic language.Disconnected from nature. Disconnected from our bodies. I practice what I teach. I provide a safe space for getting back in connection. Connecting back to planetary influences, natures cycles and our human cycles.
          <br/>
          <br/>
          Yoga is a journey home. The practice awakens our souls so that we can feel connected and open to all that is. It guides us to listen to our body and respond in a way that supports and nourishes, allowing us to heal and restore from deep within. It teaches us to witness the movements of our mind so that we can break free from negative habit patterns, renew our perspective and bring greater balance to our state of being.
          </p>
        </Col>
        <Col xs={{span: 0}} md={{span: 2}}></Col>
        <Col xs={{span: 0}} md={{span: 11}} align="right">
          <img src={hp1} style={{width: '95%'}} alt="..." />
        </Col>
      </Row>

      <Row style={{paddingBottom: '52px'}}>
        <Col xs={{span: 0}} md={{span: 11}} align="left" style={{paddingBottom: '52px'}}>
          <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '100px 0px', fontFamily: 'raleway', width: '95%'}}>
            <img src={hpCard1} alt="..." />
            <br/>
            <br/>
            <h1> <b>Classes</b> </h1>
            A great place for sangha. <br/> Online & in person classes.
          </div>
        </Col>
        <Col xs={{span: 0}} md={{span: 2}}></Col>
        <Col xs={{span: 0}} md={{span: 11}} align="right">
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '82px 0px', fontFamily: 'raleway', width: '95%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Retreat</b> </h1>
            Retreats a healing space for reset, <br/>
            reconnection & clarity. Taking you a <br/>
            little deeper mind, body soul.
          </div>
        </Col>

        {/* xs */}
        <Col xs={{span: 24}} md={{span: 0}} align="left" style={{paddingBottom: '40px'}}>
          <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '50px 0px', fontFamily: 'raleway', width: '100%'}}>
            <img src={hpCard1} alt="..." />
            <br/>
            <br/>
            <h1> <b>Classes</b> </h1>
            A great place for sangha. <br/> Online & in person classes.
          </div>
        </Col>
        <Col xs={{span: 24}} md={{span: 0}} align="right">
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '40px 0px', fontFamily: 'raleway', width: '100%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Retreat</b> </h1>
            Retreats a healing space for reset, <br/>
            reconnection & clarity. Taking you a <br/>
            little deeper mind, body soul.
          </div>
        </Col>
      </Row>

      <Row style={{marginBottom: '50px'}}>
        <Col span={24}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px'}}>About Sadhana</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}> 
            “Through Yogic sadhana we can experience the subtle energy, called prana or kundalini, which underlies all matter.<br/> 
            This experience is a transformative one, which makes the subtle more tangible & real than the so called material, solid physical universe.
          </p>
          <br/>
          <img src={hp2} alt="..." style={{width: '100%'}} />
          <br/>
          <br/>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}> 
          Sadhana shifts our perspective, broadens our awareness and awakens our consciousness our higher & greater self. It awakens us to the fact that within us all is an immortal & eternal essence. full of knowledge bliss & truth”
          <b><i> Kundalini Tantra - Swami Satyananda Saraswati</i></b>
          </p>
        </Col>
      </Row>

      <Row style={{margin: '0px -110px', marginBottom: '50px'}} className="onlyDesktop">
        <Col xs={{span: 0}} md={{span: 12}}>
          <img src={hp3} style={{width: '100%'}} alt="..." />
        </Col>
        <Col xs={{span: 0}} md={{span: 12}} style={{backgroundColor: '#EFF2EF', padding: '74px'}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px'}}>About me</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}> 
          As a child I was fascinated by magic, mythical stories, fairies, astrology & amp; the moon cycles.
          <br/> 
          <br/> 
          I have always had a very strong belief that there is so much more to life than what is right in front of our eyes.
          <br/> 
          <br/> 
          The healing path has always been part of my journey. My first career was nursing. I spent 15 years asa nurse working in various hospitals in the south of England and London. I volunteered and travelled with my nursing.
          <br/> 
          <br/> 
          <Button type="link" style={{padding: '0px'}}>Read More</Button>
          </p>
        </Col>
      </Row>

      <Row>
        {/* xs */}
        <Col xs={{span: 24}} md={{span: 0}} style={{marginBottom: '50px'}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px'}}>About me</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '15px'}}> 
           <img src={hp3} style={{width: '70%', marginRight: '10px', marginTop: '5px', borderRadius: '6px'}} alt="..." align="right" />
           
            As a child I was fascinated by magic, mythical stories, fairies, astrology & amp; the moon cycles.
            <br/> 
            <br/> 
            I have always had a very strong belief that there is so much more to life than what is right in front of our eyes.
            <br/> 
            <br/> 
            The healing path has always been part of my journey. My first career was nursing. I spent 15 years asa nurse working in various hospitals in the south of England and London. I volunteered and travelled with my nursing.
            <br/> 
            <br/> 
            <Button type="link" style={{padding: '0px'}}>Read More</Button>
          </p>
        </Col>
      </Row>

      <Row style={{marginBottom: '100px', marginTop: '0px'}}>
        <Col span={24}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px'}}>My Values</h1>
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Compassion</span> 
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Connection</span> 
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Nature</span> 
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Connection</span> 
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Connection</span> 
            <span style={{width: '300px', display: 'inline-block', margin: 'auto'}}>Connection</span> 
          </div>
        </Col>
      </Row>

      <Row style={{backgroundColor: '#EFF2EF', paddingTop: '50px', margin: '0px -110px'}} className="onlyDesktop">
        <Col xs={{span: 0}} md={{span: 9}} align="center">
        <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px'}}>Get in touch</h1>
        <img src={hp4} alt="..." style={{width: '80%'}} />
        </Col>
        <Col xs={{span: 0}} md={{span: 15}} style={{padding: '80px 40px'}} align="center">
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
      {/* xs */}
      <Row style={{backgroundColor: '#EFF2EF', padding: '20px', margin: '0px -30px', display: 'none'}} className="onlyMobile">
        <Col xs={{span: 24}} md={{span: 0}} align="center">
        <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px'}}>Get in touch</h1>
        <img src={hp4} alt="..." style={{width: '90%'}} />
        </Col>
        <Col xs={{span: 24}} md={{span: 0}} style={{padding: '80px 40px'}} align="center">
          <Input placeholder="Name" style={{padding: '10px 20px', borderRadius: '7px', color: 'black'}} />
          <br/>
          <br/>
          <Input placeholder="Contact" style={{padding: '10px 20px', borderRadius: '7px', color: 'black'}} />
          <br/>
          <br/>
          <Input.TextArea rows="5" placeholder="Your Message" style={{padding: '10px 20px', borderRadius: '7px', color: 'black'}} />
          <br/>
          <br/>
          <br/>
          <Button type="primary" style={{backgroundColor: 'teal', borderRadius: '8px', padding: '0px 40px', fontFamily: 'raleway'}}><b>Send</b></Button>
        </Col>
      </Row>

    </div>
  )
}
