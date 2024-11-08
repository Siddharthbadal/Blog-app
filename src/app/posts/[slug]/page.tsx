

import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link"
import { notFound } from "next/navigation";




export default async function Page({ params }:{params: {slug: string}}) {
   
    // const response = await fetch(`http://localhost:3030/projects/${params.id}`);
    // const project = await response.json();    

    const project =await prisma.project.findUnique({
      where: {
        slug: params.slug,
      }})
    if(!project){
        notFound();
    }

  return (
    
    <main className="max-w-[1080px] mx-auto px-7 pt-4 lg:pt-6 text-center">
           {                            
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">                                                        
                <Image src={project.imagelink} alt={project.title}
                className="w-[580px] lg:max-w-[520px]  rounded-lg object-contain  shadow-lg shadow-gray-200"
                width={520}
                height={180}
                />
                
                
                  <div className="text-gray-700">
                  <h2 className="text-2xl font-semibold capitalize tracking-wider">{project.title}</h2>
                  <p className="mt-2 mb-2 leading-6 tracking-wider whitespace-pre-wrap ">
                    {project.short}
                    
                  </p>
                  <div className="mt-4 mb-4 text-left ml-5">
                      
                        
                          {
                              project.techs.split(" ").map(tech =>  <span className="font-semibold"> { tech }</span>
                              )
                          }
                          
                        
                  </div>
                  <p className="mt-2 mb-2 leading-6 tracking-wider whitespace-pre-wrap ">
                    {project.description}
                    
                  </p>
                  
                                          
                    {/* <button className="btn  bg-gray-200 text-zinc-600 text-xs font-semibold p-1 m-1 rounded-md"></button>
                    <button className="btn bg-gray-200 text-zinc-600 text-xs font-semibold p-1 m-1 rounded-md"></button> */}

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
