import { Contact, Hero, Projects, Skills } from '@/app/sections';

export default function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
