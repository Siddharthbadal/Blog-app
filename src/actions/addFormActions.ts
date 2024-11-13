"use server"

import  prisma  from "@/lib/db"
import { ProjectSchema } from "@/lib/typesOfProjects"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function addProjectForm(newProject: unknown) {
    // auth check
    const { isAuthenticated } = getKindeServerSession()
    if(!(await isAuthenticated())){
        redirect("/api/auth/login")
    }

    // server side 
    const result = ProjectSchema.safeParse(newProject)
        if (!result.success){
            let errorMessage = "";

            result.error.issues.forEach((issue) =>{
                errorMessage = errorMessage + issue.path[0] + ":" + issue.message + ". ";
            });

            //  toast msg can not be used in server side
            return {
                error: errorMessage
            }
        }              
    await prisma.project.create({
        data: result.data
                   
    });     
        revalidatePath("/posts");            
    }


export const getAllProjects = async () =>{
    return await prisma.project.findMany({      
        orderBy:{
          updatedAt: "desc"
        },            
      })
}

export const getOneProject = async ({ params }:{params: {slug: string}}) =>{
    return await prisma.project.findUnique({
        where: {
          slug: params.slug,
        },
        
      });
      
}

export const deleteProject = async (formData: FormData)=>{

    const { isAuthenticated } = getKindeServerSession()
    if(!(await isAuthenticated())){
        redirect("/posts")
    }
    const id:any = formData.get('id')
    await prisma.project.delete({
        where:{
            id
        }
    });    
    revalidatePath("/posts");   
    redirect("/posts")
}


