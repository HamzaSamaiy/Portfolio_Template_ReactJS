import React from 'react';
import { Button } from '@material-ui/core';
import './Style.css';

const CustomButton =({text, icon})=>{
    return(
        <Button 
        className={'site_btn'} 
        endIcon={icon?(<div className= 'icon_container'>{icon}</div>):null}>
        
        <span className='btn_text'>{text}</span>
        </Button>
    )
}
export default CustomButton;