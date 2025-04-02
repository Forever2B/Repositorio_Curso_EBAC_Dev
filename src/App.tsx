import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://limahobbies.vteximg.com.br/arquivos/ids/223096/Miniatura-Carro-Batmovel-2022-c--Figura-Batman-DC-1-32.jpg?v=638372882018630000">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
