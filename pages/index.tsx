import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const totalJumpins = 0;
const nextJumpins = 100000000000;
const burnedJumpinsToday = 5135635889;
const totalBurnedJumpins = 10245679430;
export default function Home() {
  const [todyRemain, setTodayRemain] = useState(0);
  const remainDay = 0;
  const remainHour = Math.floor(
    (todyRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainMinute = Math.floor(
    (todyRemain % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainSecond = Math.floor((todyRemain % (1000 * 60)) / 1000);
  const [playing, setIsPlaying] = useState(false);
  const onPlayClick = () => {
    const video = document.getElementById("countDownVideo") as HTMLVideoElement;
    video.play();
    setIsPlaying(true);
  };
  const tickerRef = useRef(0);
  useEffect(() => {
    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    const countDown = setInterval(() => {
      const now = new Date();
      const end = new Date(`2024-3-${now.getUTCDate() + 1} 14:00:00Z`);
      const remain = end.getTime() - now.getTime();
      setTodayRemain(remain);
      tickerRef.current += 1;
    }, 1000);
    return () => {
      clearInterval(countDown);
    };
  }, []);
  useEffect(() => {
    const observe = new IntersectionObserver(
      (entries) => {
        const mediaLinks = document.getElementById("mediaLinks");
        if (entries[0].intersectionRatio > 0) {
          if (mediaLinks) mediaLinks.style.opacity = "0";
        } else {
          if (mediaLinks) mediaLinks.style.opacity = "1";
        }
      },
      { rootMargin: "10px" }
    );
    observe.observe(document.getElementById("secondScreen") as Element);
  }, []);
  return (
    <div className='w-full flex flex-col relative h-[200vh]'>
      <img
        alt='dark bull background'
        src='/red-eye.png'
        width={1920}
        height={2160}
        style={{
          opacity: tickerRef.current % 3 === 0 ? 0 : 1,
        }}
        className='h-full z-[2] absolute transition-opacity duration-1000 w-full top-0 left-0 object-cover'
      />
      <img
        alt='dark bull background'
        src='/dark-bull-white-bg.webp'
        width={1920}
        height={2160}
        className='h-full z-[1] absolute w-full top-0 left-0 object-cover'
      />
      <div className='flex relative items-end z-[3] w-full h-[100vh] pb-[340px]'>
        <div
          id='mediaLinks'
          className='transition-all duration-300 ease-out w-full flex gap-[16px] absolute bottom-[16px] left-[24px] z-[3]'
        >
          <a
            target='_blank'
            href='https://www.dextools.io/app/en/polygon/pair-explorer/0x93847908bda4eef8c1f2b16bd486fa1349f7ce88'
            className='flex items-center justify-center sm:hidden text-black w-[8.5rem] rounded-[2.5625rem] py-[12px] px-[24px] bg-white'
          >
            Buy
          </a>
          <div className='flex items-center gap-[24px] sm:gap-[16px]'>
            <a
              href='https://www.dextools.io/app/en/polygon/pair-explorer/0x93847908bda4eef8c1f2b16bd486fa1349f7ce88'
              target='_blank'
              className='rounded-full p-[4px] bg-white'
            >
              <img
                height={24}
                width={24}
                alt='dextool'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/dextool.svg"}
              />
            </a>
            <a
              href='https://t.me/jumpingbullpoly'
              target='_blank'
              className='rounded-full p-[4px] bg-white'
            >
              <img
                height={24}
                width={24}
                alt='telegram'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/telegram.svg"}
              />
            </a>
            <a
              href='https://twitter.com/JumpingbullPoly'
              target='_blank'
              className='rounded-full p-[4px] bg-white'
            >
              <img
                height={24}
                width={24}
                alt='twitter'
                className='sm:w-[16px] sm:h-[16px]'
                src={"/x-twitter.svg"}
              />
            </a>
          </div>
        </div>
        <div className='h-[165px] absolute right-[24px] bottom-[16px]'>
          <div className='h-full relative'>
            {!playing && (
              <div className='absolute h-full w-full flex items-center justify-center bg-black/40'>
                <img
                  src={"/play.svg"}
                  height={50}
                  width={50}
                  alt='play button'
                  className='cursor-pointer z-10'
                  onClick={onPlayClick}
                />
              </div>
            )}

            <video
              className='h-full'
              id='countDownVideo'
              src='/count-down.mp4'
              controls={playing}
              onEnded={() => {
                setIsPlaying(false);
              }}
              poster='/count-down-post.png'
            />
          </div>
        </div>
        <div className='relative flex items-center gap-[32px] justify-center w-full overflow-visible'>
          <CountDownCell remain={remainDay} unit='DAYS' />
          <CountDownCell remain={remainHour} unit='HOURS' />
          <CountDownCell remain={remainMinute} unit='MINUTES' />
          <CountDownCell remain={remainSecond} unit='SECONDS' />
        </div>
      </div>
      <div className='z-[3] w-full h-[100vh] flex flex-col items-center'>
        <div
          id='secondScreen'
          className='relative mt-[100px] overflow-hidden rounded-[20px] flex items-center justify-center h-[300px] w-[988px]'
        >
          <div className='absolute w-full h-full z-[2] left-0 top-0 bg-[#e51249]/[0.05] backdrop-blur-[20px] '></div>
          <div className='w-full z-[1] h-full absolute top-0 left-0'>
            <video
              src='/fire.mp4'
              className='h-full w-full object-cover'
              muted
              autoPlay
              loop
              poster='/fire.png'
            />
          </div>
          <div className='flex flex-col z-[3]'>
            <div className='text-[24px] leading-[45px] text-white'>
              Total number of Jumpins:{" "}
              <RollingNumber from={totalJumpins} to={nextJumpins} />
            </div>
            <div className='text-[24px] leading-[45px] text-white'>
              Number of Jumpins burned today:{" "}
              <RollingNumber to={burnedJumpinsToday} />
            </div>
            <div className='text-[24px] leading-[45px] text-white'>
              Number of Jumpins burned in total:{" "}
              <RollingNumber to={totalBurnedJumpins} />
            </div>
            <div className='text-[24px] leading-[45px] text-white'>
              Polygon official token burning address:&nbsp;
              <span className='text-[18px]'>
                0x3333333333333333333333333333333333333333
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='z-[2] absolute bottom-0 text-[16px] left-0 w-full bg-black/30 h-[287px] flex items-center justify-center text-white px-[50px] sm:px-[16px]'>
        <span>
          Warning:
          <br />
          Jumping Bull is a meme coin game produced by Mevels Entertainment, and
          it&apos;s available on the Polygon network. There is no investment
          advise. This token is meant only for amusement and education purpose.
          THE FOUNDING TEAMs disclaim all liability for any losses or damages.
          Invest at your own risk as the market is volatile. Zero Guarantee of
          profit or retention of value.You should do your own research before
          investing and you agree to the risks by buying. The Production Company
          are not required to update information. Observe local regulations as
          laws vary based on jurisdiction. Mevels Entertainment retains the
          final interpretation right for this project.
        </span>
      </div>
    </div>
  );
}

function CountDownCell({ remain, unit }: { remain: number; unit: string }) {
  return (
    <div className='flex flex-col items-center'>
      <span
        className='text-[#e51249] text-[120px] leading-[1] w-[145px]'
        style={{ textShadow: "0 0 0.2em #e51249" }}
      >
        {remain >= 10 ? remain : `0${remain}`}
      </span>
      <span className='text-[30px] text-white'>{unit}</span>
    </div>
  );
}

function RollingNumber({ from = 0, to }: { from?: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    let controls: any;
    if (node) {
      const observe = new IntersectionObserver(
        (entries) => {
          const mediaLinks = document.getElementById("mediaLinks");
          if (entries[0].intersectionRatio > 0) {
            controls = animate(from, to, {
              duration: 1,
              onUpdate(value) {
                if (node) {
                  node.innerHTML = toThousandNum(value);
                }
              },
            });
          }
        },
        { rootMargin: "10px" }
      );
      observe.observe(node);
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [from, to]);

  return <span ref={nodeRef}>{toThousandNum(to)}</span>;
}

function toThousandNum(num: unknown, precision = 0, padZero = true) {
  if (typeof num !== "number") {
    return "--";
  }
  const isNegative = num < 0;
  const absNum = Math.abs(num);
  const numFixed =
    Math.round(absNum * Math.pow(10, precision)) / Math.pow(10, precision);
  const intNum = Math.floor(numFixed);
  const intNumStr = (intNum || 0)
    .toString()
    .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  const restStr = padZero
    ? (numFixed || 0).toFixed(precision).match(/\.(.*)$/g)
    : (numFixed || 0).toString().match(/\.(.*)$/g);
  return `${isNegative ? "-" : ""}${intNumStr}${
    restStr && precision !== 0 ? restStr[0] : ""
  }`;
}
