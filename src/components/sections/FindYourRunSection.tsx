import React from 'react';
import { gameFilters } from '../../data/gameFilters';

const FindYourRunSection: React.FC = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden py-0 md:py-[140px]">
      <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center max-w-[440px] gap-y-0 w-full z-[1] px-5 md:content-center md:items-center md:max-w-screen-xl md:px-7">
        <div className="relative content-start items-start box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center overflow-y-clip gap-y-10 w-full md:gap-x-0 md:flex-row md:h-[560px] md:gap-y-0 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-zinc-800 after:border-b after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
          <div className="relative box-border caret-transparent basis-auto grow-0 shrink-0 h-[400px] order-1 w-full md:basis-0 md:grow md:h-full md:order-none md:w-px">
            <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="static box-content caret-black shrink h-auto w-auto left-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[560px] md:left-[calc(50%_-_286px)] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(50%_-_280px)] md:w-[572px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black h-auto w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static box-content caret-black shrink w-auto left-auto top-auto md:[mask-image:radial-gradient(86%_100%_at_0%_0%,rgb(0,0,0)_36.5903%,rgba(0,0,0,0)_100%)] md:absolute md:aspect-[1.23529_/_1] md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[840px] md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                    <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                      <img sizes="840px" src="https://c.animaapp.com/mevoah3qcxP2EM/assets/KKGpvZmuWoC7rnHI2jRmOgP5Xo.svg" alt="Map" className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_840_/_680] md:box-border md:caret-transparent md:h-full md:object-contain md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                    </div>
                  </div>
                  <div className="static box-content caret-black shrink inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center gap-y-8 w-full overflow-clip md:basis-0 md:grow md:h-full md:w-px">
            <div className="relative content-start items-start box-border caret-transparent gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full pl-0 md:pl-8">
              <div className="relative content-start items-start box-border caret-transparent gap-x-3 flex flex-col shrink-0 h-min justify-start gap-y-3 w-full">
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                  <h2 className="text-white text-8xl box-border caret-transparent tracking-[0.96px] leading-[76.8px] break-words text-left uppercase font-coign_pro_27_bold md:text-[148px] md:tracking-[1.48px] md:leading-[118.4px]">Find Your Next Run</h2>
                </div>
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start max-w-[490px] break-words w-full">
                  <p className="text-neutral-300 text-base font-medium box-border caret-transparent tracking-[0.16px] leading-[26px] break-words font-inter">Discover open courts and competitive games happening near you. Filter by level, time, or location—and claim your spot.</p>
                </div>
              </div>
              <div className="relative content-start items-start box-border caret-transparent gap-x-4 flex flex-col shrink-0 flex-nowrap h-min justify-start gap-y-3 w-full md:content-center md:items-center md:flex-row md:flex-wrap">
                {gameFilters.map((filter) => (
                  <div key={filter.id} className="relative content-center items-center box-border caret-transparent gap-x-2 flex shrink-0 h-min justify-start gap-y-2 w-min">
                    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static box-content caret-black gap-x-[normal] shrink min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:aspect-square md:box-border md:caret-transparent md:gap-x-0 md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-4 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
                          <img src={filter.icon} alt={filter.alt} className="box-content caret-black h-auto object-fill align-middle w-auto md:aspect-[auto_16_/_17] md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start text-nowrap">
                      <p className="text-neutral-400 font-bold box-border caret-transparent tracking-[0.36px] leading-[18px] uppercase text-nowrap font-inter">{filter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourRunSection;
