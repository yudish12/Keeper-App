import React,{useEffect} from 'react'
import { Paper,Typography } from '@material-ui/core'
import Notes from './notes'
import Header from './header';
const Home = () => {
    const token = localStorage.getItem('profile');
    const [user,setUser] = React.useState(localStorage.getItem('profile'));
    const [head,setHead] = React.useState(false);
    console.log(user);
    useEffect(()=>{
       setUser(localStorage.getItem('profile'));
       console.log("x");
       setHead(true);
//       const res = await axios.get('http://localhost:2000/notes', {
//   headers: {
//     authorization: `Bearer ${user}`
//   }
// })
    },[user,setUser])
  return (
    <div className='home'>
    <Header/>
      {token?(
         <>
         
     <Notes/>
       </>
       ):(
         <>
         <Paper className='paper' elevation={6}>
            <Typography>Login/Signup to view Notes</Typography> 
         </Paper>
           </>
       )}
    </div>
  )
}

export default Home
