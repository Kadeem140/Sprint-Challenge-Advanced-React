import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect';




test('Render the app', () => {
    const wrapper = rtl.render(<App />) 
    const element = wrapper.getByText(/Women's Athlete Application/i) 

    expect(element).toBeVisible()
    })