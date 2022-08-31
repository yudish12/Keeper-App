import React from "react";

function CreateArea(props) {
    const[noteObj,setNoteObj] = React.useState({
        title:"",
        task:""
    })
    function change(e){
        setNoteObj(prev =>{
        const {name,value} = e.target;
            return {
                ...prev,
                [name]:value
            }
        })
        }
        function submitNote(event){
            props.add(noteObj);
            event.preventDefault();
        }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={change} value={noteObj.title}/>
        <textarea name="task" placeholder="Take a note..." rows="3" onChange={change} value={noteObj.task}/>
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
