import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #8e5be8;
  }
`;

export const PositionModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);

  background: #fff;
  width: 450px;
  border-radius: 4px;
  line-height: 24px;
  box-shadow: 0px 0px 10px #00000033;

  strong {
    color: #444;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 16px;

    > strong {
      color: #666;
    }
  }

  div {
    margin: 0 25px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;

    img {
      width: 234px;
      height: 36px;
      margin: 20px 0;
    }
  }

  .spanImg {
    display: flex;
    justify-content: center;
  }

  div:nth-child(3) {
    border-bottom: none;
  }
`;
