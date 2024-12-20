"use client";

import {useState} from 'react';

import { roboto } from '@/app/fonts';
import styles from '@/app/page.module.css';

import DisplayBox from '@/components/DisplayBox';
import DischargeDisplayBox from '@/components/DischargeDisplayBox'

import OnOffButton from '@/components/OnOffButton';
import MainButton from '@/components/MainButton';
import DischargedButton from '@/components/DischargedButton';
import SmokeDetButton from '@/components/SmokeDetButton';
import HeatDetButton from '@/components/HeatDetButton';

import PowerIndicator from '@/components/PowerIndicator';
import GeneralIndicator from '@/components/GeneralIndicator';
import MainFailureIndicator from '@/components/MainFailureIndicator';
import DischargedIndicator from '@/components/DischargedIndicator';
import SmokeDetIndicator from '@/components/SmokeDetIndicator';
import HeatDetIndicator from '@/components/HeatDetIndicator';

export default function Home(){
  const [btnStatus, setBtnStatus] = useState("OFF");
  const [whichButton, setWhichButton] = useState("");
  const [whichHeatButton, setWhichHeatButton] = useState("");

  function setToEmpty(){
    setWhichButton("");
    setWhichHeatButton("");
  }

  return (
    <>
      <header>
        <h1 className= {`${roboto.className} font-semibold p-3 flex items-center justify-center`}>Gas Releasing Control Panel</h1>
      </header>

      <main className= {`${styles.displayContainer} md:mt-20 mt-5`}>
        <section className='gap-x-6 flex flex-col md:flex-row items-start py-3 px-2'>
          <div>
            <OnOffButton onClickButton = {(state: string) => setBtnStatus(state)} reset = {setToEmpty}/>
            <DisplayBox value={btnStatus === "OFF"? 0 : 28.1} name={'VOLTMETER'}/>
            <DisplayBox value={btnStatus === "OFF" ? 0 : 0.08} name={'AMMETER'}/>
          </div>

          <div className='flex flex-col'>
            <PowerIndicator buttonStatus={btnStatus}/>
            <MainButton />
          </div>
          <div className='flex flex-col'>
            <div className='mb-6'>
            <GeneralIndicator buttonStatus={btnStatus} />
            </div>
            <div>
            <MainFailureIndicator buttonStatus={btnStatus} />
            </div>
          </div>

          <div className='flex flex-col md:flex-row border-solid border-2 border-slate-400 rounded-md p-2 space-x-5'>
            <div>
              <p className='flex justify-center items-center text-white text-xl'>SMOKE DET</p>
              <p className='flex justify-center items-center text-white text-sm pb-2 text-stone-400'>ZONE 1A</p>
              <SmokeDetIndicator buttonStatus={btnStatus} whichIndicator={whichButton}/>
              <SmokeDetButton onClickButton={(whichBtn: string) => {setWhichButton(whichBtn)}} />
            </div>

            <div>
              <p className='flex justify-center items-center text-white text-xl'>HEAT DET</p>
              <p className='flex justify-center items-center text-white text-sm pb-2 text-stone-400'>ZONE 1B</p>
              <HeatDetIndicator buttonStatus={btnStatus} whichIndicator={whichHeatButton}/>
              <HeatDetButton onClickButton={(whichBtn: string) => {setWhichHeatButton(whichBtn)}} />
            </div>

            <div className='self-start'>
            <p className='text-white text-xl'>DISCHARGE TIMER</p>
              <DischargeDisplayBox value={btnStatus === "OFF" ? 0 : 30}/>
              <DischargedIndicator buttonStatus={btnStatus}/>
              <DischargedButton />
            </div>
          </div>

        </section>
      </main>
      
    </>
  );
}