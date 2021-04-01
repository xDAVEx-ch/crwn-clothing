import React from 'react';
import { shallow } from 'enzyme';

import CartIcon from './cart-icon.component';

describe('Cart icon component', () => {

    let wrapper;
    let mockToggleCartDropdown;

    beforeEach(() => {
        mockToggleCartDropdown = jest.fn();
        let mockItemsCount = 7;

        let mockProps = {
            toggleCartHidden: mockToggleCartDropdown,
            itemCount: mockItemsCount
        }

        wrapper = shallow(<CartIcon.WrappedComponent {...mockProps} />);
    });

    test('should render icon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should toggle the cart dropdown component when is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartDropdown).toHaveBeenCalled();
    });

    test('should display number of items', () => {
        const itemsNumber = parseInt(wrapper.find('ItemCountContainer').text());
        expect(itemsNumber).toBe(7);
    })
})