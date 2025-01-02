import { Button } from "@mui/material";
import axios from "axios";

const MainPage = () => {

    const data = {
        name:"Szabi",
        job:"none"
    }

    const clickHandle = function(){
        axios.post("http://localhost:4000/postdata",data)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return ( 
        <div className="w-screen h-screen flex justify-center items-center">
            <Button onClick={clickHandle} size="large" variant="contained">
                Hello There!
            </Button>
        </div>
     );
}
 
export default MainPage;