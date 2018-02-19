import {
    CLICK_FULL_NAME,
    RENDER_FULL_RESUME
} from "../constants";

export const onClickFullName = () => {
    return {
        type: CLICK_FULL_NAME,
        payload: true
    }
}

export const renderFullResume = (shouldRenderFullResume) => {
    return {
        type: RENDER_FULL_RESUME,
        payload: shouldRenderFullResume
    }
}