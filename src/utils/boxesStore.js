import youTubeImg from "./images/box/youtube.png";
import netflixImg from "./images/box/netflix.png";
import disneyPlusImg from "./images/box/disney_plus.png";
import twitchImg from "./images/box/twitch.png";
import opgg from "./images/box/opgg.png";

export const boxes = [
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
    },
    /*{
        name: 'Twitch',
        link: 'https://twitch.tv',
        img: twitchImg,
        playlists: [
            {
                name: 'NoWay4u_Sir',
                link: 'https://www.twitch.tv/noway4u_sir'
            },
            {
                name: 'Nightblue3',
                link: 'https://www.twitch.tv/nightblue3'
            }
        ]
    },*/
    {
        name: 'op.gg',
        link: 'https://euw.op.gg/champion/statistics',
        img: opgg,
        playlists: [
            {
                name: 'Taliyha',
                link: 'https://euw.op.gg/champion/taliyah/statistics/support/build'
            }
        ]
    }
]