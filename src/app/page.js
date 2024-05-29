"use server";

import styles from "./page.module.css";
import { registerAction } from "./actions/registerAction";
import RegisterForm from "./RegisterForm";

export default async function Home() {
  return (
    <main className={styles.main}>
      <RegisterForm registerAction={registerAction} />
    </main>
  );
}
