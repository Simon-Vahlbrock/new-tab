import './box.scss'
import Playlist from "./playlist/Playlist";
import {useState} from "react";

const Box = ({item}) => {
    const [isOver, setIsOver] = useState(false);

    return <div className='box' onMouseOver={()=> setIsOver(true)} onMouseLeave={()=> setIsOver(false)}>
        <a
            href={item.link}
            className='box__default-link'
        >
            <img className='box__img' src={item.img} alt={item.name}/>
            <div className='box__name'>{item.name}</div>
        </a>
            {isOver && (
                <div
                    className='box__playlist'
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    {item.playlists.map(playlist => <Playlist playlist={playlist}/>)}
                </div>
            )}
    </div>
}

export default Box