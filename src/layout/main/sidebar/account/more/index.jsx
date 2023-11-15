import React from 'react'
import { useAccount, useAccounts } from '../../../../../store/auth/hooks'
import classNames from 'classnames'
import { setCurrentAccount } from '../../../../../store/auth/actions'


function More({ close }) {
    const currentAccounts = useAccount()
    const accounts = useAccounts()
    return (
        <div>
            {accounts.map(account => (

                <button
                    type='button'
                    disabled={currentAccounts.id === account.id}
                    onClick={() => {
                        setCurrentAccount(account)
                        close()
                    }}
                    className={classNames('py-3 px-4 flex items-center text-left w-full transition-colors ', {
                        "hover:bg-[color:var(--background-third)]": currentAccounts.id !== account.id
                    })}>
                    <img className='w-10 h-10 rounded-full' src={account.avatar} alt="" />
                    <div className='mx-3 flex-1 text-[15px]'>
                        <h6 className='font-bold'>{account.fullName}</h6>
                        <div className='text-[color:var(--color-base-secondary)]'>
                            @{account.username}

                        </div>
                    </div>
                    {currentAccounts.id === account.id && (
                        <svg viewBox="0 0 24 24" width={18.75} height={18.75} fill='#00ba7c'>

                            <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" />

                        </svg>
                    )}
                </button>
            ))}
            <div className='h-px my-3 bg-[color:var(--background-third)]'>

            </div>

            <button className='py-3 px-4 text-left hover:bg-[color:var(--background-third)] w-full transition-colors text-[15px] font-bold'>
                Var olan bir hesap ekle
            </button>
            <button className='py-3 px-4 text-left hover:bg-[color:var(--background-third)] w-full transition-colors text-[15px] font-bold'>
                Hesapları Yönet
            </button>
            <button className='py-3 px-4 text-left hover:bg-[color:var(--background-third)] w-full transition-colors text-[15px] font-bold'>
                <div className='max-w-[210px]'>
                    ./mustafasalim hesabından çıkış yap
                </div>
            </button>

        </div>
    )
}

export default More
