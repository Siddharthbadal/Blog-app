
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link"
import { notFound } from "next/navigation";

export default async function Page({ params }:{params: {id: string}}) {
   
    // const response = await fetch(`http://localhost:3030/projects/${params.id}`);
    // const project = await response.json();    

    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(params.id)
      },
    });
    if (!project){
        notFound();
    }
    
  return (
    
    <main className=" max-w-[980px] mx-auto px-7 pt-4 lg:pt-16 text-center">
           {                            
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                      <Image src={project.imagelink} alt={project.title}
                      className="w-[520px] h-[320px] rounded-lg object-contain"
                        width={520}
                        height={320}
                      />
                     
                        <div>
                        <h2 className="text-2xl font-semibold">{project.title}</h2>
                        <p className="mt-2 mb-2 leading-6 tracking-wider">
                         {project.description}
                        </p>
                                                
                          <button className="btn  bg-gray-200 text-zinc-600 text-xs font-semibold p-1 m-1 rounded-md">{project.techs.split(",")[0]}</button>
                          <button className="btn bg-gray-200 text-zinc-600 text-xs font-semibold p-1 m-1 rounded-md">{project.techs.split(",")[1]}</button>

                          <div className=" flex flex-row justify-evenly gap-12  mt-4 ">
                              <Link href={project.githublink}
                                className="btn  bg-blue-100 text-zinc-600 text-sm font-semibold p-2 m-2 rounded-md tracking-wide hover:bg-blue-400 hover:text-zinc-800"
                                target="_blank"
                                >
                                  Github
                                </Link>
                                {project.demolink ? 
                              <Link href={project.demolink}
                                className="btn  bg-blue-100 text-zinc-500 text-sm font-semibold p-2 m-2 rounded-md tracking-wide hover:bg-blue-400 hover:text-zinc-800"
                                target="_blank"
                                >
                                  Demo
                                </Link>
                                : ''}
                              </div>
                        </div>

                            
                          
                          
                          
                        
                        <hr />
                    </div>                                    

           } 

        
    </main>
  )
}
