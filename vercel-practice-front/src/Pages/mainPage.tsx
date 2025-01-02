import { Button } from "@mui/material";
import axios from "axios";

const MainPage = () => {

    const data = {
        name:"Szabi",
        job:"none"
    }

    const clickHandle = function(){
        axios.post("https://test-project-back.vercel.app/postdata",data)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const getDataHandle = function(){
        axios.get("https://test-project-back.vercel.app/getdata")
        .then((res)=>{
            console.log("Data: ",res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return ( 
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <Button onClick={clickHandle} size="large" variant="contained">
                Send Data
            </Button>
            <Button onClick={getDataHandle} size="large" variant="contained">
                Get Data
            </Button>
        </div>
     );
}
 
export default MainPage;