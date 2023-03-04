import uuid from 'react-native-uuid';
import {faker} from '@faker-js/faker';
import {Category} from '../types';
import {Product} from '../types/Product';

export const MOCK_CATEGORIES: Category[] = new Array(6)
  .fill({
    name: '',
    iconName: '',
    id: '',
    imageUri: '',
  })
  .map(_ => {
    return {
      name: faker.commerce.product(),
      iconName: 'nutrition-outline',
      id: uuid.v4() as string,
      imageUri: faker.image.business(512, 512, true),
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
