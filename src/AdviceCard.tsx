import PatternDivider from "./assets/images/pattern-divider-desktop.svg";
import MobilePatternDivider from "./assets/images/pattern-divider-mobile.svg";
import DiceIcon from "./assets/images/icon-dice.svg";

export type AdviceData = {
 id: string;
 advice: string;
};

export function AdviceCard(props: AdviceData) {
 console.log(props);

 return (
  <article class="bg-dark-greyish-blue mx-auto min-w-60 w-1/2 rounded-3xl p-8 flex flex-col space-y-4">
   <h1 class="text-neon-green uppercase font-bold">Advice #{props.id}</h1>
   <q class="text-light-cyan font-bold text-3xl">{props.advice}</q>

   <picture class="self-center">
    <source srcset={MobilePatternDivider} media="(max-width: 374.99px)" />
    <source srcset={PatternDivider} media="(min-width: 375px)" />
    <img src={PatternDivider} alt="Pattern Divider desktop" />
   </picture>

   <div class="relative self-center">
    <div class="p-4 bg-neon-green rounded-full translate-y-14">
     <img src={DiceIcon} alt="dice icon" srcset="" />
    </div>
   </div>
  </article>
 );
}
