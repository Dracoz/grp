import Indicator from '@/components/Indicator';
import {HEAT_DET_LIST} from '@/components/indicatorList'

export default function HeatDetIndicator(){
    return (
        <ol>
            {HEAT_DET_LIST.map(item => <Indicator color="bg-yellow-300"> {item} </Indicator>)}
        </ol>
    )
}