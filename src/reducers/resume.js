import {
    INPUT_NAME,
    CLICK_FULL_NAME,
    INPUT_TITLE,
    RENDER_FULL_RESUME,
    SET_PROGRESS
} from "../constants";

const initialState = {
    fullName: "",
    jobTitle: "",
    shouldRenderJobTitle: false,
    shouldRenderFullResume: false,
    progress: 0
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case INPUT_NAME:
            return { ...state, fullName: payload }

        case INPUT_TITLE:
            return { ...state, jobTitle: payload}
        
        case CLICK_FULL_NAME:
            return { ...state, shouldRenderJobTitle: payload}

        case RENDER_FULL_RESUME:
            return { ...state, shouldRenderFullResume: payload}

        case SET_PROGRESS:
            return { ...state, progress: payload}

        default:
            return state
    }
}