
import Authentication from "../config/Authentication"



const Navbar = () => {
 
  return (
    <div>
       <header className='sticky top-0 z-10 bg-teal-700 text-white'>
            <section className='mx-auto flex max-w-4xl items-center justify-between p-4'> 
    
            <h1 className='text-3xl font-medium'>🚀 Acme Rockets</h1>
                <Authentication/>
            </section>
        </header>


    </div>
  )
}

export default Navbar
