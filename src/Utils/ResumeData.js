import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import  { 
    Facebook,
    GitHub ,
    Twitter,
    CodeRounded ,
    DescriptionTwoTone,
    Brush,
    AccessTimeTwoTone,} from '@material-ui/icons';

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
    },
    about_me:"Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\n Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

    experiances:[
        {
            title:'Art Director - Facebook Inc',
            date:'2010 - Present',
            description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },
        {
            title:'Senior Designer - Google',
            date:'2008 - 2010',
            description:'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.',
        },
        {
            title:'Junior Designer - Creative Shake ',
            date:'2005 - 2008',
            description:'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.',
        },
    ],

    education:[
        {
            title:'Abc University of Los Angeles',
            date:'2004 - 2009',
            description:'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },
        {
            title:'Drawing Course',
            date:'2003 - 2004',
            description:'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.',
        },
        {
            title:'Abc High School ',
            date:'2000 - 2003',
            description:'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.',
        },
    ],

    services:[
        {
            icon: <CodeRounded />,
            title:'Web Development',
            description:'I have been working on web design for 10 years.'
        },
        {
            icon:<DescriptionTwoTone />,
            title:'Branding Identity',
            description:'We will make you a brand that is catchy and leaves a trace.'
        },
        {
            icon:<Brush />,
            title:'Illustrator',
            description:'I have been working on illustration design for 6 years.'
        },
        {
            icon:<AccessTimeTwoTone />,
            title:'Fast Delivery',
            description:'I deliver your business as fast as possible.'
        }
    ]

}