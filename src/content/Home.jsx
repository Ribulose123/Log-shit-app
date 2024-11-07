import react  from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const handleHr = ()=>navigate('/hrpage')
  const handleEmployees =()=> navigate('/mainemployees')
  return (
    <div >
        <main className='m-auto max-w-4xl'>
        <h1 className=" text-center text-3xl mt-1 font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">Shift Logging Application</h1>
      <p className="text-center max-w-2/3 mb-6 mt-4 text-3xl text-slate-700 dark:text-slate-400 sm:text-left p-4">
        This application allows employees to log their shifts, request overtime, and sign in or out using secure, location-based authentication.
        HR can monitor work hours, approve or decline overtime, and access detailed reports.
      </p>
      <section
  id="hero"
  className="w-full lg:w-3/4 xl:w-full  flex flex-col items-center justify-center gap-8 p-12 sm:flex-row lg:p-20 "
>
  <article
    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
  >
    <div
      className="flex w-2/3 sm:w-1/2 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-10 px-6 shadow-xl dark:border-gray-100 dark:bg-black"
    >

      <img src="/img/hr1.avif" alt="hr avater" className="rounded-2xl " />
      <h2 className="text-2xl font-semibold">HR Portal</h2>
      <button  className="rounded-3xl border border-solid border-slate-900 bg-white py-2 px-3 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white  text-slate-900 mt-3" onClick={handleHr}>Hr Page</button>
    </div>

    <div
      className="flex w-2/3 sm:w-1/2 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-10 px-6 shadow-xl dark:border-gray-100 dark:bg-black"
    >
      <img src="/img/em3.avif" alt=""  className="rounded-2xl "/>
      <h2 className="text-2xl font-semibold">Employee Portal</h2>
      <button   className="rounded-3xl border border-solid border-slate-900 bg-white py-3 px-4 shadow-xl dark:border-gray-100 dark:bg-black dark:text-white  text-slate-900 mt-3" onClick={handleEmployees}>Employees page</button>
      
      
    </div>
  </article>
</section>


 

    <hr className="mx-auto w-1/2 bg-black dark:bg-white " />

   

    <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

    <section id="contact" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact Us
      </h2>
      <form action="" className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl">
        <label >Subject:</label>
        <input type="text" id="subject" name="subject" required minLength="3" maxLength="60" placeholder="Your Subject"
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>
        <button
          className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  </main>

  
  <footer id="footer" className="bg-teal-700 text-xl text-white">
    <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
      <address>
        <h2>Acme Rocket-Powered Products, Inc.</h2>
        555 Astro Way<br />
        Fairfield, New Jersey 12345-5555<br />
        Email:
        <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br />
        Phone: <a href="tel:+15555555555">(555) 555-5555</a>
      </address>
      <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
        <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
        <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
        <a href="#contact" className="hover:opacity-90">Contact Us</a>
      </nav>
      <div className="flex flex-col sm:gap-2">
        <p className="text-right">Copyright &copy; <span id="year">2022</span></p>
        <p className="text-right">All Rights Reserved</p>
      </div>
    </section>
  </footer>

        
    </div>
  )
}

export default Home
