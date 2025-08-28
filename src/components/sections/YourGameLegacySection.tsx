import React from 'react';
import { leaderboardData } from '../../data/leaderboardData';
import LeaderboardCard from '../ui/LeaderboardCard';

const YourGameLegacySection: React.FC = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-0 w-full overflow-clip md:basis-0 md:grow md:h-[560px] md:w-px">
      <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full pt-10 pb-6 px-0 md:px-8">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <h2 className="text-black text-2xl font-bold box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-white md:text-[32px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.32px] md:leading-10 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">Your Game. Your Legacy.</h2>
          </div>
        </div>
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[480px] break-words w-full">
          <p className="text-neutral-300 text-sm font-medium box-border caret-transparent tracking-[0.14px] leading-[22px] break-words font-inter">
            <span className="box-border caret-transparent break-words">Climb local and national leaderboards.</span>
            <br className="box-border caret-transparent break-words" />
            <span className="box-border caret-transparent break-words">Earn badges, level up, and let your stats do the talking.</span>
          </p>
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 h-[340px] w-full overflow-clip md:basis-0 md:grow md:h-px">
        <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[326px] md:left-[calc(50%_-_221px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(50%_-_163px)] md:w-[442px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content caret-black gap-x-[normal] h-auto gap-y-[normal] w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {leaderboardData.map((player, index) => (
                <LeaderboardCard 
                  key={player.id} 
                  player={player} 
                  position={index + 1}
                />
              ))}
              <div className="static shadow-none box-content caret-black shrink h-auto w-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:shadow-[rgba(255,255,255,0.12)_0px_1px_0px_0px_inset,rgba(255,255,255,0.04)_0px_1px_0px_0px_inset,rgba(255,255,255,0)_0px_1px_0px_0px_inset] md:box-border md:caret-transparent md:shrink-0 md:h-[62px] md:left-[calc(50%_-_113px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[226px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:top-[19px]">
                <div className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block flex-row shrink justify-normal gap-y-[normal] p-0 rounded-none inset-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-neutral-700 md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[7px] md:pb-[5px] md:px-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:inset-0">
                  <div className="static bg-none box-content caret-black shrink w-auto z-auto right-auto inset-y-auto md:absolute md:aspect-auto md:bg-[linear-gradient(270deg,rgba(42,42,42,0.91)_0%,rgba(45,45,45,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[52px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-0 md:inset-y-0">
                    <div className="static box-content caret-black shrink h-auto w-auto right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(50%_-_10px)] md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-2.5">
                      <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-16.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                  </div>
                  <div className="static bg-none box-content caret-black shrink opacity-100 w-auto z-auto left-auto inset-y-auto md:absolute md:aspect-auto md:bg-[linear-gradient(90deg,rgba(42,42,42,0.91)_0%,rgba(45,45,45,0)_100%)] md:box-border md:caret-transparent md:shrink-0 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[52px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:inset-y-0">
                    <div className="static box-content caret-black shrink h-auto transform-none w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(50%_-_10px)] md:scale-x-[-1px] md:scale-y-[-1px] md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2.5">
                      <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-16.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                  </div>
                  <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/gyvlWml6sCCCi8azF4hZ2amB7Y.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/61TGjrVgpzkjfHh2lKigUC4lc.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/HHkwUwESDZsR8IEAnB9XhvlnT8.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/Baa5w7U96tuhVc7LV6i2iy5r8g.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:blur-[1px] md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/n6HVuxI5FXdcPabCHFbBCUyvKA.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                    <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[0.772727_/_1] md:box-border md:caret-transparent md:blur-[2px] md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[34px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                        <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/r7DxlCknH84zrcszfiEseizrTOY.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_92_/_120] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="static box-content caret-black shrink h-auto w-auto left-auto bottom-auto md:absolute md:aspect-auto md:bottom-[-5px] md:box-border md:caret-transparent md:shrink-0 md:h-1.5 md:left-[calc(50%_-_5px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2.5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-17.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex flex-col shrink-0 h-min justify-start gap-y-2 w-full px-0 py-6 md:px-8">
        <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
          <p className="text-neutral-400 font-bold box-border caret-transparent tracking-[0.36px] leading-[18px] break-words uppercase font-inter">Hoopers play. Legends rank</p>
        </div>
      </div>
    </div>
  );
};

export default YourGameLegacySection;
