import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import { useEffect } from "react";



function PrivateRoute({children}) {
    const navigate=useNavigate();
    const  state=useSelector((state)=>{
        return state
    })
    useEffect(() => {
        
        // console.log(state)
        const {isAuth}=state;
        console.log(isAuth)
        if(!isAuth){
         navigate("/user/login")
     
        }
    }, []);
        return children
    
    
        
    
}

export default PrivateRoute;