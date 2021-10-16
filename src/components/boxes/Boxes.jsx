import './boxes.scss'
import Box from "./box/Box";
import youTubeImg from '../../../src/utils/images/box/youtube.png'
import disneyPlusImg from '../../../src/utils/images/box/disney_plus.png'
import netflixImg from '../../../src/utils/images/box/netflix.png'

const Boxes = () => {
    const boxes = [
        {
            name: 'YouTube',
            link: 'https://youtube.com',
            img: youTubeImg,
            playlists: [
                {
                    name: 'GoodPianoVibes',
                    link: 'https://www.youtube.com/watch?v=NQMmZ4Psb7w&list=PLcU4ABMVfvKDaYIo5QdfCi1Op3G9MV3cb'
                }
            ]
        },
        {
            name: 'netflix',
            link: 'https://www.netflix.com/browse',
            img: netflixImg,
            playlists: []
        },
        {
            name: 'Disney+',
            link: 'https://www.disneyplus.com/de-de/home',
            img: disneyPlusImg,
            playlists: []
        }
    ]
    return <div className='boxes'>
        {boxes.map(item => <Box item={item}/>)}
    </div>
}

export default Boxes