import CTA from "../Components/CTA";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
function Landing() {
  return (
    <>
      <Header />
      <div className="mt-0 md:mt-10  flex flex-col justify-center">
        <CTA />
        <div className="my-8 w-80 text-center mx-auto rounded-full border py-2 px-4 font-semibold bg-purple-100 text-purple-700">🚀 Boost sales close rates by 53%</div>
        <MainContent />
      </div>
    </>
  );
}

export { Landing };
