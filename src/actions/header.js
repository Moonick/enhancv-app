import { SET_PROGRESS } from "../constants";

export const setProgress = (progress) => {
    return {
        type: SET_PROGRESS,
        payload: progress
    }
}