import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Certification, Social, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <About />
              <Tech />
              <Social />
            </>
          } />
          <Route path="/work" element={<div className="pt-[100px]"><Works /></div>} />
          <Route path="/experience" element={<div className="pt-[100px]"><Experience /></div>} />
          <Route path="/certification" element={<div className="pt-[100px]"><Certification /></div>} />
          <Route path="/contact" element={
            <div className='relative z-0 pt-[100px]'>
              <Contact />
              <StarsCanvas />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
