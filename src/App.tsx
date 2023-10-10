import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Button from "./components/Button";
import { fetchMockData } from "./api/api";
import LoadingState from "./components/loadingstate/LoadingState";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function fetchData() {
      const { products } = await fetchMockData();
      const firstFourQuestions = products.slice(0, 4);

      setQuestions(firstFourQuestions);
      setIsLoading(false); // Set loading state to false when data is fetched
    }

    const loadingTimeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
  }, []);

  return (
    <div className=" flex items-center justify-center  min-h-screen">
      <div className="flez flex-col max-w-[729px] w-full">
        <h1 className="text-[24px] font-bold ">Veelgestelde vragen</h1>
        {isLoading ? (
          <LoadingState />
        ) : questions.length ? (
          <Accordion questions={questions} />
        ) : (
          "No data"
        )}
        <Button showArrow={true}> Bekijk alle vragen</Button>
      </div>
    </div>
  );
}

export default App;
