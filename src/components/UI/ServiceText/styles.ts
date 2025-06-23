'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`


  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const BriefNote = styled.div`
  max-height: 54.75rem;
  padding: 8.25rem 4.5rem;
  background: var(--emerald);

  p {
    color: var(--Background, #070606);
    font-size: 8rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;
