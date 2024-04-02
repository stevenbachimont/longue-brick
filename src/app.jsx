import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import lombric from '../data';
import './app.css'

export function App() {
console.log('%c⧭', 'color: #00a3cc', lombric);

  return (
    <>
      <Header />
      <Main lombricName ={ lombric.name }  lombricImage= { lombric.image } lombric ={lombric}/>
      <Footer />
    </>
  )
}
