import { RightCircleOutlined } from '@ant-design/icons'
import { Button, Carousel, Col, Row } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { aboutHero, image11, image9Classes, hpCard1, hpCard2, cornerFlower } from '../../assets'

export default function Classes() {
  return (
    <div>
        <Row style={{marginBottom: '50px'}}>
            <Col span={24}>
                <img style={{width: '100%'}} src={aboutHero} alt="loading ..." />
            </Col>
        </Row>


        <Row>
            <Col xs={{span :0}} md={{span :24}} style={{marginBottom: '50px'}}>
                <p>
                <img align="left" style={{width: '40%', marginRight: '40px', marginTop: '16px'}} src={image9Classes} alt="loading ..." />
                <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px', display: 'inline-block'}}>About the classes</h1><br/>
                <span style={{fontFamily: 'Raleway', fontSize: '16px'}}>
                Yoga is a journey home. The practice awakens our souls so that we can feel connected and open to all that is.
                <br/>
                <br/>
                It guides us to listen to our body and respond in a way that supports and nourishes, allowing us to heal and restore from deep within. It teaches us to witness the movements of our mind so that we can break free from negative habit patterns, renew our perspective and bring greater balance to our state of being.
                </span>
                </p>
            </Col>

            <Col xs={{span :24}} md={{span :0}} style={{marginBottom: '30px'}}>
                
                <h1 style={{fontFamily: 'Playfair Display', fontSize: '30px', display: 'inline-block'}}>About the classes</h1><br/>
                <p>
                <span style={{fontFamily: 'Raleway', fontSize: '15px'}}>
                <img align="left" style={{width: '60%', margin: '5px 10px 7px 0px'}} src={image9Classes} alt="loading ..." />
                Yoga is a journey home. The practice awakens our souls so that we can feel connected and open to all that is.
                <br/>
                <br/>
                It guides us to listen to our body and respond in a way that supports and nourishes, allowing us to heal and restore from deep within. It teaches us to witness the movements of our mind so that we can break free from negative habit patterns, renew our perspective and bring greater balance to our state of being.
                </span>
                </p>
            </Col>
        </Row>

        <Row>
            <Col xs={{span: 0}} md={{span: 24}}>
                <ul style={{fontFamily: 'raleway', fontSize: '16px', paddingLeft: '20px'}}>
                    <li>Classes vary with ashtanga influenced vinyasa flow asana to stretch, warm and ground and land in our bodies.</li>
                   
                    <li>Breathwork is always part of class. The breath is the bridge between mind & body.</li>
                   
                    <li>Mantra & sacred hand gestures (mudra’s) are tools to expect to be used in class.</li>
                    
                    <li>Relevant Yogic & Tantric philosophy and practices are weaved into all classes.</li>
                    
                    <li>Rest assured all the classes will always finish with a sweet nurturing meditative flow with long holds & a deep revitalizing savasana.</li>
                </ul>
            </Col>

            <Col xs={{span: 24}} md={{span: 0}}>
                <ul style={{fontFamily: 'raleway', fontSize: '15px', paddingLeft: '20px'}}>
                    <li>Classes vary with ashtanga influenced vinyasa flow asana to stretch, warm and ground and land in our bodies.</li>
                    <br/>
                    <li>Breathwork is always part of class. The breath is the bridge between mind & body.</li>
                    <br/>
                    <li>Mantra & sacred hand gestures (mudra’s) are tools to expect to be used in class.</li>
                    <br/>
                    <li>Relevant Yogic & Tantric philosophy and practices are weaved into all classes.</li>
                    <br/>
                    <li>Rest assured all the classes will always finish with a sweet nurturing meditative flow with long holds & a deep revitalizing savasana.</li>
                </ul>
            </Col>
        </Row>

        <br/>
        <br/>

      <Row style={{paddingBottom: '40px'}}>
        <Col xs={{span: 0}} md={{span: 8}} align="left">
          <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '100px 20px', fontFamily: 'raleway', width: '95%', height: '100%'}}>
            <img src={hpCard1} alt="..." />
            <br/>
            <br/>
            <h1> <b>Group Classes</b> </h1>
            Practicing yoga together as a collective is a special and healing experience providing motivation, synergy and a chance to connect with like, minded people. 
            <br/>
            <br/>
            The classes are a flowing practice aligning with your breath to heat your body stretch and relieve stress and tension. In class, we will break down yoga concepts & theories using the physical asana’s so we really embody the rich yogic teaching and experience it in our bodies. Breath work and pranayama will feature in all classes. All classes are 1- 1.5hrs. The theme and focus will vary from class to class.
          </div>
        </Col> 
        <Col xs={{span: 0}} md={{span: 8}} align="center">
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '82px 20px', fontFamily: 'raleway', width: '95%', height: '100%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Individual Classes</b> </h1>
            Group classes & sangha are powerful healing modalities.What works for you is not necessarily going to work for the next person. Sometimes going a little deeper is required. When you are new to yoga, these sessions are a great gateway to group classes and getting your alignment right from the beginning. The sessions are designed especially for you. We have time to look at your personal astrological influences & transits. These sessions are a loving space for you to reconnect to your breath & body as a sacred ritual bringing more awareness, intuition, trust and coherence to your life.
          </div>
        </Col>
        <Col xs={{span: 0}} md={{span: 8}} align="right">
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '82px 20px', fontFamily: 'raleway', width: '95%', height: '100%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Online Classes</b> </h1>
            Regular online group yoga classes are excellent for the people who are willing to keep up their physical wellbeing and mental health. Sometimes life gets busy and rushing to get to class on time can be get stressful.Getting to a physical class isn’t always possible. Practicing online we still can plug into the magic of centring breathing and moving in community.Location is not a constraint. You get to practice wherever you are in the world and from the comfort of your own home.
          </div>
        </Col>

        {/* xs */}
        <Col xs={{span: 24}} md={{span: 0}} align="center" style={{paddingBottom: '40px'}}>
          <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '100px 20px', fontFamily: 'raleway', width: '95%'}}>
            <img src={hpCard1} alt="..." />
            <br/>
            <br/>
            <h1> <b>Group Classes</b> </h1>
            Practicing yoga together as a collective is a special and healing experience providing motivation, synergy and a chance to connect with like, minded people. 
            <br/>
            <br/>
            The classes are a flowing practice aligning with your breath to heat your body stretch and relieve stress and tension. In class, we will break down yoga concepts & theories using the physical asana’s so we really embody the rich yogic teaching and experience it in our bodies. Breath work and pranayama will feature in all classes. All classes are 1- 1.5hrs. The theme and focus will vary from class to class.
          </div>
        </Col> 
        <Col xs={{span: 24}} md={{span: 0}} align="center" style={{paddingBottom: '40px'}}>
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '82px 20px', fontFamily: 'raleway', width: '95%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Individual Classes</b> </h1>
            Group classes & sangha are powerful healing modalities.What works for you is not necessarily going to work for the next person. Sometimes going a little deeper is required. When you are new to yoga, these sessions are a great gateway to group classes and getting your alignment right from the beginning. The sessions are designed especially for you. We have time to look at your personal astrological influences & transits. These sessions are a loving space for you to reconnect to your breath & body as a sacred ritual bringing more awareness, intuition, trust and coherence to your life.
          </div>
        </Col>
        <Col xs={{span: 24}} md={{span: 0}} align="center" style={{paddingBottom: '20px'}}>
        <div align="center" style={{backgroundColor: '#EFF2EF', borderRadius: '14px', padding: '82px 20px', fontFamily: 'raleway', width: '95%'}}>
            <img src={hpCard2} alt="..." />
            <br/>
            <br/>
            <h1> <b>Online Classes</b> </h1>
            Regular online group yoga classes are excellent for the people who are willing to keep up their physical wellbeing and mental health. Sometimes life gets busy and rushing to get to class on time can be get stressful.Getting to a physical class isn’t always possible. Practicing online we still can plug into the magic of centring breathing and moving in community.Location is not a constraint. You get to practice wherever you are in the world and from the comfort of your own home.
          </div>
        </Col>
        <Col span={24} align="center">
            <br/>
          <Button type="primary" style={{marginBottom: '40px', backgroundColor: 'teal', borderRadius: '9px', padding: '0px 40px', fontFamily: 'raleway'}}><b>Book Classes</b></Button>
        </Col>
      </Row>

      <Row>
          <Col md={{span:24}} xs={{span:0}} style={{backgroundColor: '#EFF2EF', background: `url(${cornerFlower})`, backgroundRepeat: 'no-repeat', backgroundSize: '20%', marginBottom: '0px', marginLeft: '-110px', marginRight: '-110px', padding: '0px 110px'}}>
              <br/>
              <br/>
            <h1 style={{fontFamily: 'playfair display', fontSize: '35px'}}>What they have to say</h1>
            <br/>
          <Carousel autoplaySpeed={1700} dots="true" style={{width: '100%',border: '0px solid white',paddingBottom: '20px', marginBottom: '40px',}} autoplay afterChange={()=>{}}>
            <div style={{fontFamily: 'raleway'}} >
            <i style={{fontSize: '19px', fontWeight: '200'}}>
                Doing Alice’s class is so therapeutic. She just doesn’t teach you yoga..asanas/pranayamas. It feels as if she works with your mind and of course the body follow. Her words and sentences keeps ringing in your head while you are at it…sometimes even later on. To get a teacher like her is so profound..so immense. I feel it’s a blessing and I am greatly privileged that I have her in my life.” 
            </i>
            <br/>
            <br/>
            <i style={{fontSize: '19px', fontWeight: '500'}}>Sangeeta Agarwal- Guwahati, India</i>
            </div>
            <div style={{}} > 
            2
            </div>
            <div style={{}} > 
            3
            </div> 
            <div style={{}} > 
            4
            </div> 
      </Carousel>
          </Col>

          <Col md={{span:0}} xs={{span:24}} style={{backgroundColor: '#EFF2EF', background: `url(${cornerFlower})`, backgroundRepeat: 'no-repeat', backgroundSize: '80%', marginLeft: '-25px', marginRight: '-25px', paddingLeft: '25px'}}>
              <br/>
              <br/>
            <h1 style={{fontFamily: 'playfair display', fontSize: '30px'}}>What they have to say</h1>
            <br/>
          <Carousel autoplaySpeed={4000
          } dots="true" style={{width: '100%', paddingBottom: '20px', marginBottom: '40px',}} autoplay afterChange={()=>{}}>
            <div style={{fontFamily: 'raleway'}} >
            <i style={{fontSize: '17px', fontWeight: '200'}}>
                Doing Alice’s class is so therapeutic. She just doesn’t teach you yoga..asanas/pranayamas. It feels as if she works with your mind and of course the body follow. Her words and sentences keeps ringing in your head while you are at it…sometimes even later on. To get a teacher like her is so profound..so immense. I feel it’s a blessing and I am greatly privileged that I have her in my life.” 
            </i>
            <br/>
            <br/>
            <i style={{fontSize: '19px', fontWeight: '500'}}>Sangeeta Agarwal- Guwahati, India</i>
            </div>
            <div style={{}} > 
            2
            </div>
            <div style={{}} > 
            3
            </div> 
            <div style={{}} > 
            4
            </div> 
      </Carousel>
          </Col>
      </Row>

      <Row style={{marginBottom: '50px', marginTop: '0px'}}>
        <Col span={24}>
            <h3 align='right'>Scroll <RightCircleOutlined /></h3>
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." />
          <img style={{width: '500px', marginRight: '50px'}} src={aboutHero} alt="..." /> 
          </div>
        </Col>
      </Row>
    </div>
  )
}
