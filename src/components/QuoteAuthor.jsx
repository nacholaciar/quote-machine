import { useSelector } from "react-redux";

const QuoteAuthor = () => {
  const author = useSelector((state) => state.quote.author);

  return <p id="author">- {author}</p>;
};

export default QuoteAuthor;
