// pages/index.tsx
import dynamic from 'next/dynamic';

const PageClient = dynamic(() => import('../src/app/page.client'));

export default function Home() {
 return <PageClient />;
}