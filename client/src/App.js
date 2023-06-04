import './App.css';
import { Route, Routes } from "react-router-dom";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Landing from './components/LandingPage/LandingPage';
import Nav from './components/Nav/Nav';
import { useLocation } from 'react-router-dom';


function App() {
    
    const { pathname } = useLocation();

    
    return (
        <div className="App">
            <div>
                {pathname !== "/" && <Nav />}
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;