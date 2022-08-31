import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Typography,TextField } from '@material-ui/core'
const Signup = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin =(e)=>{
        axios.post('http://localhost:2000/api/register', { 
          username: username,
          password: password
        })
        .then(function (response) {
          console.log(response);
          if(response.data.user==null){
            alert("user not found");
            localStorage.clear();
          }else{
            localStorage.setItem('profile',response.data.user);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        e.preventDefault();
        setTimeout(()=>{
          navigate('/');
        },1500)
      }
    return (
        <div className='auth'>
        <form className='form'>
      <Typography variant='h4' className='pad-2'> 
                Signup
            </Typography>
            <TextField label="username" variant="standard" name='username' value={username} onChange={(e)=>{
              setUsername(e.target.value)
            }}/>
            
            <TextField  label="password" variant="standard" type='password' name='password' value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
            <input type="submit" onClick={handleLogin} value="Sing up" className='btn'/>
      </form>
            <Link to="/signup">Already Have An Account?</Link>
    </div>
      )
}

export default Signup
