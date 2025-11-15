import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koi Creator",
};

import "@koi/ui/globals.css";
import { Providers } from "@koi/creator-web/shared/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
