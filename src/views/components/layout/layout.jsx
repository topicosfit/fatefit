import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: 'calc(100vh - 256px)'
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
