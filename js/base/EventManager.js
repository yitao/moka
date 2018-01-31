/**
 * Created by and on 2018/1/7.
 */
let instance

/**
 * 全局状态管理器
 */
export default class EventManager {
    constructor(canvas) {
        if (instance)
            return instance
        instance = this
        this.eventTypeMap = {}
        //canvas.addEventListener('touchstart', this.touchStartHandler)
        //canvas.addEventListener('touchmove', this.touchMoveHandler)
        //canvas.addEventListener('touchend', this.touchEndHandler)
        wx.onTouchStart(this.touchStartHandler)
        wx.onTouchMove(this.touchMoveHandler)
        wx.onTouchEnd(this.touchEndHandler)
        wx.onTouchCancel(this.touchCancelHandler)
    }

    regEvent(type, obj) {
        if (this.eventTypeMap[type] == null) {
            this.eventTypeMap[type] = {all: [obj]}
        } else {
            var map = this.eventTypeMap[type]
            var ci = map.all.length;
            map.all.forEach((t, i)=> {
                if (obj.z >= t.z) {
                    ci = i
                    return
                }
            })
            for (var i = map.all.length; i > ci; i--) {
                map.all[i] = map.all[i - 1];
            }
            map.all[ci] = obj;
        }
    }

    touchStartHandler(e) {
        var count = 0;
        var x = e.touches[0].clientX
        var y = e.touches[0].clientY
        console.info("touchStartHandler,x=" + x + ",y=" + y+",ts="+new Date().getTime())
        if (instance.eventTypeMap['touchstart']) {
            instance.eventTypeMap['touchstart'].all.forEach((t, i)=> {
                if (t.isTouch(x, y) && count == 0) {
                    t.onTouchStart(x, y)
                    count++
                }
            })
        }
    }

    touchMoveHandler(e) {
        var x = e.touches[0].clientX
        var y = e.touches[0].clientY
        console.info("touchMoveHandler,x=" + x + ",y=" + y+",ts="+new Date().getTime())
    }

    touchEndHandler(e) {

        console.info("touchEndHandler"+",ts="+new Date().getTime())
    }

    touchCancelHandler(e) {

        console.info("touchCancelHandler,x=" + x + ",y=" + y+",ts="+new Date().getTime())
    }
}