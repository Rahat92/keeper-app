import React ,{useState} from "react";
function CreateArea(props) {
	const [letter,word] = useState({
      title : "",
      content : ""
  });

  function traceInput(event){
  const name = event.target.name;
  const value = event.target.value;
  if(name === "title"){
      word(prev=>{
      return {
        title:value,
        content:prev.content
      }
    })
  }else if(name === "content"){
      word(prev=>{
      return {
        title:prev.title,
        content:value
      }
    })
    
  }
}
  return (
    <div>
      <form action = "">
        <input autoFocus = "on" onChange = {traceInput} name="title" placeholder="Title" value = {letter.title} />
        <textarea onChange = {traceInput} name="content" placeholder="Take a note..." rows="3" value = {letter.content}/>
        <button onClick = {(event)=>{
          
          props.listenButton(letter,event);
          word({
            title:"",
            content:""
          })
      }

      } >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
