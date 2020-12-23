import React,{createContext,useReducer,useEffect}  from 'react'
import {TimerReducer} from "../reducer/TimerReducer"
import {dayCollection} from "../Api/ApiKey"
import moment from 'moment'

export const TimerContext = createContext()


const TimerContextProvider = (props) => {

    const initialState = {
        laps:[],
        idlap:null,
        pruebita:"hola mundo"
    }
    const [tiempo,dispatch] = useReducer(TimerReducer,initialState)

    const getDay = async()=>{
        const fecha = new Date()
        const fechaFormateada = moment(fecha).format('DD/MM/YYYY')
        const data = await dayCollection.where('fechaRecorrido','==',fechaFormateada).get()
        const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
        if(arrayData){
            console.log(arrayData[0])
           // console.log("existe data")
           // const idDay = arrayData[0].id
           // dispatch({type:'SET_IDLAP',payload:idDay})
        }else{
            console.log("no existe")
        }
        // if (!arrayData) {
            // const idDay = arrayData[0].id
            // console.log(idDay);
            // dispatch({type:'SET_IDLAP',payload:idDay})
        // }
    }

    useEffect(()=>{
        getDay()
    },[])

    return (  
        <TimerContext.Provider value={{tiempo,dispatch}}>
             {props.children}
        </TimerContext.Provider>
    );
}
 
export default TimerContextProvider;