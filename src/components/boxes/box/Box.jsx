import './box.scss'
import Playlist from "./playlist/Playlist";

const Box = ({item}) => {
    return <div className='box'>
        <a
            href={item.link}
            className='box__default-link'
        >
            <img className='box__img' src={item.img} alt={item.name}/>
            <div className='box__name'>{item.name}</div>
        </a>
        <div className='box__playlists'>
            {item.playlists.map(playlist => <Playlist playlist={playlist}/>)}
        </div>
    </div>
}

export default Box