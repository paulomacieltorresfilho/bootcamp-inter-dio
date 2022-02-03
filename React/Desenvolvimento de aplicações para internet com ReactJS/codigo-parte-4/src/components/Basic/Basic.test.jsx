import React from 'react';
import Basic from './Basic';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testando Basic', () => {
    it('O componente deve ser renderizado corretamente', () => {
        const { baseElement } = render(<Basic name="Paulo" />);
        expect(baseElement).toHaveTextContext('Meu nome é Paulo');
    })
})