import './box.scss'
import Playlist from "./playlist/Playlist";
import {useCallback, useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Box = ({item}) => {
    const [isOver, setIsOver] = useState(false);

    const handleMouseOver = useCallback(() => {
        if (isOver === false) {
            setIsOver(true);
        }
    }, [isOver])

    const handleMouseLEave = useCallback(() => {
        if (isOver === true) {
            setIsOver(false)
        }
    }, [isOver])

    return useMemo(() => (
        <div className='box' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLEave}>
            <a
                href={item.link}
                className='box__default-link'
            >
                <img className='box__img' src={item.img} alt={item.name}/>
                <div className='box__name'>{item.name}</div>
            </a>
            <AnimatePresence>
                {isOver && (
                    <motion.div
                        className='box__playlist'
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                    >
                        {item.playlists.map(playlist => <Playlist key={playlist.name} playlist={playlist}/>)}
                    </motion.div >
                )}
            </AnimatePresence>
        </div>
    ), [handleMouseLEave, handleMouseOver, isOver, item.img, item.link, item.name, item.playlists])
}

export default Box