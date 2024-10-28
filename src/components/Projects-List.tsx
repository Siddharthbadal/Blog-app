import prisma from "@/lib/db";
import Link from "next/link";



export default async function ProjectsList() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // const response = await fetch("http://localhost:3030/projects")
    // const data = await response.json();
    // const projects = await prisma.project.findMany

    const projects = await prisma.project.findMany({      
      orderBy:{
        createdAt: "desc"
      },            
    })
    // const projects = await getAllProjects()
    // const projects = await prisma.project.findMany({
    //   where:{
    //     description:{
    //       contains: 'Django'
    //     },
    //      },
        //  take:1,
    // });
    // await prisma.project.count()
   
    
  return (
    <div className=" mt-6 mb-4 flex flex-col lg:flex-row justify-evenly flex-wrap gap-4 lg:max-w-full  text-gray-700 mx-auto leading-4 tracking-wide  ">
          
        {
          projects.map((project) => (
            
            <div className="lg:w-1/4 py-2 px-4 bg-white rounded-lg shadow-lg shadow-gray-300  ">
                <Link key={project.id} href={`/projects/${project.slug}`} className="">
                    <h5 className="mb-2 lg:text-md tracking-wide text-gray-600 font-semibold hover:text-gray-800">
                      {project.title}                                           
                    </h5>
                    <small className="text-sm tracking-wide text-gray-600  whitespace-break-spaces">
                      {project.short}
                      
                        </small>
                </Link>   
                                     
            </div>            
            ))
          }
            
        </div>    
  )
}
