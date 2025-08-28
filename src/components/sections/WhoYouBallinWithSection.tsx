import React from 'react';
import { playerData } from '../../data/playerData';
import PlayerCard from '../ui/PlayerCard';
import JoinWaitlistButton from '../ui/JoinWaitlistButton';

const WhoYouBallinWithSection: React.FC = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden pt-[100px] pb-10 md:pt-60 md:pb-40">
      <div className="relative content-center items-center box-border caret-transparent gap-x-12 flex flex-col shrink-0 h-min justify-center max-w-[440px] gap-y-12 w-full z-[1] px-5 md:max-w-screen-xl md:px-7">
        <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex shrink-0 h-min justify-center gap-y-4 w-min overflow-clip">
          <div className="relative aspect-[0.537037_/_1] box-border caret-transparent shrink-0 w-[29px] overflow-clip">
            <div className="absolute box-border caret-transparent inset-0">
              <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/46.svg" alt="Decorative Element" className="aspect-[auto_29_/_54] box-border caret-transparent h-full object-cover w-full" />
            </div>
          </div>
          <div className="relative aspect-square bg-white box-border caret-transparent shrink-0 w-20 overflow-clip rounded-[80px]">
            <div className="absolute aspect-square box-border caret-transparent shrink-0 translate-x-[-50.0%] translate-y-[-50.0%] w-[165%] left-2/4 top-2/4">
              <video src="https://framerusercontent.com/assets/CXS2vjvNxwXIPBzQr4Ll9dtHUo.mp4" loop preload="auto" muted playsInline autoPlay className="box-border caret-transparent h-full object-cover w-full"></video>
            </div>
          </div>
          <div className="relative aspect-[0.537037_/_1] box-border caret-transparent shrink-0 w-[29px] overflow-clip">
            <div className="absolute box-border caret-transparent inset-0">
              <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/54.svg" alt="Decorative Element" className="aspect-[auto_29_/_54] box-border caret-transparent h-full object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="relative content-center items-center box-border caret-transparent gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
          <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min z-[1] overflow-clip">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words text-wrap w-[290px] md:text-nowrap md:w-auto md:break-normal">
              <h2 className="text-stone-50 text-[180px] box-border caret-transparent leading-[144px] break-words text-center uppercase text-wrap font-coign_pro_27_bold md:text-[330px] md:leading-[264px] md:text-nowrap md:break-normal">Who You Ballin' With?</h2>
            </div>
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink [mask-mode:match-source] [mask-repeat:repeat] [mask-size:auto] z-auto inset-auto md:[mask-image:url('https://c.animaapp.com/mevoah3qcxP2EM/assets/1.svg')] md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:[mask-mode:alpha] md:[mask-repeat:no-repeat] md:[mask-size:cover] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:overflow-clip md:[mask-position:50%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                  <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/45.png" alt="" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_1344_/_693] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-min justify-center max-w-[880px] gap-y-6 w-full md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
            <div className="relative content-center items-center box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-start gap-y-3 w-full md:flex-row md:w-min">
              <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-start gap-y-2 w-min">
                {playerData.activePlayers.map((player, index) => (
                  <PlayerCard
                    key={player.id}
                    player={player}
                    tooltipClass={`tw_cls_${73 + index}`}
                  />
                ))}
              </div>
              <div className="static bg-transparent box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto rounded-none md:relative md:aspect-auto md:bg-white/20 md:box-border md:caret-transparent md:shrink-0 md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-sm"></div>
              <div className="relative content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-start gap-y-2 w-min">
                {playerData.availableSpots.map((spot, index) => (
                  <a key={spot.id} aria-label="Join the game" href="./#join-waitlist" className="relative text-blue-700 content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min">
                    <PlayerCard
                      player={spot}
                      tooltipClass={`static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-w-0 opacity-100 gap-y-[normal] transform-none origin-[50%_50%] w-auto z-auto p-0 rounded-none left-auto bottom-auto md:absolute md:content-center md:items-center md:aspect-auto md:bg-neutral-900 md:bottom-[-34px] md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-w-10 md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:-translate-x-5 md:origin-[50%_0%] md:w-min md:z-[1] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:scale-[0.75px] md:left-2/4 after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-solid after:md:border-white/0 after:md:left-0 after:md:top-0 after:md:font-sans_serif`}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <JoinWaitlistButton 
                  href="./#join-waitlist" 
                  className="static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-1 md:flex md:h-11 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-clip md:[mask-position:0%] md:bg-left-top md:px-[22px] md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[14px]"
                >
                  Join the game
                </JoinWaitlistButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoYouBallinWithSection;
