import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../Wrapper/Wrapper'
import {useEffect, useState} from 'react'
import { checkResponse } from '../OpenAIApi';
import { userCollectionRef } from '../../firebase/firebase';
import { getDocs } from 'firebase/firestore';

export default function Login(){

    const [classNames , setClassName] = useState(['','','']);
    const [isLoading , setIsLoading] = useState('Submit')
    const [input , setInput ] = useState({teamName:'',apiKey:'',secCode:''});
    const [userData , setUserData] = useState([]);
    useEffect( () => {
        const getData = async () => {
            console.log("checkpoint1");
            const database = await getDocs(userCollectionRef);
            database.docs.map(
                doc => {
                    const {team , security_code} = doc.data();
                    setUserData(prevValue => [...prevValue,{teamName:team , secCode : security_code}]);
            });
            return database;
        }
        getData();
    }, []);
    
    async function handleSubmit(){
        setIsLoading('');
        const checkTeam = userData.find(({teamName , secCode}) => {
            if(teamName === input.teamName && secCode === input.secCode){
                setClassName(prevValue => (['is-valid', prevValue[1],prevValue[2]]));
                setClassName(prevValue => ([prevValue[0],prevValue[1],'is-valid']));
                return true;
            }
            else{
                setClassName(prevValue => (['is-invalid', prevValue[1],'is-invalid']));
            }
        });
        const checkApiKey = await checkResponse(input.apiKey , setClassName);
        console.log(checkApiKey + "  " + checkTeam);
        if(checkTeam && checkApiKey){
                setIsLoading('Submitted');
        }
        else{
            setIsLoading('Retry');
        }
    }


    function handleChange({target :{ name , value}}){
        setInput(prevValue => ({...prevValue,[name]:value}))
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
                    <button className='button fs-50 extrabold fc-white' onClick={handleSubmit}>
                        {isLoading === "" ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : isLoading}
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}