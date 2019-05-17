import * as React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import UserItem from '../components/UserItem';
import { IUser } from '../constants/interfaces';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface IProps {
  users: IUser[];
}

const HostTopic = (props: IProps) => {
  return (
    <>
      <Banner header="Round 1" topic="AMS-975: Dynamic form builder" fullSize />
      <Wrapper>
        <UserList>
          {props.users.map(user => (
            <UserItem name={user.name} confirmed={user.confirmed} />
          ))}
        </UserList>
      </Wrapper>
    </>
  );
};

export default HostTopic;
