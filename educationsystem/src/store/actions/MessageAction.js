import axios from 'axios';

const MESSAGEURL="http://localhost:8105/educationsystem/message";

export const getMessagesSuccess = (messages) => {
    console.log("inside getAllMessagesSuccess method");
    return {
        type : 'GET_ALL_MESSAGES_SUCCESS',messages
    }
};

export const getMessages = () => {
    console.log("inside Get All Message method");
        return (dispatch)=> {
        return axios.get(MESSAGEURL+"/getall")
        .then(Response => {
            localStorage.setItem("messages",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getMessagesSuccess(Response.data));
        })
    };
};

export const addMessageSuccess=()=>{
    console.log("inside addMessageSuccess method");
    return {
        type : 'MESSAGE_ADDED'
    }
}; 

export const addMessage = (payload) =>{
    console.log("inside addMessage method");
    let message = {
        messageDescription : payload.messageDescription,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.post(MESSAGEURL+"/add",message)
        .then(Response => {
            console.log("api call");
            dispatch(addMessageSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};


export const deleteMessageSuccess=()=>{
    console.log("inside deleteMessageSuccess method");
    return {
        type : 'MESSAGE_DELETED'
    }
};

export const deleteMessage = (messageId) =>{
    console.log("inside deleteMessage method");
    return (dispatch)=> {
        return axios.delete(MESSAGEURL+"/delete/"+messageId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteMessageSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const updateMessageSuccess=()=>{
    console.log("inside updateMessageSuccess method");
    return {
        type : 'MESSAGE_UPDATED'
    }
};

export const updateMessage = (payload) =>{
    console.log("inside updateMessage method");
    let message = {
        messageId : payload.messageId,
        messageDescription : payload.messageDescription,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.put(MESSAGEURL+"/update",message)
        .then(Response => {
            console.log("api call");
            dispatch(updateMessageSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};