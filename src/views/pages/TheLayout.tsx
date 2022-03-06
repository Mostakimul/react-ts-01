import Footer from "./common/Footer";
import Header from "./common/Header";
import MainBody from "./common/MainBody";

const TheLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MainBody />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TheLayout;
