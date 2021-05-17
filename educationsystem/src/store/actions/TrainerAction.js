import axios from 'axios';

const TRAINERURL="http://localhost:8105/educationsystem/trainer";

export const getTrainerSuccess = (trainers) => {
    console.log("inside getAllTrainersSuccess method");
    return{
        type : 'GET_ALL_TRAINERS_SUCCESS',trainers
    }
};

export const getTrainers = () => {
    console.log("inside Get All Trainers method");
        return (dispatch)=> {
        return axios.get(TRAINERURL+"/getall")
        .then(Response => {
            localStorage.setItem("trainers",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getTrainerSuccess(Response.data));
        })
    };
};

export const addTrainerSuccess=()=>{
    console.log("inside addTrainerSuccess method");
    return {
        type : 'TRAINER_ADDED'
    }
};

export const addTrainer = (payload) =>{
    console.log("inside addTrainer method");
    let trainer = {
        trainerName : payload.trainerName,
        phoneNumber : payload.phoneNumber,
        trainerExperience : payload.trainerExperience,
        trainerEmailId : payload.trainerEmailId,
        //studentId : payload.studentId,
        courseId : payload.courseId
    }
    return (dispatch)=> {
        return axios.post(TRAINERURL+"/add",trainer)
        .then(Response => {
            console.log("api call");
            dispatch(addTrainerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getTrainerByIdSuccess = (gettrainer) => {
    console.log("inside getTrainerByIdSuccess method");
    return {
        type : 'GET_TRAINER_BY_ID_SUCCESS',gettrainer
    }
};

export const getTrainerById = (trainerId) => {
    console.log("inside getTrainerById method");
    return (dispatch)=> {
        return axios.get(TRAINERURL+"/getbyid/"+trainerId)
        .then(Response => {
            localStorage.setItem("trainers",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getTrainerByIdSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const editTrainerSuccess=()=>{
    console.log("inside editTrainerSuccess method");
    return {
        type : 'TRAINER_EDITED'
    }
};

export const editTrainer = (payload) =>{
    console.log("inside editTrainer method");
    let trainer = {
        trainerId : payload.trainerId,
        trainerName : payload.trainerName,
        phoneNumber : payload.phoneNumber,
        trainerExperience : payload.trainerExperience,
        trainerEmailId : payload.trainerEmailId,
        studentId : payload.studentId,
        courseId : payload.courseId
    }
    return (dispatch)=> {
        return axios.put(TRAINERURL+"/update",trainer)
        .then(Response => {
            console.log("api call");
            dispatch(editTrainerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

 export const getTrainerByCourseSuccess = (gettrainercourse) => {
    console.log("inside getTrainerByCourseSuccess method");
    return {
        type : 'GET_TRAINER_BY_COURSE_SUCCESS',gettrainercourse
    }
};

export const getTrainerByCourse = (courseId) => {
    console.log("inside getTrainerByCourse method");
    return (dispatch)=> {
        return axios.get(TRAINERURL+"/getbycourse/"+courseId)
        .then(Response => {
            localStorage.setItem("gettrainercourse",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getTrainerByCourseSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
}; 

export const registerTrainerSuccess=()=>{
    console.log("inside registerTrainerSuccess method");
    return {
        type : 'TRAINER_REGISTERED'
    }
};

export const registerTrainer = (trainerId,studentId) =>{
    console.log("inside registerTrainer method");
    return (dispatch)=> {
        return axios.put(TRAINERURL+"/register/"+trainerId+"/"+studentId)
        .then(Response => {
            console.log("api call");
            dispatch(registerTrainerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};