import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({  // 이웃 자식들에게 싹 다 적용시켜주겠다.
  children,
}: {
  children: React.ReactNode; // 사용한다고 명시해줌
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
