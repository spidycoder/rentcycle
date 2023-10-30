import React from "react";

const FAQs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-14">
        <h1 className="text-4xl font-bold">Top FAQs</h1>
        <p className="text-2xl">
          Renting a Cycle should be Easy, Like our FAQs.
        </p>
      </div>
      <div>
        <div className="border-2 rounded-md shadow-md m-5 p-5">
          <h1 className="font-bold text-xl">How do I pay?</h1>
          <p className="text-md">
            You can pay online using debit/credit card or e-wallets. You can
            also pay at the hub station during your vehicle pick-up.
          </p>
        </div>

        <div className="border-2 rounded-md shadow-md m-5 p-5">
          <h1 className="font-bold text-xl">
            {" "}
            Where can I pick up the cycle from?
          </h1>
          <p className="text-md">
            While booking your bike, you’ll be given an option to select a
            pick-up location in your vicinity.
          </p>
        </div>

        <div className="border-2 rounded-md shadow-md m-5 p-5">
          <h1 className="font-bold text-xl">
            What documents do I need to show while booking?
          </h1>
          <p className="text-md">
            Customer must handover his/ her original Adhar Card during pick up
            of cycle at the station to the delivery executive. It is mandatory
            to handover a local address proof/ Company ID copy/ Hotel Receipt/
            or any other recognised local address proof to the delivery
            executive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
