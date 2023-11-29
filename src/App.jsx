import './App.css'
import Header from './components/Header'
import Appoinments from './assets/pages/Appoinments'


function App() {
  return (
    <>
      <header>
        <Header title='Citas Médicas para Mascotas' />
      </header>
      <main>
        <Appoinments />
      </main>
    </>
  )
}

export default App