import { useList } from "../../store/useList"
import { useEffect } from "react"
import { apiUrl } from "../../config/config"
import { Link } from "react-router-dom"

export default function Todo() {
    let {data,get,idxDel,setIdxDel,del,add,idxImg,setIdxImg,delImg,check,idxC,setIdxC,idxC2,setIdxC2,addObj,setAddObj,setById,byId,getByid,byidModal,setByidModal,addImg,addImgIdx,setAddImgIdx} = useList()
function handleAddImg(e) {
     e.preventDefault()
}
function handleAdd(e) {
e.preventDefault()
   let obj = new FormData()
   obj.append("name", e.target["name"].value)
   obj.append("description",e.target["description"].value)
   let file = e.target["files"].files
   for(let i=0; i<=file.length; i++) {
    obj.append("images",file[i])
   }
    setAddObj(obj)
    add(addObj)
}
    useEffect(() => {
        get()
    },[])
    console.log(data);
    return(<>
    {byidModal && <div className="absolute w-[100%] h-[100vh] bg-slate-200 flex justify-center items-center">
        <div className="w-[300px] h-[600px] bg-white">
            <span onClick={() => {
            setByidModal()
            }}>cancel</span>
        </div>
        </div>}
        <form className="w-[380px] bg-white p-[20px]" onSubmit={handleAdd}>
          <input name="files" multiple={true} type="file" />
        <input name="name" type="text" placeholder="Name" />
        <input name="description" type="text" placeholder="Description"/>
        <button type="submit">+ Add</button>
        </form>
    <div>
        <div className="grid grid-cols-1 w-[1000px] m-auto mt-[60px]">
            {data.map((el) => {
              return <div key={el.id}>
                <form onSubmit={handleAddImg}>
                <button type="submit" className="text-orange-400 border-orange-400 border-[1px] px-[10px] py-[3px]">Add Image</button>
                </form>
                <div className="flex gap-[24px]">{el.images.map((e) => {
                        return <div>
                            <img className="w-[200px] h-[200px]" src={`${apiUrl}/images/${e.imageName}`} alt="" />
                            <button className="text-red-700" onClick={() => {
                           setIdxImg(e.id)
                           delImg(idxImg)
                            }}>Delete Images</button>
                        </div>
                    })}</div>
                    <p onClick={() => {
                        setById(el.id)
                        getByid(byId)
                        setByidModal()
                    }}>{el.name}</p>
                    <p>{el.description}</p>
                    <div className="flex gap-[6px]">
                        <button className="text-red-700" onClick={() => {
                            setIdxDel(el.id)
                            del(idxDel)
                        }}>Delete</button>
                        <button className="text-green-600">Edit</button>
                        <button className="text-orange-600 border-orange-600 border-[1px] px-[10px] py-[4px] rounded-[2px]" onClick={() => {
                           setIdxC(el)
                           setIdxC2(el.id)
                           check(idxC,idxC2)
                        }}>Check</button>
                    </div>
                    <span className="text-[20px] font-[400]" style={{color: el.isCompleted ? "green" : "red"}}>{el.isCompleted ? "Active" : "Inactive"}</span>   
                </div>
            })}
        </div>
    </div>
    </>)
}