import { useSelector } from "react-redux";


function CardStack() {
  // Use useSelector to select the cards data from the Redux store.
  // The function passed to useSelector is called with the entire Redux store state as its argument.
  // In this case, it returns state.card, which is the part of the state where the cards data is stored.
  const cards = useSelector((state) => state.card);
   
  // Log the cards data to the console for debugging purposes.
  console.log("Cards:", cards);

  return (
    <div>
      {/* Check if cards is an array before calling map to avoid errors if cards is undefined or not an array.
          If cards is an array, map over it and render a div for each card. */}
      {Array.isArray(cards) && cards.map((card, index) => (
        <div key={index}>
          {/* Render the card data. Replace these p elements with your own components or markup as needed. */}
          <p>{card.cardNumber}</p>
          <p>{card.cardholderName}</p>
          <p>{card.validThruMMYY}</p>
          <p>{card.ccv}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}

// Export the CardStack component so it can be imported and used in other files.
export default CardStack;