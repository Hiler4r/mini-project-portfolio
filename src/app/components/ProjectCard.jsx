import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ image, name, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={`/images/${image}.png`}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <Link
          href={link}
          className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
