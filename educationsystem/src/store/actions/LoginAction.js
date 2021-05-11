import axios from 'axios';

const LOGINURL="http://localhost:8105/educationsystem/login";

export const loginSuccess=(login)=>{
    console.log("inside loginsuccess method");
    console.log(login);
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload)=>{
    console.log("inside loginvalidate method");
    let data={
        userId:payload.userId,
        userPassword:payload.userPassword,
        role:payload.role
    }
    return (dispatch)=>{
        return axios.post(LOGINURL+'/validate',data)
        .then(Response=>{
            localStorage.setItem("login",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(loginSuccess(Response.data));
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};

export const registrationSuccess=()=>{
    console.log("inside registrationsuccess method");
    alert("User registered successfully");
    window.location.href="/login";
    return {
        type:'REGN_SUCCESS'
    }
};
export const registerUser=(payload)=>{
    console.log("inside registeruser method");
    let data={
        userId:payload.userId,
        userPassword:payload.userPassword,
        role:payload.role
    }
    return (dispatch)=>{
        return axios.post(LOGINURL,data)
        .then(Response=>{
            //localStorage.setItem("login",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(registrationSuccess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
}