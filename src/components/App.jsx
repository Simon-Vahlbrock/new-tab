import './App.scss';
import img1 from '../utils/images/app-background/1.jpg'
import img2 from '../utils/images/app-background/2.jpg'
import img3 from '../utils/images/app-background/3.jpg'
import img4 from '../utils/images/app-background/4.jpg'
import img5 from '../utils/images/app-background/5.jpg'
import Search from "./search/Search";
import Boxes from "./boxes/Boxes";

function App() {
    const rand = (max, min) => Math.floor(Math.random() * (max - min + 1))
    const image = () => {
        switch (rand(4, 0)) {
            case 0:
                return `url(${img1})`
            case 1:
                return `url(${img2})`
            case 2:
                return `url(${img3})`
            case 3:
                return `url(${img4})`
            case 4:
                return `url(${img5})`
            default:
                return `url(${img1})`
        }
    }
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
