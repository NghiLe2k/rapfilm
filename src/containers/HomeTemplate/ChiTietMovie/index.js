import React, { Component } from "react";
import CumRap from "../../../components/CumRap";
import { actDetailMovieApi } from "./module/action";
import { connect } from "react-redux";
import "./../../../index.css";
class ChiTietMovie extends Component {
  handleLichChieu = (maHeThongRap) => {};
  x;
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="card d-flex">
              <img className="card-img-top" src="holder.js/100x180/" alt />
              <div className="card-body">
                <h4 className="card-title">Tsadsae</h4>
                <p className="card-text">Text</p>
                <button className="btn btn-success">mua vé</button>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <h3>Đánh giá</h3>
            <p>4.6</p>
          </div>
          <div className="col-xl-4 detail__totalCumRap">
            <div
              className="d-flex detail__cumRap"
              onClick={() => {
                this.handleLichChieu("BHDStar");
              }}
            >
              <div className="detail__img">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"></img>
              </div>

              <p className="pt-2">BHD Star Cineplex</p>
            </div>
            <div className="d-flex detail__cumRap">
              <div className="detail__img ">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"></img>
              </div>

              <p className="pt-2">MegaGS</p>
            </div>
            <div className="d-flex detail__cumRap">
              <div className="detail__img">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png"></img>
              </div>

              <p className="pt-2">Lotte Cinema</p>
            </div>
            <div className="d-flex detail__cumRap">
              <div className="detail__img">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"></img>
              </div>

              <p className="pt-2">cgv</p>
            </div>
            <div className="d-flex detail__cumRap">
              <div className="detail__img ">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"></img>
              </div>

              <p className="pt-2">Galaxy Cinema</p>
            </div>
            <div className="d-flex detail__cumRap">
              <div className="detail__img ">
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png"></img>
              </div>

              <p className="">CineStar</p>
            </div>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th>Tên cụm rạp</th>
                  <th>Ngày giờ chiếu</th>
                  <th>Giá Vé</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">sadsa</td>
                  <td>asdas</td>
                  <td>asdas</td>
                </tr>
                <tr>
                  <td scope="row">adsa</td>
                  <td>sadasd</td>
                  <td>asdsad</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    detailMovie: (id) => {
      dispatch(actDetailMovieApi());
    },
  };
};

export default connect(null, mapDispatchToProps)(ChiTietMovie);
