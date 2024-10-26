import localFont from "next/font/local";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // const supabase = createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   // redirect("/login");
  //   return (
  //     <html lang="en">
  //       <body>
  //       <html lang="en">
  //         <body>
  //           <p>You need to login to continue.</p>
  //           <Link href="/login" className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
  //             Go to Login
  //           </Link>
  //         </body>
  //       </html>
  //       </body>
  //     </html>
  //   );
  // }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
