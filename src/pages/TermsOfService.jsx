import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-[#F5F7FA] pt-10 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="flex items-center text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                            <Scale size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-slate-900">Terms of Service</h1>
                            <p className="text-slate-500 font-medium">Effective Date: January 04, 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using <strong>ReceiptVault</strong>, you agree to comply with and be legally bound by these Terms of Service. If you do not agree, you must discontinue use of the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Description of Service</h2>
                            <p className="text-slate-600 leading-relaxed">
                                ReceiptVault is a personal-use platform that allows users to securely upload, store, and track digital receipts and warranty cards, receive expiry reminders, and manage account-related information.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-6">
                            <section className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <CheckCircle size={20} /> User Responsibilities
                                </h3>
                                <ul className="list-disc pl-5 text-sm text-blue-700 space-y-2">
                                    <li>Maintain confidentiality of login credentials.</li>
                                    <li>Provide accurate purchase, receipt, and warranty details.</li>
                                    <li>Ensure uploaded images/documents belong to you and are not fraudulent.</li>
                                    <li>Use the platform only for personal and lawful purposes.</li>
                                </ul>
                            </section>

                            <section className="bg-red-50 p-6 rounded-3xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                                    <AlertTriangle size={20} /> Prohibited Uses
                                </h3>
                                <ul className="list-disc pl-5 text-sm text-red-700 space-y-2">
                                    <li>Uploading fake or stolen receipts or warranty cards.</li>
                                    <li>Using the service for illegal, deceptive, or harmful activity.</li>
                                    <li>Attempting to breach, reverse-engineer, or disrupt the platform.</li>
                                    <li>Violating intellectual property or privacy rights of others.</li>
                                </ul>
                            </section>
                        </div>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Data & Privacy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your use of ReceiptVault is also governed by our Privacy Policy. We do not sell or misuse personal data. Any content you upload is stored securely and remains under your control.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Storage & Availability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                ReceiptVault uses third-party cloud services (e.g., Cloudinary/Firebase) to store images and extracted data. While we aim for high availability, we do not guarantee uninterrupted access, and occasional downtime may occur for maintenance or updates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Warranty & Reminder Accuracy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Warranty timelines and reminders are calculated based on user-provided purchase dates and warranty durations. ReceiptVault strives for accuracy but is not liable for incorrect data if the input information is inaccurate or incomplete.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
                            <p className="text-slate-600 leading-relaxed">
                                ReceiptVault is a personal project and is provided on an “as-is” basis. We are not responsible for financial loss, missed warranty claims, or damages resulting from platform misuse, incorrect inputs, or third-party storage failures.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Account Termination</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to suspend or terminate access if a user is found violating these terms. Upon account deletion or termination, stored bills and warranty images may be permanently removed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Changes to Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                These terms may be updated in the future as the platform evolves. Users will be informed of major changes via email or in-app alerts. Continued use after updates implies acceptance of revised terms.
                            </p>
                        </section>

                        <footer className="pt-10 border-t border-slate-100 text-center">
                            <p className="text-slate-500 text-sm">
                                ReceiptVault © 2026 — <em>Secure your receipts, track warranties, stay ahead with reminders.</em>
                            </p>
                            <p className="text-slate-400 text-xs mt-2">
                                For support or legal concerns: <strong>support@receiptvault.com</strong>
                            </p>
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;