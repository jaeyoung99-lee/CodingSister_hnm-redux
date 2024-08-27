import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToLogin = () => {
    {
      authenticate === false ? navigate("/login") : navigate("/");
      setAuthenticate(false);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        &nbsp;
        <div>{authenticate === false ? "로그인" : "로그아웃"}</div>
      </div>
      <div className="logo">
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/mPpwY/btrS08qGYmD/HMrVGbYtNNpxynW3i53Zy1/img.png"
          alt="H&M logo"
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <div className="menu-icon" onClick={Menu}>
          ☰
        </div>
        <ul className={`menu-list ${menuOpen === true ? "show" : ""}`}>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
