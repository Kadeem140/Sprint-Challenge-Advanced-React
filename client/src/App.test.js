import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import {fireEvent} from '@testing-library/react';
import { fetchPlayer} from './hooks/useCounter';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('Render the app', () => {
    const wrapper = rtl.render( <App /> ) 
    const element = wrapper.getByText(/Women's Athlete Application /i) 
    expect(element).toBeVisible()
  })

  // it('has an id named test', () => {
  //     const wrap = rtl.render(<App />)
      



  // })

 