import Contacts from "@/components/Contacts";


export default function Home() {
    
  return (
    <main className="text-center pt-16 px-5">
        <h1 className="text-3xl font-bold mb-7 lg:text-4xl text-gray-700 ">Hi, My name is Siddharth</h1>
        
        <p className="max-w-[750px] text-gray-700 mx-auto leading-8 tracking-wide mb-5 ">I am a self taught developer and a Freelancer. Mainly Work with Python Django FastAPI, SQL and JavaScript NextJS. I build custom web apps with Django & NextJS. <br />
        Skills include Git, Github, Strapi, AWS S3, RDS, Linux, Docker, Pandas. <br />
        I like to travel whenever I can, Watch good movies. little bit of reading and twitter. <br />
        Contact me for technical and non technical projects.
        </p>
        
        <Contacts />
    </main>
  );
}
