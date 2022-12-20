import "./Quanlysanpham.scss";

import { useState } from "react";
function Quanlysanpham() {
  const [status, setStatus] = useState(false);
  return (
    <div className="quanlisanpham">
      <div className="quanlisanpham-header">
        <div className="left">My Product</div>
        <div className="mid">
          <button className="btn">Tất Cả</button>
          <button className="btn active">Sản Phẩm Trực Tuyến</button>
          <button className="btn">Top Sản Phẩm</button>
          <button className="btn">Sản Phẩm Đề Xuất</button>
        </div>
        <div className="right">
          <i class="fa fa-search"></i>
          <input
            className="sreach"
            type="text"
            placeholder="Search Here"
          ></input>
        </div>
      </div>

      <div className="container">
        <ul className="header-list">
          <input type="checkbox" />
          <li className="name">Tên Sản Phẩm</li>
          <li className="upload">Người Đăng</li>
          <li className="sale">Đã Bán</li>
          <li className="quantity">Số Lượng</li>
          <li className="status">Tình Trạng</li>
          <li className="action">Thao Tác</li>
        </ul>


        <ul className="content-list">
        <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
              <img
                className="img"
                src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                alt="img Product"
              />
              <p className="name">Tên Sản Phẩm</p>
            </div>
            <p className="upload">Người Đăng</p>
            <p className="sale">0</p>
            <p className="quantity">100</p>
            <p className="status" onClick={() => setStatus(!status)}  >
              {status ? (
                <i class="fa fa-toggle-on"></i>
              ) : (
                <i class="fa fa-toggle-off"></i>
              )}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
              <img
                className="img"
                src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                alt="img Product"
              />
              <p className="name">Tên Sản Phẩm</p>
            </div>
            <p className="upload">Người Đăng</p>
            <p className="sale">0</p>
            <p className="quantity">100</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? (
                <i class="fa fa-toggle-on"></i>
              ) : (
                <i class="fa fa-toggle-off"></i>
              )}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          <li className="content-list--item">
            <input type="checkbox" />
            <div className="name-box">
              <img
                className="img"
                src="https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
                alt="img Product"
              />
              <p className="name">Tên Sản Phẩm</p>
            </div>
            <p className="upload">Người Đăng</p>
            <p className="sale">0</p>
            <p className="quantity">100</p>
            <p className="status" onClick={() => setStatus(!status)}>
              {status ? (
                <i class="fa fa-toggle-on"></i>
              ) : (
                <i class="fa fa-toggle-off"></i>
              )}
            </p>
            <div className="action">
              <i class="fa fa-edit btn"></i>
              <i class="fa fa-trash btn"></i>
            </div>
          </li>
          


        </ul>
      </div>
    </div>
  );
}

export default Quanlysanpham;
