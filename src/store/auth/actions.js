import { _setCurrentAccount } from ".";
import store from "..";


export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))