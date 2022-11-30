import NavBar from '../Navigation/Navbar'

export default function Wrapper(props){
    return (<div className='wrapper flex-col'>
        <NavBar />
        {props.children}
        {console.log(props.children)}
    </div>)
}