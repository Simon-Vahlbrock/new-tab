import './boxes.scss'
import Box from "./box/Box";
import {boxes} from "../../utils/boxesStore";

const Boxes = () => {

    return <div className='boxes'>
        {boxes.map(item => <Box item={item}/>)}
    </div>
}

export default Boxes