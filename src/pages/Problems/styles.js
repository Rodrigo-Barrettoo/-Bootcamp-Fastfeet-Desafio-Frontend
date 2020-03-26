import styled from 'styled-components';

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

      span {
        margin-left: 8px;
      }
    }
  }
`;
