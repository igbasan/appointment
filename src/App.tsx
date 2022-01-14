import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./component/landing/Index";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";

const App =()=> {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
           
        </Router>
    );
}

export default App;
