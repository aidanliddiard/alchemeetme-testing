import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />)
    screen.getByAltText('Alchemy Logo')

    await screen.findByLabelText(/meet vonta!/i)
  })
})
