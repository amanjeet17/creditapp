import axios from 'axios';
import {
  GET_PROFILE,
  GET_PROFILES,
  SET_PROFILE,
  GET_ERRORS,
  CLEAR_ERRORS
} from './types';

// Get all profile
export const getProfile = () => dispatch => {
  axios
    .get('/api/resume/all')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Get one profile
export const getProfiles= (instituteid) => dispatch => {
  axios
    .get('/api/resume/one',instituteid)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
// Post one profile
export const addinstitute = (instituteData) => dispatch => {
  console.log("addinstitute",instituteData);
  axios.post('/api/resume/submit', instituteData)
    .then(res => 'hi')
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
