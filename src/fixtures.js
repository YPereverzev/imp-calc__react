// информация о грузах

export const allExporters = [
  {
    id: '12341234-2341234',
    exporterName: 'ImpExp LTD',
    location: 'EU, Germany',
    image: 'https://.....',
    products: ['01', '02', '03'],
    experience: [
      '5909796d-5030-4e36-adec-68b8f9ec2d196',
      '5909796d-5030-4e36-adec-68b8f9ec2d96',
      '429dea85-11dd-4054-a31e-c60c92e17255',
    ],
  },
  {
    id: '212341234-2341234',
    exporterName: 'Machine LTD',
    location: '2EU, Germany',
    image: '2https://.....',
    products: ['21', '22'],
    experience: ['5909796d-5030-4e36-adec-68b8f9ec2d96'],
  },
];

export const normalizedProducts = [
  {
    volumePerPc: 0.1,
    pricePerPc: 11,
    weightPerPc: 0.5,
    nameOfPc: 'турбины',
    id: '01',
    equipment: ['турбины', 'инструкция'],
    customs_code: {
      code: '8409 91 00 00',
      codeHref: 'https://qdpro.com.ua/goodinfo/8409910000',
    },
    duty: 0,
    vat: 20,
  },
  {
    volumePerPc: 0.2,
    pricePerPc: 7,
    weightPerPc: 2.5,
    nameOfPc: 'патрубки',
    id: '02',
    equipment: ['патрубки', 'инструкция'],
    customs_code: {
      code: '8409 91 00 00',
      codeHref: 'https://qdpro.com.ua/goodinfo/8409910000',
    },
    duty: 0,
    vat: 20,
  },
  {
    volumePerPc: 0.2,
    pricePerPc: 7,
    weightPerPc: 2.5,
    nameOfPc: 'цилиндры',
    id: '03',
    equipment: ['цилиндры', 'инструкция'],
    customs_code: {
      code: '8409 91 00 00',
      codeHref: 'https://qdpro.com.ua/goodinfo/8409910000',
    },
    duty: 0,
    vat: 20,
  },
  {
    id: '21',
    volumePerPc: 20.1,
    pricePerPc: 211,
    weightPerPc: 20.5,
    nameOfPc: 'каркас',
    equipment: ['каркас', 'доп.усиления', 'инструкция'],
    customs_code: {
      code: '8409 91 00 00',
      codeHref: 'https://qdpro.com.ua/goodinfo/8409910000',
    },
    duty: 0,
    vat: 20,
  },
  {
    volumePerPc: 20.2,
    pricePerPc: 27,
    weightPerPc: 22.5,
    nameOfPc: 'глушитель титановый',
    id: '22',
    equipment: ['глушитель титановый', 'крепления', 'инструкция'],
    customs_code: {
      code: '8409 91 00 00',
      codeHref: 'https://qdpro.com.ua/goodinfo/8409910000',
    },
    duty: 0,
    vat: 20,
  },
];

export const normalizedExperience = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d196',
    feedback: 'Great!',
    managerId: '01a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    rating: 5,
  },
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    feedback: 'It was very difficult to negotiate the delivery',
    managerId: '02a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    rating: 5,
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    feedback: 'Another minor shortage',
    managerId: '03a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    rating: 3,
  },
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    feedback: 'All goods in the delivery are defective',
    managerId: '04a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    rating: 5,
  },
];

export const normalizedUsers = [
  {
    id: '00a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Agata',
  },
  {
    id: '01a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Antony',
  },
  {
    id: '02a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Sam',
  },
  {
    id: '03a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Antony',
  },
  {
    id: '04a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Petro',
  },
];
