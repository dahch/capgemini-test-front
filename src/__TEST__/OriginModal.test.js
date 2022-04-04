import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OriginModal from '../components/OriginModal';

const props = {
    visible: true,
    defaultValue: 'http://dummy.restapiexample.com/api/v1/',
    handleClick: jest.fn(),
    handleClose: jest.fn(),
};

test('renders learn react link', () => {
  render(<OriginModal {...props} />);
  const ApiElement = screen.getByText(/api/i);
  expect(ApiElement).toBeInTheDocument();
  const SaveButton = screen.getByText(/save changes/i);
  userEvent.click(SaveButton);
});
