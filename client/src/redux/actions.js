import {
  COUNTRIES_URL,
  NAME_COUNTRY_URL,
  ID_COUNTRY_URL,
} from "../databaseRoutes";
import axios from "axios";
import {
  countriesOrder,
  filterContinentActivity,
} from "../modules/utils/index";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";
export const CLEAN_COUNTRY = "CLEAN_COUNTRY";

// Las actions alimentan la informacion de la store
// Payloads son cargas de informaci{on}
// el comando para enviar informacion a la store es store.dispatch(un obj}eto)
// las actions les dicen a la store que hacer
// las actions tiene un type que es su key
// el type no debe repetirse por que se pisaran los valores, no hay una regla para los types

export function getCountries() {
  return async function (dispatch) {
    return axios
      .get(COUNTRIES_URL)
      .then((response) => {
        console.log("ACTIONS", response);
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      return axios
        .get(`http://localhost:3001/countries?name=${name}`)
        .then((response) => {
          console.log(response);
          dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: response.data,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
}

export function cleanCountry() {
  return function (dispatch) {
    dispatch({
      type: CLEAN_COUNTRY,
      payload: "",
    });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        dispatch({
          type: GET_COUNTRY_DETAIL,
          payload: response.data,
        });
      });
  };
}

export function getActivity(name) {
  return async function (dispatch) {
    return axios.get(`/activities/${name}`).then((response) => {
      dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    });
  };
}
export function getAllActivities() {
  return async function (dispatch) {
    return axios.get(`/activities/`).then((response) => {
      dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: response.data,
      });
    });
  };
}
export function postActivity(activity) {
  return async function (dispatch) {
    return axios
      .post(`http://localhost:3001/activities`, activity)
      .then((response) => {
        dispatch({
          type: POST_ACTIVITY,
          payload: response.data,
        });
      });
  };
}
export function orderCountries(orderTarget, criteria) {
  return async function (dispatch) {
    countriesOrder(orderTarget, criteria).then((orderTarget) => {
      return dispatch({
        type: ORDER_COUNTRIES,
        payload: orderTarget,
      });
    });
  };
}
export function filterCountries(orderTarget, criteria) {
  return async function (dispatch) {
    filterContinentActivity(orderTarget, criteria).then((orderTarget) => {
      return dispatch({
        type: FILTER_COUNTRIES,
        payload: orderTarget,
      });
    });
  };
}
