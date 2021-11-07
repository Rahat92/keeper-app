import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
const style = {
	color:"red",
	textDecoration:"underline",
	textAlign:"center",
	marginTop:"20px"
}
function App() {
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
function itemToDelete(id){
	inputArray(prev=>{

		return prev.filter((item,index)=>{
			return index!==id;
		})
	})
}
  return (
    <div>
      <Header />
      {
    	ok?<p style = {style}>আপনাকে অবশ্যই একটি টাইটেল দিতে  হবে!</p>:null
    }
      <CreateArea 
      	
      	listenButton = {addtoNote}
      	trackChange = {seeChange}
      />
    
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
