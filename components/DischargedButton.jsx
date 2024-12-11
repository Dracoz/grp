import styles from '@/app/page.module.css';

import {DISCHARGE_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function DischargedButton({...others}){
    return (
        <ol>
            {DISCHARGE_BUTTON.map(item => <Button className={`${styles.pressButton} bg-sky-500 hover:bg-sky-700`}>{item}</Button>)}       
        </ol>
    )
}