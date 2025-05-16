import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeHero } from '@/components/home/hero';
import { HomeFeatures } from '@/components/home/features';
import { HomeTestimonials } from '@/components/home/testimonials';
import { MainNav } from '@/components/main-nav';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HomeHero />
        <HomeFeatures />
        <HomeTestimonials />
      </main>
      <Footer />
    </div>
  );
}