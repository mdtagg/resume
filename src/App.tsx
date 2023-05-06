
import { PersonalInfo } from "./Components/PersonalInfo"
import { Skills } from "./Components/Skills"
import { Experience } from "./Components/Experience"

function App() {
  
  return (
    <main 
      className="h-[100lvh] w-[100lvw] lg:px-[530px] lg:bg-slate-800"
    >
      <PersonalInfo/>
      <div 
        className="flex h-2/3"
      >
        <Skills/>
        <Experience/>
      </div>
    </main>
  )
}

export default App
