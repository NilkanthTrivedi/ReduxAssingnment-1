import { GET_DETAILS, POST_DETAILS } from "../type";
import {
    GetApiDetails,
    PostApiDetails,
    DeleteApiDetails,
} from "../../Api/AxiosRequest";

const GetApiAction = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log(res);
            dispatch({
                type: "GET_DETAILS",
                payload: res.data,
            });
        });
    };
};

// For POST DATA

const PostApiAction = (request) => {
    return function (dispatch) {
        return PostApiDetails(request).then((res) => {
            console.log("Response id here...", res);
            dispatch({
                type: "POST_DETAILS",
                payload: "",
            });
        });
    };
};

const DeleteApiAction = (id) => {
    return function (dispatch) {
        return DeleteApiDetails(id).then((res) => {
            console.log(res);
            dispatch({
                type: "DELETE_DETAILS",
                payload: true,
            });
        });
    };
};

export { PostApiAction, GetApiAction, DeleteApiAction };
