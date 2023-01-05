import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './header.css'
import { AiFillHome } from 'react-icons/ai';
import { FiPhoneForwarded} from 'react-icons/fi';
import { MdOutgoingMail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { GrClose } from 'react-icons/gr';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import logo from '../../img/logo.png'
import headerData from './data'

function Header() {
    const [IsResponsive, setResponsive] = useState(false);


    const IsShowMenuBar = () =>{
        setResponsive((prev)=>!prev)
    }
  return (
    <header>
        <div className="top-nav">
            <div className="logo-box">
                <img src={logo} alt="FM Institute Logo" />
                <h4 className='logo-text'>success plus</h4>
            </div>
            <div className="address-bar">
                <span className='address-items'>
                    <FiPhoneForwarded/>
                    <a href={`tel: ${headerData.phone}`}>{headerData.phone}</a>
                </span>
                <span className='address-items'>
                    <MdOutgoingMail/>
                    <a href={`mailto:${headerData.gmail}`}>{headerData.gmail}</a>
                </span>
                <span className='address-items'>
                    <ImLocation/>
                    <a href="#">{headerData.address}</a>
                </span>
            </div>
            <span className="resIcon" onClick={IsShowMenuBar}>
            {IsResponsive ? <GrClose/> : <RiBarChartHorizontalFill/>}  
            </span>
        </div>
        <nav className={IsResponsive ? "nav-container active" : "nav-container"}>
            <Link to="/"><AiFillHome/> Home</Link>
            <a href="/#AllPrograms">All Program</a>
            <a href='/#Branch'>Branch</a>
            <Link to="/bookShop">Book Shop</Link>
            <Link to="/result">Ruselt</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/blogs">Bolgs</Link> */}
        </nav>
    </header>
  )
}

export default Header