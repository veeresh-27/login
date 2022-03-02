import React from "react";
import info from './components/info.json'
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

import Pricingcards from "./components/Pricingcards/Pricingcards";

function App() {
    
    return <div className="app">
        
        <Navbar/>
        <Pricing/>
</div>;
        
}

export default App;