import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

test('Should render Loading page', ()=>{
    const wrapper = shallow(<Loading/>)
    expect(wrapper).toMatchSnapshot();
})