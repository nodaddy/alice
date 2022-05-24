
import { Carousel, Col, Row } from 'antd' 
import React from 'react'
import { cornerFlower, aboutRetreat, hbImage1, hbImage2, hbImage3, hbImage4, retreatgoa, retreatHero, RC1, RC2, RC3, RC4 } from '../../assets'

export default function Retreat() {
  return (
    <div>
        <Row style={{marginBottom: '50px'}}>
            <Col span={24} align="center">
                <img style={{width: '100%'}} src={retreatHero} alt="loading ..." />
            </Col>
        </Row>


        <Row>
            <Col xs={{span :0}} md={{span :24}} style={{marginBottom: '50px'}}>
                <p>
                <img align="left" style={{width: '40%', marginRight: '40px', marginTop: '16px'}} src={aboutRetreat} alt="loading ..." />
                <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px', display: 'inline-block'}}>About yoga retreats</h1><br/>
                <span style={{fontFamily: 'Raleway', fontSize: '16px'}}>
                What better place to begin or deepen your yoga practice then the ‘Wild North East of India’. Weoffer 5- 10 day bespoke yoga retreats in the divinely beautiful and unspoilt North East India. Be a trail blazer and come and practice yoga in the blissfully untouched north east of India. We offer diverse and different places to practice yoga and visit. Come to the mystical world of powerful ancient goddesses’ temples, tea plantations, colonial bungalows, tribal villages and stunning lakes, rivers, waterfalls & national parks. Here you will experience the delight of seeing rare endangered animals and wild life in their natural habitat.
                </span>
                </p>
            </Col>

            <Col xs={{span :24}} md={{span :0}} style={{marginBottom: '30px'}}>
                
                <h1 style={{fontFamily: 'Playfair Display', fontSize: '30px', display: 'inline-block'}}>About yoga retreats</h1><br/>
                <p>
                <span style={{fontFamily: 'Raleway', fontSize: '15px'}}>
                <img align="left" style={{width: '60%', margin: '5px 10px 7px 0px'}} src={aboutRetreat} alt="loading ..." />
                What better place to begin or deepen your yoga practice then the ‘Wild North East of India’. Weoffer 5- 10 day bespoke yoga retreats in the divinely beautiful and unspoilt North East India. Be a trail blazer and come and practice yoga in the blissfully untouched north east of India. We offer diverse and different places to practice yoga and visit. Come to the mystical world of powerful ancient goddesses’ temples, tea plantations, colonial bungalows, tribal villages and stunning lakes, rivers, waterfalls & national parks. Here you will experience the delight of seeing rare endangered animals and wild life in their natural habitat.
                </span>
                </p>
            </Col>
        </Row>

        <Row style={{marginBottom: '40px'}}>
            <Col xs={{span: 0}} md={{span: 24}} style={{fontFamily: 'Raleway', fontSize: '16px'}}>
            Our aim is to create a supportive relaxing environment where you can take time out from the digital world and explore the wild nature, reconnect with your centre and body using yoga asana, mudra,pranayama and meditation. Our retreats are a wonderful opportunity to press pause, breathe and gain a fresh new perspective. We want to provide you with a safe space to step back and revaluate your life and expand your horizons.
            </Col>
            <Col xs={{span: 24}} md={{span: 0}} style={{fontFamily: 'Raleway', fontSize: '15px'}}>
            Our aim is to create a supportive relaxing environment where you can take time out from the digital world and explore the wild nature, reconnect with your centre and body using yoga asana, mudra,pranayama and meditation. Our retreats are a wonderful opportunity to press pause, breathe and gain a fresh new perspective. We want to provide you with a safe space to step back and revaluate your life and expand your horizons.
            </Col>
        </Row>

        <Carousel speed={1000} autoplay dots dotPosition='bottom' afterChange={()=>{}}>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={RC1} alt="i1" />
        </div>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={RC2} alt="i1" />
        </div>
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={RC3} alt="i1" />
        </div> 
        <div>
          <img style={{width:'100%', borderRadius: '15px'}} src={RC4} alt="i1" />
        </div> 
      </Carousel>

        <br/>

      <Row>
          <Col md={{span:24}} xs={{span:0}} style={{backgroundColor: '#EFF2EF', background: `url(${cornerFlower})`, backgroundRepeat: 'no-repeat', backgroundSize: '20%', marginBottom: '0px', marginLeft: '-110px', marginRight: '-110px', padding: '0px 110px'}}>
              <br/>
              <br/>
            <h1 style={{fontFamily: 'playfair display', fontSize: '35px'}}>What retreats look like</h1>
            <br/>
            <Col xs={{span: 0}} md={{span: 24}}>
                <ul style={{fontFamily: 'raleway', fontSize: '16px', paddingLeft: '20px'}}>
                    <li>Daily early morning meditation</li>
                   
                    <li>Morning mixed level yoga classes which are always themed and lovingly planned. Beginners will be supported and Intermediates will be challenged.</li>
                   
                    <li>Mantra & sacred hand gestures (mudra’s) are tools to expect to be used in class.</li>
                    
                    <li>Evening Yin/Restorative Classes</li>
                    
                    <li>The classes will be a mixture of vinyasa Flow, restorative, pranayama, sacred movement, chanting and meditation pick and choose do as many or as little as you require</li>
                    
                    <li>Daily brunch and evening meals</li>

                    <li>Massages and yoga 1:1 at reasonable prices</li>

                    <li>Cultural trips out</li>

                    <li>We want to look after you so we operate a very relaxed environment where you don’t have to worry about a thing.</li>
                </ul>
            </Col>

          </Col>

          <Col md={{span:0}} xs={{span:24}} style={{backgroundColor: '#EFF2EF', background: `url(${cornerFlower})`, backgroundRepeat: 'no-repeat', backgroundSize: '80%', marginLeft: '-25px', marginRight: '-25px', paddingLeft: '25px'}}>
              <br/>
              <br/>
            <h1 style={{fontFamily: 'playfair display', fontSize: '30px'}}>What retreats look like</h1>
            <br/> 
            <ul style={{fontFamily: 'raleway', fontSize: '16px', paddingLeft: '20px'}}>
                    <li>Daily early morning meditation</li>
                   
                    <li>Morning mixed level yoga classes which are always themed and lovingly planned. Beginners will be supported and Intermediates will be challenged.</li>
                   
                    <li>Mantra & sacred hand gestures (mudra’s) are tools to expect to be used in class.</li>
                    
                    <li>Evening Yin/Restorative Classes</li>
                    
                    <li>The classes will be a mixture of vinyasa Flow, restorative, pranayama, sacred movement, chanting and meditation pick and choose do as many or as little as you require</li>
                    
                    <li>Daily brunch and evening meals</li>

                    <li>Massages and yoga 1:1 at reasonable prices</li>

                    <li>Cultural trips out</li>

                    <li>We want to look after you so we operate a very relaxed environment where you don’t have to worry about a thing.</li>
                </ul>
          </Col>
      </Row>
      
      <br/>

      <Row>
        <Col xs={{span: 0}} md={{span: 24}}>
            <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px', display: 'inline-block'}}>Coming Soon</h1><br/>  
        </Col>
        <Col xs={{span: 24}} md={{span: 0}}>
            <h1 style={{fontFamily: 'Playfair Display', fontSize: '30px', display: 'inline-block'}}>Coming Soon</h1><br/>  
        </Col>
      </Row>

      <Row style={{marginBottom: '60px'}}>
          <Col span={24}>
              <img src={retreatgoa} style={{ borderRadius: '10px',width: '100%' }} alt="retreats" />
          </Col>
      </Row>
    </div>
  )
}
