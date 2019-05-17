import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import colors from '../constants/colors';

interface IProps {
  name: string;
  confirmed: boolean;
}

const UserItemElement = styled.li`
  font-family: 'Montserrat', sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const UserName = styled.span`
  padding: 15px 0;
  font-size: 1.05rem;
`;

const UserItem = (props: IProps) => {
  return (
    <UserItemElement>
      <FontAwesomeIcon
        icon={faCheckCircle}
        color={props.confirmed ? colors.emerald : colors.silver}
      />
      <UserName>{props.name}</UserName>
    </UserItemElement>
  );
};

export default UserItem;
