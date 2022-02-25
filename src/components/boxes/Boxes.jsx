import './boxes.scss'
import Box from "./box/Box";
import {PRIVATE_BOXES, WORK_BOXES} from "../../utils/boxesStore";

const Boxes = () => {

    return <div className='boxes'>
        {/*{PRIVATE_BOXES.map(item => <Box item={item}/>)}*/}
        {WORK_BOXES.map((item)=> <Box item={item}/>)}
    </div>
}

export default Boxes