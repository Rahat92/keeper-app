import React ,{useState,useEffect,useRef} from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props,rref) {
  
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
        <input ref = {rref} onChange = {traceInput}
        name="title" placeholder="Title" value = {letter.title} />
        <textarea onChange = {traceInput} name="content" placeholder="Take a note..." rows="3" value = {letter.content}/>
        <button onClick = {(event)=>{
          props.afterClick();
          props.listenButton(letter,event);
          if(letter.content.length>0&&letter.title.length===0){
            word(prev=>{
              return {
                title:"",
                content:prev.content
              }
            })
          }else{
            word({
              title:"",
              content:""
            })
          }
          if(letter.title.length===0){
            updateTypeStatus(false)
          }
      }

      } ><AddIcon/></button>
      </form>
    </div>
  );

}
const ForwardArea = React.forwardRef(CreateArea)
export default ForwardArea;
