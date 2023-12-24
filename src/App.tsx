import {createResource, createSignal, Show} from "solid-js";
import "./App.css";
import {AdviceCard} from "./AdviceCard";

const fetchAdvice = async () => {
 const response = await fetch("https://api.adviceslip.com/advice");
 const data = await response.json();
 return data.slip;
};

function App() {
 const [advice] = createResource(fetchAdvice);

 console.log(advice);

 return (
  <main>
   <Show when={advice()} fallback={<p>Loading...</p>}>
    <AdviceCard id={advice().id} advice={advice().advice} />
   </Show>
  </main>
 );
}

export default App;
