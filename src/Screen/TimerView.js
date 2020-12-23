import React,{useState,useRef,useContext}  from 'react'
import {View,Text,StyleSheet,FlatList,
  Dimensions,SafeAreaView,StatusBar } from 'react-native'
import CardTimer from "../components/Card/CardTimer"
import Button from "../components/Button/Button"
import {db} from "../Api/ApiKey"
import {formatTime} from "../Config/FormatTime"
import moment from 'moment'
import {TimerContext} from "../context/TimerContextProvider"
import ListTimer from "../components/Timer/ListTimer"
import 'moment/locale/es';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
// import NotificationComponent from "../components/Timer/Notification"

const {width, height} = Dimensions.get("window");

const TASK_NAME = "BACKGROUND_TASK"
const TimerView = () => {


  function myTask () { 
    try { 
      // buscar datos aquí ... 
      const backendData = "Búsqueda simulada" + Math.random (); 
      console.log ("myTask ()", backendData); 
      setStateFn (backendData); 
      return backendData 
        ? BackgroundFetch.Result.NewData 
        : BackgroundFetch.Result.NoData; 
    } catch (err) { 
      return BackgroundFetch.Result.Failed; 
    } 
  }
    

  async function initBackgroundFetch(taskName,
    taskFn,
    interval = 60 * 15) {
    try {
    if (!TaskManager.isTaskDefined(taskName)) {
      TaskManager.defineTask(taskName, taskFn);
      }
      const options = {
      minimumInterval: interval // in seconds
      };
    await BackgroundFetch.registerTaskAsync(taskName, options);
    } catch (err) {
    console.log("registerTaskAsync() failed:", err);
    }
}
    const {tiempo,dispatch} = useContext(TimerContext)
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [lap,setLap] = useState([])
    const date = new Date();

    const countRef = useRef(null);
    const FlatTimes = async()=>{
      const data = await db.collection(`dayLap/${tiempo.idlap}/lap`).get()
      const arrayData = data.docs.map(doc => ({id:doc.id,...doc.data()}))
      dispatch({type:'LIST_LAP',payload:arrayData})
    }
    
    React.useEffect(()=>{
      FlatTimes()
      // RegisterBackgroundTask()
    },[])
   
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000);
      };
      const handlePause = () => {
        clearInterval(countRef.current);
        setIsPaused(false);
      };
    
      const handleResume = () => {
        setIsPaused(true);
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1);
        }, 1000);

      };
      const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
      };
      const Lap = async() =>{
        console.log("lap on")
        const laps = formatTime(timer)
        console.log(laps)
        setLap([
          ...lap,laps
        ])

        if(tiempo.idlap === null){
          console.log("es otro dia")
           try{
            const fechaFormateada = moment(date).format('DD/MM/YYYY')
            await  db.collection("dayLap").add({
              day:1,
              fechaRecorrido:fechaFormateada,
              recorrido:3.30
            }).then((docRef)=>{
              const id = docRef.id
              lapChildren(laps,id)
            })
          }catch(err){
            console.log(err)
        }
        }else{
          lapChildren(laps,tiempo.idlap)
        }
      }
      const lapChildren =async(laps,id) =>{
         try{
          await  db.collection(`dayLap/${id}/lap`).add({
            lap:laps
          }).then((docRef)=>{
            const data={id:docRef.id,lap:laps}
            dispatch({type:'ADD_LAP',payload:data})
            console.log("guardado correctamente")
          })
        }catch(err){
          console.log(err)

        }
      }


    return (  
        <View style={{flex:1}}>
            <View style={styles.cardInitial}>
                    <CardTimer time={timer}/>
            </View>
            <Text style={styles.badgeday}> 
            <Text style={styles.badgedayText}> Dia { moment(date).locale('es').format('dddd')}</Text> 
            </Text>
            <View style={styles.Box}>
            {!isActive && !isPaused ? (
                 <Button onPress={handleStart}>START</Button>
            ) : isPaused ? (
                <Button onPress={handlePause}>Pausar</Button>
            ) : (
                <Button onPress={handleResume}>RESUME</Button>
            )
            }
              <Button  onPress={handleReset}>RESET</Button>
              <Button onPress={Lap}>LAP</Button>
            </View>
          <ListTimer flats={tiempo.laps}/>
          {/* <NotificationComponent/> */}
        </View>
    );
}
const styles = StyleSheet.create({
 
    cardInitial:{
        backgroundColor:"#00896F",
        width:width,
        height:height/3
        
    },
    badgeday:{
      backgroundColor:"#B0A8B9",
      color:"white",
      width:width/3,
      alignSelf:"center",
      marginTop:5,
      padding:5,
      borderRadius:10,
      textAlign:'center'
    },
    badgedayText:{
      fontSize:18
    },
    Box:{
      marginTop:10,
     flexDirection:"row",
     justifyContent:"space-around"
    }
    
}) 

export default TimerView;