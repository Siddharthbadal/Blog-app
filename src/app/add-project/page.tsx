import addProjectForm from "@/actions/addFormActions";
import FormButton from "@/components/FormButton";
import ProjectForm from "@/components/ProjectForm";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";



export default async function page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())){
        redirect("/api/auth/login?post_login_redirect_url=/add-project")
    }
    
  return (
    <main className="text-center pt-10">
        <h1 className="text-2xl text-gray-600 font-semibold mb-3 ">Add Project</h1>
        
       <ProjectForm />
        
        <div className="mt-[108px] text-gray-200 text-xl font-semibold underline tracking-wider mb-2">
                <LogoutLink>LogOut</LogoutLink>            
        </div>
    </main>
  )
}
