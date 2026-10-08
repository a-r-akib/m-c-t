import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/page";

export default function WebLayout({ children }: any) {
  return (
    <>
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </>
  );
}
