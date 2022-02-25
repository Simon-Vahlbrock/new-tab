import './boxes.scss'
import Box from "./box/Box";
import {PRIVATE_BOXES, WORK_BOXES} from "../../utils/boxesStore";
import {useMemo} from "react";

const Boxes = () => (
    useMemo(() => (
        <div className='boxes'>
            {/*{PRIVATE_BOXES.map(item => <Box item={item}/>)}*/}
            {WORK_BOXES.map((item) => <Box key={item.name} item={item}/>)}
        </div>
    ), [])
)


export default Boxes