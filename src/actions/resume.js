import {
    INPUT_NAME,
    INPUT_TITLE,
    SET_PROGRESS,
    SET_SHOULD_RENDER_JOB_TITLE,
    SET_SHOULD_RENDER_FULL_RESUME
} from '../constants'

export const inputName = (fullName) => {
    return {
        type: INPUT_NAME,
        payload: fullName
    }
}

export const inputTitle = (jobTitle) => {
    return {
        type: INPUT_TITLE,
        payload: jobTitle
    }
}

export const setProgress = (progress) => {
    return {
        type: SET_PROGRESS,
        payload: progress
    }
}

export const setShouldRenderJobTitle = () => {
    return {
        type: SET_SHOULD_RENDER_JOB_TITLE,
        payload: true
    }
}

export const setShouldRenderFullResume = (shouldRenderFullResume) => {
    return {
        type: SET_SHOULD_RENDER_FULL_RESUME,
        payload: shouldRenderFullResume
    }
}