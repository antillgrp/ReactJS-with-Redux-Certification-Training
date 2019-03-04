import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount,shallow } from 'enzyme';

import React from 'react';
import Layout from './shared/Layout';
import Store from './Store';
import Cart from './Cart';
import ProductListView from './ProductListView';
import { StoreProdView, CartProdView } from './ProductView'

Enzyme.configure({ adapter: new Adapter() });

describe('Component tests', () => {
    it('Layout renders children when passed in', () => {
        const wrapper = shallow((
            <Layout>
                <Store />
            </Layout>
        ));
        expect(wrapper.contains(<Store />)).toBe(true);
        expect(wrapper.contains(<Cart />)).toBe(true);
    });

    it('Store initial render should contains ProductListView and StoreProdView', () => {
        const wrapper = mount((<Store />));
        expect(wrapper.contains(ProductListView)).toBe(true);
        expect(wrapper.contains(StoreProdView)).toBe(true);
    });

    it('Cart initial render should NOT contains ProductListView and CartProdView', () => {
        const wrapper = mount((<Cart />));
        expect(wrapper.contains(ProductListView)).toBe(false);
        expect(wrapper.contains(CartProdView)).toBe(false);
        expect(wrapper.isEmptyRender()).toBe(true);
    });
});
