import addProjectForm from "@/actions/addFormActions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function page() {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())){
        redirect("/api/auth/login?post_login_redirect_url=/add-project")
    }
  return (
    <main className="text-center pt-10">
        <h1 className="text-2xl text-gray-600 font-semibold mb-3 ">Add Project</h1>
        <form action={addProjectForm} className="flex flex-col justify-center items-center gap-2  *:mb-2">
            <input 
                    type="text" 
                    name="title"
                    placeholder="title"
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
                    placeholder="techs"
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
                <textarea name="description" id="" placeholder="description" 
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

            <button className="bg-gray-600 text-white/50 h-full w-1/2 ml-2 rounded-lg p-2 font-semibold">Submit</button>

        </form>
        
        <div className="mt-[108px] text-gray-200 text-xl font-semibold underline tracking-wider mb-2">
                <LogoutLink>LogOut</LogoutLink>            
        </div>
    </main>
  )
}
