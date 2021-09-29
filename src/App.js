import "./App.scss";

class App {
  render() {
    return (
      <div className="general">
        <header className="header">
          <img src={require("./img/logo-clean3000.png")} className="App-logo" alt="logo" />
        </header>

        <h1>Bienvenue</h1>
      </div>
    );
  }
}

export default App;
