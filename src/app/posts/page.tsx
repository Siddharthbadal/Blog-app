
import Loader from "@/components/Loader";
import ProjectsList from "@/components/Post-List";
import Link from "next/link";
import {  Suspense } from "react";

export const metadata = {
  title: "Posts | Siddharth",
  description: "Technical blog posts.",
};


export default async function Posts() {
  

    return (                         

      <main className="text-center px-5">
        <h1 className="text-gray-700 text-2xl font-semibold mt-6">Posts</h1>
        
      <div className="mt-2 ">
          <Suspense fallback={<Loader  />}>
              <ProjectsList />
          </Suspense>
      </div>
                    
    </main>
      
    );
  }
  