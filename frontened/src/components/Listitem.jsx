import React, { useState } from 'react'
import {AiOutlinePlayCircle,AiOutlinePlusSquare,AiFillLike,AiFillDislike} from "react-icons/ai"
const Listitem = () => {
    const [video,setVideo] = useState(true)
  return (

    <div className='h-[10rem] w-[20rem] rounded-md bg-white transition-all duration-500 delay-150 ease-in-out overflow-clip'>
        <div className="image">
            {
                video ? (
                    <div onMouseEnter={()=>setVideo(!video)} className='h-full w-full cursor-pointer'>
                        <img src="https://media1.popsugar-assets.com/files/thumbor/Wk7vKHeGjuKPNNz2teySYyjT-dw=/fit-in/828x1500/filters:format_auto():extract_cover():upscale()/2019/03/25/796/n/1922283/tmp_8FOIjo_dda0ada5717b3912_endgame.jpg" alt="" />
                    </div>
                ) : (
                    <div className='cursor-pointer h-full w-full z-50 relative'>
                        <video src="https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1710924034&Signature=GSLWgz0iKBzp5kT~-5oETjF7HOjnqoAKVbnvzYvs0m9PxKugMGNvuZ4bLLUiNsTtjrXNiK-TgPn7CRvCumxvaGkDbn77qIYDyG9vVFUO-zHNIa~~R~fC9hK2w~nqiqFnIANgSD4BTRZ29AUJwnRmvAkFbaUlBCjCyvDqXkdjH~o2PetSRWWjM8rKaMAK3TdbUGfLjXB7Tx0pXCIrFYsnQuB7qL1o~l-X0~ARvZc2ah~3smeQRgzyJY-HAdBOJbom-nTanO1p2JIS9WhPI~e~UGXDAdbmang-a9AMJgHiMWE6zt0Ym9nanQYkIX4VHkrettI9DysVf3ARl81pJvj4jA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" autoPlay muted loop onMouseLeave={()=>setVideo(!video)} className='relative'></video>
                        <div className='absolute left-1 top-3'>
                            <h1 className=' text-white text-[2.2rem] opacity-90'>The Avengers</h1>
                            <div className=' text-white flex items-start justify-start gap-2'>
                                <AiOutlinePlayCircle className='text-[1.2rem]'/><AiOutlinePlusSquare/><AiFillLike/><AiFillDislike/>
                            </div>
                            <span className='text-gray-400 text-[0.8rem]'>2h 23m</span>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Listitem;