import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from "./components/pages/MainPage";
import ComixPage from "./components/pages/ComixPage";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import SingleComixPage from "./components/pages/SingleComixPage";
import SingleHeroPage from "./components/pages/SingleHeroPage";


const App  = () => {

    return (
        <Router>
            <div className="w-[1100px] mx-auto pb-14">
                <Header/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/comics' element={<ComixPage/>}/>
                    <Route path='/comics/:comicId' element={<SingleComixPage/>}/>
                    <Route path='/:name' element={<SingleHeroPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>
                </Routes>
            </div>
        </Router>

    );

}

export default App;
