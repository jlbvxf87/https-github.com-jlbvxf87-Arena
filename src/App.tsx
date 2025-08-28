import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import WhoYouBallinWithSection from './components/sections/WhoYouBallinWithSection';
import FindYourRunSection from './components/sections/FindYourRunSection';
import StayInTheLoopSection from './components/sections/StayInTheLoopSection';
import BringReceiptsSection from './components/sections/BringReceiptsSection';
import CreateGamesSection from './components/sections/CreateGamesSection';
import HoopSquadsSection from './components/sections/HoopSquadsSection';
import YourGameLegacySection from './components/sections/YourGameLegacySection';
import BuiltForHoopersSection from './components/sections/BuiltForHoopersSection';
import ReadyToRunSection from './components/sections/ReadyToRunSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-stone-950 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-stone-950 box-border caret-transparent gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-clip">
          <Header />
          <div className="relative content-center items-center bg-stone-950 box-border caret-transparent gap-x-0 contents flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
            <main className="relative content-center items-center box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-start gap-y-0 w-full">
              <HeroSection />
              <WhoYouBallinWithSection />
              <FindYourRunSection />
              <StayInTheLoopSection />
              <BringReceiptsSection />
              <CreateGamesSection />
              <HoopSquadsSection />
              <YourGameLegacySection />
              <BuiltForHoopersSection />
              <ReadyToRunSection />
            </main>
          </div>
          <div className="box-border caret-transparent"></div>
          <div className="relative box-border caret-transparent grow h-0 w-0"></div>
          <div className="relative box-border caret-transparent shrink-0 order-[1002] w-full">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <Footer />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-18.svg" alt="Icon" className="box-border caret-transparent" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-19.svg" alt="Icon" className="box-border caret-transparent" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-20.svg" alt="Icon" className="box-border caret-transparent" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-21.svg" alt="Icon" className="box-border caret-transparent" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-22.svg" alt="Icon" className="box-border caret-transparent h-[13px] w-[13px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-23.svg" alt="Icon" className="box-border caret-transparent h-1 w-3" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-24.svg" alt="Icon" className="box-border caret-transparent h-1 w-[254px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-25.svg" alt="Icon" className="box-border caret-transparent h-[13px] w-3.5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-26.svg" alt="Icon" className="box-border caret-transparent h-3 w-[11px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-27.svg" alt="Icon" className="box-border caret-transparent h-3.5 w-[15px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-28.svg" alt="Icon" className="box-border caret-transparent h-3 w-[13px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-29.svg" alt="Icon" className="box-border caret-transparent h-3 w-3" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-30.svg" alt="Icon" className="box-border caret-transparent h-[19px] w-[19px]" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-31.svg" alt="Icon" className="box-border caret-transparent h-2.5 w-2.5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-32.svg" alt="Icon" className="box-border caret-transparent h-3.5 w-3.5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-33.svg" alt="Icon" className="box-border caret-transparent h-3.5 w-3.5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-34.svg" alt="Icon" className="box-border caret-transparent h-3.5 w-3.5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-35.svg" alt="Icon" className="box-border caret-transparent h-5 w-5" />
        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-36.svg" alt="Icon" className="box-border caret-transparent h-1.5 w-2.5" />
      </div>
      <iframe src="https://framer.com/edit?framerSiteId=4050036b24f1d67d8a9004301dc3027b8f731ac70b11badb3e6aaf86251ffb34&source=www.playpickup.app&features=%257B%2522editorBarDisableFrameAncestorsSecurity%2522%253Afalse%257D&loadStart=1756401815663" className="fixed box-border caret-transparent hidden h-[1000px] w-screen z-[2147483647] left-0 top-0"></iframe>
    </div>
  );
}

export default App;
