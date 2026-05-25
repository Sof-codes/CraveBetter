import React from 'react';

interface FoodSvgProps {
  seed: string;
  className?: string;
  size?: number;
}

export const FoodSvg: React.FC<FoodSvgProps> = ({ seed, className = '', size = 120 }) => {
  const getSvgContent = () => {
    switch (seed) {
      case 'makhana':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#F4EAE1" />
            <circle cx="100" cy="100" r="70" fill="#EADCC9" opacity="0.6" />
            {/* Makhana pops */}
            <circle cx="70" cy="80" r="14" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            <circle cx="68" cy="78" r="4" fill="#C9B195" opacity="0.4" />
            <circle cx="110" cy="70" r="16" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            <circle cx="112" cy="72" r="5" fill="#C9B195" opacity="0.4" />
            <circle cx="95" cy="115" r="15" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            <circle cx="92" cy="112" r="3" fill="#C9B195" opacity="0.4" />
            <circle cx="130" cy="105" r="14" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            <circle cx="132" cy="107" r="4" fill="#C9B195" opacity="0.4" />
            <circle cx="75" cy="120" r="12" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            <circle cx="100" cy="95" r="16" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
            {/* Mint garnish */}
            <path d="M 90 90 Q 75 70 85 65 Q 95 70 90 90 Z" fill="#88BBA3" />
            <path d="M 90 90 Q 105 75 100 68 Q 90 75 90 90 Z" fill="#75A68E" />
          </>
        );

      case 'chana':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#E8D1B3" />
            {/* Bowl edge */}
            <circle cx="100" cy="100" r="72" fill="#D3BA99" opacity="0.5" />
            {/* Chana beans */}
            <circle cx="75" cy="75" r="9" fill="#B38655" />
            <circle cx="75" cy="75" r="7" fill="#C59C6D" />
            <circle cx="105" cy="70" r="10" fill="#B38655" />
            <circle cx="105" cy="70" r="8" fill="#C59C6D" />
            <circle cx="125" cy="88" r="9" fill="#996D3D" />
            <circle cx="125" cy="88" r="7" fill="#B38655" />
            <circle cx="80" cy="115" r="10" fill="#B38655" />
            <circle cx="80" cy="115" r="8" fill="#C59C6D" />
            <circle cx="100" cy="110" r="11" fill="#996D3D" />
            <circle cx="100" cy="110" r="9" fill="#B38655" />
            <circle cx="120" cy="118" r="8" fill="#B38655" />
            <circle cx="98" cy="90" r="10" fill="#C59C6D" />
            <circle cx="82" cy="95" r="9" fill="#996D3D" />
          </>
        );

      case 'popcorn':
        return (
          <>
            <rect x="50" y="60" width="100" height="90" rx="10" fill="#EDF2F4" />
            <line x1="70" y1="60" x2="70" y2="150" stroke="#E6A7A8" strokeWidth="12" />
            <line x1="100" y1="60" x2="100" y2="150" stroke="#E6A7A8" strokeWidth="12" />
            <line x1="130" y1="60" x2="130" y2="150" stroke="#E6A7A8" strokeWidth="12" />
            {/* Fluffy popcorn kernels */}
            <circle cx="65" cy="50" r="14" fill="#FFF2CC" />
            <circle cx="75" cy="45" r="12" fill="#FFE599" />
            <circle cx="95" cy="40" r="15" fill="#FFF2CC" />
            <circle cx="110" cy="48" r="13" fill="#FFE599" />
            <circle cx="130" cy="45" r="14" fill="#FFF2CC" />
            <circle cx="100" cy="53" r="12" fill="#FFE599" />
            <circle cx="80" cy="55" r="14" fill="#FFFFFF" />
            <circle cx="118" cy="54" r="13" fill="#FFFFFF" />
          </>
        );

      case 'peanut':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#E6D3C1" />
            {/* Peanut pods */}
            <path d="M 60 90 Q 75 75 90 90 Q 105 105 120 90" stroke="#A88B73" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M 75 110 Q 90 95 105 110 Q 120 125 135 110" stroke="#A88B73" strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="80" cy="80" r="8" fill="#CBB5A0" />
            <circle cx="115" cy="105" r="10" fill="#CBB5A0" />
            <circle cx="100" cy="75" r="9" fill="#BCA691" />
          </>
        );

      case 'ragi':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#DCCBC0" />
            {/* Flat baked crisps */}
            <rect x="60" y="70" width="35" height="35" rx="4" transform="rotate(15, 77, 87)" fill="#785B4E" />
            <rect x="105" y="65" width="35" height="35" rx="4" transform="rotate(-10, 122, 82)" fill="#8C6E61" />
            <rect x="75" y="105" width="35" height="35" rx="4" transform="rotate(45, 92, 122)" fill="#684D41" />
            {/* Salt flecks */}
            <circle cx="75" cy="85" r="1.5" fill="#FFFFFF" />
            <circle cx="120" cy="80" r="1.5" fill="#FFFFFF" />
            <circle cx="95" cy="120" r="1.5" fill="#FFFFFF" />
          </>
        );

      case 'dark_choc':
        return (
          <>
            <rect x="40" y="40" width="120" height="120" rx="12" fill="#3D2925" />
            {/* Sub-squares */}
            <rect x="50" y="50" width="45" height="45" rx="6" fill="#4E3631" />
            <rect x="105" y="50" width="45" height="45" rx="6" fill="#4E3631" />
            <rect x="50" y="105" width="45" height="45" rx="6" fill="#4E3631" />
            <rect x="105" y="105" width="45" height="45" rx="6" fill="#4E3631" />
            {/* Almonds */}
            <path d="M 60 70 C 65 60, 80 65, 75 75 C 70 85, 55 80, 60 70 Z" fill="#DCA37F" />
            <path d="M 125 125 C 130 115, 145 120, 140 130 C 135 140, 120 135, 125 125 Z" fill="#DCA37F" transform="rotate(25, 132, 127)" />
          </>
        );

      case 'dates':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EADAC9" />
            {/* Dates */}
            <rect x="60" y="80" width="30" height="50" rx="15" transform="rotate(-20, 75, 105)" fill="#4A261D" />
            <rect x="110" y="70" width="30" height="50" rx="15" transform="rotate(25, 125, 95)" fill="#5C3328" />
            <circle cx="85" cy="110" r="7" fill="#E8C180" /> {/* Peanut butter peanut oozing */}
            <circle cx="112" cy="95" r="7" fill="#E8C180" />
          </>
        );

      case 'banana_nice':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Cup */}
            <path d="M 60 110 L 140 110 L 130 150 L 70 150 Z" fill="#88BBA3" />
            <rect x="55" y="102" width="90" height="8" rx="4" fill="#72A88F" />
            {/* Banana Swirl */}
            <path d="M 70 102 C 70 70, 130 70, 130 102 Z" fill="#FFF2CC" />
            <path d="M 80 85 C 80 60, 120 60, 120 85 Z" fill="#FFE599" />
            <path d="M 90 70 C 90 50, 110 50, 110 70 Z" fill="#FFFFFF" />
            {/* Cocoa dusting */}
            <circle cx="95" cy="72" r="1.5" fill="#4E3631" />
            <circle cx="105" cy="65" r="1.5" fill="#4E3631" />
            <circle cx="88" cy="85" r="1.5" fill="#4E3631" />
            <circle cx="112" cy="80" r="1.5" fill="#4E3631" />
          </>
        );

      case 'warm_milk':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FDF3E7" />
            {/* Steaming lines */}
            <path d="M 85 45 Q 90 35 85 25" stroke="#DF9B7A" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M 100 40 Q 105 30 100 20" stroke="#DF9B7A" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M 115 45 Q 120 35 115 25" stroke="#DF9B7A" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
            {/* Mug */}
            <rect x="65" y="60" width="70" height="80" rx="12" fill="#E6A7A8" />
            {/* Mug handle */}
            <path d="M 135 75 C 150 75, 150 125, 135 125" stroke="#E6A7A8" strokeWidth="10" fill="none" />
            {/* Heart on mug */}
            <path d="M 100 105 C 100 105, 93 99, 93 94 C 93 90, 97 87, 100 91 C 103 87, 107 90, 107 94 C 107 99, 100 105, 100 105 Z" fill="#FFFFFF" />
          </>
        );

      case 'oats_upma':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EFEAE2" />
            {/* Bowl */}
            <path d="M 40 100 C 40 150, 160 150, 160 100 Z" fill="#DF9B7A" />
            <rect x="35" y="94" width="130" height="8" rx="4" fill="#C88463" />
            {/* Upma mount */}
            <ellipse cx="100" cy="94" rx="55" ry="25" fill="#EDE4D7" />
            {/* Veggies */}
            <circle cx="80" cy="90" r="4" fill="#88BBA3" /> {/* Peas */}
            <circle cx="120" cy="88" r="4" fill="#88BBA3" />
            <circle cx="100" cy="95" r="4" fill="#88BBA3" />
            <rect x="70" y="95" width="6" height="6" rx="1" fill="#E6A7A8" /> {/* Carrot cubes */}
            <rect x="110" y="96" width="6" height="6" rx="1" fill="#E6A7A8" />
            <rect x="90" y="85" width="6" height="6" rx="1" fill="#E6A7A8" />
          </>
        );

      case 'rice_noodles':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Slurpy Bowl */}
            <path d="M 40 95 C 40 145, 160 145, 160 95 Z" fill="#88BBA3" />
            <rect x="35" y="89" width="130" height="8" rx="4" fill="#71A48C" />
            {/* Noodles base */}
            <ellipse cx="100" cy="89" rx="55" ry="22" fill="#FFFFFF" />
            {/* Noodle swirls */}
            <path d="M 60 85 Q 80 75 100 85 T 140 85" stroke="#F2EFE9" strokeWidth="4" fill="none" />
            <path d="M 50 92 Q 90 80 110 92 T 150 92" stroke="#F2EFE9" strokeWidth="4" fill="none" />
            {/* Paneer slices */}
            <rect x="75" y="80" width="18" height="18" rx="3" fill="#FFF9E6" stroke="#EAD9A6" strokeWidth="1.5" />
            <rect x="105" y="82" width="18" height="18" rx="3" fill="#FFF9E6" stroke="#EAD9A6" strokeWidth="1.5" />
            {/* Coriander leaf */}
            <circle cx="100" cy="92" r="3" fill="#4B8C6C" />
          </>
        );

      case 'fried_rice':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF9E6" />
            {/* Wok */}
            <path d="M 40 100 C 40 150, 160 150, 160 100 Z" fill="#4E4642" />
            <rect x="35" y="94" width="130" height="8" rx="4" fill="#3D3633" />
            {/* Handle */}
            <rect x="15" y="92" width="22" height="12" rx="4" fill="#3D3633" />
            {/* Golden Rice pile */}
            <ellipse cx="100" cy="94" rx="55" ry="25" fill="#EAD29A" />
            {/* Egg shreds & peas */}
            <circle cx="75" cy="88" r="4.5" fill="#88BBA3" />
            <circle cx="115" cy="92" r="4.5" fill="#88BBA3" />
            <path d="M 85 92 Q 92 88 95 95" stroke="#FFE699" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M 102 85 Q 108 90 112 85" stroke="#FFE699" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          </>
        );

      case 'frozen_mango':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF4E6" />
            {/* Mango chunks */}
            <path d="M 50 110 C 50 70, 95 60, 90 100 C 85 140, 50 135, 50 110 Z" fill="#FFA21F" />
            <path d="M 100 90 C 100 50, 145 60, 140 90 C 135 120, 100 120, 100 90 Z" fill="#FFB74D" />
            {/* Frost sparkles */}
            <polygon points="75,65 77,70 82,70 78,73 80,78 75,75 70,78 72,73 68,70 73,70" fill="#FFFFFF" opacity="0.8" />
            <polygon points="120,95 122,100 127,100 123,103 125,108 120,105 115,108 117,103 113,100 118,100" fill="#FFFFFF" opacity="0.8" />
          </>
        );

      case 'doi':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FDF3E7" />
            {/* Clay Matka (pot) */}
            <path d="M 60 105 C 50 105, 50 150, 100 150 C 150 150, 150 105, 140 105 Z" fill="#C58062" />
            <ellipse cx="100" cy="105" rx="40" ry="12" fill="#B36E50" />
            {/* Creamy yogurt filling */}
            <ellipse cx="100" cy="103" rx="34" ry="10" fill="#FFFDF5" />
            {/* Pistachio garnishing */}
            <ellipse cx="95" cy="102" rx="3" ry="1.5" fill="#88BBA3" />
            <ellipse cx="108" cy="104" rx="2" ry="1" fill="#88BBA3" />
          </>
        );

      case 'chia':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EDF3FA" />
            {/* Tall dessert glass */}
            <path d="M 65 60 L 135 60 L 125 140 L 75 140 Z" fill="rgba(255,255,255,0.4)" stroke="#A3C6E5" strokeWidth="2" />
            {/* Chia layer */}
            <path d="M 70 85 L 130 85 L 125 140 L 75 140 Z" fill="#FFFFFF" />
            {/* Chia speckles */}
            <circle cx="85" cy="100" r="1.5" fill="#555555" />
            <circle cx="115" cy="105" r="2" fill="#555555" />
            <circle cx="95" cy="120" r="1.5" fill="#333333" />
            <circle cx="108" cy="130" r="2" fill="#555555" />
            <circle cx="80" cy="125" r="1.5" fill="#555555" />
            <circle cx="100" cy="98" r="2" fill="#555555" />
            {/* Mango / Berry topping */}
            <path d="M 70 65 Q 100 80 130 65 L 131 85 L 69 85 Z" fill="#FFA21F" />
            <circle cx="80" cy="72" r="3" fill="#E6A7A8" />
            <circle cx="120" cy="75" r="3.5" fill="#E6A7A8" />
          </>
        );

      case 'tea':
      case 'chamomile':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EDF3FA" />
            {/* Steaming lines */}
            <path d="M 90 40 Q 95 30 90 20" stroke="#3361A6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M 108 42 Q 113 32 108 22" stroke="#3361A6" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
            {/* Delicate tea cup */}
            <path d="M 60 70 C 60 120, 140 120, 140 70 Z" fill="#FFFFFF" stroke="#A3C6E5" strokeWidth="2" />
            <path d="M 140 80 C 152 80, 152 100, 140 100" stroke="#A3C6E5" strokeWidth="2" fill="none" />
            <ellipse cx="100" cy="70" rx="40" ry="8" fill="#D3E6F5" />
            {/* Lemon wedge inside */}
            <path d="M 85 70 C 85 75, 95 75, 95 70 Z" fill="#FFD966" />
          </>
        );

      case 'pb_toast':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Bread shape */}
            <path d="M 60 80 C 60 65, 80 55, 100 60 C 120 55, 140 65, 140 80 C 140 115, 130 140, 100 140 C 70 140, 60 115, 60 80 Z" fill="#D5B08C" />
            <path d="M 66 84 C 66 72, 82 64, 100 68 C 118 64, 134 72, 134 84 C 134 112, 124 134, 100 134 C 76 134, 66 112, 66 84 Z" fill="#FFEFE0" />
            {/* Peanut butter spread */}
            <path d="M 72 88 Q 100 80 128 88 Q 120 115 100 125 Q 80 115 72 88 Z" fill="#C28753" />
            {/* Banana slices */}
            <circle cx="90" cy="98" r="10" fill="#FFFCE8" stroke="#E6D385" strokeWidth="1" />
            <circle cx="90" cy="98" r="4" fill="#C5B173" opacity="0.3" />
            <circle cx="112" cy="108" r="10" fill="#FFFCE8" stroke="#E6D385" strokeWidth="1" />
            <circle cx="112" cy="108" r="4" fill="#C5B173" opacity="0.3" />
          </>
        );

      case 'shikanji':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Highball glass */}
            <path d="M 65 50 L 135 50 L 125 150 L 75 150 Z" fill="rgba(255,255,255,0.4)" stroke="#88BBA3" strokeWidth="3.5" />
            {/* Drink level */}
            <path d="M 69 75 L 131 75 L 125 150 L 75 150 Z" fill="#EBF9F3" />
            {/* Straw */}
            <line x1="105" y1="30" x2="80" y2="140" stroke="#DF9B7A" strokeWidth="5" strokeLinecap="round" />
            {/* Lemon wheel on rim */}
            <circle cx="132" cy="52" r="18" fill="#FFD54F" />
            <circle cx="132" cy="52" r="14" fill="#FFEE58" />
            {/* Mint leaves floating */}
            <path d="M 90 90 Q 75 80 85 75 Z" fill="#66BB6A" />
            <path d="M 105 110 Q 120 100 110 95 Z" fill="#66BB6A" />
            {/* Bubbles */}
            <circle cx="85" cy="120" r="3" fill="#FFFFFF" opacity="0.8" />
            <circle cx="115" cy="130" r="2" fill="#FFFFFF" opacity="0.8" />
            <circle cx="95" cy="100" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </>
        );

      case 'chaas':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Steel tumbler style glass */}
            <path d="M 70 55 L 130 55 L 120 150 L 80 150 Z" fill="#E3ECE9" stroke="#BACAC5" strokeWidth="2.5" />
            {/* Frothy butter milk level */}
            <ellipse cx="100" cy="55" rx="30" ry="8" fill="#FFFFFF" />
            {/* Cumin sprinkles and coriander */}
            <circle cx="92" cy="55" r="1.5" fill="#6E5C53" />
            <circle cx="105" cy="57" r="1" fill="#6E5C53" />
            <circle cx="100" cy="54" r="1.5" fill="#6E5C53" />
            <ellipse cx="100" cy="55" rx="5" ry="3" fill="#66BB6A" />
          </>
        );

      case 'coconut':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Coconut hull */}
            <path d="M 50 90 C 50 145, 150 145, 150 90 Z" fill="#5C8572" />
            <path d="M 50 90 C 50 65, 150 65, 150 90 Z" fill="#A8D3BF" />
            <ellipse cx="100" cy="82" rx="40" ry="10" fill="#FFFFFF" />
            {/* Straw */}
            <line x1="120" y1="40" x2="95" y2="90" stroke="#DF9B7A" strokeWidth="5" strokeLinecap="round" />
            <path d="M 120 40 L 130 45" stroke="#DF9B7A" strokeWidth="5" strokeLinecap="round" />
          </>
        );

      case 'oat_cookies':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Cookie base */}
            <circle cx="100" cy="100" r="45" fill="#D3A783" />
            <circle cx="96" cy="96" r="42" fill="#E2BB99" />
            {/* Chocolate chips / spots */}
            <circle cx="85" cy="85" r="5.5" fill="#5D3A24" />
            <circle cx="112" cy="90" r="6" fill="#5D3A24" />
            <circle cx="100" cy="115" r="5" fill="#5D3A24" />
            <circle cx="80" cy="106" r="4.5" fill="#5D3A24" />
            <circle cx="115" cy="110" r="5" fill="#5D3A24" />
          </>
        );

      case 'peanuts_ghee':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Golden Jaggery ball */}
            <path d="M 60 110 C 55 90, 85 60, 110 70 C 135 80, 140 115, 100 125 C 75 130, 60 120, 60 110 Z" fill="#D59B53" />
            <path d="M 70 100 C 68 88, 90 70, 108 78 C 120 84, 122 108, 98 116 C 82 120, 72 110, 70 100 Z" fill="#E5AB63" />
            {/* Embedded peanuts */}
            <ellipse cx="85" cy="90" rx="9" ry="5" transform="rotate(30, 85, 90)" fill="#FFF3DF" />
            <ellipse cx="110" cy="95" rx="8" ry="4.5" transform="rotate(-25, 110, 95)" fill="#FFF3DF" />
            <ellipse cx="98" cy="112" rx="9" ry="5" transform="rotate(15, 98, 112)" fill="#FFF3DF" />
          </>
        );

      case 'mug_cake':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FBF0F2" />
            {/* Mug */}
            <rect x="65" y="70" width="70" height="75" rx="10" fill="#E6A7A8" />
            <path d="M 135 85 C 145 85, 145 125, 135 125" stroke="#E6A7A8" strokeWidth="8" fill="none" />
            {/* Cake overflowing */}
            <path d="M 70 70 C 70 52, 130 52, 130 70 Z" fill="#4E3631" />
            <ellipse cx="100" cy="68" rx="28" ry="8" fill="#5E433D" />
            {/* Melted chocolate drizzle */}
            <path d="M 85 68 Q 95 80 100 70 T 115 68" stroke="#2B1A17" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          </>
        );

      case 'pineapple':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFFDF0" />
            {/* Grill lines pineapple slice */}
            <path d="M 50 100 A 50 50 0 1 1 150 100 A 50 50 0 1 1 50 100 M 100 100 A 15 15 0 1 0 100 100" fill="#FFD54F" />
            <path d="M 55 100 C 55 75, 145 75, 145 100 C 145 125, 55 125, 55 100 Z" fill="#FFCA28" stroke="#FFA000" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="16" fill="#FFFDF0" />
            {/* Black grill lines */}
            <line x1="70" y1="80" x2="130" y2="120" stroke="#795548" strokeWidth="3" opacity="0.6" />
            <line x1="80" y1="70" x2="120" y2="130" stroke="#795548" strokeWidth="3" opacity="0.6" />
          </>
        );

      case 'roti_pizza':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Roti base */}
            <circle cx="100" cy="100" r="55" fill="#E5C19E" stroke="#C29F7C" strokeWidth="2" />
            {/* Pizza toppings, sauce */}
            <circle cx="100" cy="100" r="46" fill="#E76F51" />
            {/* Paneer chunks */}
            <rect x="75" y="80" width="12" height="12" rx="2" fill="#FFFFFF" />
            <rect x="110" y="82" width="12" height="12" rx="2" fill="#FFFFFF" />
            <rect x="95" y="112" width="12" height="12" rx="2" fill="#FFFFFF" />
            {/* Peppers and olives */}
            <circle cx="82" cy="105" r="4" fill="#88BBA3" />
            <circle cx="112" cy="108" r="4" fill="#88BBA3" />
            <circle cx="95" cy="78" r="3" fill="#2C2725" />
            {/* Herbs */}
            <circle cx="90" cy="95" r="1" fill="#5C8572" />
            <circle cx="105" cy="98" r="1" fill="#5C8572" />
          </>
        );

      case 'paneer_burger':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Top Bun */}
            <path d="M 55 85 C 55 50, 145 50, 145 85 Z" fill="#D59B53" />
            <ellipse cx="100" cy="85" rx="45" ry="8" fill="#E5AB63" />
            {/* Sesame seeds */}
            <ellipse cx="80" cy="65" rx="2.5" ry="1.5" fill="#FFF3DF" />
            <ellipse cx="100" cy="60" rx="2.5" ry="1.5" fill="#FFF3DF" />
            <ellipse cx="120" cy="68" rx="2.5" ry="1.5" fill="#FFF3DF" />
            {/* Lettuce */}
            <path d="M 50 92 Q 100 82 150 92 L 145 98 Q 100 88 55 98 Z" fill="#88BBA3" />
            {/* Paneer Steak */}
            <rect x="52" y="96" width="96" height="18" rx="3" fill="#FFFFFF" stroke="#E0A775" strokeWidth="2.5" />
            {/* Bottom Bun */}
            <rect x="55" y="114" width="90" height="20" rx="8" fill="#D59B53" />
          </>
        );

      case 'papad':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF9E6" />
            {/* Papad base with roasted spots */}
            <circle cx="100" cy="100" r="55" fill="#EAD4A6" stroke="#CEB482" strokeWidth="1.5" />
            {/* Roasted specks */}
            <circle cx="80" cy="75" r="4" fill="#755E44" opacity="0.7" />
            <circle cx="120" cy="85" r="5.5" fill="#755E44" opacity="0.7" />
            <circle cx="95" cy="115" r="4.5" fill="#755E44" opacity="0.7" />
            <circle cx="102" cy="82" r="3" fill="#755E44" opacity="0.7" />
            <circle cx="85" cy="110" r="5" fill="#755E44" opacity="0.7" />
            {/* Tomato & onion toppings */}
            <rect x="75" y="90" width="8" height="8" rx="1.5" fill="#E76F51" />
            <rect x="115" y="95" width="8" height="8" rx="1.5" fill="#E76F51" />
            <circle cx="95" cy="98" r="4" fill="#EAE2F0" stroke="#7A33A6" strokeWidth="1" />
          </>
        );

      case 'samosa':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Golden triangular samosa */}
            <path d="M 100 50 L 145 125 L 55 125 Z" fill="#D59B53" stroke="#B37C3C" strokeWidth="1.5" />
            <path d="M 100 50 L 138 120 L 62 120 Z" fill="#E5AB63" />
            {/* Fold ridges */}
            <path d="M 100 50 L 100 120" stroke="#D59B53" strokeWidth="2.5" opacity="0.6" />
            <path d="M 100 120 Q 120 125 145 125" stroke="#B37C3C" strokeWidth="2" fill="none" />
            <path d="M 100 120 Q 80 125 55 125" stroke="#B37C3C" strokeWidth="2" fill="none" />
          </>
        );

      case 'amla':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Amla candies */}
            <circle cx="80" cy="90" r="16" fill="#A8C9B9" />
            <circle cx="80" cy="90" r="14" fill="#B9DACB" />
            <line x1="80" y1="76" x2="80" y2="104" stroke="#88A898" strokeWidth="1.5" />
            <line x1="66" y1="90" x2="94" y2="90" stroke="#88A898" strokeWidth="1.5" />

            <circle cx="120" cy="110" r="16" fill="#A8C9B9" />
            <circle cx="120" cy="110" r="14" fill="#B9DACB" />
            <line x1="120" y1="96" x2="120" y2="124" stroke="#88A898" strokeWidth="1.5" />
            <line x1="106" y1="110" x2="134" y2="110" stroke="#88A898" strokeWidth="1.5" />
          </>
        );

      case 'grapes':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EDF3FA" />
            {/* Frozen Grapes Cluster */}
            <circle cx="85" cy="80" r="13" fill="#B288BB" />
            <circle cx="105" cy="80" r="13" fill="#B288BB" />
            <circle cx="95" cy="98" r="13" fill="#A475AD" />
            <circle cx="115" cy="98" r="13" fill="#B288BB" />
            <circle cx="105" cy="116" r="13" fill="#A475AD" />
            <circle cx="85" cy="116" r="13" fill="#B288BB" />
            {/* Ice shine */}
            <circle cx="95" cy="72" r="3" fill="#FFFFFF" opacity="0.6" />
            <circle cx="105" cy="90" r="3" fill="#FFFFFF" opacity="0.6" />
          </>
        );

      case 'masala_chai':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FDF3E7" />
            {/* Steaming lines */}
            <path d="M 90 35 Q 95 25 90 15" stroke="#854F0B" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
            <path d="M 105 38 Q 110 28 105 18" stroke="#854F0B" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
            {/* Clay Kullad cup */}
            <path d="M 68 70 L 132 70 L 115 140 L 85 140 Z" fill="#C58062" />
            <ellipse cx="100" cy="70" rx="32" ry="7" fill="#854F0B" /> {/* Tea surface */}
            {/* Kullad clay texture ridges */}
            <path d="M 80 95 Q 100 100 120 95" stroke="#B36E50" strokeWidth="2" fill="none" />
            <path d="M 83 115 Q 100 120 117 115" stroke="#B36E50" strokeWidth="2" fill="none" />
          </>
        );

      case 'cold_coffee':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Tall glass */}
            <path d="M 68 50 L 132 50 L 120 150 L 80 150 Z" fill="rgba(255,255,255,0.4)" stroke="#DF9B7A" strokeWidth="2.5" />
            {/* Coffee fluid */}
            <path d="M 70 65 L 130 65 L 120 150 L 80 150 Z" fill="#8A6351" />
            {/* Froth layers */}
            <path d="M 70 58 L 130 58 L 130 65 L 70 65 Z" fill="#C49B84" />
            <ellipse cx="100" cy="58" rx="30" ry="5" fill="#E2C1AD" />
            {/* Straw */}
            <line x1="110" y1="30" x2="90" y2="135" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          </>
        );

      case 'ginger_mocktail':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EDF3FA" />
            {/* Fancy glass */}
            <path d="M 65 50 L 135 50 L 125 130 L 75 130 Z" fill="rgba(255,255,255,0.4)" stroke="#3361A6" strokeWidth="2.5" />
            {/* Stem */}
            <rect x="96" y="130" width="8" height="15" fill="#BACADF" />
            <ellipse cx="100" cy="145" rx="25" ry="5" fill="#BACADF" />
            {/* Golden ginger liquid */}
            <path d="M 68 70 L 132 70 L 125 130 L 75 130 Z" fill="#E8C180" opacity="0.85" />
            {/* Lime wheel */}
            <circle cx="65" cy="50" r="16" fill="#88BBA3" />
            <circle cx="65" cy="50" r="12" fill="#A8D3BF" />
          </>
        );

      case 'hummus':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FDF3E7" />
            {/* Plate/Bowl */}
            <circle cx="100" cy="100" r="62" fill="#EFEAE2" stroke="#DFD5C7" strokeWidth="2" />
            {/* Creamy hummus swirl */}
            <path d="M 100 100 C 70 80, 70 120, 100 120 C 130 120, 130 80, 100 80" stroke="#DFB98C" strokeWidth="14" fill="none" strokeLinecap="round" />
            <circle cx="100" cy="100" r="44" fill="#FFFDF2" />
            {/* Olive oil drop */}
            <circle cx="98" cy="98" r="7" fill="#C5BD30" opacity="0.6" />
            {/* Chickpeas on top */}
            <circle cx="82" cy="100" r="3.5" fill="#D2B591" />
            <circle cx="112" cy="102" r="3" fill="#D2B591" />
          </>
        );

      case 'paneer_bhurji':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF5EB" />
            {/* Bowl */}
            <path d="M 45 100 C 45 145, 155 145, 155 100 Z" fill="#E08365" />
            {/* Yellow scrambled paneer */}
            <ellipse cx="100" cy="96" rx="50" ry="20" fill="#ECD38E" />
            <circle cx="75" cy="92" r="3" fill="#DF8A73" /> {/* Tomato shreds */}
            <circle cx="120" cy="95" r="3" fill="#DF8A73" />
            <circle cx="95" cy="90" r="3" fill="#88BBA3" /> {/* Coriander garnish */}
            <circle cx="108" cy="94" r="3" fill="#88BBA3" />
          </>
        );

      case 'chilla':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF9E6" />
            {/* Crepe pan */}
            <circle cx="100" cy="100" r="62" fill="#EAC262" stroke="#DCA93B" strokeWidth="2.5" />
            {/* Fold mark */}
            <path d="M 50 100 L 150 100" stroke="#C29227" strokeWidth="2" opacity="0.6" />
            {/* Speckles */}
            <circle cx="85" cy="85" r="2.5" fill="#997A2E" />
            <circle cx="115" cy="115" r="2.5" fill="#997A2E" />
            <circle cx="112" cy="82" r="2.5" fill="#997A2E" />
          </>
        );

      case 'sprouts':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#EAF3EF" />
            {/* Ceramic Bowl */}
            <path d="M 40 95 C 40 145, 160 145, 160 95 Z" fill="#FFFFFF" stroke="#88BBA3" strokeWidth="2" />
            {/* Sprout pile */}
            <ellipse cx="100" cy="92" rx="55" ry="24" fill="#CBE5DA" />
            {/* Tiny moong beans and tails */}
            <circle cx="80" cy="88" r="4.5" fill="#66BB6A" />
            <path d="M 80 88 Q 72 82 75 75" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />

            <circle cx="115" cy="85" r="4.5" fill="#66BB6A" />
            <path d="M 115 85 Q 123 78 120 72" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />

            <circle cx="98" cy="95" r="4.5" fill="#66BB6A" />
            <path d="M 98 95 Q 102 104 95 108" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        );

      case 'shakarkandi':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FDF3E7" />
            {/* Clay plate */}
            <ellipse cx="100" cy="110" rx="60" ry="25" fill="#C58062" />
            {/* Cubes of sweet potato */}
            <rect x="70" y="85" width="22" height="22" rx="4" transform="rotate(15, 81, 96)" fill="#8A4A7D" /> {/* Purple skin */}
            <rect x="74" y="89" width="14" height="14" rx="2" fill="#E9935C" /> {/* Orange flesh */}

            <rect x="105" y="80" width="24" height="24" rx="4" transform="rotate(-25, 117, 92)" fill="#8A4A7D" />
            <rect x="110" y="85" width="14" height="14" rx="2" fill="#E9935C" />

            <rect x="88" y="100" width="22" height="22" rx="4" transform="rotate(5, 99, 111)" fill="#8A4A7D" />
            <rect x="92" y="104" width="14" height="14" rx="2" fill="#E9935C" />
          </>
        );

      case 'poha':
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FFF9E6" />
            {/* Traditional plate */}
            <circle cx="100" cy="100" r="62" fill="#ECE7DC" stroke="#DFD9CD" strokeWidth="2" />
            {/* Yellow poha pile */}
            <ellipse cx="100" cy="100" rx="50" ry="22" fill="#EAD962" />
            {/* Green chilies and peanuts */}
            <circle cx="85" cy="95" r="2.5" fill="#2E7D32" />
            <circle cx="115" cy="98" r="2.5" fill="#2E7D32" />
            <ellipse cx="100" cy="94" rx="7" ry="4.5" transform="rotate(35, 100, 94)" fill="#B56D33" />
            <ellipse cx="78" cy="102" rx="7" ry="4.5" transform="rotate(-15, 78, 102)" fill="#B56D33" />
          </>
        );

      default:
        // Generic fallback comfort bowl
        return (
          <>
            <circle cx="100" cy="100" r="80" fill="#FAF6F0" />
            <circle cx="100" cy="100" r="65" fill="#DF9B7A" opacity="0.6" />
            <circle cx="100" cy="100" r="45" fill="#FFFFFF" />
          </>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`food-svg ${className}`}
      style={{ display: 'block', margin: '0 auto' }}
    >
      {getSvgContent()}
    </svg>
  );
};
export default FoodSvg;
