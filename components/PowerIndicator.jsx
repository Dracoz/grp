import Indicator from '@/components/Indicator';
import {POWER_LIST} from '@/components/indicatorList'

export default function PowerIndicator({buttonStatus}){
    return (
        <ol>
            {POWER_LIST.map(item => 
            <Indicator 
            color = {buttonStatus === "ON" ? "bg-green-400" : "bg-green-900"}
            key={item}> {item} 
            </Indicator>)}
        </ol>
    )
}