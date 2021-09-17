import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 1rem ;
  display: flex; 
  align-items: center;
  gap: 1rem;
  /* border-radius: 8px; */
  .icon {
    color: #f26a2e;
    padding: 1rem; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}