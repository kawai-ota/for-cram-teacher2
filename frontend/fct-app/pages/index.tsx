import styles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.video_container}>
        <video src="/squares_-_81094 (Original).mp4" autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
        <div className={styles.text_overlay}>
          <h1>For Cram Teacher</h1>
          <h2>〜全ての塾の先生へ〜</h2>
          <Link href="/signin" legacyBehavior>
            <a className={styles.button}>
              <button>新規登録はこちら</button>
            </a>
          </Link>
          <Link href = "/login" legacyBehavior>
            <a className = {styles.button}>
              <button>ログインはこちら</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
