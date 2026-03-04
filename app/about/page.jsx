import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        I am a single, lonely white man in his 20's.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        For shits and giggles
                    </p>
                </section>
            </div>
        </div>
    );
}