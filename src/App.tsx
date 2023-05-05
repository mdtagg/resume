
import { ResumeInfo } from "./Components/ResumeInfo"
import { Background } from "./Components/Background"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    
    window.addEventListener('resize',() => {
      console.log(window.innerWidth)
    })
  
  }, [])
  

  return (
  <main className="h-[100dvh] w-[100dvw] lg:px-[530px] lg:bg-slate-800">
    <ResumeInfo/>
    <Background/>
  </main>
  )
}

export default App
