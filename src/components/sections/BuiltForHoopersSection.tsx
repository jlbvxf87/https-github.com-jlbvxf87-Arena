import React from 'react';
import { featuresList } from '../../data/featuresList';

const BuiltForHoopersSection: React.FC = () => {
  return (
    <section className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-center gap-y-2.5 w-full overflow-hidden py-[53px] md:py-[140px]">
      <div className="relative content-start items-start box-border caret-transparent gap-x-[60px] flex flex-col shrink-0 h-min justify-center max-w-[440px] gap-y-[60px] w-full z-[1] px-5 md:gap-x-6 md:flex-row md:max-w-screen-xl md:gap-y-6 md:px-7">
        <div className="relative content-start items-start box-border caret-transparent gap-x-0 flex basis-auto flex-col grow-0 shrink-0 h-min justify-start gap-y-0 w-full overflow-clip md:basis-0 md:grow md:w-px">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <h2 className="text-stone-50 text-[120px] box-border caret-transparent leading-[96px] break-words uppercase font-coign_pro_27_bold md:text-[180px] md:leading-[144px]">Built for Hoopers,</h2>
          </div>
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
            <p className="text-neutral-400 text-[120px] box-border caret-transparent leading-[96px] break-words line-through decoration-[3px] uppercase font-coign_pro_27_bold md:text-[180px] md:leading-[144px]">Not Users</p>
          </div>
        </div>
        <ul className="relative content-start items-start box-border caret-transparent gap-x-5 flex basis-auto flex-col grow-0 shrink-0 h-min justify-center list-none gap-y-5 w-full overflow-clip pl-0 md:basis-0 md:grow md:w-px">
          {featuresList.map((feature) => (
            <li key={feature.id} className="relative content-center items-center box-border caret-transparent gap-x-5 flex shrink-0 h-min justify-start gap-y-5 text-left w-full pb-5 after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-none after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-full after:border-neutral-800 after:border-b after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative content-start items-start box-border caret-transparent gap-x-2 flex basis-0 flex-col grow shrink-0 h-min justify-start gap-y-2 w-px">
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                  <p className="text-white text-lg font-semibold box-border caret-transparent tracking-[0.18px] leading-7 break-words text-start font-inter">{feature.title}</p>
                </div>
                <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start break-words w-full">
                  <p className="text-neutral-400 text-sm font-medium box-border caret-transparent tracking-[0.14px] leading-[22px] break-words text-start font-inter">{feature.description}</p>
                </div>
              </div>
              <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-start md:min-h-[52px] md:min-w-[72px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[64px] after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-none after:md:absolute after:md:text-left after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border after:md:border-zinc-800 after:md:rounded-[64px] after:md:border-separate after:md:border-solid after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BuiltForHoopersSection;
