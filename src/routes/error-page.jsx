import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>错误页</h1>
      <p>网页遇到了无法解决的问题</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
