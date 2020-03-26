import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 270px;
  background: #f5f5f5;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 36px;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      margin-left: 10px;
      text-transform: uppercase;

      span {
        padding-left: 5px;
      }
    }

    button:nth-child(1) {
      background: #ccc;
      color: #fff;
    }

    button:nth-child(2) {
      background: #7159c1;
      color: #fff;
    }
  }

  h1 {
    padding: 25px 0;
    color: #444;
  }
`;

export const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 4px;

  form {
    width: 100%;

    > div {
      display: flex;
      justify-content: center;
    }
  }

  span {
    color: #444;
  }

  input {
    height: 36px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 5px 0 15px;

    padding-left: 20px;
  }
`;
