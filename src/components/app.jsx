import React from 'react';
import Header from './header';
import Note from './note';
import Footer from './footer';
import CreateArea from './createArea';

function App(){

    const [Notes,setNote] = React.useState([])
    function addNote(note){
     setNote(prev=>{
        return [...prev,note];
     })
    }
   function del(id){
     setNote(prevItem=>{
      return prevItem.filter((e,ind)=>{
         return id!==ind;
      })
     })
   }
    return(<div>
 <Header/>
 <CreateArea add={addNote}/>
  <div className='container'>
  {Notes.map((elem,ind)=>{
    return <Note title={elem.title} content={elem.content} id={ind} delete={del}/>
  })
  }
  </div>
 <Footer/>
    </div>);
}
export default App;