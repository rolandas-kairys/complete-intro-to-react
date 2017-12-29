import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../js/Search';


test('Search render correctly', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})