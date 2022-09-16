import { Typography } from '@material-ui/core';
import React from 'react';
import './Style.css';
import ResumeData from '../../Utils/ResumeData';
const Footer =()=>{
    return(
        <div className='footer'>

            {/* footer left */}
            <div className='footer_left'>
                <Typography className='footer_name'>
                    {ResumeData.name}
                </Typography>
            </div>

            {/* footer right */}
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                Cloned by <a href='https://www.linkedin.com/in/hamza-samaiy/'>HamzaSamaiy</a>
                </Typography>
            </div>
            
        </div>
    )
}

export default Footer;