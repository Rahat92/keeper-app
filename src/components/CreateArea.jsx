import React ,{useState,useEffect,useRef} from "react";

function CreateArea(props) {
  const [click,setClick] = useState(true);

  const focusEffect = useRef(null);
  
  const addClick = ()=>{
    setClick(prev=>{
      return !prev
    })
  }
  useEffect(()=>{
      focusEffect.current.focus()
  },[click])
  const [typeStatus,updateTypeStatus] = useState(true);
	const [letter,word] = useState({
      title : "",
      content : ""
  });

  function traceInput(event){
    const {name,value} = event.target;
    if(name ==="title"&& value.length>0){
      updateTypeStatus(true)
    }
    word(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })
}
  return (
    <div>{props.trackChange(typeStatus)}
      <form action = "">
        <input ref = {focusEffect} onChange = {traceInput}
        name="title" placeholder="Title" value = {letter.title} />
        <textarea onChange = {traceInput} name="content" placeholder="Take a note..." rows="3" value = {letter.content}/>
        <button onClick = {(event)=>{
          addClick();
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
