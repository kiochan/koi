import './global.css';
import '../lib/i18n';

import { ThemeProvider } from '../components/theme-provider';

export const metadata = {
  title: 'Koi',
  description: 'Koi  Workshop',
  icons: {
    icon: [
      { url: '/icon1.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon0.svg', media: '(prefers-color-scheme: dark)' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Koi" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
