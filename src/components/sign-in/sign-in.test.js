import React from 'react';

import { shallow } from 'enzyme';

import SignIn from './sign-in-component';

describe('SignIn component', () =>{
    let wrapper;
    let mockProps;
    let mockDispatch;

    beforeEach(() =>{

        mockDispatch = jest.fn();

        mockProps = {
            googleSignInStart: mockDispatch,
            emailSignInStart: mockDispatch
        }

        wrapper = shallow(<SignIn.WrappedComponent {...mockProps}/>);
    });

    test('should render SignIn component', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should call googleSignInStart when button is clicked', () =>{
        wrapper.find('[type="button"]').simulate('click');
        expect(mockDispatch).toHaveBeenCalled();
    });

    test('should call emailSignInStart when button is clicked', () =>{
        wrapper.find('[type="submit"]').simulate('click');
        expect(mockDispatch).toHaveBeenCalled();
    });
})