export const navigation = {
    categories: [
      {
        id: 'newCar',
        name: 'New Car',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10530/1697695298496/front-left-side-47.jpg?impolicy=resize&imwidth=420',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://static.autox.com/uploads/2023/09/Tata-Nexon-Right-Front-Three-Quarter.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'car',
            name: 'SUV',
            items: [
              { name: 'offroad SUV', id:"mahindraThar", href: `{women/clothing/tops}` },
              { name: 'onroad SUV', id:"onroadSUV", href: '#' },
              
             
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Car Tyres', id: 'carTyres' },
              { name: 'Seat Cover', id: 'seatCover' },
              { name: 'Floor mats', id: 'floormat' },
              { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Mahindra', id: '#' },
              { name: 'Tata', id: '#' },
              { name: 'Hyundai', id: '#' },
              { name: 'Suzuki', id: '#' },
              { name: 'Toyata', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Used Car',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10530/1697695298496/front-left-side-47.jpg?impolicy=resize&imwidth=420',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://static.autox.com/uploads/2023/09/Tata-Nexon-Right-Front-Three-Quarter.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Car',
            items: [
              { name: 'OnRoad', id: 'mens_kurta' },
              { name: 'offRoad', id: 'shirt' },
            
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Seat Cover', id: '#' },
              { name: 'PPF', id: '#' },
             
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Toyta', id: '#' },
              { name: 'Hundai', id: '#' },
              { name: 'Nexon', id: '#' },
             
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }