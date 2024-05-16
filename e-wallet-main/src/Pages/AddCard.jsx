// Import necessary hooks and components
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import CardForm from "../Components/CardForm";
import "../Styles/AddCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux"; // Hook to dispatch actions
import { addCard } from "../Reducer/cardReducer"; // Action to add a card

function AddCard() {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const navigate = useNavigate(); // Hook for navigation
  // State to hold form data
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    validThruMMYY: "",
    ccv: "",
    vendor: "",
  });

  // Handler for form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data
    console.log("Form changed:", formData); // Log form data for debugging
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(formData)); // Dispatch action to add card
    console.log("Form submitted:", formData); // Log form data for debugging
    navigate("/"); // Navigate to home page
  };

  // Render the component
  return (
    <div>
      <div className="top">
        <h1 className="addcard-title">ADD A NEW BANK CARD</h1>
      </div>
      <Card formData={formData} /> {/* Card preview */}
      <CardForm
        formData={formData}
        onChange={handleChange} // Handle form changes
        onSubmit={handleSubmit} // Handle form submission
      />
    </div>
  );
}

// Export the component
export default AddCard;
