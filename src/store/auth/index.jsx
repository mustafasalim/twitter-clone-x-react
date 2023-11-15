import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    currentAccount: {
        id: 1,
        username: "mustafasalim",
        fullName: "./mustafasalim",
        avatar: "https://pbs.twimg.com/profile_images/1720542438148722688/5CKhzMEe_normal.jpg"
    },
    accounts: [
        {
            id: 1,
            username: "mustafasalim",
            fullName: "./mustafasalim",
            avatar: "https://pbs.twimg.com/profile_images/1720542438148722688/5CKhzMEe_normal.jpg"
        },
        {
            id: 2,
            username: "llaiseee",
            fullName: "./llaiseee",
            avatar: "https://pbs.twimg.com/profile_images/1619801379412873219/sGo2GMQW_400x400.jpg"
        }
    ]
}

const auth = createSlice({

    name: "auth",
    initialState,
    reducers: {

        //state manipule etme

        _addAccount: (state, action) => {

            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {

            state.accounts = state.accounts.filter(account = account.id === action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {

                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})


export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer