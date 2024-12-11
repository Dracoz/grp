import Indicator from '@/components/Indicator';
import {POWER_LIST} from '@/components/indicatorList'

export default function PowerIndicator(){
    return (
        <ol>
            {POWER_LIST.map(item => <Indicator color="bg-green-500"> {item} </Indicator>)}
        </ol>
    )
}