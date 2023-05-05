
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
  <div className="h-screen w-screen lg:px-[530px] lg:bg-slate-800">
    <ResumeInfo/>
    <Background/>
  </div>
  )
}

export default App
