import { useState, useEffect } from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { QuoteItem } from "./QuoteItem";

const defaultUrl = "https://api.breakingbadquotes.xyz/v1/quotes/";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const [url, setUrl] = useState(`${defaultUrl}`);
  const { data, isLoading, hasError } = useFetch(url);

  useEffect(() => {
    setUrl(`${defaultUrl}${counter}`);
  }, [counter]);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading && <LoadingQuote />}
      {data?.map(({ quote, author }, index) => (
        <QuoteItem key={index} quote={quote} author={author} />
      ))}
      {hasError && (
        <h3 className="alert alert-danger text-center">{`Ups! Something went wrong! ${JSON.stringify(
          hasError
        )}`}</h3>
      )}
      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
