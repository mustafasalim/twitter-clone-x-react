import React from 'react'
import { setModal } from '../../../store/modal/actions'


function ChangeApperance() {
    return (
        <div
            onClick={() => setModal("apperance")}
            className='py-3 px-4 gap-3 border-b border-[color:var(--background-third)] flex hover:bg-[color:var(--background-secondary)] transition-colors'>

            <div className='flex items-center justify-center w-full font-bold text-[color:var(--color-base)]'>
                <div className=''>
                    Görünümü Degiştir
                </div>

            </div>
        </div>
    )
}

export default ChangeApperance
