import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    modal: false
}

const modal = createSlice({

    name: "modal",
    initialState,
    reducers: {

        //state manipule etme

        _setModal: (state, action) => {

            state.modal = action.payload
        },
        _removeMoldal: state => {

            state.modal = false
        }
    }
})


export const { _setModal, _removeMoldal } = modal.actions
export default modal.reducer