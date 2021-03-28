import React from 'react';
import { shallow } from 'enzyme';

import CartDropdown from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import toggleCartHidden from '../../redux/cart/cart.actions';

describe('Cart dropdown component initial configuration', () => {

    let wrapper;
    let mockHistory;
    let mockDispatch;
    let mockProps;

    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }

        mockDispatch = jest.fn();

        mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch
        }

        wrapper = shallow(<CartDropdown.WrappedComponent {...mockProps} />);
    });

    test('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call history.push when button is clicked', () => {
        wrapper.find('CustomButton').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    test('should render EmptyMessageContainer if cartItems is empty', () => {
        const mockProps = {
            cartItems: [], 
            history: mockHistory,
            dispatch: mockDispatch
        };

        const justWrapper = shallow(<CartDropdown.WrappedComponent {...mockProps} />);
        console.log(justWrapper.debug());
        const newWrapper = shallow(<CartDropdown.WrappedComponent {...mockProps} />);
        expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
    });

    test('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

})