import ReactLoading from "react-loading";
import Data from "./Data";
import { UpperCase } from "./upperCase";

export default function Weather({ response, error }) {
  if (error) {
    return (
      <h1 className="text-2xl mt-3 text-center text-white font-semibold">
        {UpperCase(error.response.data.message)}
      </h1>
    );
  } else if (!response) {
    return (
      <div className="flex justify-center mt-5">
        <ReactLoading type="spin" color="#004e92" height={190} width={190} />
      </div>
    );
  } else {
    return <Data response={response} />;
  }
}
