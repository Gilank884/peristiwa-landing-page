'use client';
import {
  BriefNote,
  Wrapper,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';

import {
  desktopBriefNotePhrase,
  mobileBriefNotePhrase,
} from './constants';

const FinancialFreedom = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <BriefNote>
        {isMobile ? (
          <MaskText phrases={mobileBriefNotePhrase} tag="p" />
        ) : (
          <MaskText phrases={desktopBriefNotePhrase} tag="p" />
        )}
      </BriefNote>
      </Wrapper>

  );
};

export default FinancialFreedom;
