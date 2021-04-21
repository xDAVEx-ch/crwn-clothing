import React from 'react';

import { shallow } from 'enzyme';

import FormInput from './form-input.component';


describe('FormInput component', () =>{
    let wrapper;
    let mockHandler;

    beforeEach(() =>{
        mockHandler = jest.fn();

        const mockProps = {
            value: 'myemail@gmail.com',
            handleChange: mockHandler,
            label: 'email'
        }

        wrapper = shallow(<FormInput {...mockProps}/>);
    });

    test('should render formInput component', () =>{
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should fire handler for onChange events', () =>{
        wrapper.find('input').simulate('change');
        expect(mockHandler).toHaveBeenCalled();
    });
    
    test('should render label if there is a label prop', () =>{
        expect(wrapper.exists('label')).toBe(true);
    });
    
    test('should not render label if there is not a label prop', () =>{
    
        const mockNewProps = {
            type: 'email',
            name: 'email',
            value: 'myemail@gmail.com',
            handleChange: mockHandler,
        }
    
        const newWrapper = shallow(<FormInput {...mockNewProps}/>);
    
        expect(newWrapper.exists('label')).toBe(false);
    });
});