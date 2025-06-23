import { StaticImageData } from 'next/image';
import gilang_prasetyo from '../../../../public/images/gilang_prasetyo.png';
import hazim from '../../../../public/images/Hazim.png'
import memed from '../../../../public/images/Memed.png'
import alirizal from '../../../../public/images/ali_rizal.png'
import bangpadil from '../../../../public/images/Bangpadil.png'



export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "A conjurer of light, capturing fleeting whispers of time in a single frame. With an intuitive gaze, they sculpt moments into eternal narratives, blending shadow and hue to unveil the unseen beauty in every scene.",
    person: 'Moch Fadil Akbar',
    avatar: bangpadil,
  },
  {
    testimony:
      "A weaver of imagination, shaping ideas into vibrant, tangible forms. Their creations breathe life into concepts, blending color, form, and function to craft experiences that captivate and resonate with unspoken elegance.",
    person: 'Ali Rizal',
    avatar: alirizal,
  },
  {
    testimony:
      "A storyteller in motion, crafting vivid tapestries of sound and sight. They dance with time, weaving fluid visuals that pulse with emotion, transforming raw footage into cinematic journeys that linger in the soul.",
    person: 'Muhammad Hazim Fadlurrohman',
    avatar: hazim,
  },
  {
    testimony:
      "A guardian of the digital realm, wielding code and circuits to forge seamless pathways. With a mind attuned to invisible networks, they dissolve barriers, ensuring the team’s vision flows effortlessly through the currents of technology.",
    person: 'Gilang Prasetyo',
    avatar: gilang_prasetyo,
  },
  {
    testimony:
      "A conjurer of light, capturing fleeting whispers of time in a single frame. With an intuitive gaze, they sculpt moments into eternal narratives, blending shadow and hue to unveil the unseen beauty in every scene.",
    person: 'Muhammad Fadlil',
    avatar: memed,
  },
];

export const desktopHeaderPhrase = ['The Incredible Team Of', 'PERISTIWA'];
