import {
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILED,
  DETAIL_MOVIE_REQUEST,
} from "./constains";
import Axios from "axios";
export const actDetailMovieApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailMovieFail(err));
      });
  };
};
const actDetailMovieRequest = () => {
  return {
    type: DETAIL_MOVIE_REQUEST,
  };
};
const actDetailMovieSuccess = (data) => {
  return {
    type: DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};
const actDetailMovieFail = (err) => {
  return {
    type: DETAIL_MOVIE_FAILED,
    payload: err,
  };
};
