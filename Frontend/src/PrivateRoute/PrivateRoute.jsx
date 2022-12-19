import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"



function PrivateRoute({children}) {
    const navigate=useNavigate();
    let state=useSelector((state)=>{
        return state
    })
    // console.log(state)
    const {isAuth}=state;
    console.log(isAuth)
    if(!isAuth){
        return navigate("/user/login")
 
    }
    return children
        
    
}

export default PrivateRoute;