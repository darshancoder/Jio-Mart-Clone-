import React, { useState } from 'react';

function Data(props) {
    let localdata=JSON.parse(localStorage.getItem("alldata")) ||[]
    let initstate={
       name:"",
       mrp:"",
       price:"",
       imageurl:""
    }
    // console.log(initstate.imageurl)

    let [main,setmain]=useState(initstate)
    // console.log(main)
    let handlesubmit=(e)=>{
        e.preventDefault()
    console.log(main)
    localdata.push(main)
    localStorage.setItem("alldata",JSON.stringify(localdata))

    setmain(initstate)
 
    }

    let handlechange=(e)=>{
      let {name,value}=e.target
      setmain({
        ...main,
       [name]:value
      })
      

    }
    return (
        <div>

            <form action="" onSubmit={handlesubmit}>

            <input name='imageurl' type="text "  value={main.imageurl} onChange={handlechange} placeholder='enter image url'   /><br/>
            <input name='price' type="text " value={main.price} onChange={handlechange} placeholder='enter price'   /><br/>
            <input name='name' type="text "  value={main.name}  onChange={handlechange}placeholder='enter name of the item'   /><br/>
            <input name='mrp' type="text "  value={main.mrp}  onChange={handlechange}placeholder='enter mrp price'   /><br/>
              <button>submit</button>
            </form>
        </div>
    );
}

export default Data;