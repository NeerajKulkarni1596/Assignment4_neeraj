import './App.css';
import Home from './Home';
import Vulkan from './Vulkan';
import Webgl from './Webgl';
import Opengl from './Opengl';
import Directx from './Directx';
import AppleMetal from './AppleMetal';
import {Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route path='/' exact component={Home}/>
            <Route path='/vulkan' exact component={Vulkan} />
            <Route path='/opengl' exact component={Opengl} />
            <Route path='/webgl' exact component={Webgl} />
            <Route path='/apple-metal' exact component={AppleMetal} />
            <Route path='/directx' exact component={Directx} />
        </div>
    );
}

export default App;
