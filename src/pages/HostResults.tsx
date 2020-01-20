import * as React from 'react';
import styled from 'styled-components';
import Banner from '../components/ResultBanner';
import colors from '../constants/colors';

import { Result } from '../constants/interfaces';
import { mode } from '../utils/math';

interface Vote {
  user: string;
  score: number;
}

interface Props {
  votes: Vote[];
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

const HostResults = ({ votes }: Props) => {
  const scores: number[] = votes.map(vote => vote.score).sort();

  let results: Result[] = [
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

  const distinctScores = Array.from(new Set(scores));

  const categorisedVotes = distinctScores.sort().map(score => {
    const matchingVotes = votes.filter(vote => vote.score === score);
    return {
      score,
      votes: matchingVotes,
    };
  });

  const renderedVotes = categorisedVotes.map(category => {
    return (
      <li>
        <UserList>
          {category.votes.map(vote => (<li>{vote.user}</li>))}
        </UserList>
        <ResultScore>{category.score}</ResultScore>
      </li>
    );
  });

  return (
    <>
      <Banner fullSize results={results} />
      <ResultList>
        {renderedVotes}
      </ResultList>
    </>
  );
};

export default HostResults;
