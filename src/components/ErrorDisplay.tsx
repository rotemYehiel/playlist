import { ErrorLayout } from "../styleComponents/ErrorDisplay";
import { ErrorMsg } from "../interfaces/storeInterface";

const ErrorDisplay = ({ errorMsg }: { errorMsg?: ErrorMsg }) => {
  return (
    <ErrorLayout>
      <h2>Oops...</h2>
      <h5>{errorMsg?.message}</h5>
    </ErrorLayout>
  );
};

export default ErrorDisplay;
