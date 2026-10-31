import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Tharaka Jayarathne | Database, ERP & Development', description: 'Computer Science graduate building reliable data systems, practical web applications, and machine learning experiments. Explore the work of Tharaka Jayarathne.', metadataBase: new URL('https://tharaka-danush-portfolio.honestzebra256.chatgpt.site'), openGraph: { title: 'Tharaka Jayarathne — Portfolio', description: 'Good systems start with good data.', type: 'website' }, robots: { index: true, follow: true } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
