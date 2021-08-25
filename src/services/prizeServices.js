import axios from "axios"
import {DRAW_LUCKY} from "./CONSTANTS"



export const getPrize = (hccid) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(DRAW_LUCKY+hccid).then((res)=>{
                resolve(res.data)
            }).catch((err) => {
                console.log("Draw lucky > axios err = ",err)
                reject(err)})
        } catch (error) {
            console.error("in userServices > getAllUsers, Err===", error);
            reject("System has error. Please try again.");

        }
    })
}