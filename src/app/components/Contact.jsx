import React from 'react';
import Button from './Button';

export default function Contact() {
    return (
        <div id="contact" className="mx-4 sm:mx-10 my-20">
            <h2 className="text-5xl font-bold mb-10">Get In Touch</h2>
            <div className="max-w-2xl">
                <p className="text-xl mb-8 text-secondary">
                    I'm always interested in new opportunities and collaborations.
                    Whether you have a project in mind or just want to say hello,
                    feel free to reach out!
                </p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>
                    <Button text="Send Message" />
                </div>
            </div>
        </div>
    );
}
