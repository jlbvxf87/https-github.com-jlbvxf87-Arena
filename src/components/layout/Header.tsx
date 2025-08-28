import React from 'react';
import JoinWaitlistButton from '../ui/JoinWaitlistButton';

const Header: React.FC = () => {
  return (
    <div className="fixed box-border caret-transparent shrink-0 order-[-1000] z-10 top-0 inset-x-0">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] bg-none box-content caret-black gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto pt-0 md:relative md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(rgb(13,13,13)_0%,rgba(13,13,13,0)_100%)] md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-clip md:[mask-position:0%] md:bg-left-top md:pt-8 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] box-content caret-black block basis-auto grow-0 shrink h-auto justify-normal max-w-none min-h-0 min-w-0 w-auto z-auto px-0 md:relative md:content-end md:items-end md:aspect-auto md:box-border md:caret-transparent md:flex md:basis-0 md:grow md:shrink-0 md:h-min md:justify-between md:max-w-screen-xl md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-7 md:scroll-m-0 md:scroll-p-[auto]">
            <a aria-label="Logo" href="./" className="static text-black box-content caret-black inline shrink h-auto min-h-0 min-w-0 w-auto md:relative md:text-blue-700 md:aspect-auto md:box-border md:caret-transparent md:block md:shrink-0 md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-12 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <img src="https://c.animaapp.com/mevoah3qcxP2EM/assets/icon-1.svg" alt="Icon" className="static box-content caret-black shrink align-middle w-auto top-auto inset-x-auto md:absolute md:aspect-square md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-0 md:inset-x-0" />
            </a>
            <div className="static box-content caret-black shrink min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <JoinWaitlistButton href="./#join-waitlist" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
