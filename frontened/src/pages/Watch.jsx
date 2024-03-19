import React from 'react'
import {AiFillBackward} from "react-icons/ai"
const Watch = () => {
  return (
    <div className='relative h-[100vh] w-[100vw] bg-black'>
        <video src="https://imdb-video.media-imdb.com/vi1891149081/1434659607842-pgv4ql-1616202397016.mp4?Expires=1710924034&Signature=GSLWgz0iKBzp5kT~-5oETjF7HOjnqoAKVbnvzYvs0m9PxKugMGNvuZ4bLLUiNsTtjrXNiK-TgPn7CRvCumxvaGkDbn77qIYDyG9vVFUO-zHNIa~~R~fC9hK2w~nqiqFnIANgSD4BTRZ29AUJwnRmvAkFbaUlBCjCyvDqXkdjH~o2PetSRWWjM8rKaMAK3TdbUGfLjXB7Tx0pXCIrFYsnQuB7qL1o~l-X0~ARvZc2ah~3smeQRgzyJY-HAdBOJbom-nTanO1p2JIS9WhPI~e~UGXDAdbmang-a9AMJgHiMWE6zt0Ym9nanQYkIX4VHkrettI9DysVf3ARl81pJvj4jA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" autoPlay muted loop controls className='h-screen w-screen'></video>
        <div className='absolute top-8 left-2 text-white flex items-center justify-center gap-2 border px-2 py-1 rounded-md cursor-pointer'>
            <AiFillBackward/>
            <span>Back</span>
        </div>
    </div>
  )
}

export default Watch