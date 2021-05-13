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

export const getTrainerByCodeSuccess = (trainer) => {
    console.log("inside getTrainerByCodeSuccess method");
    return {
        type : 'GET_TRAINER_BY_CODE_SUCCESS',trainer
    }
};

export const getTrainerByCode = (code) => {
    console.log("inside getTrainerByCode method");
    return (dispatch)=> {
        return axios.get(TRAINERURL+"/getbyid"+code)
        .then(Response => {
            localStorage.setItem("item",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getTrainerByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const deleteTrainerSuccess=()=>{
    console.log("inside deleteTrainerSuccess method");
    return {
        type : 'TRAINER_DELETED'
    }
};

export const deleteTrainer = (trainerId) =>{
    console.log("inside deleteTrainer method");
    return (dispatch)=> {
        return axios.delete(TRAINERURL+"/delete/"+trainerId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteTrainerSuccess());
        })
        .catch(Error=> {
            console.log("Error");
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