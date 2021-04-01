import React from 'react';

import { shallow } from 'enzyme';

import CheckoutItem from './checkout-item.component';

let wrapper = '';

let mockCartItem = {
    name: 'Jacket',
    imageUrl: 'assets/img/bugs-bunny-jacket.jpg',
    price: 10,
    quantity: 4
}

let mockAddItem = jest.fn();
let mockRemoveItem = jest.fn();
let mockClearItem = jest.fn();

let mockProps = {
    cartItem: mockCartItem,
    clearItem: mockClearItem,
    addItem: mockAddItem,
    removeItem: mockRemoveItem
}

wrapper = shallow(<CheckoutItem.WrappedComponent {...mockProps}/>);

test('should render CheckoutItem component', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('should render image element', () =>{
    expect(wrapper.find('img').prop('src')).toBe('assets/img/bugs-bunny-jacket.jpg');
});

test('should add one item when right arrow is clicked', () =>{
    (wrapper.find('.arrow').last()).simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
});

test('should remove one item when left arrow is clicked', () =>{
    (wrapper.find('.arrow').first()).simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
});

test('should call clearItem when remove button is clicked', () =>{
    (wrapper.find('.remove-button')).simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
});