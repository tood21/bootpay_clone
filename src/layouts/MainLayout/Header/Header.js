import React from 'react';
import styled from "styled-components";
import { useNavigate} from "react-router-dom";


const Header = ({menus, logo, bgColor, color, path}) => {
    const navigate = useNavigate()
    return (
        <HeaderInner bgColor={bgColor} color={color}>
            <Logo>
                <h1>
                    <a><img alt="부트페이" src={logo} onClick={()=>{navigate("/")}} /></a>
                </h1>
            </Logo>
            <Nav>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.id} style={{borderBottom : menu.url === path && "2px solid #2f374d"}} >
                            <a onClick={()=>{navigate(menu.url)}}>
                                {menu.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </Nav>
            <Util>
                <a>회원가입/로그인</a>
            </Util>
        </HeaderInner>
    );
};

export default Header;


const HeaderInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${props => props.bgColor || "white"};
  color: ${props => props.color || "#2f374d"}
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
  display: flex;
  align-items: center;
  font-size: 0.8125rem;


  ul {
    display: flex;

    li {
      margin-right: 40px;
      

      a {
        line-height: 70px;
        cursor: pointer;
        display: block;

        &:hover {
          font-weight: 700;
        }
      }
    }
  }
`

const Util = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;

  a {
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }
`