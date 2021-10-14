import { Navigation } from 'ui-kit'
import Main from 'domain/Home/Main'

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main />
      </header>
    </div>
  )
}

export default HomePage