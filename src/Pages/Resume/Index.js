import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ResumeData from '../../Utils/ResumeData';
import CustomTimeLine ,{CustomTimeLineSeparator} from '../../Components/TimeLine/Index';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import './Style.css';
import { TimelineContent, TimelineItem } from '@material-ui/lab';
const Resume =()=>{
    return(
        <>
        {/* About */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30' >
                    <span></span>
                    <h6>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>
                        {ResumeData.about_me}
                    </Typography>
                </Grid>
            </Grid>

        {/* Resume */}
            <Grid container className='section pb_45'>
                {/* Title */}
                    <Grid item  className='section_title mb_30'>
                        <span></span>
                        <h6>
                            Resume
                        </h6>
                    </Grid>
                {/* Timeline */}
                    <Grid item xs={12}>
                        <Grid container className='resume_timeline'>
                            {/* Experiance */}
                            <Grid item xs={12} md={6}>
                             <CustomTimeLine title={'Work history'} icon={<WorkIcon />}  >
                                {ResumeData.experiances.map(experiance=>(
                                    <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className='timeline_title'>{experiance.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{experiance.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{experiance.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>

                                ))}
                             </CustomTimeLine>
                            </Grid>
                            {/* Education */}
                            <Grid item xs={12} md={6}>
                             <CustomTimeLine title={'Education history'} icon={<SchoolIcon />}  >
                                {ResumeData.education.map(ed=>(
                                    <TimelineItem>
                                    <CustomTimeLineSeparator />
                                    <TimelineContent className='timeline_content'>
                                        <Typography className='timeline_title'>{ed.title}</Typography>
                                        <Typography variant='caption' className='timeline_date'>{ed.date}</Typography>
                                        <Typography variant='body2' className='timeline_description'>{ed.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>

                                ))}
                             </CustomTimeLine>
                            </Grid>
                        </Grid>

                    </Grid>
            </Grid>
 
        {/* Services */}
            <Grid container className='section pb_45'>
                
            </Grid>

        {/*Skills  */}
            <Grid container className='section pb_45'>
                
            </Grid>
        
        {/* Contact */}
            <Grid container>
                    
            </Grid>

        
        </>
    )
}

export default Resume;