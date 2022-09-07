import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='w-full bg-lime-50'>
      <Navbar />
      <main className='w-full flex flex-col items-center font-mar min-h-screen relative' id='content' >{children}</main>
     <Footer/>
    </div>
  )
}