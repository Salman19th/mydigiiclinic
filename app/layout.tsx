import './globals.css'; import type {Metadata} from 'next';
export const metadata:Metadata={title:'MyDigiClinic — Your Clinic, One Tap Away',description:'A digital home for clinics and a connected care journey for patients.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
