import styles from '@/app/page.module.css';

import {SMOKE_DET_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function SmokeDetButton({...others}){
    return (
        <ol>
            {SMOKE_DET_BUTTON.map(item => <Button className={`${styles.pressButton}`}>{item}</Button>)}       
        </ol>
    )
}