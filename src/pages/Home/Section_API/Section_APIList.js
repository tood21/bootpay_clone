import React from 'react';
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Section_APIList = ({menus, flag, onClickHandler }) => {
    return (
        <List>
            {
                menus.map((item) => (
                    <ListItem color={flag === item.id ? "#fff" : "#6e7c91"} bgColor={flag === item.id ? "#4529e5" : "#fff"} key={item.id}
                              onClick={() => (
                                  onClickHandler(item.id)
                              )}>
                        <Icon icon={item.icon}/>
                        <p>{item.title}</p>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default Section_APIList;

const List = styled.ul`
  width: 20%;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: ${props => props.bgColor};
  color: ${props => props.color};
  margin-bottom: 4px;
  border-radius: 5px;
  cursor: pointer;

  p {
    line-height: 1.6;
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  margin-right: 10px;
  width: 20%;
`