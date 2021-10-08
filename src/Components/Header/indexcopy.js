import React from "react";
import { Drawer } from "antd";
import "./style.css";
import { KIDS_URL, MEN_URL, URLS, WOMEN_URL } from "../Data/constants";
import {Link} from "react-router-dom";

function CustomHeader() {
  const [navdrawer, setNavdrawer] = React.useState(false);
  const [selectNavLink, setSelectedNavLink] = React.useState("");

  const toggleNavbar = (v) => {
    setSelectedNavLink(v);
    setNavdrawer(true);
  };

  return (
    <div>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setNavdrawer(false)}
        visible={navdrawer}
        width="300"
      >
        <div>
          <ul
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0",
              margin: "1rem 0",
            }}
          >
            <li
              onClick={() => toggleNavbar("men")}
              style={{ cursor: "pointer" }}
            >
              MEN
            </li>
            <li
              onClick={() => toggleNavbar("women")}
              style={{ cursor: "pointer" }}
            >
              WOMEN
            </li>
            <li
              onClick={() => toggleNavbar("kids")}
              style={{ cursor: "pointer" }}
            >
              KIDS
            </li>
          </ul>
        </div>
        {selectNavLink === "men" && (
          <div style={{ padding: "1rem" }}>
              {MEN_URL.map((url,index)=>
              <Link key={index} to={`/men/${url.value}`} onClick={()=>setNavdrawer(false)}><p>{url.label}</p></Link>
              )}
          </div>
        )}
        {selectNavLink === "women" && (
          <div style={{ padding: "1rem" }}>
          {WOMEN_URL.map((url,index)=>
          <Link key={index} to={`/women/${url.value}`} onClick={()=>setNavdrawer(false)}><p>{url.label}</p></Link>
          )}
      </div>
        )}
        {selectNavLink === "kids" && (
          <div style={{ padding: "1rem" }}>
          {KIDS_URL.map((url,index)=>
          <Link key={index} to={`/kids/${url.value}`} onClick={()=>setNavdrawer(false)}><p key={index}>{url.label}</p></Link>
          )}
      </div>
        )}
      </Drawer>
      <header
        className="header"
        style={{
        //   position: "fixed",
          width: "100vw",
          height:"10vh",
          zIndex: "20",
          boxShadow: "0 2px 2px -2px rgba(0,0,0,.1)",
          background: "	#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 3rem",
        }}
      >
        <span>LOGO</span>
        <ul style={{ display: "flex", gap: "1rem", padding: "0", margin: "0" }}>
          <li
            style={{
              padding: ".5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => toggleNavbar("men")}
          >
            MEN
          </li>
          <li
            style={{
              padding: ".5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => toggleNavbar("women")}
          >
            WOMEN
          </li>
          <li
            style={{
              padding: ".5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => toggleNavbar("kids")}
          >
            KIDS
          </li>
        </ul>
        <ul style={{ display: "flex", gap: "1rem", padding: "0", margin: "0" }}>
          <li
            style={{
              padding: ".5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Link to={URLS.PROFILEPAGE}>
            Profile
            </Link>
          </li>
          <li
            style={{
              padding: ".5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <Link to={URLS.BAGPAGE}>
            Bag
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default CustomHeader;
