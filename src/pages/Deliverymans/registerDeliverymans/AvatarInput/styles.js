import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 50px;

  label {
    cursor: pointer;
    border: 0;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 1px dashed #ddd;
    }

    input {
      display: none;
    }
  }
`;
