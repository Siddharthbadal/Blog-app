"use client"

import addProjectForm from "@/actions/addFormActions";
import FormButton from "./FormButton";
import toast from "react-hot-toast";
import { ProjectSchema } from "@/lib/typesOfProjects"; 
import { useRef } from "react";


export default function ProjectForm() {
    const ref = useRef<HTMLFormElement>(null)
    
    const clientAction = async (formData: FormData) => {
        
        const newProject = {
            title:formData.get("title"),
            slug : formData.get("slug"),
            short : formData.get("short"),
            techs : formData.get("techs"),
            imagelink : formData.get("imagelink"),
            githublink : formData.get("githublink"),
            demolink : formData.get("demolink"),
            description : formData.get("description"),
        }

        // client side
        const result = ProjectSchema.safeParse(newProject)
        if (!result.success){
            let errorMessage = "";

            result.error.issues.forEach((issue) =>{
                errorMessage = errorMessage + issue.path[0] + ":" + issue.message + ". ";
            });

            toast.error(errorMessage);
            return;
        }   
        // console.log(result.data)
        const response = await addProjectForm(result.data);
        if (response?.error){
            toast.error(response.error);
        }

        if(result.success){
            setTimeout(()=>{
                ref.current?.reset();
            },1500)
            toast.success("Project Submitted!")
        }
    }
  return (
    <form      
        ref={ref}             
        action={clientAction}               
        className="flex flex-col justify-center items-center gap-2 flex-wrap *:mb-2">
<input 
        type="text" 
        name="title"
        placeholder="title"
        className="border border-gray-500 rounded p-2 h-full w-1/2"
        
    />
<input 
        type="text" 
        name="slug"
        placeholder="slug"
        className="border border-gray-500 rounded p-2 h-full w-1/2"
        required
    />

<input 
        type="text" 
        name="short"
        placeholder="short description"
        className="border border-gray-500 rounded p-2 h-full w-1/2"
        required
    />
<input 
        type="text" 
        name="techs"
        placeholder="techs with space"
        className="border border-gray-500 rounded p-2 h-full w-1/2"
        required
    />

<input 
    type="text" 
    name="imagelink"
    placeholder="image url"
    className="border border-gray-500 rounded p-2 h-full w-1/2"
    required
    />
           
<textarea   name="description" 
            placeholder="description" 
            rows={4}
            className="border border-gray-500 rounded p-2 w-1/2"
        >
</textarea>                                                                            

<input 
    type="text" 
    name="githublink"
    placeholder="github"
    className="border border-gray-500 rounded p-2 h-full w-1/2"
    required
    />

<input 
    type="text" 
    name="demolink"
    placeholder="live demo"
    className="border border-gray-500 rounded p-2 h-full w-1/2"                
    />

<FormButton/>
</form>
  )
}
