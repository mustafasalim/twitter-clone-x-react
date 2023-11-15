import { _setModal, _removeMoldal } from "../modal";
import store from "..";


export const setModal = (name,data = false) => store.dispatch(_setModal({name,data}))
export const removeModal = () => store.dispatch(_removeMoldal())