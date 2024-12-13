import styles from '@/app/page.module.css';

import {SMOKE_DET_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function SmokeDetButton({onClickButton}){

    function handleTestFire(btn){
        console.log(btn)
        onClickButton(btn)
    }

    return (
        <ol>
            {SMOKE_DET_BUTTON.map(item => 
            <Button className={`${styles.pressButton} bg-orange-500 hover:bg-orange-700 text-stone-800`}
            onClick={() => handleTestFire(item)} 
            key={item}>{item}
            </Button>
        )}       
        </ol>
    )
}