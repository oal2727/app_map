export const TimerReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_LAP':
        return{
            ...state,laps:[
                ...state.laps,action.payload
            ]
        }
        case 'SET_IDLAP':
            return{
                ...state,idlap:action.payload
            }
        case 'LIST_LAP':
            return{
                ...state,laps:action.payload
            }
        default:
            return state
    }
}