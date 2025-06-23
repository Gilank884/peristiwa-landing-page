'use client';
import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

const OffersSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          {isMobile ? (
            <MaskText s={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>

        {/* Baris 1: Kecil kiri - Besar kanan */}
        <Offers>
          <OfferCard style={{ flex: 1 }}>
            <ImageCtn>
              <Image src={offers[1].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[1].title]} tag="h2" />
              <p>{offers[1].details}</p>
            </TextCtn>
          </OfferCard>

          <OfferCard style={{ flex: 2 }}>
            <ImageCtn>
              <Image src={offers[0].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[0].title]} tag="h2" />
              <p>{offers[0].details}</p>
            </TextCtn>
          </OfferCard>
        </Offers>

        {/* Baris 2: Besar kiri - Kecil kanan */}
        <Offers>
          <OfferCard style={{ flex: 2 }}>
            <ImageCtn>
              <Image src={offers[2].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[2].title]} tag="h2" />
              <p>{offers[2].details}</p>
            </TextCtn>
          </OfferCard>

          <OfferCard style={{ flex: 1 }}>
            <ImageCtn>
              <Image src={offers[3].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[3].title]} tag="h2" />
              <p>{offers[3].details}</p>
            </TextCtn>
          </OfferCard>
        </Offers>

        {/* Baris 3: Kecil kiri - Besar kanan */}
        <Offers>
          <OfferCard style={{ flex: 1 }}>
            <ImageCtn>
              <Image src={offers[5].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[5].title]} tag="h2" />
              <p>{offers[5].details}</p>
            </TextCtn>
          </OfferCard>

          <OfferCard style={{ flex: 2 }}>
            <ImageCtn>
              <Image src={offers[4].illustration} alt="illustration" />
            </ImageCtn>
            <TextCtn>
              <MaskText phrases={[offers[4].title]} tag="h2" />
              <p>{offers[4].details}</p>
            </TextCtn>
          </OfferCard>
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
