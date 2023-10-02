import React from 'react';
import Counter from './components/Counter';
import CounterClass from "./components/CounterClass";

function App() {
    return (
        <div className="wrapper">
            <div className="wrapper-item">
                <Counter/>
            </div>
            <div className="wrapper-item">
                <CounterClass/>
            </div>
        </div>
    );
}

export default App;
