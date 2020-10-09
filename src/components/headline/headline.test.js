import React from 'react';
import { shallow, mount } from 'enzyme';
import HeadLine from './index';
import sinon from 'sinon';
// const chai = require('chai');
// const expect = chai.expect;

import { findTestAtrr, checkProps } from  '../../../Utils/index'
// jest.mock('./index'); 

// import TestUtils from 'react-addons-test-utils';
// import assert from 'assert'

const setUp = (props={}) => {
    const component = shallow(<HeadLine {...props}/> );
    return component;
}

const setUpMount = (props={}) => {
    const component = mount(<HeadLine {...props}/> );
    return component;
}

describe('Headline Component', () => {

    describe('Checking Proptypes',() => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Joe',
                    lName:'Bloggs',
                    email: 'joebloggs@gmail.com',
                    age:24,
                    onlineStatus: 1
                }]
            };

            const propsErr =  checkProps(HeadLine, expectedProps)
            expect(propsErr).toBeUndefined()
        });

    });



    describe('Have props', () => {

        let wrapper,dispatch, props, windowAlias;
        let spy;
        beforeEach(() => {
            props = {
                header: 'Test Header',
                desc: 'Test Desc',
                dispatch: jest.fn()
            };
            // dispatch = sinon.stub(props, 'dispatch') 
            windowAlias = window.testing;
            wrapper = setUp(props);
        });

        it('calls componentDidMount after mounting', () => {

            // sinon.stub(window, "testing").callsFake(function fakeFn() {
            //     return "bar";
            // });

            // expect(window.testing()).toBe("bar");

            spy = sinon.spy(HeadLine.prototype, 'componentDidMount');
            
            // let spyReceivePorp = sinon.spy(HeadLine.prototype, 'componentWillReceiveProps');
            
            let spyConstrutor = sinon.spy(HeadLine.prototype, 'render');
            const dispatch = sinon.stub(props, 'dispatch')
            
            // const states = sinon.spy(state, 'state')
            // let  t = new HeadLine()
            
            wrapper = setUp(props);

            // expect(states.thisValues).toEqual(false);
            // expect(wrapper.instance().spyConstrutor.calledOnce).toEqual(true);


            expect(spyConstrutor.calledOnce).toEqual(true);
            expect(spy.calledOnce).toEqual(true);
            
            // expect(spyReceivePorp.calledOnce).toEqual(false);
            
            expect(dispatch.callCount).toBe(1);


            // wrapper.setProps({ desc: 'New Desc' });
            // expect(spyReceivePorp.calledOnce).toEqual(true);
        });

        it('Component WILL mount', () => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
                dispatch: jest.fn()
            };
        });

        it('Should render without errors', ()=>{
            const component = findTestAtrr(wrapper, 'HeadLineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a h1', ()=>{
            const h1 = findTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render description', ()=>{
            const desc = findTestAtrr(wrapper, 'descWrapper');
            expect(desc.length).toBe(1);
        })
    })

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should NOT render', ()=>{
            const component = findTestAtrr(wrapper, 'HeadLineComponent');
            expect(component.length).toBe(0);
        })

        it('Should NOT render a h1', ()=>{
            const h1 = findTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(0);
        })

        it('Should NOT render description', ()=>{
            const desc = findTestAtrr(wrapper, 'descWrapper');
            expect(desc.length).toBe(0);
        })
    })
})
