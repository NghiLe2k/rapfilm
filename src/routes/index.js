import DangChieu from "../containers/HomeTemplate/DangChieu";
import ChiTietMovie from "../containers/HomeTemplate/ChiTietMovie";
export const routesHome = [
  {
    exact: true,
    path: "/",
    component: DangChieu,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: ChiTietMovie,
  },
];
export const routesAdmin = [];
