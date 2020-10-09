import React from 'react';
import { findTestAtrr, checkProps } from  '../../../Utils'
import SharedButton from './index'
import { shallow } from 'enzyme';

describe('SharedButton Component', () => {
    
    describe('Checking PropTypes', ()=>{

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button TExt',
                emitEvent: () => {

                }

            };
            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined()
        })
    })

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Example Button TExt',
                emitEvent: mockFunc
        }
            wrapper = shallow(<SharedButton {...props}/>)
        })
    
        it('Should Render a Button', () => {
            const button = findTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })

        it('Should emit callback on click event', () => {
            const button = findTestAtrr(wrapper, 'buttonComponent');
           button.simulate('click');
           const callback = mockFunc.mock.calls.length;
           expect(callback).toBe(1);
        })
    })
})


