import React from 'react';
import ReactDOM from 'react-dom/client'
const App = ()=> {
    return (
        <div>
            <h1 className='text-blue-800 text-xl '> Hello </h1>
            <h1 className='m-20 border-red-700 text-6xl text-red-600 italic font-mono ' >Hi my dear Friends</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);