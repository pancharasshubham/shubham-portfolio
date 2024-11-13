import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"


const App = () => {
  return (
   <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
    <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Experience />
    </div>
   </main>
  )
}

export default App