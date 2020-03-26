import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  border: 0;
`;

export const Badge = styled.div`
  cursor: pointer;

  &:hover {
    color: ${darken(0.15, '#666')};
  }
`;

export const ListActions = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 20px);
  background: #fff;
  border-radius: 4px;
  border: 1px solid #0002;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 999;
  box-shadow: 0px 0px 2px #00000026;
  opacity: 1;

  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -16px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 18px solid #fff;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -18px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 18px solid #0003;
    z-index: -99;
  }

  div:nth-child(3) {
    border-bottom: none;
    padding: 10px 5px 0;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  display: ${props => (props.none ? 'none' : 'flex')};

  border-bottom: 1px solid #eee;
  margin-bottom: 5px;

  padding: 10px 5px;
`;
