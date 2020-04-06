/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0 120px;
  background: #f5f5f5;

  h1 {
    padding: 25px 0;
    color: #444;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7159c1;
    height: 36px;
    width: 142px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;

    &:hover {
      background: ${darken(0.1, '#7159c1')};
    }
  }
`;

export const OpSelect = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 45%;
    left: 20px;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    color: #999;
  }
  input {
    width: 300px;
    height: 32px;
    border: 1px solid #ddd;
    color: #444;
    border-radius: 4px;
    padding: 0 35px;
  }
`;

export const Inicial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 16px;
  margin-right: 8px;
  text-transform: uppercase;
  border-radius: 50%;
  background: rgba(${props => (props.cor ? `${props.cor},${0.12}` : '')});
  color: rgba(${props => (props.cor ? `${props.cor},${0.8}` : '')});
`;

export const Table = styled.table`
  padding-top: 20px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 21px;
  text-align: left;
  color: #444;

  .acoes {
    text-align: right;
    padding-right: 25px;
    font-weight: bold;
  }

  .action {
    display: flex;
    justify-content: end;
    padding-right: 25px;
  }

  td,
  th {
    padding-left: 25px;
  }

  tbody {
    tr {
      height: 56px;
      border-radius: 40px;
      background: #fff;
      color: #666;

      td > div {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const Status = styled.div`
  div {
    display: flex;
    align-items: flex-start;
    height: 25px;
    border-radius: 12px;
    padding: 5px 5px;
    background: ${props =>
      props.status === 'entregue'
        ? '#DFF0DF'
        : props.status === 'pendente'
        ? '#F0F0DF'
        : props.status === 'retirada'
        ? '#BAD2FF'
        : props.status === 'cancelada'
        ? '#FAB0B0'
        : ''};

    color: ${props =>
      props.status === 'entregue'
        ? '#2CA42B'
        : props.status === 'pendente'
        ? '#C1BC35'
        : props.status === 'retirada'
        ? '#4D85EE'
        : props.status === 'cancelada'
        ? '#DE3B3B'
        : ''};
  }
`;

export const Div = styled.div`
  button {
    display: flex;
    align-items: center;
    border: 0;
    background: none;

    span {
      padding-left: 5px;
      color: #666;

      &:hover {
        color: #de3b3b;
      }
    }
  }

  .edit > span {
    color: #666;

    &:hover {
      color: #4d85ee;
    }
  }

  margin: 0 10px;
  display: ${props => (props.none ? 'none' : 'flex')};

  border-bottom: 1px solid #eee;
  margin-bottom: 5px;

  padding: 10px 5px;
`;
