import { useEffect, useState } from "react";
import Accordion, { Question } from "./components/Accordion";
import Button from "./components/Button";
import { fetchMockData } from "./api/api";
import LoadingState from "./components/loadingstate/LoadingState";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  useEffect(() => {
    async function fetchData() {
      const { products } = await fetchMockData();
      
     const shuffledProducts = shuffleArray(products);
     const firstFourQuestions = shuffledProducts.slice(0, 4);

      setQuestions(firstFourQuestions);
      setIsLoading(false); 
    }

    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);


function shuffleArray(array: Question[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="container-flex max-w-[729px] w-full p-4">
        <h2>Veelgestelde vragen</h2>
        {isLoading ? (
          <LoadingState />
        ) : questions.length ? (
          <Accordion questions={questions} />
        ) : (
          <p> "Ooops" </p>
        )}
        <Button showArrow={true}> Bekijk alle vragen</Button>
      </div>
    </div>
  );
}

export default App;
