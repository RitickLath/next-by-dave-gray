import styles from "./styles.module.css";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className={styles.main}>
        <nav>About Navbar</nav>
        {children}
        <footer>About Footer</footer>
      </main>
    </>
  );
};

export default AboutLayout;
