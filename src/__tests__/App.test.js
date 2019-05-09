import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// const setUp = (props={}) => {
//   return shallow(<App {...props} />);
// }

// describe('App', () => {
//   let wrapper;

//   beforeEach(() => {
//     props = {
//         produtos: {},
//         isShowModalCadastro: false,
//         produto: null,
//         index: null
//     }

//     wrapper = setUp(props)
//   })

//   it('should render', () => {
//     expect(wrapper.length).toEqual(1);
//     expect(wrapper.find('Formik')).toBeDefined()
//     expect(wrapper.find('Table')).toBeDefined()
//   })
// })
