import axios from "axios";
import ACTION_TYPES from "./actionTypes";

export const getCountries=(name)=> async(dispatch)=>{
    await axios
    .get("https://restcountries.com/v3.1/region/"+name)
    .then((res)=>{
        console.log(" successresponse", res.data);
      dispatch(getData(res.data));
    })
    .catch((error) => {
      dispatch(getError(error));
      console.log(error);
      alert ('error');
    });
};

const getData = (result) => {   //data
  return {
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: result,
  };
};
const getError = (error) => {
  return {
    type: ACTION_TYPES.FETCH_FAIL,
    payload: error,
  };
};