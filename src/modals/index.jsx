import React from 'react'
import modals from '../routes/modals'
import { useModal } from '../store/modal/hooks'
import { removeModal } from '../store/modal/actions'

function Modal() {
    const modal = useModal()
    const currentModal = modals.find(m => m.name === modal.name)

    return (

        <div className='flex items-center justify-center transation-all fixed inset-0 bg-[color:var(--background-modal)] z-20'>
            <div className='bg-[color:var(--background-primary)] max-w-[600px] rounded-2xl max-h-[90vh] overflow-auto'>
                {currentModal && <currentModal.element close={removeModal} />}
            </div>
        </div>
    )
}

export default Modal
