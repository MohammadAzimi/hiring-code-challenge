import uuid from 'react-native-uuid';
import {faker} from '@faker-js/faker';
import {Category} from '../types';

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
