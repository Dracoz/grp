import Indicator from '@/components/Indicator';
import {MAIN_FAILURE_LIST} from '@/components/indicatorList'

export default function MainFailureIndicator({buttonStatus}){
    return (
        <ol>
            {/* "bg-yellow-400" */}
            {MAIN_FAILURE_LIST.map(item => <Indicator color={buttonStatus === "ON" ? "bg-yellow-900" : "bg-yellow-900"} key={item}> {item} </Indicator>)}
        </ol>
    )
}