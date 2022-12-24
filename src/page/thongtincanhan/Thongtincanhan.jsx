import React, { useEffect, useState } from "react";
import './Thongtincanhan.scss'
import axios from "axios";
import ImgUser from "./icon-user.png";
import userService from "../../service/user.service";

function Thongtincanhan() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(userService.getCurrentUser())
    console.log(userService.getCurrentUser());

  }, []);

  return (
    <>
      {user ? (
        <div className="profile">
          <div className="profile-left">
            <img className="img" src={ImgUser}  alt="User Img"/>
          </div>
          <div className="profile-right">
            <p className="profile-right--name">UserName: <strong>{user.username}</strong></p>
            <p className="profile-right--text">Email: <strong>{user.email}</strong></p>
            <p className="profile-right--text">Roles: <strong>{user.roles}</strong></p>
            <p className="profile-right--text">Phone:{"   Đang Cập Nhật !"}</p>
            <p className="profile-right--text">Address: {"   Đang Cập Nhật !"}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Thongtincanhan;
