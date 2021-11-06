import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [ok,updateOk] = useState(false);
	const [input,inputArray] = useState([
		]);


function seeChange(typeStatus){
	if(typeStatus===true){
		updateOk(false)
		console.log("typing")
	}else{

		updateOk(true)
	}

}
function addtoNote(letter,event){
	event.preventDefault();
	if(letter.title.length>0){
		updateOk(false);
		inputArray(prev=>{
			return( 
				[...prev,letter]
			) 
			
	});
	}else if(letter.title.length === 0){
		updateOk(true);
	}
}
  return (
    <div>
      <Header />
      <CreateArea 
      	
      	listenButton = {addtoNote}
      	trackChange = {seeChange}
      />
    {
    	ok?<p style = {{color:"red",textDecoration:"underline"}}>আপনাকে অবশ্যই একটি টাইটেল লিখতে হবে!</p>:null
    }
    {
    	input.map((item,index)=>{
    			return <Note id ={index} key={index} title={item.title} 
    			content={item.content} />
    })

    }
      
      <Footer />
    </div>
  );
}

export default App;
