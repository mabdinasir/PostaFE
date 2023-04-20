import AppBar  from "./features/appBar/AppBar";
import { useState } from "react";

const App = () => {
    const [state, setState] = useState("");
    return <AppBar />;
};

export default App;
