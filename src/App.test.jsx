import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should render the header', async () => {
    render(<App />)
    await screen.getByAltText('Alchemy Logo')

    return waitFor(() => {
      screen.getByText('Vonta')
    })
  })
})
