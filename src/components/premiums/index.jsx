import React from 'react'
import Button from '../button'

function Premiums() {
    return (
        <section className='bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 '>

            <h6 className='text-xl font-extrabold leading-6'>Premium'a Abone olun</h6>
            <p className='leading-6 text-[15px] font-bold'>
                Yeni özelliklerin kilidini açmak için abone olun ve uygunsa reklam gelirinden pay alın.
            </p>

            <div className='self-start'>
                <Button variant="primary">
                    Abone Ol
                </Button>

            </div>
        </section>
    )
}

export default Premiums
