import Indicator from '@/components/Indicator';
import {MAIN_FAILURE_LIST} from '@/components/indicatorList'

export default function MainFailureIndicator(){
    return (
        <ol>
            {MAIN_FAILURE_LIST.map(item => <Indicator color="bg-yellow-300"> {item} </Indicator>)}
        </ol>
    )
}