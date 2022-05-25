import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/home';
import { Row, Col, Button, Modal } from 'antd'; 
import { useState } from 'react';
import { HashRouter as Router, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Classes from './pages/classes';
import Retreat from './pages/retreat'; 
import Navbar from './components/navbar';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);

  function handleCancel(){
    setIsModalVisible(false);
  }

  function handleCancelNavigation(){
    setIsNavigationVisible(false);
  }

  return (
    <div className="App" style={{color: 'black'}}>
      <Router>
      <Navbar setIsModalVisible={setIsModalVisible} setIsNavigationVisible={setIsNavigationVisible} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/retreat" element={<Retreat />} />
        </Routes>

      <Row style={{backgroundColor: '#E5F7FA', margin: '0px -110px', padding: '50px 110px', fontFamily: 'raleway', fontSize: '16px'}} className="onlyDesktop">
        <Col span={12} align="left">alicebanting.com</Col>
        <Col span={12} align="right">Instagram | Facebook</Col>
      </Row>
      {/* xs */}
      <Row style={{backgroundColor: '#E5F7FA', margin: '0px -30px', padding: '0px 20px', fontFamily: 'raleway', fontSize: '15px'}}>
        <Col style={{padding: '50px 0px'}} xs={{span: 12}} md={{span: 0}} align="left"> alicebanting.com </Col>
        <Col style={{padding: '50px 0px'}} xs={{span: 12}} md={{span: 0}} align="right">Instagram | Facebook</Col>
      </Row>

      <Modal
        width="100vw" 
        style={{zIndex: 9999}}
        bodyStyle={{backgroundImage: 'linear-gradient(#EFF2EF, white)', margin: '0px 0px'}}
        title="" visible={isModalVisible} onCancel={handleCancel}
        footer={[]}
      >
       <div style={{height: '60vh', padding: '20vh 50px', fontFamily: 'playfair display'}}>
          <NavLink to="/classes">
            <h1 style={{display: 'inline-block'}} 
            onMouseOver={(e)=>{
              e.target.style.color = "#AAA3A3";
            }} 
            onMouseOut={(e)=>{
              e.target.style.color = "black";
            }} 
            onClick={()=>{handleCancel()}}
            className="buttonLink">Classes</h1>
          </NavLink>
          <hr style={{borderTop: '1px solid #D0D0D0'}} />
          <NavLink to="/retreat">
            <h1
            onMouseOver={(e)=>{
              e.target.style.color = "#AAA3A3";
            }} 
            onMouseOut={(e)=>{
              e.target.style.color = "black";
            }} 
            onClick={()=>{handleCancel()}}
            style={{display: 'inline-block'}} className="buttonLink">
              Retreat
            </h1>
          </NavLink>
       </div>
      </Modal> 

      <Modal
      style={{zIndex: '999'}}
        width="100vw" 
        bodyStyle={{backgroundImage: 'linear-gradient(#EFF2EF, white)', margin: '0px 0px', fontFamily: 'Raleway'}}
        title="" visible={isNavigationVisible} onCancel={handleCancelNavigation}
        footer={[]}
      >
        <NavLink to="/" onClick={()=>{
            handleCancelNavigation();
          }}><Button type="text">Home</Button></NavLink>
        <br/>
          <Button type="text" onClick={()=>{
            setIsModalVisible(true);
            handleCancelNavigation();
          }}>Yoga</Button>
        <br/>
          <NavLink to="/about" onClick={()=>{
            handleCancelNavigation();
          }}><Button type="text">About</Button></NavLink>
        <br/>
          <NavLink to="/contact" onClick={()=>{
            handleCancelNavigation();
          }}><Button type="text">Contact</Button></NavLink>
      </Modal>

      </Router>
    </div>
  );
}

export default App;
