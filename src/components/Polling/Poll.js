import React from "react";
import './Poll.css'
import Wrapper from '../Wrapper/Wrapper'

export default function Poll(){
    const style  = {gap:"1rem" };
    return (
        <Wrapper >
            <div className="flex-col borders" style={{...style,gap:"2rem"}}>
                <h1 className='fs-800 title fc-white extrabold'>{">Polling"}</h1>
                <div className="flex-col poll">
                    <div className="flex-col" style={style}>
                        <img 
                            alt='generateImage'
                            className='poll-displayimage'
                            src={process.env.PUBLIC_URL + "/assests/capybara/Capybara-1.png"}
                        />
                        <button className='button fs-300 extrabold fc-white'>+1</button>
                    </div>
                    <h1 className='fs-900 extrabold fc-white'>VS</h1>
                    <div className="flex-col" style={style}>
                        <img 
                            alt='generateImage'
                            className='poll-displayimage'
                            src={process.env.PUBLIC_URL + "/assests/capybara/Capybara-2.png"}
                        />
                        <button className='button fs-300 extrabold fc-white'>+1</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}