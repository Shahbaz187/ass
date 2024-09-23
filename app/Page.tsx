import Hero from '@/components/Hero'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Ourprojects from '@/components/Ourprojects'



export default function Home() {
  const addToRefs = (el: any) => {
    // Add the logic you want for refs here
    console.log(el);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-5 mx-auto overflow-hidden xl:w-[90%] md:w-full sm:w-full">
      <Hero />
      <About />
      <Ourprojects addToRefs={addToRefs} />
      <ContactForm />
    </main>
  );
}
