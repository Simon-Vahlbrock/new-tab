import './playlist.scss'

const Playlist = ({playlist}) => {
    return <div className='playlist'>
        <a
            className='playlist__link'
            href={playlist.link}
        >
            <div>{playlist.name}</div>
        </a>
    </div>
}
export default Playlist