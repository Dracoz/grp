import Indicator from '@/components/Indicator';
import {SMOKE_DET_LIST} from '@/components/indicatorList'

export default function SmokeDetIndicator(){
    return (
        <ol>
            {SMOKE_DET_LIST.map(item => <Indicator color="bg-yellow-300"> {item} </Indicator>)}
        </ol>
    )
}