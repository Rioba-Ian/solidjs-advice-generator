import PatternDivider from "./assets/images/pattern-divider-desktop.svg";
import MobilePatternDivider from "./assets/images/pattern-divider-mobile.svg";

export function AdviceCard() {
 return (
  <article class="bg-dark-greyish-blue mx-auto w-1/2 rounded-3xl p-8 flex flex-col space-y-4">
   <h1 class="text-neon-green uppercase font-bold">Advice #1</h1>
   <q class="text-light-cyan font-bold text-2xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque
    odio aut, fuga distinctio voluptas asperiores? Repellat aperiam rem, omnis
    alias ducimus veritatis earum ullam voluptate asperiores, sit amet ex!
   </q>
   <picture class="self-center">
    <source srcset={MobilePatternDivider} media="(max-width: 374.99px)" />
    <source srcset={PatternDivider} media="(min-width: 375px)" />
    <img src={PatternDivider} alt="Pattern Divider desktop" />
   </picture>
  </article>
 );
}
