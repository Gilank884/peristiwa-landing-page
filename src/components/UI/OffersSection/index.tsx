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

  // Perbaikan agar hanya string yang dikirim ke MaskText
  const safeMobileParagraphPhrase = mobileParagraphPhrase.filter(
    (item): item is string => typeof item === 'string'
  );

  const safeDesktopParagraphPhrase = desktopParagraphPhrase.filter(
    (item): item is string => typeof item === 'string'
  );

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          <MaskText
            phrases={isMobile ? safeMobileParagraphPhrase : safeDesktopParagraphPhrase}
            tag="p"
          />
        </Header>

        {/* Penawaran pertama */}
        <Offers>
          {offers.slice(0, 2).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={[offer.title]} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>

        {/* Penawaran kedua */}
        <Offers>
          {offers.slice(2, 4).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={[offer.title]} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
