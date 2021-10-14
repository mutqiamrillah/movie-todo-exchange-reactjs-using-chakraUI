import { Navigation } from 'ui-kit'
import Main from 'domain/Exchange/Main'

function ExchangePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main />
      </header>
    </div>
  )
}

export default ExchangePage