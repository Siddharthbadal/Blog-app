"use server"

import { EmailTemplate } from "@/components/Email_Template";
import { validateContactFields } from "@/lib/utils";
import { Resend } from "resend";
import { string } from "zod";

const resend = new Resend(process.env.EMAIL_KEY);

export const contactAction = async (formData: FormData)=>{
  
    // const senderName = formData.get("senderName")
    const senderEmail = formData.get("senderEmail")
    // const senderMessage = formData.get("senderMessage")

    
    //  server side validation
    // if (!validateContactFields(senderName, 20)){
    //   return {
    //     error: "Invalid name entered!"
    //   }
    // }
    // if (!validateContactFields(senderEmail, 75)){
    //   return {
    //     error: "Invalid Sender email!"
    //   }
    // }
    // if (!validateContactFields(senderMessage, 250)){
    //   return {
    //     error: "Invalid Message!"
    //   }
    // }
    

   
    try {
      const data = await resend.emails.send({
        from: process.env.EMAIL_FROM as string,
        to: process.env.EMAIL_TO as string,
        subject: "Message from contact form",
        replyTo: senderEmail as string,
        react: EmailTemplate(
          {
            senderName:formData.get("senderName") as string, senderEmail: formData.get("senderEmail") as string, senderMessage: formData.get("senderMessage") as string
          })
        
      });
    } catch (error: unknown){
      if (error instanceof Error){
        return {
          error: error.message
        };
      } else if (error && typeof error === 'object' && 'message' in error){
        return {
          error: error.message,
        };
      }
    }


  }