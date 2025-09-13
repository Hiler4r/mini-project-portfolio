import React from 'react';
import ProjectCard from './ProjectCard';

const jsProjects = [
    {
        image: 'Digital Clock',
        name: 'Digital Clock',
    description: 'A responsive JavaScript digital clock with real-time updates, 12/24-hour toggle, and date display.',
        link: 'https://digital-clock-ecru-mu.vercel.app/',
    },
    {
        image: 'Quote Generator',
        name: 'Random Quote Generator',
        description: 'A JavaScript app that displays random quotes with a single click, featuring a simple and modern UI.',
        link: 'https://random-quote-generator-brown-theta.vercel.app/',
    },
    {
        image: 'Roman Numeral',
        name: 'Roman Numeral Converter',
        description: 'A JavaScript tool that converts numbers to Roman numerals & Roman numerals to numbers with a clean, user-friendly interface.',
        link: 'https://roman-numeral-converter-iota.vercel.app/',
    },
    {
        image: 'Simple Calculator',
        name: 'Simple Calculator',
        description: 'A JavaScript-powered calculator for basic arithmetic with a clean and responsive design.',
        link: 'https://simple-calculator-five-gilt.vercel.app/',
    },
    {
        image: 'Todolist Application',
        name: 'Todo List Application',
        description: 'A JavaScript to-do list app to add, manage, and save tasks with a simple, responsive UI.',
        link: 'https://todo-list-wine-psi.vercel.app/',
    },
];

const reactProjects = [
    {
        image: 'BMI Calculator',
        name: 'Body Mass Index Calculator (BMI)',
        description: 'A React/Next.js app that calculates Body Mass Index (BMI) from height and weight with instant results.',
        link: 'https://react-mini-projects-jade.vercel.app/bmi-calculator',
    },
    {
        image: 'Quiz Application',
        name: 'Quiz Application',
        description: 'A React/Next.js quiz app with multiple-choice questions, score tracking, and a retake option',
        link: 'https://react-mini-projects-jade.vercel.app/quiz-app',
    },
    {
        image: 'Tic Tac Toe',
        name: 'Tic Tac Toe Game',
        description: 'A React/Next.js Tic-Tac-Toe game with win detection, draw handling, and a reset option',
        link: 'https://react-mini-projects-jade.vercel.app/tic-tac-toe',
    },
    // {
    //     image: '/react4.png',
    //     name: 'React Project 4',
    //     description: 'Description for React Project 4',
    //     link: 'https://example.com/react-project-4',
    // },
    // {
    //     image: '/react5.png',
    //     name: 'React Project 5',
    //     description: 'Description for React Project 5',
    //     link: 'https://example.com/react-project-5',
    // },
];

export default function Projects() {
    return (
        <div id="projects" className="mx-10 my-20 px-10">
            <h2 className="text-5xl font-bold mb-10">JavaScript Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {jsProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <h2 className="text-5xl font-bold mb-10">React Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reactProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}
