import { useEffect } from "react"
import { useList } from "../../store/useList"

export default function Byid() {
    let {getByid,byid,dataByid} = useList()
    useEffect(() => {
    getByid(byid)
    },[])
    console.log(dataByid);
    return(<>
    {dataByid.map((el) => {
       return <div key={el.id}>
         <p>{el.name}</p>
       </div>
    })}
    </>)
}