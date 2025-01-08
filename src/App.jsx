import './App.css';
import { useState } from "react";
import './index.css';
export {Todolist} 
function Todolist() {
 let [taskarray,updatetarray]=useState([]);




 let createmaplist= taskarray.map((v,i)=>{
   return <Addlist data={v} index={i} key={`abc+${i}` }  list={taskarray} updatelist={updatetarray}/>
  });




  let submitfunction=(e)=>{
    e.preventDefault(); 
    let newaddtask=e.target.addtask.value;
    if(!newaddtask){
      alert(".......first enter something......")
    }else if(!taskarray.includes(newaddtask)){
      let task=[...taskarray,newaddtask];
      updatetarray(task)
      console.log(task)
    }else{
      alert(".......already added....")
    }
 
   
    
    
  }
  return (
    <>
        
    <div className="container_for_from">
    <h1>TODO LIST WEB APP FOR PRODUCTIVITY</h1>
    <form action="" onSubmit={submitfunction}>
    <input type="text" name='addtask' />
    <button>add new task</button>
    </form>
    <div className="">
     {createmaplist}
   
    </div>
    </div>
   
    </>
  )
  
}

function Addlist({data,index, list,updatelist}){
  let [donemark,update_donemark]=useState(false);
  return (
    <>

    
    <div className={`ptagfor_parents ${(donemark)? "doneitemsdfsdsd": ''}`}>
        <p className={`ptagfor ${(donemark)? "doneitems": ''}`} onClick={()=>{
          update_donemark(!donemark)
        }}>{data}</p><span onClick={()=>{
          console.log(list)
         list= list.filter((v,ival)=>{
            return ival!=index

          });
          updatelist(list)
        }}>delete now</span>
    </div>
       
    </>
  )
}