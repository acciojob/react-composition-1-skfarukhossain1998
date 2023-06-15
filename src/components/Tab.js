import React, { useState } from "react";
const Tab=({tabs})=>{
const [tabClick,setTabClick]=useState("");
/* function handleCheck(){
        setTabClick(tabs.title)
} */




return (
<div>
    <ul>
        {
            tabs.map((tab)=>(
                <li
                onClick={()=>setTabClick(tab.contents)}
                >{tab.titles}</li>
            ))
        }

     </ul>
    {
    tabClick &&
    <p>This is content for {tabClick}</p>
    
    }

</div>

)
}
export default Tab;

