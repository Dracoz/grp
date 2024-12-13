import Indicator from '@/components/Indicator';
import {HEAT_DET_LIST} from '@/components/indicatorList'

export default function HeatDetIndicator({buttonStatus, whichIndicator}){

    function getColor(indicator){

        if (buttonStatus === "ON" && whichIndicator === "TEST FIRE"){
            return `${indicator === "FIRE" ? "bg-red-600" : "bg-yellow-900"}`
        } else if(buttonStatus === "ON" && indicator !== "FIRE"){
            return `${(whichIndicator === "TEST FAULT" && indicator === "FAULT") || whichIndicator === indicator ? "bg-yellow-400" : "bg-yellow-900"}`
        } else{
            return `${buttonStatus === "OFF" ? indicator === "FIRE" ? "bg-red-900" : "bg-yellow-900" : indicator === "FIRE" ? "bg-red-900" : "bg-yellow-900"}`
        }
    }

    return (
        <ol className='mb-2'>
            {HEAT_DET_LIST.map(item => <Indicator color={getColor(item)} key={item}> {item} </Indicator>)}
        </ol>
    )
}