import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findTestAtrr, checkProps, testStore } from '../Utils'

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts:[{
                title: 'Example title 1',
                body: 'Same Text'
            },{
                title: 'Example title 2',
                body: 'Same Text'
            },{
                title: 'Example title 3',
                body: 'Same Text'
            }]
        };
         wrapper = setUp(initialState);
    });


    it('Should render without errors', () => {
        const component = findTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })

    it('exampleMethod_updateState should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true)
    })

    it('exampleMethod_returnsValue returns value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsValue(6);
        expect(newValue).toBe(7)
    })
})