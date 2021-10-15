import './App.css';
import img1 from '../utils/images/1.jpg'
import img2 from '../utils/images/2.jpg'
import img3 from '../utils/images/3.jpg'
import img4 from '../utils/images/4.jpg'
import img5 from '../utils/images/5.jpg'

function App() {
    const rand = (max, min) => Math.floor(Math.random() * (max - min + 1))
    const image = () => {
        console.log(rand(4,0))
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
        }
    }


    return (
        <div className="app" style={{backgroundImage: image()}}>
            Hallo
        </div>
    );
}

export default App;
