import WeatherCard from '../WeatherCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render } from '@testing-library/react';
import fetchData from '../../../utils/fetchData';
import userEvent from '@testing-library/user-event';

jest.mock('../../../utils/fetchData');

describe('WeatherCard', () => {
  it('should make right api call and render correctly', async () => {
    fetchData.mockResolvedValueOnce({
      main: {
        temp: 18,
        feels_like: 18,
      },
      name: 'London',
      weather: [{ icon: 'test', description: 'test' }],
      message: 'test',
    });

    await render(
      <ThemeProvider theme={theme}>
        <WeatherCard />
      </ThemeProvider>
    );

    expect(screen.getByText(/london forecast/i)).toBeTruthy();
    expect(screen.getByLabelText(/enter city name/i)).toBeTruthy();
    expect(screen.getByText(/current temp: 18/i)).toBeTruthy();
    expect(screen.getByText(/feels like: 18/i)).toBeTruthy();
    expect(screen.getByAltText(/weather icon/i)).toBeTruthy();
  });

  it('should be able to type in the input', async () => {
    fetchData.mockResolvedValueOnce({
      main: {
        temp: 18,
        feels_like: 18,
      },
      name: 'Siauliai',
      weather: [{ icon: 'test', description: 'test' }],
      message: 'test',
    });

    await render(
      <ThemeProvider theme={theme}>
        <WeatherCard />
      </ThemeProvider>
    );

    const inputField = screen.getByLabelText(/enter city name/i);
    userEvent.type(inputField, 'Siauliai');
    await expect(inputField.value).toContain('Siauliai');
  });
});
