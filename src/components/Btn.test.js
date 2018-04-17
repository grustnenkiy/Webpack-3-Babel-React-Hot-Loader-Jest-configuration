import React from 'react';
import { Btn } from './Btn';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const btn = renderer
        .create(<Btn />)
        .toJSON();
    expect(btn).toMatchSnapshot();
});