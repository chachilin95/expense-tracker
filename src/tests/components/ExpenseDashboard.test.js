import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('Should render ExpenseDashboard', ()=>{
    const wrapper = shallow(<ExpenseDashboard/>)
    expect(wrapper).toMatchSnapshot();
})