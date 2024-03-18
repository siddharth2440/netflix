import React from 'react'
import avengers from "../assets/avengers logo.jpg"
import {FaPlay} from "react-icons/fa"
const Featured = ({type}) => {
  return (
    <div>
        <div className='h-[90vh] relative'>
            <video src="https://imdb-video.media-imdb.com/vi2821566745/1434659607842-pgv4ql-1612218463733.mp4?Expires=1710865668&Signature=NGQTmals6JyXgMr6V32W9UmrbLNt46En9xCO2wZmByavIkVJKTLo2-7yyK-mfAeb3QHflLHB4P2wPM6hniO~7dN611v~yMvuoiHRSvLqUXCd~EgAvL5B-VfuAyfMeHS4wfqptqyK~noEozZ05ppKd6cOKSPQHzYUIiPt0mRwL-aiCL6X-4YBGQCJuodcPMKwVQRrCmC~h18KQOzWigrp5ZQIAiJWW2w8Cv9vFxuR1tX5n0KHQhIMhHaYu8lY706C9zNco6Svw-NcI53kBigIhdZ3h59UWoIbtEenN5ND0SPYWoNjmhhpcEzcDXTx6assPYUkVOxwXGUKUs5f8PZNHg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" muted autoPlay loop noremoteplayback onVolumeChange className='h-[100%] py-0 relative top-[-2rem] inline-block w-full'></video>
            {
                type && (
                    <div className='category absolute top-[1rem] left-[3rem]'>
                        <span className='text-[2rem] font-[500] text-white'>{type=="movie"?"Movies":"Series"}</span>
                        <select name="genre" id="genre" className='ml-4 rounded-md text-[1rem] gap-3 cursor-pointer bg-black text-white py-1 px-2 border-white outline-none border'>
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="crime">Crime</option>
                            <option value="comedy">Comedy</option>
                            <option value="action">Action</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="adventure">Romance</option>
                            <option value="animation">Animation</option>
                        </select>
                    </div>
                )
            }
            <div className='absolute top-[20%] z-10 text-white w-[40%] ml-4'>
                <div>
                    <img src={avengers} alt=""  className='h-[10rem] rounded-lg'/>
                    <h2 className='text-[3.3rem] font-[500]'>Avengers : Age of Ultron</h2>
                </div>
            <p className='text-[1rem] ml-4 text-start'>When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.</p>
            <div className="btns flex items-center justify-start gap-7 ml-[3rem] mt-4">
                <span className='flex items-center justify-center gap-2 capitalize cursor-pointer bg-white text-black px-2 py-1 rounded-md fony-[400]'> <FaPlay/> play</span>
                <span className='flex items-center justify-center gap-2 capitalize cursor-pointer bg-gray-300 text-black px-2 py-1 rounded-md fony-[400'> <FaPlay/> info</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured