import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  { Facebook,GitHub , Twitter} from '@material-ui/icons';

export default {
    name:'Hamza Samaiy',
    title:'Full Stack JS Developer',
    birthday:'21st December 1996',
    email: 'hamzarawi96@gmail.com',
    address:'Tunisia, Sousse 4000',
    phone:'123456789',
    social:{
        LinkedIn:{
            Link:'https://www.linkedin.com',
            Text:'Hamza Samaiy',
            Icon:<LinkedInIcon />,
        },
        Github:{
            Link:'https://www.github.com/HamzaSamaiy',
            Text:'Hamza Samaiy',
            Icon:<GitHub />,
        },
        Facebook:{
            Link:'https://www.facebook.com',
            Text:'Hamza Samaiy',
            Icon:<Facebook />,
        },
        Twitter:{
            Link:'https://www.Twitter.com',
            Text:'Hamza Samaiy',
            Icon:<Twitter />,
        }
    }
}