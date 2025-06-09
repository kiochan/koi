import './global.css';

export const metadata = {
  title: 'Home',
  description: 'home page of the application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
