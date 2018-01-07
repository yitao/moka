/**
 * Created by and on 2018/1/7.
 */
let instance

export default class WorldData{
    constructor(){
        if (instance)
            return instance

        instance = this
    }

}