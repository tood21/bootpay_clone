import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const MobileHeader = ({menus, logo, color, showList, setShowList}) => {
    const navigate = useNavigate()



    const onClickHandler = () => {
        setShowList(!showList)
    }

    return (
        <HeaderInner bgColor={showList ? "#fff" : "transprent"} color={color}>
            <div>
                <Logo>
                    <h1 onClick={()=>setShowList(false)}>
                        <a><img alt="부트페이" src={logo} onClick={() => {
                            navigate("/")
                        }}/></a>
                    </h1>
                </Logo>
                <div color={color}>
                    <FontAwesomeIcon onClick={onClickHandler} icon={showList ? faXmark : faBars}/>
                </div>
            </div>
                <Nav showList={showList}>
                    <ul>
                        {menus.map((menu) => (
                            <li key={menu.id}>
                                <a onClick={() => {
                                    navigate(menu.url)
                                    setShowList(!showList)
                                }}>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                        <li><a onClick={()=>setShowList(false)}>회원가입/로그인</a></li>
                    </ul>
                </Nav>

        </HeaderInner>

    );
};

export default MobileHeader;

const HeaderInner = styled.div`
  margin: 0 auto;
  background-color: ${props => props.bgColor || "transprent"};
  color: ${props => props.color || "#2f374d"};
  transition: all 0.5s;
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${props => props.color || "#2f374d"};
    padding: 0 20px;

    > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 2rem;
    }
  }
`

const Logo = styled.div`
  height: 70px;
  display: flex;
  align-items: center;

  h1 {
    a {
      display: block;
      width: 100px;
      cursor: pointer;
    }
  }
`

const Nav = styled.nav`
  height: ${props => props.showList? "360px": "0"};
  box-shadow: 0 0 10px rgb(100 100 100 / 40%);
  overflow: hidden;
  transition: all 0.3s ease;
  ul {
    li {
      text-align: center;
      padding: 13px 20px;

      a {
        font-size: 1.25rem;
        color: #2f374d;
        line-height: 1.25;
        cursor: pointer;
        &:hover {
          font-weight: 700;
        }
      }
    }
  }
`

