import Link from 'next/link';
import { ContactForm } from '@/data/links';
export default function Contact() {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com', svg: 'https://cdn.simpleicons.org/github' },
        { name: 'Twitter', url: 'https://twitter.com', svg: 'https://cdn.simpleicons.org/x' },
        { name: 'LinkedIn', url: 'https://linkedin.com', svg: 'https://cdn.simpleicons.org/linkedin' },
        { name: 'Facebook', url: 'https://facebook.com', svg: 'https://cdn.simpleicons.org/facebook' },
        { name: 'Instagram', url: 'https://instagram.com', svg: 'https://cdn.simpleicons.org/instagram' },
        { name: 'YouTube', url: 'https://youtube.com', svg: 'https://cdn.simpleicons.org/youtube' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
                <p className="text-center text-gray-600 mb-8">Connect with us on social media</p>
                
                <div className="space-y-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition"
                        >
                            <img src={link.svg} alt={link.name} className="w-6 h-6" />
                            <span className="font-medium text-gray-800">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}