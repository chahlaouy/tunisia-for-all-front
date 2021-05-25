import {
  GET_MEMBERS,
  ADD_MEMBER,
  DELETE_MEMBER,
  GET_MEMBER_BY_ID,
  LOGIN
} from "../constants/ActionTypes";
import axios from "axios";
import history from "../history";
const API_URL = "http://localhost:3001/api/";

export const getMemberById = (id) => {
  console.log("member ", id);
  return (dispatch) => {
    return axios.get(API_URL + "members/" + id).then((res) => {
      console.log("response ", res.data);
      dispatch({ type: GET_MEMBER_BY_ID, payload: res.data });
      // history.push(`/members`)
    });
  };
};

export const login = (member) => {
  console.log("member ", member);
  return (dispatch) => {
    return axios.post(API_URL + "members/login", member).then((res) => {
      console.log("response ", res);
      dispatch({ type: LOGIN, payload: res.data.result });
      history.push(`/dashboard`);
    });
  };
};

export const getMembers = () => (dispatch) => {
  return fetch(API_URL + "members")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("members actions ", result);
      dispatch({
        type: GET_MEMBERS,
        payload: result.members,
      });
    });
};

export const addMember = (member) => {
  console.log("member ", member);
  return (dispatch) => {
    return axios.post(API_URL + "members/", member).then((res) => {
      console.log("response ", res);
    //   dispatch({ type: ADD_MEMBER, payload: res.data.result });
      history.push(`/gestion-des-adherants`);
    });
  };
};

export const updateMember = (member) => {
  console.log("udpate member", member);
  return (dispatch) => {
    return axios.put(API_URL + "members/", member).then((res) => {
      console.log("response ", res);

      history.push(`/gestion-des-adherants`);
    });
  };
};

export const deleteMember = (member) => {
  return (dispatch) => {
    return axios.delete(API_URL + "members", { data: member }).then((res) => {
      dispatch({ type: DELETE_MEMBER, payload: member });
    });
  };
};
