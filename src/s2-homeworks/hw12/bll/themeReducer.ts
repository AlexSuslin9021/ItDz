const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: { type: 'SET_THEME_ID', id:number }):   {themeId:number }  => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id:number } => ({ type: 'SET_THEME_ID', id }) // fix any
