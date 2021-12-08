const purchase = [
  {
    id: "1",
    name: "t-shirt",
    price: 1999
  },
  {
    id: "2",
    name: "shoes",
    price: 4999
  }
];

const total_amount = 10998;
const shipping_fee = 1099;

const stripe = Stripe(
  "pk_test_51K4AFmIyzrSLxLbS4rFNxiWAfdPobTBeK5yZlSSeNjviztjXOZWIa60StE6MTlGCAL9I8HKhnZDup6YnwDdhSbY400WQS9Ssk5"
);

document.querySelector("button").disabled = true;
fetch("/stripe", {
  method: "POST",
  headers: {
    "Content-Type": "Application/json"
  },
  body: JSON.stringify({
    purchase,
    total_amount,
    shipping_fee
  })
})
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    const elements = stripe.elements();
    const style = {
      base: {
        "color": "32325d",
        "fontFamily": "Arial, sans-serif",
        "fontSmoothing": "antialiased",
        "fontSize": "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    };

    const card = elements.create("card", { style: style });
    card.mount("#card-element");
    card.on("change", (e) => {
      document.querySelector("button").disabled = e.empty;
      document.querySelector("#card-error").textContent = e.error
        ? e.error.message
        : "";
    });

    let form = document.getElementById("payment-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      payWithCard(stripe, card, data.clientSecret);
    });
  });

// Call stripe.confirmCardPayment
// If card requires authentication
// User is prompted for authentication details via popup modal
const payWithCard = (stripe, card, clientSecret) => {
  loading(true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card
      }
    })
    .then((result) => {
      result.error
        ? showError(result.error.message)
        : orderComplete(result.paymentIntent.id);
    });
};

const orderComplete = (paymentIntentId) => {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/dashboard/test/payments" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
};

const showError = (errorMsgText) => {
  loading(true);
  const errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(() => {
    errorMsg.textContent = "";
  }, 4000);
};

const loading = (isLoading) => {
  if (isLoading) {
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};
