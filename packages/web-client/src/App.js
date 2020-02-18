import React from 'react';
import ReactDOM from "react-dom";
import Rooms from './js/components/Rooms'
import Users from './js/components/Users'
import Talks from './js/components/Talks'

const App = () => {
    return (
        <div>
            
        </div>
    );
};

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;