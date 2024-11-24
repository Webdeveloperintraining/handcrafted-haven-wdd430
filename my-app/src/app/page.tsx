
import styles from "./page.module.css";
import LandingPage from "./landing";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     
       <LandingPage></LandingPage>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
