import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: process.env.APP_NAME,
        description: process.env.APP_DESCRIPTION,
        url: '#',
        images: ['#'],
        ttl: 604800
    }
    /*
    icons: {
        icon: '/favicon.ico'
    }
    */
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
