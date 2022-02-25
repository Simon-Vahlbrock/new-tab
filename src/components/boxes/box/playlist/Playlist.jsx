import './playlist.scss'
import {useMemo} from "react";

const Playlist = ({playlist}) => {
    return useMemo(()=> (
        <div className='playlist'>
            <a
                className='playlist__link'
                href={playlist.link}
            >
                <div>{playlist.name}</div>
            </a>
        </div>
    ), [playlist.link, playlist.name])
}
export default Playlist