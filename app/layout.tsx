import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Container, Theme } from '@radix-ui/themes';
import NavBar from '@/app/NavBar';
import AuthProvider from './auth/Provider';
import NextTopLoader from 'nextjs-toploader';
import QueryClientProvider from './QueryClientProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NextTopLoader
          color="#662d91"
          initialPosition={0.08}
          crawlSpeed={2000}
          height={5}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={2000}
          shadow="0 0 10px #662d91,0 0 5px #662d91"
        />
        <QueryClientProvider>
          <AuthProvider>
            <Theme appearance="light" accentColor="purple">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
