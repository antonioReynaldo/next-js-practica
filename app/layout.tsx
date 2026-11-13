import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="text-4xl text-center text-red-600 font-bold">
          Mi aplicación
        </header>
        {children}
      </body>
    </html>
  );
}
