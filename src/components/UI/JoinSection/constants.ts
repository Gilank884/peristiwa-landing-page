import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';
import gilang_prasetyo from '../../../../public/images/gilang_prasetyo.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "PERISTIWA Agency has been a lifesaver for my business. Their marketing strategies were tailored perfectly to our needs, boosting our brand visibility like never before. The professionalism and dedication they showed gave us confidence in every step.",
    person: 'Moch Fadil Akbar',
    avatar: robert_fox,
  },
  {
    testimony:
      "I am incredibly thankful for PERISTIWA Agency. Their event planning services transformed my wedding into an unforgettable experience. The team’s attention to detail and creative vision made everything seamless, leaving me free to enjoy every moment.",
    person: 'Ali Rizal',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Working with PERISTIWA Agency was a game-changer for our community project. Their innovative approach and flawless execution brought our vision to life. I’m beyond impressed with their commitment to making every detail perfect.",
    person: 'Rafid Fikrat',
    avatar: esther_howard,
  },

 
];

export const desktopHeaderPhrase = ['Join Over 1 Thousand', 'Clients'];
