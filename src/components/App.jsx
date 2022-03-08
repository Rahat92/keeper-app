import React , {useState,useRef,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import ForwardArea from "./CreateArea";
const style = {
	color:"black",
	textDecoration:"underline",
	textAlign:"center",
	marginTop:"20px"
}
function App() {
	const [clickdel,updateClickdel] = useState(false);
	const [clickDel,updateClickDel] = useState(false);
	const [Click,updateClick] = useState(true);
  const AfterClick = useRef();
  function afterClick(){
    updateClick(prev=>!Click)
  }
  useEffect(()=>{
    AfterClick.current.focus();
  },[Click,clickDel])
	const [ok,updateOk] = useState(false);
	const [input,inputArray] = useState([
		]);


function seeChange(typeStatus){
	if(typeStatus===true){
		updateOk(false)
	}else{

		updateOk(true)
	}

}
function addtoNote(letter,event){
	updateClickdel(false);
	event.preventDefault();
	if(letter.title.length>0){
		updateOk(false);
		inputArray(prev=>{
			return( 
				[...prev,letter]
			) 
			
	});
	}
}
function itemToDelete(id){
	updateClickdel(true);
	updateClickDel(prev=>{
		return !prev
	});
	inputArray(prev=>{

		return prev.filter((item,index)=>{
			return index!==id;
		})
	})
}
  return (
    <div>
      <Header />
      <ForwardArea
      	ref = {AfterClick}
      	afterClick = {afterClick}
      	listenButton = {addtoNote}
      	trackChange = {seeChange}
      />
    <div className = "alertDiv">
    	{
    	!clickdel&&ok?<p id = "alert" style = {style}>আপনাকে অবশ্যই একটি টাইটেল দিতে হবে!</p>:null
    	}
    </div>
    {
    	input.map((item,index)=>{
    			return <Note 
    			id ={index} 
    			key={index} 
    			title={item.title} 
    			content={item.content} 
    			deleteItem = {itemToDelete}
    			/>
    })

    }
      
      <Footer />
    </div>
  );
}

export default App;
