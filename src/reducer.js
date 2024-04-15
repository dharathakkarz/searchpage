const reducer = (state,action) =>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true
            }
        case "GET_NEWS":
            return{
                ...state,
                isLoading:false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
            case "REMOVE_NEWS":
                return {
                    ...state,
                    hits: state.hits.filter((curElement) => curElement.objectID !== action.payload),
                }
                case "SEARCH_NEWS":
                    return {
                        ...state,
                        query: action.payload,
                    }
                    case "NEXT_PAGE":
                        let nextP = state.page + 1;
                        if(nextP >= state.nbPages){
                            nextP = 0
                        }
                        return{
                            ...state,
                            page: nextP
                        }
                        case "PREV_PAGE":
                            let pagenum = state.page -1;
                            if(pagenum  <= 0){
                                pagenum = 0
                            } 
                            return{
                                ...state,
                                page: pagenum
                            }
        default:
            return state;
    }





    // return state;
}

export default reducer;