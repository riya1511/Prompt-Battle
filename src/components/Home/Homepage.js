import Wrapper from "../Wrapper/Wrapper";
import './Homepage.css'
export default function Homepage(){
    return (
        <Wrapper>
            <div className="homewrapper">
                <div className="home flex-col fc-white">
                    <h1 className='fs-800 extrabold'>Battle<br/> of the Bands</h1>
                    <p className='fs-400 medium'>An AI prompt battle</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className='button fs-200 fc-white extrabold'><p>{'Enter the battle ->'}</p></button>
                </div>
            </div>
        </Wrapper>
    )
}