/**
 * description：
 * anthor： caoyanchang
 * time： 2018/6/3 上午10:46
 */
import {Dimensions} from 'react-native';

//app只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get("window").width
const uiWidthPx = 1080;

function pxToDp(uiElementPx) {
    return parseInt(uiElementPx * (deviceWidthDp / uiWidthPx));
}
export default pxToDp;