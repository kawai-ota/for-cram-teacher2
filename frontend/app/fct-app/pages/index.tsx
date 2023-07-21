import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.video_container}>
        <video src="/squares_-_81094 (Original).mp4" autoPlay muted>
          Your browser does not support the video tag.
        </video>
        <div className={styles.text_overlay}>
          <h1>for cram teacher</h1>
          <h2>〜全ての塾の先生へ〜</h2>
          <button>新規登録はこちら</button>
          <button>ログインはこちら</button>
        </div>
      </div>
    </>
  );
}
