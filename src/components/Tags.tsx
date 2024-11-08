const skillsData = [
    "Python",
    "SQL",
    "JavaScript",
    "Django",
    "Django Rest FrameWork",
    "FastAPI",
    "NextJS",
    "TypeScript",
    "Linux",
    "Git & Github",
    "Docker"
] as const 

export const metadata = {
    title: "Tags | Siddharth",
    description: "Technical blog posts.",
  };

export default function Tags() {
  return (
    <section className='mb-12 max-w-[45rem] scroll-mt-28 text-center sm:mb-6 mx-auto'>
        <h2 className="text-xl mb-2 font-bold text-gray-600">Tags</h2>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-600 items-center'>
            {
                skillsData.map((skill, index)=>(
                    <li 
                        key={index}
                        className='bg-white border border-gray-600/[0.1] text-gray-500 rounded-xl px-2 py-1'
                    >
                            <small>{skill}</small>
                            
                    </li>
                ))
            }
        </ul>

    </section>
  )
}
