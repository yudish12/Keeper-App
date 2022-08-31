import React,{useState} from "react";
import LightIcon from '@mui/icons-material/Light';
import {Button} from '@material-ui/core';
import { Link,useNavigate } from "react-router-dom";
function Header(){
    const navigate = useNavigate();
    const [user,setUser] = useState(localStorage.getItem('profile'));
    const logout = ()=>{
        setUser(null);
        localStorage.clear();
        navigate('/auth');
    }
    return <header>
        <div className="left"><h1><LightIcon/>Keeper</h1></div>
        <div className="right">
            {!user?(
                <Button variant="contained">
                <Link to="/auth">
                Login
                </Link>
                </Button>
            ):(<Button variant="contained" onClick={logout}>Logout</Button>)}
        </div>
    </header>
}
export default Header;