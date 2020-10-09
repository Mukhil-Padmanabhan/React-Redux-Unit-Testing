import React from 'react';
import { shallow } from 'enzyme';
import { findTestAtrr, checkProps } from '../../../Utils';
import ListItem from './index'

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example title',
                desc: 'Some text'
            };
            const propsErr = checkProps(ListItem, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })


    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            };

            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should renders without error', () => {
            const component = findTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1)
        })

        it('Should render a title', () => {
            const title = findTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1)
        })

        it('Should renders without error', () => {
            const desc = findTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        })
    })


    describe('Show NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            };

            wrapper = shallow(<ListItem {...props} />)

            
            it('Component is not rendered', () => {
                const component = findTestAtrr(wrapper, 'listItemComponent');
                expect(component.length).toBe(0)
            })
        })

    })
})