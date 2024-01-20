import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col bg-[linear-gradient(#8a46ff,70%,#000)]'>
      <div className='max-w-[1260px] w-[90%] my-[32px]'>
        <div className='p-[1rem] flex items-center justify-between h-[5.125rem] sm:h-[3.875rem] border border-solid rounded-[2.5625rem] border-gray-300'>
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='logo'
              height={56}
              width={56}
              className='h-[4rem] w-[4rem] sm:h-[24px] sm:w-[24px]'
            />
            <span className='text-[2rem] mt-[4px] sm:text-[14px]'>
              JUMPING BULL
            </span>
          </div>
          <div className='flex items-center gap-[24px] sm:gap-[16px]'>
            <a href='https://www.dextools.io/app/' target='_blank'>
              <Image
                height={24}
                width={24}
                alt='dextool'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/dextool.svg"}
              />
            </a>
            <a href='https://t.me/jumpingbullpoly' target='_blank'>
              <Image
                height={24}
                width={24}
                alt='telegram'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/telegram.svg"}
              />
            </a>
            <a href='https://twitter.com/JumpingbullPoly'>
              <Image
                height={24}
                width={24}
                alt='twitter'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/x-twitter.svg"}
              />
            </a>

            <button className='sm:hidden text-white w-[8.75rem] rounded-[2.5625rem] py-[12px] px-[24px] bg-black'>
              buy
            </button>
          </div>
        </div>
        <div className='w-full relative min-h-[56.25rem] sm:min-h-[unset] mt-[8.75rem] flex flex-col text-[42px] sm:text-[18px] sm:mt-[2.5rem]'>
          <div className='flex items-center gap-[24px]'>
            <p>Take a ride on the</p>
          </div>
          <div className='flex items-center gap-[24px]'>
            <Image
              src={"/star.svg"}
              height={55}
              width={49}
              className='sm:h-[25px] sm:w-[22px]'
              alt=''
            />
            <p>jumping bull or</p>
          </div>
          <p className='whitespace-pre'>create one yourself</p>
          <Image
            className='absolute sm:hidden right-0 top-0'
            width={39}
            height={65}
            src={"/vector.svg"}
            alt=''
          />
          <Image
            className='absolute sm:static sm:mt-[64px] right-0 top-[6.25rem]'
            width={524}
            height={630}
            src={"/bg.png"}
            alt=''
          />
        </div>
        <div className='flex flex-col sm:mt-[128px] gap-[16px] items-center'>
          <p className='text-[2rem] text-gray-400'>JUMPING BULL</p>
          <div className='flex items-center gap-[24px]'>
            <a href='https://www.dextools.io/app/' target='_blank'>
              <Image
                height={24}
                width={24}
                alt='dextool'
                className='w-[24px] h-[24px]'
                src={"/dextool.svg"}
              />
            </a>
            <a href='https://t.me/jumpingbullpoly' target='_blank'>
              <Image
                height={24}
                width={24}
                alt='telegram'
                className='w-[24px] h-[24px]'
                src={"/telegram.svg"}
              />
            </a>
            <a href='https://twitter.com/JumpingbullPoly'>
              <Image
                height={24}
                width={24}
                alt='twitter'
                className='w-[24px] h-[24px]'
                src={"/x-twitter.svg"}
              />
            </a>
          </div>
          <p className='mt-[6.25rem] sm:mt-[48px] sm:text-[12px] text-gray-400 text-[16px]'>
            Copyright 2024 | JUMPING BULL
          </p>
        </div>
      </div>
    </div>
  );
}
