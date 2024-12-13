import Indicator from '@/components/Indicator';
import {DISCHARGE_LIST} from '@/components/indicatorList'

export default function DischargedIndicator({buttonStatus}){
    return (
        <ol className='mb-2'>
            {/* bg-yellow-400 */}
            {DISCHARGE_LIST.map(item => <Indicator color={buttonStatus === "ON" ? "bg-yellow-900" : "bg-yellow-900"} key={item}> {item} </Indicator>)}
        </ol>
    )
}