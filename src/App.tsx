import {createResource, createSignal, ErrorBoundary, Show} from "solid-js";
import "./App.css";
import {AdviceCard} from "./AdviceCard";

const fetchAdvice = async () => {
 const response = await fetch("https://api.adviceslip.com/advice");
 const data = await response.json();
 return data.slip;
};

function App() {
 const [adviceRefetch, setAdviceRefetch] = createSignal<number>(0);
 const [advice] = createResource(adviceRefetch, fetchAdvice);

 console.log(advice());

 return (
  <main>
   <Show when={advice()} fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={(err) => err}>
     <AdviceCard
      id={advice().id}
      advice={advice().advice}
      onRefetch={() => setAdviceRefetch((prev) => prev + 1)}
     />
    </ErrorBoundary>
   </Show>
  </main>
 );
}

export default App;
