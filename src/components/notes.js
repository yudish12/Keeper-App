import React,{useEffect} from 'react'
import axios from 'axios';
import { useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import CreateArea from './createArea'
import Note from './note';
const Notes = () => {
  const [notes,setNote] = useState([]);
  const token = localStorage.getItem('profile');
  const getNotes = async ()=>{
    try {
      const res = await axios.get("http://localhost:2000/notes",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setNote(res.data.notes);
    console.log(notes);
    } catch (error) {
      console.log(error);
    }
    
  }

  async function addNote(note){
    const res = await axios.post('http://localhost:2000/notes',note,{
     headers:{
       Authorization: `Bearer ${token}`
     }
    })
    setNote(res.data);
    window.location.reload(false);
   }

  async function del(id){
        try {
          const res = await axios.delete(`http://localhost:2000/notes/:${id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        } catch (error) {
          console.log(error)
        }
         setNote(prevItem=>{
          return prevItem.filter((e,ind)=>{
             return id!==ind;
          })
         })
         window.location.reload(false);
       }
  
   useEffect(()=>{
   getNotes(); 
  //  window.location.reload(false);
  },[])
  return (
    <div>
      {!notes.length?
      (
        <>
        <CreateArea add={addNote} className="create"/>
        </>
):
      (
        <div className='notesSection'>
        <CreateArea add={addNote} className="create"/>
        <div className="noteSection">
          {notes.map((e,i)=>{
            return(<Note key={i} id={e._id} title={e.title} content={e.task} delete={del}/>)
          })}
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Notes
