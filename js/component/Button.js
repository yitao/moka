/**
 * Created by and on 2018/1/7.
 */
import CommonUtils from '../base/CommonUtils.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let buttonCount = 0;

export default class Button {
    constructor(x, y, w, h, z,name) {
        buttonCount++;
        this.id = buttonCount
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.z = z
        this.name = name
    }

    onTouchStart(x, y) {
        var name = this.name || ("button-" + this.id )
        console.info(name + ",onTouchStart,x:" + x + ",y:" + y);
    }

    onTouchMove(x, y) {

    }

    onTouchEnd(x, y) {

    }
    isTouch(x, y) {
        return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h
    }
}