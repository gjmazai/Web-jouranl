import '../css/App.css';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import Test from "./Test";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SubjectDetailContainer from './Content/SubjectDetail/SubjectDetailConteiner';


const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='App'>
                            <Header />
                            <Navbar />
                            <div className='app-wraper'>
                                <Routes>
                                    <Route path="/content/:id" element={<SubjectDetailContainer />} />
                                </Routes>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </BrowserRouter >
    );
}

export default App;
