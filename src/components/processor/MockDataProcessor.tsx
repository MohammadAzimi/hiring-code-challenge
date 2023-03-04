// import React, {FC, useState} from 'react';
import {Order} from '../../types';

let MOCK_REPOSITORY: Order[] = [];

export function addOrderOperator(order: Order) {
  MOCK_REPOSITORY.push(order);
}

export function getOrderListOperator() {
  return MOCK_REPOSITORY;
}

export function getOrderByIdOperator(id: string) {
  const index = MOCK_REPOSITORY.findIndex(v => v.id === id);
  if (index > -1) {
    return MOCK_REPOSITORY[index];
  }

  return null;
}

export const MockRepositoryBuilder = () => {
  function updateOrderStatus(order: Order) {
    let status = order.status;
    switch (status) {
      case 'pending':
        status = 'in-process';
        break;
      case 'in-process':
        status = 'delivery';
        break;
      case 'delivery':
        status = 'delivered';
        break;
      default:
        break;
    }

    order.status = status;
    return order;
  }

  return function runRepository() {
    setInterval(() => {
      MOCK_REPOSITORY = MOCK_REPOSITORY.map(order => updateOrderStatus(order));
    }, 30000);
  };
};
