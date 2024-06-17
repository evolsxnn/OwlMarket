export const PRODUCT_CATEGORIES = [
  {
    label: 'Умные девайсы',
    value: 'Smart_Devices' as const,
    featured: [
      {
        name: 'Умная колонка',
        href: `/products?category=Smart_Devices`,
        imageSrc: '/nav/ui-kits/smart_kolonka.jpg',
      },
      {
        name: 'Умные часы',
        href: '/products?category=Smart_Devices&sort=desc',
        imageSrc: '/nav/ui-kits/Smart_Wathes.jpg',
      },
      {
        name: 'Умный пылесос',
        href: '/products?category=Smart_Devices',
        imageSrc: '/nav/ui-kits/Smart_Pilesos.jpg',
      },
    ],
  },
  {
    label: 'Игровые девайсы',
    value: 'Gaming_Devices' as const,
    featured: [
      {
        name: 'Игровые наушники',
        href: `/products?category=Gaming_Devices`,
        imageSrc: '/nav/icons/Gaming_Headphones.jpg',
      },
      {
        name: 'Игровой монитор',
        href: '/products?category=Gaming_Devices&sort=desc',
        imageSrc: '/nav/icons/Gaming_Monitor.jpg',
      },
      {
        name: 'Игровая клавиатура',
        href: '/products?category=Gaming_Devices',
        imageSrc: '/nav/icons/Gaming_Keyboard.jpg',
      },
    ],
  },
]
