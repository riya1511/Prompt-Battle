import './Navbar.css';
import React,{ useState } from 'react';

export default function Navbar(){

    const [hamRotation , setHamRotation] = useState(
        { 
            width:"20px",
            height:"20px",
            transform:"rotate(0deg)",
            transitionDuration: '300ms'
        }
    );
    const [isVisible , setisVisible]= useState(false);
    const [hamB,setHamb] = useState({});
    const hamburgerMenu = () => {
        if(!isVisible){
            setHamb({
                transform:"translateY(0)"
            })
            console.log(hamRotation)
            setHamRotation(prevVal =>({...prevVal, transform:`rotate(180deg)`}));
        }else{
            setHamb({
                transform:"translateY(-130%)"
            });
            console.log(hamRotation)
            setHamRotation(prevVal =>({...prevVal, transform:`rotate(0deg)`}));
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
                        style={hamRotation}
                        src={process.env.PUBLIC_URL + "./Assests/Icons/menu.png"}
                        alt="menu"
                    />
                </button>
            </div>
            <div style={hamB} className='navBar-hamMenu flex-col'>
                <div className='navBar-iconTray flex-col'>
                    <img className='navIcons' style={{ 
                            width:"30px",
                            height:"30px"
                        }}
                        alt="Homepage Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/HomePage.png"} 
                    />
                    <p className='navBar-hamMenuLabels fc-white '>Homepage</p>
                    <img className='navIcons' style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Generation Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/ImagesGen.png"} 
                    />
                    <p className='navBar-hamMenuLabels fc-white fs-200'>Generate Image</p>
                    <img className='navIcons' style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Leaderboard Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/LeaderBoard.png"} 
                    />
                    <p className='navBar-hamMenuLabels fc-white '>Leaderboard</p>
                    <img className='navIcons' style={{ 
                            width:"30px",
                            height:"30px"
                        }} 
                        alt="Polling Icon"
                        src={process.env.PUBLIC_URL+ "./Assests/Icons/Polling.png"} 
                    />
                    <p className='navBar-hamMenuLabels fc-white '>Polling</p>
                </div>


                <div className='navBar-teamDetails flex-row'>
                    <img className='navIcons' style={{ 
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