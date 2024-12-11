import Indicator from '@/components/Indicator';
import {DISCHARGE_LIST} from '@/components/indicatorList'

export default function DischargedIndicator(){
    return (
        <ol>
            {DISCHARGE_LIST.map(item => <Indicator color="bg-yellow-300"> {item} </Indicator>)}
        </ol>
    )
}