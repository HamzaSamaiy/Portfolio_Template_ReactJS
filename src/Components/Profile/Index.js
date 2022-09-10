import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeLine, { CustomTimeLineSeparator } from '../TimeLine/Index';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import ResumeData from '../../Utils/ResumeData';
import Person from '@material-ui/icons/Person';
import CustomButton from '../Button/Index';
import GetApp from '@material-ui/icons/GetApp';
import './Style.css';

const CustomData =({title,text,link})=>(
    <TimelineItem>
        <CustomTimeLineSeparator  />
        <TimelineContent className='timeline_content'>
            { link ? (
            <Typography className='timelineItem_text'>
                <span >{title}:</span> {" "}
                <a href={link} target='_blank'>{text}</a>
            </Typography>
            
            )   : (
            <Typography className='timelineItem_text'>

                
            <span> {title}:</span>{" "} {text}
            </Typography>
            
            ) }
        </TimelineContent>
    </TimelineItem>
        


);


const Profile =()=>{
    return (
        <div className='profile container_shadaw'>
            <div className='profile_name'>
                <Typography className="name">
                    {ResumeData.name }
                </Typography>
                <Typography className="title">
                    {ResumeData.title}
                </Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/images/hamza.jpg')} alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeLine icon={<Person />} >
                    <CustomData title={'Name'} text={ResumeData.name} />   
                    <CustomData title={'Title'} text={ResumeData.title} /> 
                    <CustomData title={'Email'} text={ResumeData.email} />
                    <CustomData title={'Phone'} text={ResumeData.phone} />

                    {Object.keys(ResumeData.social).map((key)=>(
                        <CustomData title={key} text={ResumeData.social[key].Text} link={ResumeData.social[key].Link} />
                    ))}
                </CustomTimeLine>
                <div className="btn_container">
                    <CustomButton text={'Download Cv'} icon={<GetApp />}/>
                </div>
                
            </div>
        </div>
    ) 
}

export default Profile;