import express, { Request, response, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json())

app.use(cors({ 
    origin:"https://front-test-project.vercel.app/"
}))

app.get("/getdata", (req: Request, res: Response) => {
  res.send({data:{msg:"You are very okay i guess",number:"2"}});
});

app.post("/postdata",async (req:Request,res:Response)=>{
  try {
    const payload = await req.body
    if(!payload){
      console.log("Body is not found")
    }
      const response = await fetch('https://reqres.in/api/users',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
      })
      if(!response.ok){
        console.log("Response is not OK")
        throw Error
      }

      const data = await response.json()
      console.log(data)
      res.send(data)

  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:5000`);
});
