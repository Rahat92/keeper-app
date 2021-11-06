import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [click,updateClick] = useState(false);
	const [inputStatus,updateStatus] = useState(false);
	const [ok,updateOk] = useState(false);
	const [input,inputArray] = useState([
		]);



function addtoNote(letter,event){
	updateClick(true);
	event.preventDefault();
	if(letter.title.length>0){
		updateStatus(true);
		updateOk(false);
		inputArray(prev=>{
			return( 
				[...prev,letter]
			) 
			
	});
	}else{
		updateOk(true);
	}

}
  return (
    <div>
      <Header />
      <CreateArea 
      	
      	listenButton = {addtoNote}
      />
    {
    	ok?<p>Please Enter a title Please</p>:null
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
