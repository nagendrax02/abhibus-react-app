import {Modal} from "./modal"
import {useState} from "react";
function Login(){
     const[modals,showModal] = useState(false);
     return <><button style={{textAlign:"center"}} onClick={()=>{
         showModal(true);
     }}>
         Click me to show login
     </button>
    {modals && <Modal show={showModal}/>}
    </>
}
export {Login}