
import React from "react";
import './../styles/App.css';
import Tab from './Tab'

const tabs=[{title:"Tab 1"}, {title:"Tab 2"}, {title:"Tab 3"}]



const App = () => {
  return (
    <div>
        <Tab tabs={tabs}/>
    </div>
  )
}

export default App
