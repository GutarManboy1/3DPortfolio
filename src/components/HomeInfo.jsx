import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I'm <span className='font-semibold'>Glenn Torrens</span>🤓<br/>
        A Software Engineer from New York 🗽 <br />Currently living in Japan 🇯🇵⛩️🔰👺🇯🇵
        </h1>
    ),
    2:(
        <InfoBox 
            text ="I'm very excited to show off my skills and what I've gained throughout my experiences"
            link="/about"
            btnText="Learn more about me"
        />
    ),
    3:(
        <InfoBox 
            text ="Here are some of the sites that I've created. Curious? 
            Go ahead and take a peek!"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox 
            text ="Are you looking for a dev or want to get a project done? Wait no longer!"
            link="/contact"
            btnText="Send me a message 📜🕊️"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent [currentStage] || null;
    
  
}

export default HomeInfo