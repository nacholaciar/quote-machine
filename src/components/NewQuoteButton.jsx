import { useDispatch } from "react-redux";
import { setQuote } from "../redux/quoteSlice";

const NewQuoteButton = () => {
  const dispatch = useDispatch();

  const fetchNewQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Error al obtener una nueva cita");
      }
      const data = await response.json();
      dispatch(setQuote({ quote: data.content, author: data.author }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button id="new-quote" className="btn btn-dark" onClick={fetchNewQuote}>
      New Quote
    </button>
  );
};

export default NewQuoteButton;
