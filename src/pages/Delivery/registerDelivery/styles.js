import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 270px;
  background: #f5f5f5;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    padding: 25px 0;
    color: #444;
  }

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
`;

export const Content = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 4px;

  p {
    color: #444;
    padding: 20px 0 5px;
  }

  input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 9px;
  }
`;

export const OpSelect = styled.div`
  display: grid;
  grid-gap: 0px 20px;
  grid-template-columns: auto auto;
`;
