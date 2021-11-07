import React ,{useState} from "react";
function CreateArea(props) {
  const [typeStatus,updateTypeStatus] = useState(false);
	const [letter,word] = useState({
      title : "",
      content : ""
  });

  function traceInput(event){
  const name = event.target.name;
  const input = event.target.value;
  const value = {
    title:input,
    content:input
  };
  if(name === "title"){
      word(prev=>{
      return {
        title:value.title,
        content:prev.content
      }
    })
    if(value.title.length>0){
    updateTypeStatus(true);
  }else if(value.title.length===0){ 
    updateTypeStatus(false);
  }
  }else if(name === "content"){
      word(prev=>{
      return {
        title:prev.title,
        content:value.content
      }
    })
    
  }
  
}
  return (
    <div>{props.trackChange(typeStatus)}
      <form action = "">
        <input autoFocus = "on" onChange = {traceInput}
        name="title" placeholder="Title" value = {letter.title} />
        <textarea onChange = {traceInput} name="content" placeholder="Take a note..." rows="3" value = {letter.content}/>
        <button onClick = {(event)=>{
          props.listenButton(letter,event);
          word({
            title:"",
            content:""
          });
          if(letter.title.length>0){
            updateTypeStatus(true)
          }else{
            updateTypeStatus(false)
          }
      }

      } >Add</button>
      </form>
    </div>
  );

}

export default CreateArea;
