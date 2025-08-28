import React from 'react';

interface JoinWaitlistButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

const JoinWaitlistButton: React.FC<JoinWaitlistButtonProps> = ({ 
  href, 
  children = "Join waitlist",
  className = "static text-black [align-items:normal] box-content caret-black gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-1 md:flex md:h-9 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-clip md:[mask-position:0%] md:bg-left-top md:px-3.5 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
}) => {
  return (
    <a href={href} className={className}>
      <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row shrink justify-normal gap-y-[normal] z-auto inset-auto md:absolute md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-0 md:flex md:flex-col md:shrink-0 md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-0 md:overflow-clip md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
        <div className="static bg-transparent box-content caret-black gap-x-[normal] shrink h-auto min-h-0 min-w-0 gap-y-[normal] w-auto z-auto md:relative md:aspect-auto md:bg-zinc-800 md:box-border md:caret-transparent md:gap-x-1 md:shrink-0 md:h-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
        <div className="static bg-transparent box-content caret-black gap-x-[normal] shrink h-auto min-h-0 min-w-0 gap-y-[normal] w-auto z-auto md:relative md:aspect-auto md:bg-white md:box-border md:caret-transparent md:gap-x-1 md:shrink-0 md:h-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
      </div>
      <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <p className="text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:text-sm md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{children}</p>
      </div>
    </a>
  );
};

export default JoinWaitlistButton;
