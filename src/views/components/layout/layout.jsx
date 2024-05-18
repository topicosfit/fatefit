import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className={`
          bg-slate-300
        `}
        style={{
          minHeight: 'calc(100vh - 400px)'
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
