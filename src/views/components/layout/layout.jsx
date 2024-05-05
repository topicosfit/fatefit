import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
