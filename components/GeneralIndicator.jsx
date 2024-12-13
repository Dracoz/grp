import Indicator from '@/components/Indicator';
import {GENERAL_LIST} from '@/components/indicatorList'

export default function GeneralIndicator({buttonStatus}){
    return (
        <ol>
            {GENERAL_LIST.map(item => <Indicator 
            color= {
                // "bg-red-600" : "bg-yellow-400"
                buttonStatus === "ON" ? item === "GENERAL ALARM" ? "bg-red-900" : "bg-yellow-900" : item === "GENERAL ALARM" ? "bg-red-900" : "bg-yellow-900"
            }
            key={item}> {item} </Indicator>)}
        </ol>
    )
}