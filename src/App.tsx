import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Button from "./components/Button";
import { fetchMockData } from "./api/api";
import LoadingState from "./components/loadingstate/LoadingState";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function fetchData() {
      const { products } = await fetchMockData();
      const firstFourQuestions = products.slice(0, 4);

      setQuestions(firstFourQuestions);
      setIsLoading(false); 
    }

    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="max-w-[729px] w-full p-4">
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
