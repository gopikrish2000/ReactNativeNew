
export const FIRST_ACTION = 'firstAction';
export const SECOND_ACTION = 'secondAction';


export function firstActionCommand(param) {
    return {
        type: FIRST_ACTION,
        text1: param
    }
}

export function secondActionCommand(param) {
    return {
        type: SECOND_ACTION,
        text2: param
    }
}


