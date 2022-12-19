import * as type from "./actionTypes"
import axios from "axios";


export const UserLoginRequest=()=>{
      return {
        type:type.LOGIN_REQUEST
      }
}
export const UserLoginSuccess=(payload)=>{
    return {
      type:type.LOGIN_SUCCESS,
      payload
    }
}
export const UserLoginFailure=()=>{
    return {
      type:type.LOGIN_FAILURE,
    }
}

export const userLogin=(data)=>(dispatch)=>{
    dispatch(UserLoginRequest());
  return axios.get(`http://localhost:8080/otp/number`,data)
    .then((res)=>{
      if(res.data.length>0){
        console.log(res.data[0])
        return dispatch(UserLoginSuccess({token:"QpwL5tke4Pnpja7X4",data:res.data[0]}))
       }else{
        console.log("error")
        return dispatch(UserLoginFailure());
       }
      
        
    }).catch((res)=>{
      console.log(res)
     return dispatch(UserLoginFailure())

    })

}






const UserLogoutSuccess=()=>{
  return{
    type:type.LOGOUT_SUCCESS
  }
}
export const UserLogout=()=>(dispatch)=>{
     dispatch(UserLogoutSuccess())
}

