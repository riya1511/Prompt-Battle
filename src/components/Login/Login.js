import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../Wrapper/Wrapper'
import {useState} from 'react'
import { checkResponse } from '../OpenAIApi';
export default function Login(){

    const [classNames , setClassName] = useState(['','','']);
    const [isDisabled , setIsDisabled]= useState(true);
    const [input , setInput ] = useState({teamName:'',apiKey:'',secCode:''});
    
    function handleSubmit(){
        setIsDisabled(true);
    }

    function handleChange({target :{ name , value}}){
        console.log(name +" : " + value);
        setInput(prevValue => ({...prevValue,[name]:value}))

        if( name === 'apiKey' && value.length > 38){
            checkResponse(value , setClassName);
        }

        if(classNames[0] === 'is-valid' 
            && classNames[1] === 'is-valid' 
            && classNames[2] === 'is-valid'){
                
                setIsDisabled(false);
        }
    }

    return (
        <Wrapper>
            <div className="flex-col borders" style={{gap:"2rem"}}>
                <h1 className='fs-800 title fc-white extrabold'>{">Login"}</h1>
                <div className='login flex-col'>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            id='floatingInput' 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[0]}`} 
                            placeholder="Cute Capybara"
                            name='teamName'
                            value={input.teamName}
                        />
                        <label htmlFor="floatingInput">Team Name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            id="floatingAPI" 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[1]}`} 
                            placeholder="xxxxxxxxxxxx"
                            name='apiKey'
                            value={input.apiKey}
                        />
                        <label htmlFor="floatingAPI">API Key</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            id='floatingCode' 
                            onChange={handleChange} 
                            className={`form-control inputFeilds ${classNames[2]}`} 
                            placeholder="234209"
                            name='secCode'
                            value={input.secCode}
                        />
                        <label htmlFor="floatingCode">Security Code</label>
                    </div>
                    <button className='button fs-50 extrabold fc-white' disabled={isDisabled} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </Wrapper>
    )
}