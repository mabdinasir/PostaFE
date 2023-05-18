import { useRouteError } from "react-router-dom";

type Error = {
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>error</i>
      </p>
    </div>
  );
}
