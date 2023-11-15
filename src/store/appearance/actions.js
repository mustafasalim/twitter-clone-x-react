
import store from "..";
import { _backgrounColor, _setColor, _setFontSize ,_setBoxShadow} from ".";


export const setBackgroundColor = data => store.dispatch(_backgrounColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))
export const setBoxShadow = data => store.dispatch(_setBoxShadow(data))