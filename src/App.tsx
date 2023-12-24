import {createResource, ErrorBoundary, Show} from "solid-js";
import "./App.css";
import {AdviceCard} from "./AdviceCard";

const fetchAdvice = async () => {
 const response = await fetch("https://api.adviceslip.com/advice");
 const data = await response.json();
 return data.slip;
};

function App() {
 const [advice, {refetch}] = createResource(fetchAdvice);

 console.log(advice());

 return (
  <main class="mx-auto w-[30rem]">
   <Show when={advice()} fallback={<p class="text-light-cyan">Loading...</p>}>
    <ErrorBoundary fallback={(err) => err}>
     <AdviceCard
      id={advice().id}
      advice={advice().advice}
      onRefetch={refetch}
     />
    </ErrorBoundary>
   </Show>
  </main>
 );
}

export default App;
