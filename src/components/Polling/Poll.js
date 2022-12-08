import React,{useState,useEffect} from "react";
import './Poll.css'
import Axios from 'axios';
import Wrapper from '../Wrapper/Wrapper'

export default function Poll(){
    const url = "http://3.6.65.227:8080/api/";
    const [teamDetails , setTeamDetails] = useState({timeLeft : 100});
    const [timer , setTimer] = useState({second : 0, mins : 0});

    // Axios.get(url+"/polling").then(
    //     response => {
    //         setTeamDetails(response)
    //     }
    // );

    // useEffect(() => {
    //     const timer = () => {
    //                             const timeLeft = teamDetails.timeLeft - 1;
    //                             console.log(timeLeft);
    //                             setTimer({
    //                                 second: timeLeft % 60,
    //                                 mins : Math.floor(timeLeft /60)
    //                             });
    //                             setTeamDetails({time : timeLeft});
    //                             console.log(teamDetails);
    //                         } 

    //     setTimer(timer , 1000);
    //     return clearInterval(timer , 1000);
    //     });

    console.log(Date.parse(Date.now()));

    const style  = {gap:"1rem" };
    return (
        <Wrapper >
            
            <div className="flex-col borders" style={{...style,gap:"2rem"}}>
                <h1 className='fs-800 title fc-white extrabold'>{">Polling"}</h1>
                {
                teamDetails.time > 0 ?
                    <div className="flex-col poll">
                        <div className="flex-col" style={style}>
                            <img 
                                alt='generateImage'
                                className='poll-displayimage'
                                src={process.env.PUBLIC_URL + "/assests/capybara/Capybara-1.png"}
                            />
                            <button className='button fs-300 extrabold fc-white'>+1</button>
                        </div>
                        <h1 className='fs-600 extrabold fc-white'>{`${timer.mins} : ${timer.second}`}</h1>
                        <div className="flex-col" style={style}>
                            <img 
                                alt='generateImage'
                                className='poll-displayimage'
                                src={process.env.PUBLIC_URL + "/assests/capybara/Capybara-2.png"}
                            />
                            <button className='button fs-300 extrabold fc-white'>+1</button>
                        </div>
                    </div>
                    : <div className="fs-400 fc-white extrabold flex-col poll" style={{height:"100%", justifyContent:"center"}}> Polling will start in sometime </div>
                }
            </div>
        </Wrapper>
    );
}