"use client"

import { contactAction } from "@/actions/contactAction"
import FormButton from "./FormButton";
import toast from "react-hot-toast";
import { useRef } from "react";
import ContactLinks from "./ContactLinks";

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <section id="contact" className='mt-6 '>
        <h1 className='mb-2 text-3xl text-center font-bold text-gray-600'>Contact</h1>
        <p className=' mt-2 text-center text-gray-400 w-[90%] lg:w-full mx-auto'>
            Contact me at <a className='underline' 
            href="mailto:siddhartha.badal@gmail.com" target="_blank">siddhartha.badal@gmail.com</a>{" "}
            or through this form.        
        </p>
        <form   
              ref={ref} 
               action={async (formData)=>{            
              const data = await contactAction(formData);
              toast.success("Message Sent Successfully!")
              ref.current?.reset()
              
              
        }}  
          className='mt-2 *:mb-1 *:rounded-lg  mx-auto flex flex-col lg:w-1/2 p-2 shadow-sm shadow-gray-200 mb-4'>
            <input type='text' className=' h-12 p-2  border border-gray/10 outline-none' placeholder='Name' required min={3} name='senderName' maxLength={20}/>

            <input type='email' className=' h-12 p-2  border border-gray/10 outline-none' placeholder='name@email.com' required name='senderEmail' maxLength={75}/>

           <textarea  className=' border border-gray/10 p-2 outline-none' placeholder='Message' rows={4} required name='senderMessage' maxLength={500}/>
          
          <div className="mx-auto text-center w-full ">
            <FormButton />
          </div>

        </form>

        <ContactLinks />


    </section>
  )
}
