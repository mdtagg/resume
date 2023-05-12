
import { PersonalInfo } from "./Components/PersonalInfo"
import { Skills } from "./Components/Skills"
import { Experience } from "./Components/Experience"

function App() {
  
  return (
    <main 
      className="h-[100lvh] w-[100lvw] wide:pl-[env(safe-area-inset-left)] wide:pr-[env(safe-area-inset-right)] lg:px-[530px] wide:bg-black lg:bg-slate-800"
    >
      <PersonalInfo/>
      <div 
        className="flex h-2/3 wide:h-[60%]"
      >
        <Skills/>
        <Experience/>
      </div>
    </main>
  )
}

export default App
