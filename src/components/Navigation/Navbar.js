import './Navbar.css';
import React,{ useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

export default function Navbar(){

    const [hamRotation , setHamRotation] = useState(
        { 
            width:"20px",
            height:"20px",
            transform:"rotate(0deg)",
            transitionDuration: '300ms'
        }
    );
    const [isActive, setIsActive] = useState(false);
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
                        src="https://www.ashu-singh.me/Prompt-Battle/assests/icons/menu.png"
                        alt="menu"
                    />
                </button>
            </div>
            <div style={hamB} className='navBar-hamMenu flex-col'>
                <div className='navBar-iconTray flex-col'>
                    <NavLink to='/Prompt-Battle' activeClassName='active'>
                            <img className='navIcons' style={{ 
                                    width:"30px",
                                    height:"30px"
                                }}
                                alt="Homepage Icon"
                                src={"https://www.ashu-singh.me/Prompt-Battle/assests/icons/HomePage.png"} 
                            />
                    </NavLink>
                    <NavLink to='/Prompt-Battle' className='navBar-hamMenuLabels fc-white'>Homepage</NavLink>

                    <NavLink to='/Generateimg'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Generation Icon"
                            src={"https://www.ashu-singh.me/Prompt-Battle/assests/icons/ImagesGen.png"} 
                        />
                    </NavLink>
                    <NavLink to='/Generateimg' className='navBar-hamMenuLabels fc-white fs-200'>Generate Image</NavLink>

                    <NavLink to='/Leaderboard'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Leaderboard Icon"
                            src={"https://www.ashu-singh.me/Prompt-Battle/assests/icons/LeaderBoard.png"} 
                        />
                    </NavLink>
                    <NavLink to='/Leaderboard' className='navBar-hamMenuLabels fc-white'>Leaderboard</NavLink>

                    <NavLink to='/Polling'>
                        <img className='navIcons' style={{ 
                                width:"30px",
                                height:"30px"
                            }} 
                            alt="Polling Icon"
                            src={"https://www.ashu-singh.me/Prompt-Battle/assests/icons/Polling.png"} 
                        />
                    </NavLink>
                    <NavLink to='/Polling' className='navBar-hamMenuLabels fc-white'>Polling</NavLink>
                </div>


                <div className='navBar-teamDetails flex-row'>
                    <img className='navIcons' style={{ 
                            width:"35px",
                            height:"35px"
                        }}
                        alt="Team Icon"
                        src={"https://www.ashu-singh.me/Prompt-Battle/assests/icons/Team Icon.png"} 
                    />
                    <h2 className='fc-white fs-400 medium'>
                        Team Name
                    </h2>
                </div>  
            </div>
        </div>
    );
}