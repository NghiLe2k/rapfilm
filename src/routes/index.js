import DangChieu from "../containers/HomeTemplate/DangChieu";
import DetailPage from "./../containers/HomeTemplate/DetailPage";
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: DangChieu,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
];
export const routesAdmin = [];
