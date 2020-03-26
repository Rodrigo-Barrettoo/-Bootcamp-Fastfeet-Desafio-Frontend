/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  width: 300px;
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

        img {
          height: 35px;
          width: 35px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
        }
      }
    }
  }
`;

export const Status = styled.div`
  div {
    display: flex;
    align-items: center;
    height: 25px;
    border-radius: 12px;
    padding: 5px 15px;
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
