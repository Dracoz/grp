"use client";

import {useState} from 'react';

import { roboto } from '@/app/fonts';
import styles from '@/app/page.module.css';

import DisplayBox from '@/components/DisplayBox';

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

    <main className='gap-3'>
      <section className= {`${styles.displayContainer} flex flex-col items-center px-6`}>
        {/* <OnOffButton onClickButton={handleOnOffButton} /> */}
        <OnOffButton onClickButton = {(state: string) => setBtnStatus(state)} reset = {setToEmpty}/>
        <DisplayBox value={btnStatus === "OFF"? 0 : 28.1} name={'VOLTMETER'}/>
        <DisplayBox value={btnStatus === "OFF" ? 0 : 0.08} name={'AMMETER'}/>
        <DisplayBox value={btnStatus === "OFF" ? 0 : 30} name={'DISCHARGED TIMER'}/>
      </section>
      <div>
        <section className= {`${styles.secondContainer} flex item-center justify-around flex-row gap-5`}>
          <div>
            <PowerIndicator buttonStatus={btnStatus}/>
          </div>
          <div>
            <GeneralIndicator buttonStatus={btnStatus} />
          </div>
          <div>
            <MainFailureIndicator buttonStatus={btnStatus} />
          </div>
          <div>
            <MainButton />
          </div>

        </section>

        <section className= {`${styles.thirdContainer} flex items-center justify-around mt-3`}>
          <div className='self-start'>
            <p className='flex justify-center items-center text-white text-xl py-2'>DISCHARGE</p>
            <DischargedIndicator buttonStatus={btnStatus}/>
            <DischargedButton />
          </div>

          <div>
            <p className='flex justify-center items-center text-white text-xl'>SMOKE DET</p>
            <p className='flex justify-center items-center text-white text-sm pb-2 text-stone-300'>ZONE 1A</p>
            <SmokeDetIndicator buttonStatus={btnStatus} whichIndicator={whichButton}/>
            <SmokeDetButton onClickButton={(whichBtn: string) => {setWhichButton(whichBtn)}} />
          </div>

          <div>
            <p className='flex justify-center items-center text-white text-xl'>HEAT DET</p>
            <p className='flex justify-center items-center text-white text-sm pb-2 text-stone-300'>ZONE 1B</p>
            <HeatDetIndicator buttonStatus={btnStatus} whichIndicator={whichHeatButton}/>
            <HeatDetButton onClickButton={(whichBtn: string) => {setWhichHeatButton(whichBtn)}} />
          </div>
        </section>
      </div>
    </main>
    </>
  );
}