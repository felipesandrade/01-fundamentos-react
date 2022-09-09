import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author='Felipe Andrade'
          content='Post 1 - Estudando React com Vite'

          />
          <Post 
            author='Felipe Andrade'
            content='Post 2 - Estudando React Native'

          />
        </main>
      </div>

    </>
    
  )
}
