import { deleteProject } from "@/actions/addFormActions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function DeleteProject({ id }: any) {

  return (
   
  <>
  
  <form action={deleteProject}>
                    <input type="hidden" name="id" value={id} />
                    <button className="btn btn-xs text-gray-100">Delete</button>
            </form>

  </>

        
    
    
  )
}
