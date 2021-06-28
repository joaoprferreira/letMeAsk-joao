import { useState } from "react"

export function Button() {
  const [button, setButton] = useState(0)

  return (
    <>
      <button onClick={()=>{setButton(button+1)}}>{button}</button>
    </>
  )
} 