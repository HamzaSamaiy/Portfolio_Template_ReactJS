import { Grid, Icon, Paper, Typography, LinearProgress } from '@material-ui/core';
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
            <Grid container  className='section pb_45 bg_gray'  >
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6>
                        My services
                    </h6>
                </Grid>


                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={4}>
                        {ResumeData.services.map(service => (
                            <Grid item  xs={12} sm={6} md={3}>
                                <Paper elevation={0} className='service' >
                                    <Icon className='service_icon'>{service.icon}</Icon>
                                    <Typography  className='service_title'>{service.title}</Typography>
                                    <Typography variant='caption' className='service_description'>{service.description}</Typography>
                                </Paper>
                            </Grid>
                            
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        {/*Skills  */}
            <Grid container className='section pb_45' spacing={6} >
                <Grid item xs={12} md={6} className='skill'>
                <Grid container  className='design'>
                        
                         
                        
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6>
                            Code Skills

                            </h6>
                        </Grid>

                        <Grid item xs={12} className='p_skill' >
                        <Typography>Javascript</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={75}  />
                        </Grid>
                        <Grid item xs={12} className='p_skill' >
                        <Typography>HTML5</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={65}  />
                        </Grid>

                        <Grid item xs={12} className='p_skill' >
                        <Typography>CSS3</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={25} />
                        </Grid>
                    </Grid>
                </Grid>
                
                

                <Grid item xs={12} md={6} className='skill pb_45'>
                    <Grid container className='design'>

                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6>
                            Design Skills

                            </h6>
                        </Grid>
                        
                        <Grid item xs={12} className='p_skill' >
                        <Typography>Photoshop</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={75}  />
                        </Grid>
                        <Grid item xs={12} className='p_skill' >
                        <Typography>Sketch</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={55}  />
                        </Grid>

                        <Grid item xs={12} className='p_skill' >
                        <Typography>Adobe Xd</Typography>
                        <LinearProgress variant="determinate" className='skill_bar' value={25} />
                        </Grid>
                    </Grid>
                </Grid>

              
            </Grid>
        
        {/* Contact */}
            <Grid container>
                    
            </Grid>

        
        </>
    )
}

export default Resume;