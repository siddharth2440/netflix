import React, { useEffect, useState } from 'react'
import {AiOutlinePlayCircle,AiOutlinePlusSquare,AiFillLike,AiFillDislike} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailsSlice } from '../redux/slices/homeSlice';
import axiosInstance from '../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
const Listitem = ({item}) => {
    const [movie,setMovie] = useState({})
    const [video,setVideo] = useState(true)
    const navigate = useNavigate()

    const pageHandler = ()=>{
        navigate('/watch',{state:movie})
    }
    const multiMovies = async ()=>{
        try {
            const res =await axiosInstance.get(`/movies/detailsMovie/${item}`)
            setMovie(res.data.getMovieInfo)
        } catch (error) {
            console.log("Error is there");      
        }
    }
    useEffect(()=>{
        multiMovies();
    },[item])
  return (
    <div className='h-[10rem] w-[20rem] rounded-md bg-white transition-all duration-500 delay-150 ease-in-out overflow-clip' onClick={pageHandler}>
        <div className="image">
            {
                video ? (
                    <div onMouseEnter={()=>setVideo(!video)} className='h-full w-full cursor-pointer'>
                        <img src={movie.imageTitle} alt="" />
                    </div>
                ) : (
                    <div className='cursor-pointer h-full w-full z-50 relative'>
                        <video src="https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1711212856&Signature=L~1FbyB5dP5YLe2l098YPMMmB0n9LExCEaFXtR04LbuMW5svbbZxnCAWoi85VqJRl0f1xovAm6cW7bPGxsvz5elnKWmX6v2EDAopMJ1g6qCGhUAE2wzpXpJyKFTW1dOa3R2g1SrnxNbO8G1cd65GlM2cGQrzYAwKoI8aoGSoH5mI9Om4TWJeo6bdLGo8UNUnoS1Q9-czrr5DR0bLF2J1bA6W3Bn2MFiTe8Llo360-UgEcqDCwWWpwqfbyEIM1fwtBw7xG0EorAdpu~w4QyaS7yVy~iBgvF47H7yHjnluLTpjAoFqVwWePWYJFw03X9tqm3Se7I-VhynbGBwvKaPH6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" autoPlay muted loop onMouseLeave={()=>setVideo(!video)} className='relative'></video>
                        <div className='absolute left-1 top-3'>
                            <h1 className=' text-white text-[2.2rem] opacity-90'>{movie.title}</h1>
                            <div className=' text-white flex items-start justify-start gap-2'>
                                <AiOutlinePlayCircle className='text-[1.2rem]'/><AiOutlinePlusSquare/><AiFillLike/><AiFillDislike/>
                            </div>
                            <span className='text-gray-400 text-[0.8rem]'>{movie.year}</span>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Listitem;