"use client"
import { useFormStatus } from 'react-dom'


export default function FormButton() {
    const {pending} = useFormStatus()    
      setTimeout(()=>{
        pending;
    },1500)
        
  return (
    <button className="bg-gray-600 text-white/50 h-full w-1/2 ml-2 rounded-lg p-2 font-semibold" >
                {pending ? "Adding project.." : "Submit"}
    </button>
  )
}
