import { INPUT_NAME, INPUT_TITLE } from '../constants'

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