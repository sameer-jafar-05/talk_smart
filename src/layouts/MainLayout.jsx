import Header from "../components/organisms/Header/Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
