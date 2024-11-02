
export default function Container({ children }: {children:React.ReactNode}) {
  return (
    <div className="max-w-[1100px] mx-auto bg-zinc-100/50 min-h-screen flex flex-col shadow-sm shadow-gray-300 relative">
            <div  className="bg-[#f3ea69] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
            <div  className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
            
            {children}
    </div>
  )
}
