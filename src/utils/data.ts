import uuid from 'react-native-uuid';
import {faker} from '@faker-js/faker';
import {Category} from '../types';
import {Product} from '../types/Product';
import {Images} from '../assets/images';

const getImage = (index: number) => {
  switch (index) {
    case 0:
      return Images.Clothes;
    case 1:
      return Images.Flowers;
    case 2:
      return Images.Toys;
    case 3:
      return Images.Mobiles;
    case 4:
      return Images.Shoes;
    case 5:
      return Images.Paintings;
  }
};

export const MOCK_CATEGORIES: Category[] = new Array(6)
  .fill({
    name: '',
    iconName: '',
    id: '',
    imageUri: '',
  })
  .map((_, index) => {
    return {
      name: faker.commerce.product(),
      iconName: 'nutrition-outline',
      id: uuid.v4() as string,
      imageUri: getImage(index),
    };
  });

export const MOCK_PRODUCTS: Product[] = new Array(10)
  .fill({
    name: '',
    id: '',
    imageUri: '',
    price: 0,
    stockCount: 0,
    discount: 0,
    rate: 5,
  })
  .map((_, index) => {
    return {
      name: faker.commerce.productName(),
      id: uuid.v4() as string,
      imageUri: faker.image.fashion(512, 512, true),
      price: Number(faker.commerce.price(200, 1500)),
      stockCount: index,
      discount: index % 3 === 0 ? 30 : 0,
      rate: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    };
  });
