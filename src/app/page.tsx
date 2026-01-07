import NavigationBar from '@/components/sections/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import HalaqohSection from '@/components/sections/HalaqohSection';
import ExtracurricularSection from '@/components/sections/ExtracurricularSection';
import GallerySection from '@/components/sections/GallerySection';
import TimelineSection from '@/components/sections/TimelineSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import RequirementsSection from '@/components/sections/RequirementsSection';
import SectionAsatizz from '@/components/sections/SectionAsatizz';

export default function HomePage() {
  return (
    <main className='bg-white'>
      <NavigationBar />
      <HeroSection />
      <div className='lazy-section'>
        <VisionMissionSection />
      </div>
      <div className='lazy-section'>
        <ProgramsSection />
      </div>
      <div className='lazy-section'>
        <HalaqohSection />
      </div>
      <div className='lazy-section'>
        <SectionAsatizz />
      </div>
      <div className='lazy-section'>
        <ExtracurricularSection />
      </div>
      <div className='lazy-section'>
        <GallerySection />
      </div>
      <div className='lazy-section'>
        <TimelineSection />
      </div>
      <div className='lazy-section'>
        <RequirementsSection />
      </div>
      <div className='lazy-section'>
        <FAQSection />
      </div>
      <ContactSection />
      <div className='lazy-section'>
        <FooterSection />
      </div>
    </main>
  );
}
