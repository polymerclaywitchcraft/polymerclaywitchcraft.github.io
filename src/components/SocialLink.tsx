import React from 'react';

type SocialLinkProps = {
  href: string;
  icon: React.ElementType;
  label: string;
};

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3 transition-all duration-300 
    border border-red-800/30 rounded-lg bg-red-950/30 hover:bg-red-950/50 
    text-red-100/90 hover:text-red-50 hover:border-red-800/50 hover:scale-105"
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </a>
);