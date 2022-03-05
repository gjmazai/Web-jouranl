import '../css/App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Navbar />
            <Content />
        </div >
    );
}

export default App;
