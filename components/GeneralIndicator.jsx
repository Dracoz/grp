import Indicator from '@/components/Indicator';
import {GENERAL_LIST} from '@/components/indicatorList'

export default function GeneralIndicator(){
    return (
        <ol>
            {GENERAL_LIST.map(item => <Indicator> {item} </Indicator>)}
        </ol>
    )
}