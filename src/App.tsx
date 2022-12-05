import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CalendarView from './components/calendar-view/calendar-view'

function App() {
  const [count, setCount] = useState(0)
  const MAIN_TYPE = 'new-activity';
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <CalendarView
        interfaces={this.state.interfaces}
        mainType={MAIN_TYPE}
        periodInDays={1}
        calendarApiRef={(calendarApi) => this.onCalendarViewRender(calendarApi)}
        showAgendaViewHeader={true}
        onDayBack={() => this.onDayChange(-1)}
        onDayForward={() => this.onDayChange(1)}
        startDate={this.startDateTime}
        query={this.calendarApiQuery}
      />
    </div>
  )
}

export default App
