import * as React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface IResult {
  label: string;
  value: string;
};

interface IProps {
  fullSize: boolean;
  results: IResult[];
  onClick?: () => void;
};

const Banner = (props: IProps) => {
  const BannerElement = styled.div`
    border-radius: ${props.fullSize ? 0 : '20px'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: red;
    min-height: 150px;
    height: ${props.fullSize ? '100%' : '150px'};

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

  const ResultItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;
  `;

  return (
    <BannerElement>
      {props.results.map((result, idx) => (
        <ResultItem key={idx} >
          <div>{result.label}</div>
          <div>{result.value}</div>
        </ResultItem>
      ))}
    </BannerElement>
  );
};

export default Banner;
