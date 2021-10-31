import './App.scss';
import Search from "./search/Search";
import Boxes from "./boxes/Boxes";
import {image, loadImages} from "../utils/newBackground";

const App = () => {
    loadImages();
    return (
        <div className="app" style={{backgroundImage: image()}}>
            <div className='app__flex'>
                <div className='app__heading'>
                    <p className='app__heading'>New Tab</p>
                </div>
            </div>
            <div className='app__flex'>
                <Search/>
            </div>
            <div className='app__boxes'>
                <Boxes/>
            </div>
        </div>
    );
}

export default App;
// 2480 x 1440