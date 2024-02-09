import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import legalPages from "../../data/legal";

const CancelPage = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-8">Cancellation and Refund</h1>
      <h1 className="text-3xl font-bold">Cancellation</h1>
      <p className="py-2 text-lg">
        There is no cancellation available for any items unless the minimum
        number of participants requirement has not been fulfilled <br />{" "}
        Cancellation guidelines regarding each category has been given below:
      </p>
      <h2 className="pl-8 text-2xl my-4">● Tech Fest:</h2>
      <p className="pl-16">
        ○ Cancellation for all events will only be processed under the
        circumstance of lack of a minimum 20 participants. <br />○ Cancellation
        for Expo registration will only be processed under the circumstance of
        lack of a minimum 10 participants.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Workshops:</h2>
      <p className="pl-16">
        ○ Cancellation for Workshops will only be processed under the
        circumstance of lack of a minimum of 20 participants.
      </p>
      <h2 className="pl-8 text-2xl my-4">● Culturals:</h2>
      <p className="pl-16">○ Cancellation.</p>
      <h2 className="pl-8 text-2xl my-4">● Night Programs:</h2>
      <p className="pl-16">
        ○ There is no cancellation available for the tickets of night time
        programs of Karma including the DJ and Bad performances.
      </p>
      <p className="py-2 text-lg mb-8">
        We are not responsible for any errors or misinterpretations on your
        part.
      </p>
      <h1 className="text-3xl font-bold">Refund</h1>
      <p className="py-2 text-lg leading-relaxed">
        In case the cancellation process has succeeded, the refund amount will
        be transferred to the bank account via Gpay (same account that money was
        transfered from). <br /> In case the minimum number of participants has not
        been met, the full amount will be refunded. <br /> We are not responsible for
        any errors or misinterpretations on your part.
      </p>
    </div>
  );
};

export default CancelPage;
