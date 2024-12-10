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
  return (
    <>
      <header>
        <h1 className= {`${roboto.className} font-semibold p-3 flex items-center justify-center`}>Gas Releasing Control Panel</h1>
      </header>

    <main>
      <section className= {`${styles.displayContainer} flex flex-col items-center`}>
        <OnOffButton />
        <DisplayBox value={28.1} name={'VOLTMETER'}/>
        <DisplayBox value={0.08} name={'AMMETER'}/>
        <DisplayBox value={30} name={'DISCHARGED TIMER'}/>
      </section>
      <div>
        <section className= {`${styles.secondContainer} flex item-center justify-around flex-col md:flex-row`}>
          <div>
            <PowerIndicator />
          </div>
          <div>
            <GeneralIndicator />
          </div>
          <div>
            <MainFailureIndicator />
          </div>
          <div>
            <MainButton />
          </div>

        </section>

        <section className= {`${styles.thirdContainer} flex items-center justify-around`}>
          <div className='self-start text-white'>
            <p className='flex justify-center items-center'>DISCHARGE</p>
            <DischargedIndicator />
            <DischargedButton />
          </div>

          <div className='text-white'>
            <p className='flex justify-center items-center'>SMOKE DET</p>
            <p className='flex justify-center items-center'>ZONE 1A</p>
            <SmokeDetIndicator />
            <SmokeDetButton />
          </div>

          <div className='text-white'>
            <p className='flex justify-center items-center'>HEAT DET</p>
            <p className='flex justify-center items-center'>ZONE 1B</p>
            <HeatDetIndicator />
            <HeatDetButton />
          </div>
        </section>
      </div>
    </main>
    </>
  );
}