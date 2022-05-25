import 'antd/dist/antd.css';
import { Row, Col, Button } from 'antd';
import { logo } from "../assets";
import { NavLink, useLocation } from 'react-router-dom'; 
import {
  MenuOutlined
} from '@ant-design/icons'; 
import './navbar.css';

export default function Navbar(props) {
  let location = useLocation();
  return (
    <div>
        <Row className='nav-bar'>
        <Col xs={{span: 12}} md={{span: 12}} align="left">
          <img src={logo} style={{width: '160px', marginTop: '-40px', transform: 'translate(0px, 23px)'}} alt="Alice Banting" />
        </Col>
        <Col xs={{span: 0}} md={{span: 12}} align="right">
          <br/>
          <NavLink to="/"><Button type="text">{location.pathname === "/" ? <b style={{fontSize: '15px'}}>Home</b> : "Home"}</Button></NavLink>
          <Button type="text" onClick={()=>{
            props.setIsModalVisible(true);
          }}>{location.pathname === "/classes" || location.pathname === "/retreat" ? <b style={{fontSize: '15px'}}>Yoga</b> : "Yoga"}</Button>
          <NavLink to="/about"><Button type="text">{ location.pathname === "/about" ? <b style={{fontSize: '15px'}}>About</b> : "About" }</Button></NavLink>
          <NavLink to="/contact"><Button type="text">{ location.pathname === "/contact" ? <b style={{fontSize: '15px'}}>Contact</b> : "Contact" }</Button></NavLink>
        </Col>
        <Col xs={{span: 12}} md={{span: 0}} align="right">
          <MenuOutlined style={{fontSize: '28px'}} onClick={()=>{
            props.setIsNavigationVisible(true);
          }} />
        </Col>
      </Row>
    </div>
  )
}
