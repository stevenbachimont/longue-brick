

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import lombric from '../data';

import './app.css'

export function App() {

  return (
    <>

      <Header />
      <Main lombric ={lombric}/>
      <Footer />
    </>

  )
}
