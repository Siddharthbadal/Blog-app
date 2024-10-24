import prisma from "@/lib/db";
import Link from "next/link";

export default async function ProjectsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // const response = await fetch("http://localhost:3030/projects")
    // const data = await response.json();

    const projects = await prisma.project.findMany();

  return (
    <div className=" mt-6 mb-4 flex flex-col lg:flex-row justify-evenly flex-wrap gap-6 max-w-[900px] text-gray-700 mx-auto leading-4 tracking-wide">
          
        {
          projects.map((project) => (
            
            <div className="max-w-xl py-1 px-4 bg-white border border-gray-200 rounded-lg shadow  ">
                <Link key={project.id} href={`/projects/${project.id}`} className="">
                    <h5 className="mb-1 text-xl tracking-wide text-gray-600 hover:text-gray-800">
                      {project.title}                                             
                    </h5>
                    <small className="text-sm tracking-wide text-gray-600  whitespace-break-spaces">{project.short}</small>
                </Link>                        
            </div>            
            ))
          }
            
        </div>    
  )
}
