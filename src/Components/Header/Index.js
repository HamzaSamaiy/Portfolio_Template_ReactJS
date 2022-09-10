import React from 'react';

import { Form,
    FormControl,
    Button,
    Nav,
    Navbar,
    NavDropdown,
 } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {
    HomeRounded,
    SchoolRounded,
    Facebook,
    Twitter,
    LinkedIn,
    Github,
    Telegram,
} from "@material-ui/icons"
import { Link , NavLink , withRouter } from 'react-router-dom';
import ResumeData from '../../Utils/ResumeData';
import './Style.css'
import CustomButton from '../Button/Index';
const Header = (props)=>{
    const pathName = props.location && props.location.pathname;
    return(
        <Navbar expand='lg' sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/' >
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse> 
                <Nav className='header_left'>
                    {/* Resume Link */}
                    <Nav.Link 
                    as={NavLink} 
                    to='/'
                    className={pathName == '/' ? 'header_link_active' : 'header_link'}>
                    Resume
                    </Nav.Link>

                     {/* Portfolioi Link */}
                     <Nav.Link 
                    as={NavLink} 
                    to='/portfolio' 
                    className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
                    Portfolio
                    </Nav.Link>
                </Nav>
                <div className='header_right'>
                    {Object.keys(ResumeData.social).map(key=>(
                        <a href={ResumeData.social[key].Link}>{ResumeData.social[key].Icon}</a>
                    ))}
                    <CustomButton text={'Hire me'} icon= {<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header; 