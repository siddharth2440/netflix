import React, { useEffect, useState } from 'react'
import avengers from "../assets/avengers logo.jpg"
import {FaPlay} from "react-icons/fa"
import axiosInstance from '../helpers/axiosInstance'
const Featured = ({type,setGenre}) => {

    const [feature,setFeauredContent]= useState({})
    async function randomFeaturedMovie(){
        const {data}=await axiosInstance.get(`/movies/random?type=${type}`)
        // console.log(data.movie);
        setFeauredContent(...data.movie)
    }
    useEffect(()=>{
        randomFeaturedMovie()
    },[type])
  return (
    <div>
        <div className='h-[90vh] relative'>
            <video src="https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1711212856&Signature=L~1FbyB5dP5YLe2l098YPMMmB0n9LExCEaFXtR04LbuMW5svbbZxnCAWoi85VqJRl0f1xovAm6cW7bPGxsvz5elnKWmX6v2EDAopMJ1g6qCGhUAE2wzpXpJyKFTW1dOa3R2g1SrnxNbO8G1cd65GlM2cGQrzYAwKoI8aoGSoH5mI9Om4TWJeo6bdLGo8UNUnoS1Q9-czrr5DR0bLF2J1bA6W3Bn2MFiTe8Llo360-UgEcqDCwWWpwqfbyEIM1fwtBw7xG0EorAdpu~w4QyaS7yVy~iBgvF47H7yHjnluLTpjAoFqVwWePWYJFw03X9tqm3Se7I-VhynbGBwvKaPH6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" muted autoPlay loop className='h-[100%] py-0 relative top-[-2rem] inline-block w-full'></video>
            {
                type && (
                    <div className='category absolute top-[1rem] left-[3rem]'>
                        <span className='text-[2rem] font-[500] text-white'>{type=="movie"?"Movies":"Series"}</span>
                        <select name="genre" id="genre" className='ml-4 rounded-md text-[1rem] gap-3 cursor-pointer bg-black text-white py-1 px-2 border-white outline-none border' onChange={(e) => setGenre(e.target.value)}>
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
                    <img src={feature.imageTitle} alt=""  className='h-[10rem] rounded-lg'/>
                    <h2 className='text-[3.3rem] font-[500]'>{feature.title}</h2>
                </div>
            <p className='text-[1rem] ml-4 text-start'>{feature.description}</p>
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