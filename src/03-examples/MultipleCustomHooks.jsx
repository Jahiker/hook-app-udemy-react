import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

// https://api.breakingbadquotes.xyz/v1/quotes/

export const MultipleCustomHooks = () => {
  const defaultUrl = "https://api.breakingbadquotes.xyz/v1/quotes/";
  const [url, setUrl] = useState(defaultUrl);
  const { data, isLoading, hasError } = useFetch(url);
  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {isLoading && (
        <h3 className="alert alert-info text-center">Loading...</h3>
      )}
      {data?.map(({ quote, author }, index) => (
        <blockquote key={index} className="blockquote text-end">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      ))}
      {hasError && (
        <h3 className="alert alert-danger text-center">{`Ups! Something went wrong! ${JSON.stringify(
          hasError
        )}`}</h3>
      )}
      <button onClick={() => setUrl(defaultUrl)} className="btn btn-primary">
        Next quote
      </button>
    </>
  );
};
