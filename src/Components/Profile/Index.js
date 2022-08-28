import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeLine from '../TimeLine/Index'
import './Style.css'

const Profile =()=>{
    return (
        <div className='profile container_shadaw'>
            <div className='profile_name'>
                <Typography className="name">
                    Hamza Smii
                </Typography>
                <Typography className="title">
                    Software Engineer
                </Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/images/hamza.jpg')} alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeLine />
                <br />
                <button>Press</button>
            </div>
        </div>
    ) 
}

export default Profile;