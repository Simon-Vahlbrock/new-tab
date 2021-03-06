import youTubeImg from "./images/box/youtube.png";
import netflixImg from "./images/box/netflix.png";
import disneyPlusImg from "./images/box/disney_plus.png";
import opgg from "./images/box/opgg.png";
import communication from './images/box/communication.png';
import chayns from './images/box/chayns.png';
import gitmoji from './images/box/gitmoji.png';
import tobit from './images/box/tobit.png'

export const PRIVATE_BOXES = [
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

export const WORK_BOXES = [
    {
        name: 'Communication',
        link: 'https://communication-entertainment.chayns.net/',
        img: communication,
        playlists: [
            {
                name: 'Development',
                link: 'https://communication-entertainment.chayns.net/localdev'
            },
            {
                name: 'LineSorter',
                link: 'https://communication-entertainment.chayns.net/line-sorter'
            }
        ]
    },
    {
        name: 'chayns',
        link: 'https://chayns.de/',
        img: chayns,
        playlists: [
            {
                name: 'components',
                link: 'https://github.com/TobitSoftware/chayns-components'
            },
            {
                name: 'Blog',
                link: 'https://chayns.net/blog'
            },
            {
                name: 'Storybook',
                link: 'https://components.chayns.net/storybook'
            }
        ]
    },
    {
        name: 'Tobit',
        link: '',
        img: tobit,
        playlists: [
            {
                name: 'GitLab',
                link: 'https://gitlab.tobit.com'
            },
            {
                name: 'TeamCity',
                link: 'https://teamcity.tobit.ag/favorite/projects?mode=trends'
            },
            {
                name: 'Tagesbericht',
                link: 'https://labs.tobit.com/hRDashboard'
            },
            {
                name: 'Themen??bersicht',
                link: 'https://labs.tobit.com/themen'
            }
        ],
    },
    {
        name: 'Gitmoji',
        link: 'https://gitmoji.dev/',
        img: gitmoji,
        playlists: []
    }
]