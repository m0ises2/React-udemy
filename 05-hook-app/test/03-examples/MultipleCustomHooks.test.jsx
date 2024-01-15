import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/UseCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/UseCounter');

describe('MultipleCustomHooks', () => {
  const incrementMock = jest.fn();

  useCounter.mockReturnValue({
    counter: 0,
    increment: incrementMock
  });

  beforeEach(() => {
    jest.clearAllMocks();
  }); 

  test('Debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'next quote' });

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));
    expect(nextButton.disabled).toBeTruthy();
  });

  test('debe mostrar un quote', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Vegeta',
        quote: 'Gusano!'
      }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'next quote' });
    
    expect(screen.getByText('Gusano!'));
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Vegeta',
        quote: 'Gusano!'
      }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'next quote' });
    
    fireEvent.click( nextButton );

    expect(incrementMock).toHaveBeenCalled();
  });
 })
