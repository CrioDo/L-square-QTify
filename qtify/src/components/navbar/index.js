import Button from "../button"
import SearchBox from '../searchbox';
import './Navbar.css'

export default () =>{
    return <div className="navbar">
        <img src="Group 1.png" width={67} height={37}/>
        <SearchBox/>
        <Button>Give Feedback</Button>
    </div>
    
}