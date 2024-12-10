import styles from '@/app/page.module.css';

import {HEAT_DET_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function HeatDetButton({...others}){
    return (
        <ol>
            {HEAT_DET_BUTTON.map(item => <Button className={`${styles.pressButton}`}>{item}</Button>)}       
        </ol>
    )
}