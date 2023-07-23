import { useSelector } from "react-redux";
import { SiTwitter } from "react-icons/si";

const TweetQuoteButton = () => {
  const quote = useSelector((state) => state.quote.quote);
  const author = useSelector((state) => state.quote.author);

  const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}"\n- ${author}`
  )}`;

  return (
    <a
      id="tweet-quote"
      href={tweetLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-light"
    >
      <SiTwitter size={24} />
    </a>
  );
};

export default TweetQuoteButton;
