
import React from "react";
import { useReducer ,useEffect} from "react";
import reducer from "./reducer";

let api = "https://hn.algolia.com/api/v1/search?"


const initialState = {
    isLoading:true,
    page:0,
    query:"",
    nbPages:0,
    hits:[],
}





const AppContext = React.createContext();

const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

   

    const fetchData = async(url) =>{
        dispatch({type:"SET_LOADING"})
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
          dispatch({type: "GET_NEWS",
            payload:{
                hits:data.hits,
                nbPages:data.nbPages,
            }
        })
        } catch (error) {
            console.log(error)
            
        }
    }

    const removeNews = (news_id)=>{
        dispatch({type:"REMOVE_NEWS",payload:news_id})
    }
    const searchNews = (searchValue)=>{
        dispatch({type:"SEARCH_NEWS",payload:searchValue})
    }

    const getprevPage = ()=>{
        dispatch({type:"PREV_PAGE"})
    }
    const getnextPage = ()=>{
        dispatch({type:"NEXT_PAGE"})

    }



    useEffect(()=>{
        fetchData(`${api}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])


    return <AppContext.Provider value={{ ...state , removeNews,searchNews,getprevPage,getnextPage}}>
        {children}
    </AppContext.Provider>
}

//custom hook

const useGlobalContext = ()=>{
    return React.useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}