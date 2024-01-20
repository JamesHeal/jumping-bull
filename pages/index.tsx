import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col bg-[linear-gradient(#8a46ff,#6e38cc)]'>
      <div className='max-w-[1260px] w-[90%] my-[32px]'>
        <div className='p-[1rem] flex items-center justify-between h-[5.125rem] border border-solid rounded-[2.5625rem] border-gray-300'>
          <div className='flex items-center'>
            <Image src='/logo.png' alt='logo' height={56} width={56} />
            <span className='text-size-[28px] mt-[4px]'>JUMPINGBULL</span>
          </div>
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

            <button className='text-white w-[8.75rem] rounded-[2.5625rem] py-[12px] px-[24px] bg-black'>
              buy
            </button>
          </div>
        </div>
        <div className='w-full relative min-h-[56.25rem] mt-[8.75rem] flex flex-col !text-[42px]'>
          <div className='flex items-center gap-[24px]'>
            <p>Take a ride on the</p>
          </div>
          <div className='flex items-center gap-[24px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='49'
              height='55'
              viewBox='0 0 49 55'
              fill='none'
            >
              <path
                d='M21.7836 49.28C21.4186 49.28 21.0537 49.1881 20.7168 49.0113L15.846 46.367C13.4246 45.0518 10.6874 44.465 7.94317 44.67L2.41964 45.0872C1.59848 45.1508 0.812409 44.7549 0.363227 44.062C-0.085955 43.3691 -0.121047 42.4853 0.271987 41.757L2.90391 36.843C4.20935 34.4037 4.79188 31.6462 4.58834 28.8817L4.17425 23.3172C4.11109 22.49 4.50412 21.6981 5.19193 21.2456C5.87974 20.7931 6.75705 20.7577 7.48697 21.1536L9.51531 22.2566C13.4246 24.3778 18.1761 24.5545 22.2257 22.7162L45.5551 12.1529C46.4535 11.7429 47.4992 12.054 48.0397 12.8883C48.5801 13.7226 48.4327 14.8114 47.6958 15.4761L28.6196 32.6432C25.3069 35.6269 23.5312 40.0672 23.861 44.5286L24.0365 46.8407C24.0997 47.6679 23.7066 48.4598 23.0188 48.9123C22.6469 49.1527 22.2187 49.28 21.7906 49.28H21.7836ZM9.03103 41.0924C11.9858 41.0924 14.8915 41.8277 17.5093 43.2489L20.3518 44.7973C19.9377 39.247 22.1485 33.7179 26.2684 30.0129L38.0103 19.4426L23.6505 25.9474C18.6112 28.2312 12.7017 28.012 7.83789 25.3747L8.08354 28.6201C8.34322 32.0634 7.62032 35.4855 5.99204 38.5258L4.45499 41.3893L7.67647 41.1419C8.12565 41.1065 8.58185 41.0924 9.03103 41.0924Z'
                fill='#121212'
              ></path>
              <path
                d='M16.2039 20.2274C15.3827 20.2274 14.6458 19.6406 14.4844 18.7992L13.6071 14.3024C13.4176 13.3478 14.0422 12.4145 14.9897 12.2307C15.9372 12.0469 16.8636 12.6691 17.0461 13.6236L17.9234 18.1204C18.1129 19.0749 17.4883 20.0082 16.5408 20.1921C16.4285 20.2133 16.3162 20.2274 16.2039 20.2274Z'
                fill='#121212'
              ></path>
              <path
                d='M13.8246 8.03085C13.0035 8.03085 12.2665 7.444 12.1051 6.60262L11.2278 2.1058C11.0383 1.15128 11.663 0.217982 12.6104 0.0341501C13.5579 -0.156753 14.4844 0.472519 14.6669 1.42703L15.5442 5.92385C15.7337 6.87837 15.109 7.81167 14.1615 7.9955C14.0492 8.01671 13.9369 8.03085 13.8246 8.03085Z'
                fill='#121212'
              ></path>
              <path
                d='M6.28681 13.5175C5.46565 13.5175 4.72871 12.9307 4.56729 12.0893C4.37779 11.1348 5.00243 10.2015 5.94993 10.0106L10.4137 9.12678C11.3612 8.93587 12.2876 9.56515 12.4771 10.5197C12.6666 11.4742 12.042 12.4075 11.0945 12.5984L6.63072 13.4822C6.51842 13.5034 6.39911 13.5175 6.29383 13.5175H6.28681Z'
                fill='#121212'
              ></path>
              <path
                d='M18.3937 11.1277C17.5725 11.1277 16.8356 10.5409 16.6741 9.69948C16.4846 8.74497 17.1093 7.81167 18.0568 7.62784L22.5135 6.74403C23.461 6.55312 24.3874 7.1824 24.5699 8.13691C24.7524 9.09142 24.1348 10.0247 23.1873 10.2086L18.7306 11.0924C18.6183 11.1136 18.506 11.1277 18.3937 11.1277Z'
                fill='#121212'
              ></path>
              <path
                d='M40.5931 55C39.7719 55 39.035 54.4132 38.8735 53.5718L37.9962 49.0749C37.8067 48.1204 38.4314 47.1871 39.3789 46.9962C40.3334 46.8124 41.2528 47.4346 41.4423 48.3891L42.3196 52.8859C42.5091 53.8404 41.8845 54.7737 40.937 54.9646C40.8247 54.9859 40.7054 55 40.6001 55H40.5931Z'
                fill='#121212'
              ></path>
              <path
                d='M38.2208 42.8034C37.3997 42.8034 36.6627 42.2166 36.5013 41.3752L35.624 36.8784C35.4345 35.9239 36.0591 34.9906 37.0066 34.8067C37.9611 34.6158 38.8806 35.2451 39.063 36.1996L39.9404 40.6964C40.1299 41.6509 39.5052 42.5843 38.5577 42.7681C38.4454 42.7893 38.3331 42.8034 38.2208 42.8034Z'
                fill='#121212'
              ></path>
              <path
                d='M30.683 48.2901C29.8618 48.2901 29.1249 47.7033 28.9635 46.8619C28.774 45.9074 29.3986 44.9741 30.3461 44.7902L34.8099 43.9064C35.7644 43.7226 36.6838 44.3448 36.8663 45.2993C37.0487 46.2538 36.4311 47.1871 35.4836 47.371L31.0199 48.2548C30.9076 48.276 30.7953 48.2901 30.683 48.2901Z'
                fill='#121212'
              ></path>
              <path
                d='M42.7898 45.9003C41.9687 45.9003 41.2318 45.3135 41.0703 44.4721C40.8808 43.5176 41.5055 42.5843 42.453 42.4004L46.9097 41.5166C47.8642 41.3257 48.7836 41.955 48.9661 42.9095C49.1556 43.864 48.531 44.7973 47.5835 44.9811L43.1267 45.8649C43.0144 45.8862 42.9021 45.9003 42.7898 45.9003Z'
                fill='#121212'
              ></path>
            </svg>
            <p>jumping bull or</p>
          </div>
          <p>create one yourself</p>
          <Image
            className='absolute right-0 top-0'
            width={39}
            height={65}
            src={"/vector.svg"}
            alt=''
          />
          <Image
            className='absolute right-0 top-[6.25rem]'
            width={524}
            height={630}
            src={"/bg.png"}
            alt=''
          />
        </div>
        <div className='flex flex-col gap-[16px] items-center'>
          <p className='text-[28px]'>JUMPINGBULL</p>
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
          <p className='mt-[6.25rem] text-gray-400 text-[16px]'>
            Copyright 2024 | JUMPINGBULL
          </p>
        </div>
      </div>
    </div>
  );
}
