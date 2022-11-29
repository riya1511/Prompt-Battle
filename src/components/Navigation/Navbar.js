import './Navbar.css';
import React,{ useState } from 'react';

export default function Navbar(){
    const [isVisible , setisVisible]= useState(false);
    const [hamB,setHamb] = useState(
        {
            display:"none",
            transform:"translateY(-130%)"
        });
    const hamburgerMenu = () => {
        if(!isVisible){
            setHamb({
                display:"flex",
                transform:"translateY(0)"
            })
        }else{
            setHamb({
                display:"none",
                transform:"translateY(-130%)"
            });
        }
        console.log(isVisible);
        setisVisible(prevVal => !prevVal);
    }

    return(
        <div className='navBar flex-col'>
            <div className='navBar-top flex-col'>
                <h1 className='navBar-title fc-white fs-400 bold'>
                    _prompt battle
                </h1>
                <button className='navBar-hamB' onClick={hamburgerMenu}>
                    <img 
                        style={{ 
                            width:"30px",
                            height:"30px"
                        }}
                        src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/96/EBEBEB/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"
                    />
                </button>
            </div>
            <div style={hamB} className='navBar-hamMenu flex-col'>
                <div className='navBar-iconTray flex-col'>
                    <img style={{ 
                            width:"30px",
                            height:"30px"
                        }}
                        alt="Homepage Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/HomePage.png"} 
                    />
                    <img style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Generation Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/ImagesGen.png"} 
                    />
                    <img style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Leaderboard Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/LeaderBoard.png"} 
                    />
                    <img style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Polling Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/Polling.png"} 
                    />
                </div>


                <div className='navBar-teamDetails flex-row'>
                    <img style={{ 
                            width:"35px",
                            height:"35px"
                        }}
                        alt="Team Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/Team Icon.png"} 
                    />
                    <h2 className='fc-white fs-400 medium'>
                        Team Name
                    </h2>
                </div>  
            </div>
        </div>
    );
}