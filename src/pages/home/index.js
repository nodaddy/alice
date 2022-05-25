import { Button, Carousel, Col, Row, Input } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { hbImage1, hbImage2, hbImage3, hbImage4, hpCard1, hpCard2, hp1, hp2, hp3, hp4, compassion, connection, Nature, Sangha, Movement } from '../../assets'

export default function Home() {
  return (
    <div>
      <Row>
        <Col xs={{span: 0}} md={{span: 24}}>
          <div style={{fontSize: '63px', fontFamily: 'Playfair Display', color: 'white', transform: 'translate(100px, 110px)', position: 'absolute', zIndex: '99'}}>Rejuvenate your <br/> Mind & Body
          <br />
          <div style={{fontFamily: 'Raleway', fontSize: '18px'}}>Yoga is the means of revealing the infinitely radiant light of the <br/> divine soul” <i style={{fontWeight: '600'}}>Siddhanta Tanta</i></div>
          {/* <Button type="primary" style={{backgroundColor: '#007991', borderRadius: '5px', padding: '0px 40px', fontFamily: 'raleway', border: '1px solid #007991'}}><b>Join Classes</b></Button> */}
          </div>
        </Col>
      </Row>

      <Carousel style={{paddingBottom: '79px'}} autoplay speed={1000} afterChange={()=>{}}>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage1} alt="i1" />
        </div>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage2} alt="i1" />
        </div>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage3} alt="i1" />
        </div> 
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={hbImage4} alt="i1" />
        </div> 
      </Carousel>

      <Row style={{paddingBottom: '52px'}}>
        <Col xs={{span: 0}} md={{span: 11}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px'}}>Connect to ancient wisdom</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}>
          Welcome to my world, Humans living in this modern age are disconnected from the cosmic language.Disconnected from nature. Disconnected from our bodies. I practice what I teach. I provide a safe space for getting back in connection. Connecting back to planetary influences, natures cycles and our human cycles.
          <br/>
          <br/>
          The mind body link is very potent.When we change the state of our body, we will change the state of the mind.The magnificent machine which is our body is our most powerful divination tool.When we use yogic/tantric practices to connect mind, body & breath. We tap into the ancient wisdom that we all hold in our cells. This wisdom is handed down from our ancestors in the blueprint of our DNA.This wisdom guides us to listen deeply to the language of our soul, our intuition & our hearts greatest desires.
          </p>
        </Col>
        <Col xs={{span: 24}} md={{span: 0}}>
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '34px'}}>Connect to ancient wisdom</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '15px'}}>
          <img align="right" src={hp1} style={{width: '65%', marginLeft: '10px', marginTop: '8px'}}  alt="..." />
          Welcome to my world, Humans living in this modern age are disconnected from the cosmic language.Disconnected from nature. Disconnected from our bodies. I practice what I teach. I provide a safe space for getting back in connection. Connecting back to planetary influences, natures cycles and our human cycles.
          <br/>
          <br/>
          The mind body link is very potent.When we change the state of our body, we will change the state of the mind.The magnificent machine which is our body is our most powerful divination tool.When we use yogic/tantric practices to connect mind, body & breath. We tap into the ancient wisdom that we all hold in our cells. This wisdom is handed down from our ancestors in the blueprint of our DNA.This wisdom guides us to listen deeply to the language of our soul, our intuition & our hearts greatest desires.
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
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px'}}>Sadhana</h1>
          <p style={{fontFamily: 'Raleway', fontSize: '16px'}}> 
          Sadhana is a sanskrit term used to describe a daily disciplined practice & commitment to learning.
          <br/><br/> It is a surrendering of the ego with the intention of spiritual grow“Through Yogic sadhana we can experience the subtle energy, called prana or kundalini, which underlies all matter.This experience is a transformative one, which makes the subtle more tangible & real than the so called material, solid physical universe.
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
          <NavLink to='/about'><Button type="link" style={{padding: '0px', fontWeight: '700'}} onClick={()=>window.scrollTo(0, 0)}>Read More</Button></NavLink>
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
          <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px'}}>My Values</h1><br/>
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap', fontFamily: 'Raleway'}} align="left">
            <span style={{ display: 'inline-block', marginRight: '120px', fontWeight: '600'}} align="center"><img src={compassion} alt="_compassion" style={{width: '80%'}} /> <br/><br/> Compassion</span> 
            <span style={{ display: 'inline-block', marginRight: '120px', fontWeight: '600'}} align="center"><img src={connection} alt="_compassion" style={{width: '80%'}} /> <br/><br/> Connection</span> 
            <span style={{ display: 'inline-block', marginRight: '120px', fontWeight: '600'}} align="center"><img src={Nature} alt="_compassion" style={{width: '80%'}} /> <br/><br/> Nature</span> 
            <span style={{ display: 'inline-block', marginRight: '120px', fontWeight: '600'}} align="center"><img src={Sangha} alt="_compassion" style={{width: '80%'}} /> <br/><br/> Sangha</span>
            <span style={{ display: 'inline-block', marginRight: '120px', fontWeight: '600'}} align="center"><img src={Movement} alt="_compassion" style={{width: '80%'}} /> <br/><br/> Movement</span>
          </div>
        </Col>
      </Row>

      <Row style={{backgroundColor: '#EFF2EF', paddingTop: '50px', margin: '0px -110px'}} className="onlyDesktop">
        <Col xs={{span: 0}} md={{span: 9}} align="center">
        <h1 style={{fontFamily: 'Playfair Display', fontSize: '35px', width: '80%'}} align="left">Get in touch</h1>
        <img src={hp4} alt="..." style={{width: '80%'}} />
        </Col>
        <Col xs={{span: 0}} md={{span: 15}} style={{padding: '80px 40px'}} align="center">
          <Input placeholder="Name" style={{padding: '17px 20px', borderRadius: '7px', color: 'black', width: '75%'}} />
          <br/>
          <br/>
          <Input placeholder="Contact" style={{padding: '17px 20px', borderRadius: '7px', color: 'black', width: '75%'}} />
          <br/>
          <br/>
          <Input.TextArea rows="5" placeholder="Your Message" style={{padding: '17px 20px', borderRadius: '7px', color: 'black', width: '75%'}} />
          <br/>
          <br/>
          <br/>
          <Button type="primary" style={{backgroundColor: '#007991', borderRadius: '4px', padding: '0px 40px', fontFamily: 'raleway'}}><b>Send</b></Button>
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
          <Button type="primary" style={{backgroundColor: '#007991', borderRadius: '8px', padding: '0px 40px', fontFamily: 'raleway'}}><b>Send</b></Button>
        </Col>
      </Row>

    </div>
  )
}
