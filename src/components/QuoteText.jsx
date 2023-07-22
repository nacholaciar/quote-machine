import { useSelector } from "react-redux";

const QuoteText = () => {
  const quote = useSelector((state) => state.quote.quote);

  return <p id="text">{quote}</p>;
};

export default QuoteText;
