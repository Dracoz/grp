import styles from '@/app/page.module.css';

import {ON_OFF_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function DischargedButton({...others}){
    return (
        <ol className='flex items-center'>
            {ON_OFF_BUTTON.map(item => <Button className='px-5'>{item}</Button>)}       
        </ol>
    )
}