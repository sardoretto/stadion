import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-auto">
        <div className="max-w-5xl mx-auto my-8">{props.children}</div>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
