import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuote } from "../redux/quoteSlice";
import { FaQuoteLeft } from "react-icons/fa";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import NewQuoteButton from "./NewQuoteButton";
import TweetQuoteButton from "./TweetQuoteButton";

const QuoteBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) =>
        dispatch(setQuote({ quote: data.content, author: data.author }))
      );
  }, [dispatch]);

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-5">
          <div
            id="quote-box"
            className="card text-white"
            style={{ backgroundColor: "#1f959b", borderRadius: "15px" }}
          >
            <div className="card-body p-5 text-start">
              <FaQuoteLeft size={32} className="mb-4" />
              <QuoteText />
              <hr />
              <QuoteAuthor />
              <div className="d-flex justify-content-end mt-3 gap-2">
                <NewQuoteButton />
                <TweetQuoteButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
