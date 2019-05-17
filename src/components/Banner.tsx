import * as React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface IProps {
  fullSize?: boolean;
  topic: string;
  header: string;
  onClick?: () => void;
}

const Banner = (props: IProps) => {
  const BannerElement = styled.div`
    font-family: 'Montserrat', sans-serif;
    border-radius: ${props.fullSize ? 0 : '20px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: red;
    min-height: 150px;
    height: ${props.fullSize ? '30%' : '150px'};

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2980b9+0,b159d5+100 */
    background: rgb(41, 128, 185); /* Old browsers */
    background: -moz-linear-gradient(
      45deg,
      rgba(41, 128, 185, 1) 0%,
      rgba(177, 89, 213, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      45deg,
      rgba(41, 128, 185, 1) 0%,
      rgba(177, 89, 213, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      45deg,
      rgba(41, 128, 185, 1) 0%,
      rgba(177, 89, 213, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2980b9', endColorstr='#b159d5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    color: ${colors.clouds};
  `;

  const Topic = styled.div`
    align-self: center;
    flex: 1;
    display: fllex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  `;

  const RoundCounter = styled.div``;

  return (
    <BannerElement>
      <RoundCounter>{props.header}</RoundCounter>
      <Topic>{props.topic}</Topic>
    </BannerElement>
  );
};

export default Banner;
