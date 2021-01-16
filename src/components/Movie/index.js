import React, { Component } from "react";
import "./../../index.css";
import { Link } from "react-router-dom";
export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={movie.hinhAnh} />
          </div>
          <div className="details">
            <p>{movie.tenPhim}</p>
            <Link className="btn btn-success" to={`/detail/${movie.maPhim}`}>
              chi tiet film
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
