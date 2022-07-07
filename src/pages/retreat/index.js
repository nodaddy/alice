
import { Button, Carousel, Col, Row } from 'antd' 
import React from 'react'
import { cornerFlower, aboutRetreat, hbImage1, hbImage2, hbImage3, hbImage4, retreatgoa, retreatHero, RC1, RC2, RC3, RC4, one, two, three } from '../../assets'

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
      <br/>
      <br/>

      {/* <Row>
        <Col xs={{span: 0}} md={{span: 24}}>
            <h1 style={{fontFamily: 'Playfair Display', fontSize: '40px', display: 'inline-block'}}>Coming Soon</h1><br/>  
        </Col>
        <Col xs={{span: 24}} md={{span: 0}}>
            <h1 style={{fontFamily: 'Playfair Display', fontSize: '30px', display: 'inline-block'}}>Coming Soon</h1><br/>  
        </Col>
      </Row> */}

      {/* <Row style={{marginBottom: '60px'}}>
          <Col span={24}>
              <img src={retreatgoa} style={{ borderRadius: '10px',width: '100%' }} alt="retreats" />
          </Col>
      </Row>

       */}
 
        <div align="center" id="0" style={{display: 'block', fontFamily: 'raleway'}}>
          <img style={{width:'80%', borderRadius: '15px'}} src={one} alt="i1" />
          <br/>
          <div align="right" style={{width: '80%'}}>
        {
          [0,1,2].map((i) => {
            return <Button style={{color: `${i == 0 ? 'white' : 'black'}`, backgroundColor: `${i == 0 ? '#1890ff' : 'white'}`}} onClick={()=>{

              document.getElementById(i).style.display = 'block'; 
              [0,1,2].forEach(j => {
               if(j != i){
                document.getElementById(j).style.display = 'none'; 

               console.log(j, i);

                }
              })
            }}>{i+1}</Button>
          })
        }
      </div>
          <br/>
          Join Alice for a 5 night healing journey.

We will be staying at the exceptional Wild Mahseer British- era bungalows. Wild Mahseer will take you back in time. The Eastern Himalayan Botanic Ark is spread over 22 acres and surrounded by tea gardens. It is serenely tucked in the Brahmaputra valley and is a biodiverse natural & cultural paradise.

 

We will embody this raw nature to amplify our journey through the five great elements within. We are nature. 

We will use music, movement, mudra, mantra & meditation to balance & attune ourselves to nature.

Bringing our bio energetic systems into a soothing balance.  

Accommodation at Wild Masheer (sharing option available)

Yoga x twice a day

All food & non-alcoholic drinks included.
        </div>


        <div align="center" id="1" style={{display: 'none', fontFamily: 'raleway'}}>
          <img style={{width:'80%', borderRadius: '15px'}} src={two} alt="i1" />
          <br/>
          <div align="right" style={{width: '80%'}}>
        {
          [0,1,2].map((i) => {
            return <Button style={{color: `${i == 1 ? 'white' : 'black'}`, backgroundColor: `${i == 1 ? '#1890ff' : 'white'}`}} onClick={()=>{
              document.getElementById(i).style.display = 'block'; 
              [0,1,2].forEach(j => {
               if(j != i){
                document.getElementById(j).style.display = 'none'; 

               console.log(j, i);

                }
              })
            }}>{i+1}</Button>
          })
        }
      </div>
          <br/>
          Join Mischa Varmuza and Alice Banting for an immersive week of embodied healing practices and connection at the stunning Ashiyana Retreat Centre in North Goa in our beloved Mama India. 

 

We will gather under the warming Goan sunshine to nurture our body, heart and soul in the embrace of nature as we journey through the Five Great Elements.  The retreat, a fusion of yogic practices and wisdom teachings including asana, pranayama, mantra, meditation, astrology and mindfulness and transpersonal techniques, is designed to harmonise, nourish and uplift, to bring us back into balance so we can reside closer to our natural state, inside and out. 

 

Over the past few years humanity has been through an intensified time of collective chaos, shock, upheaval & change.  It is as if the ground beneath our feet has been shifting, even collapsing. Our world has changed beyond recognition. 

 

We are experiencing both personal and collective grief for a world we were once familiar with and for the losses that we have encountered. Yet, as we learn to release control of our external world, many of us have been deeply moved and inspired to explore our relationship with Spirit and with nature. To re-discover what is Sacred and understand what it is, within ourselves, that we can anchor to, to ground and support as the world continues its dance.  In our quest for both inner peace and inspiration on how to co-create with our world, we are being called back into our body and our breath and back into nature. Back into the way of the Heart. 

 

There is a collective call to take conscious and spiritual action and our superpowers as humans at this time are in unity & service. This week is about coming together in community, in the lap of nature, immersed in the elements. We will travel deeply into our bodies and our breath and utilise the extraordinary tools that are available to us to cleanse our being, refresh our vision and strengthen our vessel.

We, as humans living in this modern age have become disconnected from the cosmic language.  Disconnected from nature. Disconnected from our bodies.  The yogic and tantric view recognises the 5 elements as the building blocks of nature and of the entire universe. 

We are nature. Our bodies are nature. 

 

We are Earth. We are Fire.  We are Water.  We are Air and we are Ether.

 

This retreat is a journey back to nature. Back to our true nature. 

 
<br/>
<br/>
<b>WHO IS IT FOR?</b>
<br/>


 

This week is designed for students and seekers, of all levels of experience, to immerse in the practices and space in between. To rediscover & understand our deep connection to nature. To rejuvenate & strengthen our vessels and polish our vision for clarity. To presence and celebrate community, our lives and Mother Earth.

 

Health is the most precious currency and making an investment into our health and wellbeing is one of the wisest places to invest right now. A retreat is a huge transformative opportunity and is for everybody at any time in our lives.  We create space to unplug from all the distractions, to step aside from life for a while, to rest and regulate the nervous system, to live in a simple rhythm and refresh in a nurturing and peaceful environment.

 

Retreats give rise to profound healing, sudden realizations & breakthrough moments. They provide us with space to listen to the voice that is quieter than your mind.

 
        </div>


        <div align="center" id="2" style={{display: 'none',fontFamily: 'raleway'}}>
          <img style={{width:'80%', borderRadius: '15px'}} src={three} alt="i1" />
          <br/>
          <div align="right" style={{width: '80%'}}>
        {
          [0,1,2].map((i) => {
            return <Button style={{color: `${i == 2 ? 'white' : 'black'}`, backgroundColor: `${i == 2 ? '#1890ff' : 'white'}`}} onClick={()=>{

              document.getElementById(i).style.display = 'block'; 
              [0,1,2].forEach(j => {
               if(j != i){
                document.getElementById(j).style.display = 'none'; 

               console.log(j, i);

                }
              })
            }}>{i+1}</Button>
          })
        }
      </div>
          <br/>
          Her Mystic Vibe presents a one of a kind spiritual & cultural retreat. Two days of retreat & mental, digital detox at Chundubi Eco Camp.
Chundubi is hub of unspoilt nature. Camps are around a serene lake. With streams & waterfalls within walking distance.

Yoga amidst raw unspoilt nature with Alice Banting. Reiki & pranava meditation by Nafisa Akhtar.

Exploring the culinary delights of Rabha traditional food.
        </div>   
<br/> 
      

      <br/>
    <br/>
    <br/>
    </div>
  )
}
