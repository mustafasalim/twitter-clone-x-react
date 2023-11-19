import React from 'react'

function Photo({ photos }) {

    switch (photos.length) {

        case 1:
            return (

                <div className='mt-3'>
                    <img className='border border-[color:var(--background-third)] rounded-2xl max-h-[518px] overflow-hidden object-cover' src={photos[0]} alt="" />

                </div>
            )



        case 2:
            return (

                <div className='mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl max-h-[518px] overflow-hidden'>
                    <img className='h-full w-full object-cover' src={photos[0]} alt="" />
                    <img className='h-full w-full  object-cover' src={photos[1]} alt="" />

                </div>
            )



        case 3:

            return (

                <div className='mt-3 grid grid-cols-2 gap-0.5 h-[288px] border border-[color:var(--background-third)] rounded-2xl max-h-[518px] overflow-hidden'>
                    <img className='h-full w-full object-cover' src={photos[0]} alt="" />
                    <div className='h-full flex flex-col gap-0.5'>
                        <div className='flex-shrink-0 flex-1 relative'>
                            <img className='h-full w-full flex-shrink-0  absolute inset-0 object-cover' src={photos[1]} alt="" />

                        </div>

                        <div className='flex-shrink-0 flex-1 relative'>
                            <img className='h-full w-full absolute inset-0 flex-shrink-0 object-cover' src={photos[2]} alt="" />

                        </div>
                    </div>

                </div>
            )

        case 4:

            return (
                <div className='mt-3 grid grid-cols-2 gap-0.5 h-[286px] border border-[color:var(--background-third)] rounded-2xl max-h-[518px] overflow-hidden'>

                    <img className='h-[141px] w-full object-cover' src={photos[0]} alt="" />
                    <img className='h-[141px] w-full object-cover' src={photos[1]} alt="" />
                    <img className='h-[141px] w-full object-cover' src={photos[2]} alt="" />
                    <img className='h-[141px] w-full object-cover' src={photos[3]} alt="" />
                </div>
            )
    }
}

export default Photo
