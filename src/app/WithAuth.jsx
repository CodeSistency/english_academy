"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component) {
    return function AuthenticatedComponent(props) {
      const { data: session, status } = useSession();
      const router = useRouter();
  
      useEffect(() => {
        if (status === 'unauthenticated') {
          router.push('/login');
        }
      }, [status]);
  
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
  
      return <Component {...props} />;
    };
  }