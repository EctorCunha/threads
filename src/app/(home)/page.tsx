import HomePost from "./post/post";
import Header from "./header/header";
import Feed from "./feed/feed";
import styles from "./styles.module.css";



export default function Home() {
  return (
    <main>
      <Header/>
      <article className="max-w-lg m-auto">
        <section>
          <HomePost />
        </section>
        <hr className="my-4 h-[0.5px] opacity-20" />

        <section className={styles.container}>
          <Feed/>
        </section>
      </article>
    </main>
  );
}
