import React from 'react';
import { Facebook, Instagram, Wand2, Mail, ShoppingBasket } from 'lucide-react';
import { SocialLink } from './components/SocialLink';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Background } from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-950 to-black text-red-100 relative overflow-hidden">
      <Background />
      <BackgroundEffects />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-gothic mb-3 text-red-100">
            Jane Torkhova
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl text-red-200/80">
            <Wand2 className="w-5 h-5" />
            <h2 className="font-gothic">Polymerclay Witch</h2>
            <Wand2 className="w-5 h-5 transform rotate-180" />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <SocialLink
            href="https://store.polymerclaywitchcraft.com/"
            icon={ShoppingBasket}
            label="Find Your Future Magic in the Store"
          />
          <SocialLink
            href="https://www.facebook.com/profile.php?id=61568477402660"
            icon={Facebook}
            label="Follow the Magic on Facebook"
          />
          <SocialLink
            href="https://www.instagram.com/polymerclay_witchcraft"
            icon={Instagram}
            label="Enchanting Instagram Feed"
          />
          <SocialLink
            href="https://www.tiktok.com/@polymerclay_witchcraft"
            icon={(props) => (
              <svg
                {...props}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            )}
            label="TikTok Spells"
          />
          <SocialLink
            href="https://www.patreon.com/polymerclay_witchcraft"
            icon={(props) => (
              <svg
                {...props}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.82 2.41a3.5 3.5 0 0 0-4.88 5l.71.71a3.5 3.5 0 0 0 4.88-5Z" />
                <path d="M18.5 2.41a3.5 3.5 0 0 0-4.88 5l.71.71a3.5 3.5 0 0 0 4.88-5Z" />
                <path d="m2 2 20 20" />
                <path d="M2 22V12c0-5.5 4.5-10 10-10" />
              </svg>
            )}
            label="Support on Patreon"
          />
          <SocialLink
            href="/coven/"
            icon={Mail}
            label="Subscribe to the Coven"
          />
        </div>
      </div>
    </div>
  );
}

export default App;