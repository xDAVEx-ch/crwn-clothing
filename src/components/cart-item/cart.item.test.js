import React from 'react';

import { shallow } from 'enzyme';

import CartItem from './cart-item.component';

let itemProperties = {
    imageUrl: 'assets/img/kitty-picture.jpg',
    price: 10,
    name: 'Jackets',
    quantity: 2
};

let mockProps = {
    item: itemProperties
}

let wrapper = shallow(<CartItem {...mockProps} />);

test('should render cart item component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render product image', () => {
    expect(wrapper.find('ImgContainer').prop('src')).toEqual('assets/img/kitty-picture.jpg');
});

test('should display item info', () => {
    const texts = wrapper.find('DetailContainer').map((node) => node.text());
    expect(texts).toEqual(['Jackets', '2 x $10']);

    console.log(texts)
});