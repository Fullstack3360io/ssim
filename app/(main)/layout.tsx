import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'SSIM Manager!',
    description: 'This is an application to upload SSIM files.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'SSIM Manager',
        url: '#',
        description: 'This is an application to upload SSIM files.',
        images: ['#'],
        ttl: 604800
    },
    /*
    icons: {
        icon: '/favicon.ico'
    }
    */
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
