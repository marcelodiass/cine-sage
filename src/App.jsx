import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Show from "./components/Show/Show";

function App() {
	return (
		<div className="w-full h-full min-h-screen bg-gradient-to-r from-slate-500 to-slate-950 flex align-top flex-col items-center gap-6">
			<Header title="Cine Sage" />
      <Button>
        <Show/>
      </Button>
		</div>
	);
}

export default App;
