
export const FIRST_ACTION = 'firstAction';
export const SECOND_ACTION = 'secondAction';


export function firstActionCommand(param) {
    return {
        type: FIRST_ACTION,
        text: param
    }
}

export function secondActionCommand(param) {
    return {
        type: SECOND_ACTION,
        text: param
    }
}


