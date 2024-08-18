import Dramas from "./components/Drama";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-dark-black">
      <div className="w-[1280px] h-screen m-auto">
        <nav className="h-20 w-full">
          <Header />
        </nav>
        <main>
          <Main />
          <Dramas />
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
