import {
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILED,
  DETAIL_MOVIE_REQUEST,
} from "./constains";
let initialState = {
  loading: false,
  data: null,
  err: null,
};
const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;

      return { ...state };
    case DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;

      return { ...state };
    case DETAIL_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      break;
  }
};
export default detailMovieReducer;
