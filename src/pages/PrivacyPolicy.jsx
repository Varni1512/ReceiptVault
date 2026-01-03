import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#F5F7FA] pt-10 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link to="/" className="flex items-center text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                            <Shield size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900">Privacy Policy</h1>
                            <p className="text-slate-500 font-medium">Last Updated: January 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Welcome to <strong>ReceiptVault</strong>. We are committed to safeguarding your privacy and ensuring transparency in how your data is collected, used, and protected. This policy outlines our practices regarding personal information when you use our receipt storage and warranty tracking platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Data We Collect</h2>
                            <p className="text-slate-600 leading-relaxed">
                                ReceiptVault only collects information that is essential to deliver its core functionality. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                <li><strong>Personal details:</strong> Name, email address, phone number, and profile image (optional).</li>
                                <li><strong>Receipt data:</strong> Bill/receipt images uploaded by you and text extracted through OCR processing.</li>
                                <li><strong>Warranty details:</strong> Warranty card images and expiry dates added by you.</li>
                                <li><strong>Device & usage data:</strong> Non-identifiable analytics such as device type, interactions, and performance logs.</li>
                                <li><strong>Cookies:</strong> Used only to enhance login persistence and UI preferences (including theme mode).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your data is processed and used strictly for providing ReceiptVault services, including:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 border border-slate-300 rounded-2xl">
                                    <h4 className="font-bold text-slate-800">Secure Storage</h4>
                                    <p className="text-sm text-slate-500">Keeping your receipts and warranty cards safely in your personal vault.</p>
                                </div>
                                <div className="p-4 border border-slate-300 rounded-2xl">
                                    <h4 className="font-bold text-slate-800">Warranty Tracking</h4>
                                    <p className="text-sm text-slate-500">Calculating and displaying warranty expiry timelines based on your inputs.</p>
                                </div>
                                <div className="p-4 border border-slate-300 rounded-2xl">
                                    <h4 className="font-bold text-slate-800">Smart Alerts</h4>
                                    <p className="text-sm text-slate-500">Sending you notifications before warranty expiration or upcoming service due dates.</p>
                                </div>
                                <div className="p-4 border border-slate-300 rounded-2xl">
                                    <h4 className="font-bold text-slate-800">User Experience</h4>
                                    <p className="text-sm text-slate-500">Improving UI, dark/light mode preference, and app performance using analytics.</p>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mt-6">
                                We do <strong>not</strong> sell, trade, or share your personal data for advertising or external marketing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Protection & Security</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We apply strict security measures to keep your data protected, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                <li>Encrypted data transfer using HTTPS/SSL.</li>
                                <li>Secure authentication via Firebase/Email login.</li>
                                <li>Cloud storage of receipt and warranty images using protected access.</li>
                                <li>No storage of sensitive data like payment details or passwords in plain text.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                However, no online platform can guarantee 100% security. We continuously improve our systems to minimize risks.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. User Rights</h2>
                            <p className="text-slate-600 leading-relaxed">
                                As a user of ReceiptVault, you have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                <li>Access your stored receipts and warranty cards anytime.</li>
                                <li>Delete your uploaded bills or warranty images.</li>
                                <li>Request account deletion and complete data removal.</li>
                                <li>Update personal information in the Profile section.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Data Retention</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your receipts and warranty images remain stored in your account until:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                <li>You delete them manually, or</li>
                                <li>You request account deletion.</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                If your account remains inactive for <strong>12 months</strong>, we may delete stored images to optimize storage, after notifying you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies & Preferences</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We use cookies only to store:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4">
                                <li>Login session persistence</li>
                                <li>Theme mode (dark/light preference)</li>
                                <li>Basic usage analytics</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                You can disable cookies from your browser, but some features like auto-login may not work smoothly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact</h2>
                            <p className="text-slate-600 leading-relaxed">
                                For privacy-related concerns, reach us at:
                            </p>
                            <p className="text-blue-600 font-bold mt-2">support@receiptvault.com</p>
                        </section>

                        <footer className="pt-10 border-t border-slate-100 text-center">
                            <p className="text-slate-500 text-sm">
                                ReceiptVault © 2026 — Built to secure your receipts and track warranties intelligently.
                            </p>
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;