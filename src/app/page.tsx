import Contacts from "@/components/ContactLinks";
import About from "@/components/About"


export default function Home() {
    
  return (
    <main className="text-center pt-12 px-5">
        <h1 className="text-3xl font-bold mb-5 lg:text-4xl text-gray-700 ">Hi, My name is Siddharth</h1>
        
          <About />        
          <Contacts />
    </main>
  );
}
