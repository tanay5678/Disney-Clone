import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Head>
      <Nav>
        <Link to="/">
          <Logo src="/images/logo.svg" />
        </Link>

        {/* <NavMenu>
          <a href="">
            <img src="/images/home-icon.svg" alt="" srcset="" />
            <span>HOME</span>
          </a>
          <a href="">
            <img src="/images/search-icon.svg" alt="" srcset="" />
            <span>SEARCH</span>
          </a>
          <a href="">
            <img src="/images/watchlist-icon.svg" alt="" srcset="" />
            <span>WATCHLIST</span>
          </a>
          <a href="">
            <img src="/images/original-icon.svg" alt="" srcset="" />
            <span>ORIGINALS</span>
          </a>
          <a href="">
            <img src="/images/movie-icon.svg" alt="" srcset="" />
            <span>MOVIES</span>
          </a>
          <a href="">
            <img src="/images/series-icon.svg" alt="" srcset="" />
            <span>SERIES</span>
          </a>
        </NavMenu> */}
        <UserImg src="data:image/jpeg;base64,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" />
      </Nav>
    </Head>
  );
}

export default Header;
const Head = styled.div`
  height: 70px;
  background: #090b13;
`;

const Nav = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 36px;
`;
const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 25px;
  align-tems: center;
  flex-wrap: wrap;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    color: white;
    img {
      height: 25px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 1px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImg = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
