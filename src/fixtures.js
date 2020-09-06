// информация о грузах

const ImportItemsService = [
  {
    id : '12341234-2341234',
    providerName: "ImpExp LTD", 
    location : 'EU, Germany',
    image : 'https://.....',
    products : [
      {
        "volumePerPc" : 0.1,
        "pricePerPc": 11,
        "weightPerPc" : 0.5,
        "nameOfPc" : "турбины",
        "id" : 1,
      }
        ,
      {
        "volumePerPc" : 0.2,
        "pricePerPc": 7,
        "weightPerPc" : 2.5,
        "nameOfPc" : "патрубки",
        "id" : 2,
      },
      {
        "volumePerPc" : 0.2,
        "pricePerPc": 7,
        "weightPerPc" : 2.5,
        "nameOfPc" : "цилиндры",
        "id" : 3,
      },
    ],
    experience :[

      {
        shipmentId: '5909796d-5030-4e36-adec-68b8f9ec2d196',
        manager: 'Melony',
        rating: 5,
      },
      {
        shipmentId: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        manager: 'Antony',
        rating: 5,
      },
      {
        shipmentId: '429dea85-11dd-4054-a31e-c60c92e17255',
        manager: 'Sam',
        rating: 3,
      },
    ]
  }, {
    id : '212341234-2341234',
    providerName: "Machine LTD", 
    location : '2EU, Germany',
    image : '2https://.....',
    products : [
      {
        "volumePerPc" : 20.1,
        "pricePerPc": 211,
        "weightPerPc" : 20.5,
        "nameOfPc" : "2турбины",
        "id" : 21,
      }
        ,
      {
        "volumePerPc" : 20.2,
        "pricePerPc": 27,
        "weightPerPc" : 22.5,
        "nameOfPc" : "2патрубки",
        "id" : 22,
      },
    ],
    experience : [

      {
        shipmentId: '5909796d-5030-4e36-adec-68b8f9ec2d96',
        manager: 'Antony',
        rating: 5,
      }
    ]
}
];

export default ImportItemsService;