const skillsData = [
    "Python",
    "SQL",
    "JavaScript",
    "Django",
    "Django Rest FrameWork",
    "FastAPI",
    "NextJS",
    "Tailwind",
    "HTML CSS",
    "Prisma",
    "TypeScript",
    "Linux",
    "Git & Github",
    "Docker"
] as const 

export default function Skills() {
  return (
    <section className='mb-12 max-w-[55rem] scroll-mt-28 text-center sm:mb-6 mx-auto'>
        <h2 className="text-xl mb-2 font-bold text-gray-600">Skills</h2>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-600 items-center'>
            {
                skillsData.map((skill, index)=>(
                    <li key={index}
                        className='bg-white border border-gray-600/[0.1] rounded-xl px-4 py-2'
                    >
                            {skill}</li>
                ))
            }
        </ul>

    </section>
  )
}
