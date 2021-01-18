import listMovieReducer from "./../../containers/HomeTemplate/DangChieu/modules/reducer";
import listMovieScheduleReducer from "./../../containers/HomeTemplate/TheoNgay/modules/reducer";
import listHeThongRapReducer from "./../../containers/HomeTemplate/ThongTinRap/modules/reducer";
import detailPageReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  listMovieReducer,
  listMovieScheduleReducer,
  listHeThongRapReducer,
  detailPageReducer,
});
export default rootReducer;
