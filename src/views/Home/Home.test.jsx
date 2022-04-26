import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('Profile', () => {
  it('Should render the user profile', () => {})
  render(<Home user={user} />)

  screen.getByRole('heading', { name: /vonta/i })
  screen.getByText(/res non verba/i)
  screen.getByRole('heading', { name: /interests/i })
  screen.getByRole('img', { name: /avatar/i })
  screen.getByRole('img', { name: /header/i })

  screen.getAllByRole('listitem')
})
