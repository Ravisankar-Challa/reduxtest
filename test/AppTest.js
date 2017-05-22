import React from 'react';
import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import sinon from 'sinon'
import App from '../src/App';
import store from '../src/store';
const { addItemToCart, removeItemFromCart } = require('../src/actions/cartActions')

const wrapper = mount(<App />);
console.log(wrapper.html());

wrapper.find('input').at(0).node.value = '11';
wrapper.find('input').at(1).node.value = 'Hello';
wrapper.find('input').at(2).node.value = '12';
wrapper.find('input').at(3).node.value = '13';
wrapper.find('.add').simulate('click');
//store.dispatch(addItemToCart(1, 'Wine', 6, 8))
console.log(wrapper.html());

wrapper.find('input').at(0).node.value = '12';
wrapper.find('input').at(1).node.value = 'Wine';
wrapper.find('input').at(2).node.value = '99';
wrapper.find('input').at(3).node.value = '11';
wrapper.find('.add').simulate('click');
//store.dispatch(addItemToCart(2, 'Beer', 9, 12))
console.log(wrapper.html());

//store.dispatch(removeItemFromCart(2, 6))
//console.log(wrapper.html());