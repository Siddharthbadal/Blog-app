"use client"
import { useFormStatus } from 'react-dom'


export default function FormButton() {
    const {pending} = useFormStatus()    
      setTimeout(()=>{
        pending;
    },1500)
        
  return (
    <button className="bg-gray-600 text-xl text-white/50 h-full w-1/2 mt-1 rounded-lg p-2 font-semibold" disabled={pending}>
                {pending ? 
                    "Sending..." 
                
                :                 
                    "Submit"
                  
                }
    </button>
  )
}
