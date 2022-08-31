import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';
function Note(props){
    // const token = localStorage.getItem('profile');
    // async function del(id){
    //     try {
    //       const res = await axios.delete(`http://localhost:2000/notes/:${id}`,{
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //       console.log(res);
    //     } catch (error) {
    //       console.log(error)
    //     }
          
    //     //  setNote(prevItem=>{
    //     //   return prevItem.filter((e,ind)=>{
    //     //      return id!==ind;
    //     //   })
    //     //  })
    //    }
    console.log(props.id);
return <div className='note'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={()=>{
        props.delete(props.id);
    }} className="del"><DeleteIcon/></button>
</div>
}
export default Note;