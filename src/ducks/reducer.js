 const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    hairColor: '',
    eyeColor: '',
    hobby: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: ''
}

const GET_FIRST = "GET_FIRST"
const GET_LAST = "GET_LAST"
const GET_GENDER = "GET_GENDER"
const HAIR_COLOR = "HAIR_COLOR"
const EYE_COLOR = "EYE_COLOR"
const GET_HOBBY = "GET_HOBBY"
const GET_BIRTH_DAY ="GET_BIRTH_DAY"
const GET_BIRTH_MONTH = "GET_BIRTH_MONTH"
const GET_BIRTH_YEAR = "GET_BIRTH_YEAR"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_FIRST:
            return Object.assign({}, state, {firstName: action.payload})
        case GET_LAST:
            return Object.assign({}, state, {lastName: action.payload})
        case GET_GENDER:
            return Object.assign({}, state, {gender: action.payload})
        case HAIR_COLOR:
            return Object.assign({}, state, {hairColor: action.payload})
        case EYE_COLOR:
            return Object.assign({}, state, {eyeColor: action.payload})
        case GET_HOBBY:
            return Object.assign({}, state, {hobby: action.payload})
        case GET_BIRTH_DAY:
            return Object.assign({}, state, {birthdayDay: action.payload})
        case GET_BIRTH_MONTH:
            return Object.assign({}, state, {birthdayMonth: action.payload})
        case GET_BIRTH_YEAR:
            return Object.assign({}, state, {birthdayYear: action.payload})
        return state;
    }
}

export function getFirst(name) {
    return {
        type: GET_FIRST,
        payload: name
    }
}

export function getLast(name) {
    return {
        type: GET_LAST,
        payload: name
    }
}

export function whatGender(gender) {
    return {
        type: GET_GENDER,
        payload: gender
    }
}

export function eyeColor(color) {
    return {
        type: EYE_COLOR,
        payload: color
    }
}

export function getHobby(hobby) { 
    return { 
        type: GET_HOBBY, 
        payload: hobby
    }
}
export function getBirthDay(day) { 
    return { 
        type: GET_BIRTH_DAY, 
        payload: day
    }
}
export function getBirthMonth(month) { 
    return { 
        type: GET_BIRTH_MONTH,
        payload: month
    }
}
export function getBirthYear(year) { 
    return { 
        type: GET_BIRTH_YEAR,
        payload: year
    }
}