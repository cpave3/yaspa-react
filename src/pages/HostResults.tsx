import * as React from 'react';
import styled from 'styled-components';
import Banner from '../components/ResultBanner';
import colors from '../constants/colors';

import { IResult } from '../constants/interfaces';
import { mode } from '../utils/math';

interface IVote {
  user: string;
  score: number;
}

interface IProps {
  votes: IVote[];
}

const ResultList = styled.ul`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  > li {
    margin: 15px 30px;
  }
`;

const UserList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    margin: 25px 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 25px;
  &:after {
    content: '';
    display: block;
    width: 75px;
    height: 1px;
    background-color: ${colors.silver};
  }
`;

const ResultScore = styled.div`
  text-align: center;
`;

const HostResults = (props: IProps) => {
  // Process the votes into a usable data structure. first, get the result overview form this data
  const scores: number[] = props.votes
    .reduce<number[]>((acc, cur) => {
      if (!acc.includes(cur.score)) {
        acc.push(cur.score);
      }
      return acc;
    }, [])
    .sort();

  let results: IResult[] = [
    {
      label: 'Min',
      value: `${Math.min(...scores)}`,
    },
    {
      label: 'Mode',
      value: `${mode(scores)}`,
    },
    {
      label: 'Max',
      value: `${Math.max(...scores)}`,
    },
  ];

  // scores.forEach(score => {
  //   results.push({
  //     label: 'min',
  //     value: `${props.votes.filter(vote => vote.score === score).length}`,
  //   });
  // });

  return (
    <>
      <Banner fullSize results={results} />
      <ResultList>
        <li>
          <UserList>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
          </UserList>
          <ResultScore>5</ResultScore>
        </li>
        <li>
          <UserList>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
          </UserList>
          <ResultScore>5</ResultScore>
        </li>
      </ResultList>
    </>
  );
};

export default HostResults;
