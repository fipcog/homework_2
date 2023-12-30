type InitState = {
    themeId: number
}

const initState: InitState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeId): InitState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeId = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
