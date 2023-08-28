import styles from "../styles/home.module.css";
import Link from "next/link";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className={styles.video_container}>
        <video src="/squares_-_81094 (Original).mp4" autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
        <div className={styles.text_overlay}>
          <p className="font-bold text-5xl">For Cram Teacher</p>
          <h2>〜先生方に活躍を、輝ける場所で仕事を〜</h2>
          <Link href="auth">
            <button className={styles.button}>
              <span className="mr-4">
                <BsFillArrowRightSquareFill />
              </span>
              ログイン/新規登録
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
