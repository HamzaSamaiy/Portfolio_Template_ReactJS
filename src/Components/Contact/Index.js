import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import ResumeData from '../../Utils/ResumeData';
import CustomButton from '../Button/Index';
import './Style.css'

const Contact =()=>{
    return(
        <Grid container className='section' spacing={4}>
            {/* Contact left */}
            <Grid item className='contact_left' xs={12} lg={6}>
                    <Grid container>

                        <Grid item className='section_title ' >
                            <span></span>
                            <h6>
                            Contact Form
                            </h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} lg={6}>
                                        <TextField fullWidth name='name' label='Name' />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField fullWidth name='email' label='Email' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='number' label='Message' />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text={'Submit'} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item></Grid>
                        <Grid item></Grid>
                    </Grid>
            </Grid>


            {/* Contact right */}
            <Grid item className='contact_right' xs={12} lg={6}>
                <Grid container >
                            <Grid item className='section_title mb_30'>
                                <span></span>
                                <h6>
                                Contact Informations
                                </h6>
                            </Grid>
                            <Grid container spacing={2} className='mb_30'>
                                
                                <Grid item xs={12} >
                                    <Typography className='contact_item'>
                                       <span>Address:</span> {ResumeData.address}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} >
                                <Typography className='contact_item'>
                                    <span>Phone:</span> {ResumeData.phone}
                                </Typography>
                                </Grid>

                                <Grid item xs={12} >
                                <Typography className='contact_item'>
                                     <span>Job:</span> {ResumeData.title}
                                </Typography>
                                </Grid>

                                <Grid item xs={12} >
                                <Typography className='contact_item'>
                                     <span>Email:</span> {ResumeData.email}
                                </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} className='contact_socail'>
                                <Grid container spacing={2}>
                                    {Object.keys(ResumeData.social).map(key=>(
                                        <Grid item className='socail'>
                                        <a href={ResumeData.social[key].Link}>{ResumeData.social[key].Icon}</a>
                                        </Grid>
                                    ))}
                                    
                                   
                                </Grid>
                            </Grid>
                            
                </Grid>
            </Grid>
        
        </Grid>
    )
}

export default Contact;