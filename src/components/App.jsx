import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
	
	const [input,inputArray] = useState([
		]);



function addtoNote(letter,event){
	console.log(event.target.value)
	event.preventDefault();
	if(letter.title.length>0){
		inputArray(prev=>{
			return( 
				[...prev,letter]
			) 
			
	});
	}

}
  return (
    <div>
      <Header />
      <CreateArea 
      	
      	listenButton = {addtoNote}
      />
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
