'use client';

import { cn } from '../lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo = ({ size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };
  
  const logoSizes = {
    sm: 30,
    md: 38,
    lg: 46
  };

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative">
        <Image 
          src="/images/CE8AA5EE-A468-4F6B-8FFF-39043D152E6B.png" 
          alt="Majestix Digital Logo" 
          width={logoSizes[size]} 
          height={logoSizes[size]} 
          className="object-contain"
        />
      </div>
      <span className={cn("font-bold", sizeClasses[size])}>
        <span className="text-primary">Majestix</span>
        <span className="text-muted-foreground"> Digital</span>
      </span>
    </Link>
  );
};

export default Logo;