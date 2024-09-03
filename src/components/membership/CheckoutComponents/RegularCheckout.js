import React, { useReducer } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../membership.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faIndustry,
  faMobile,
  faNewspaper,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const stripePromise = loadStripe(
  "pk_live_51H0yOZEr4ylg7vlAnEDF4YfjfRe1VAEKjRMuW2Lh7zlMG9Lh68k4LZmuTm0RtR5MeNLJzkxUT0p53pdnQKgeIY1800N4Sipf5y"
);

const formatPrice = ({ amount, currency, quantity }) => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;
  const total = (quantity * amount).toFixed(2);
  return numberFormat.format(total);
};

function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return { ...state, loading: action.payload.loading };
    case "setError":
      return { ...state, error: action.payload.error };
    default:
      throw new Error();
  }
}

const Regular = () => {
  const [state, dispatch] = useReducer(reducer, {
    priceId: "price_1H2jo8Er4ylg7vlAxR0V7T7L",
    basePrice: "5.50",
    currency: "USD",
    quantity: 1,
    price: formatPrice({
      amount: "5.50",
      currency: "USD",
      quantity: 1,
    }),
    loading: false,
    error: null,
  });

  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    dispatch({ type: "setLoading", payload: { loading: true } });
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: state.priceId, quantity: state.quantity }],
      successUrl: `https://acmcsulaweb.pythonanywhere.com/`,
      cancelUrl: `${window.location.origin}/Membership`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      dispatch({ type: "setError", payload: { error } });
      dispatch({ type: "setLoading", payload: { loading: false } });
    }
  };

  return (
    <div className="text-info">
      <div className="info-header">
        When you join ACM, you will get all of these benefits for the{" "}
        <u>WHOLE</u> school year:
      </div>
      <div className="member-sections">
        <div className="newsletter-section">
          <FontAwesomeIcon
            className="iconBrandNav"
            size="2x"
            icon={faNewspaper}
          ></FontAwesomeIcon>
          <br /> Receive weekly newsletters, including news about ACM-exclusive
          scholarships.
        </div>
        <div className="project-section">
          <FontAwesomeIcon
            className="iconBrandNav"
            size="2x"
            icon={faProjectDiagram}
          ></FontAwesomeIcon>
          <br /> Access to project workshops (Beginner and Advanced).
        </div>
        <div className="mentorship-section">
          <FontAwesomeIcon
            className="iconBrandNav"
            size="2x"
            icon={faIndustry}
          ></FontAwesomeIcon>
          <br /> Access to our exclusive 10-week Fall Mentorship program.
        </div>
        <div className="pro-dev-section">
          <FontAwesomeIcon
            className="iconBrandNav"
            size="2x"
            icon={faBusinessTime}
          ></FontAwesomeIcon>
          <br /> Access to other ACM events such as Game Night, Movie Night,
          Hackathon, and many more.
        </div>
        <div className="community-section">
          <FontAwesomeIcon
            className="iconBrandNav"
            size="2x"
            icon={faMobile}
          ></FontAwesomeIcon>
          <br />
          Become part of the ever-expanding ACM community!
        </div>
      </div>
      <div className="register-info">
        How to become an ACM member? Follow these steps:
      </div>
      <div className="register-body">
        <br /> Step 1: Click the following button below: 'Buy for $5' <br />
        Step 2: Fill out the sign up form (redirect will happen after successful
        payment)
        <br />
        <div class="mx-auto p-2">
          <div class="border border-primary bg-dark p-3">
            <h3 class="text-danger">What To Do: </h3> Strictly follow the steps above in order to
            receive the FULL BENEFITS.
          </div>
        </div>
        <h2 className="member-description-points">
          Send us an email if you have any questions or concerns: <t />
          <a href="mailto:acm.calstatela@gmail.com">acm.calstatela@gmail.com</a>
        </h2>
        <h2 className="member-description-points">
          ACM Memberships are good for one school year (Fall 2023-Spring 2024)
        </h2>
        <h1 className="refund">No Refunds</h1>
      </div>
      <button
        className="btn btn-lg btn-info btn-membership"
        role="link"
        onClick={handleClick}
        disabled={state.loading}
      >
        {state.loading || !state.price ? `Loading...` : `Buy for $5`}
      </button>
      <div class="images">
        <center>
          <img src="https://i.imgur.com/XUSg11H.jpg" alt="react logo" />
        </center>
        <center>
          <img src="https://i.imgur.com/jjHtfJ2.jpg" alt="react logo" />
        </center>
        <center>
          <img src="https://i.imgur.com/P44Nnbn.jpg" alt="react logo" />
        </center>
      </div>
    </div>
  );
};

export default Regular;
