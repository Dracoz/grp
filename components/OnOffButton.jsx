import {useState} from 'react';

import {ON_OFF_BUTTON} from '@/components/buttonList';
import Button from '@/components/Button'

export default function OnOffButton({onClickButton, reset}){
    const [clickBtn, setClickBtn] = useState("ON");

    function swicthButton(btn){
        setClickBtn(btn === "OFF"? "ON" : "OFF");

        onClickButton(clickBtn);
        reset()
    }

    function getColor(curButton){
        if(clickBtn !== curButton){
            return `${curButton === "OFF" ? "text-red-500" : "text-green-400" }`
        }else {
            return `text-white`
        }
    }

    return (
        <ol className='flex items-center'>
            {ON_OFF_BUTTON.map(item => 
            <Button 
            className={`px-5 pt-2 ${item === "ON" ? "hover:text-green-400" : "hover:text-red-500"} ${getColor(item)}
            `}
            disabled = {item != clickBtn}
            onClick = {() => swicthButton(item)}
            key={item}>{item}
            </Button>
            )}  
        </ol>
    )
}