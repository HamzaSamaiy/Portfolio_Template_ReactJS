import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Grow, 
    Tab, 
    Tabs, 
    Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ResumeData from '../../Utils/ResumeData'
import './Style.css'
const Portfolio =()=>{
    const [TabValue, SetTabValue]=useState('All');
    const [projectDialog, setProjectDialog]=useState(false)
 
        
    return(
            <Grid container  className='section'>
                {/* Title */}
                <Grid item className='section_title mt_20'>
                    <span></span>
                    <h6>Portfolio</h6>
                </Grid>

                {/* Tabs */}
                <Grid item xs={12} className='mt_20'>
                    <Tabs 
                    label={TabValue} 
                    indicatorColor="white" 
                    className='custom_tabs' 
                    onChange={(event, newValue)=> SetTabValue(newValue)}>

                    <Tab
                    label='All'
                    value='All'
                    className={TabValue == 'All' ? 'customTabs_item active': 'customTabs_item'}/>

                    {[...new Set(ResumeData.projects.map((item) => item.tag))].map((tag)=>(
                        <Tab
                        label={tag}
                        value={tag}
                        className={TabValue == tag ? 'customTabs_item active': 'customTabs_item'}
                         />
                    ))}

                    </Tabs>
                </Grid>


                {/* Projects */}
                <Grid item xs={12} className='mt_20'>
                        <Grid container spacing={3}>
                            {ResumeData.projects.map((project)=>(
                                <>
                                {TabValue==project.tag || TabValue=='All' ? (
                                    <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={2000}>
                                    <Card className='costomCard' onClick={() => setProjectDialog(project)}>
                                        <CardActionArea>
                                            <CardMedia className='costomCard_image' image={project.image} title={project.title}/>
                                            <CardContent>
                                                <Typography variant={'body2'} className='costomCard_title'>{project.title}</Typography>
                                                <Typography variant={'body2'} className='costomCard_caption'>{project.caption}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Grow>
                                    
                                 </Grid>
                                ) : null}
                                    
                                </>
                                
                            ))}
                        </Grid>
                </Grid>

                {/* Dialog */}

                <Dialog
                 open={projectDialog}
                 onClose={()=> setProjectDialog(false)}
                 className='projectDialog'
                 fullWidth>
                
                    <DialogTitle  onClose={()=> setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                    <img src={projectDialog.image} alt='' className='projectDialog_image' />
                    <DialogContent>
                        <Typography className='projectDialog_description'>
                            {projectDialog.description}
                        </Typography>
                    </DialogContent>
                    <DialogActions className='projectDialog_actions'>
                        {projectDialog.links && projectDialog.links.map((c)=>(
                            <a href={c.link} className='projectDialog_icon'>{c.icon}</a>
                        ))}

                    </DialogActions>
                 </Dialog>

            </Grid>
     
    )
}

export default Portfolio;