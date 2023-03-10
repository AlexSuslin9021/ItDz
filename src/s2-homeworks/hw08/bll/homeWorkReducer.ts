import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

      return   [...state].sort(function(a, b){
                if (a.name < b.name && action.payload==='up')
                    return -1
                if (a.name > b.name && action.payload==='down')
                    return -1
             return 0
            }) // need to fix
        }
        case 'check': {

            return state.filter(el=>el.age>action.payload) // need to fix
        }
        default:
            return state
    }
}
