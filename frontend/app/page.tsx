import { AppSidebar } from '@/components/AppSidebar';
import { AppHeader } from '@/components/AppHeader';

export default function Home() {
  return (
    <div className='flex min-h-screen bg-paper text-ink w-full'>
      <AppSidebar />
      <div className='w-full'>
        <AppHeader />
      </div>
    </div>
  );
}
