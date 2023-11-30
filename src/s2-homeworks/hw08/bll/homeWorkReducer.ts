import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { 
    switch (action.type) {
        case 'sort': { 
            let newState = [...state]
            if(action.payload === 'up') newState.sort((a, b) => a.name > b.name ? 1 : -1)
            if(action.payload === 'down') newState.sort((a, b) => a.name < b.name ? 1 : -1)
            return newState
        }
        case 'check': {
            return state.filter(u => u.age >= 18)
        }
        default:
            return state
    }
}


