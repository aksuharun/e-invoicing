import { useEffect } from 'react'
import './App.css'
import AccountList from './components/AccountList'

function App() {
  useEffect(() => {
    document.title = 'E-Fatura Hesapları'
  }, [])
  
  return (
    <div className="App">
      <h1>E-Fatura Hesapları</h1>
      <AccountList />
    </div>
  )
}

export default App