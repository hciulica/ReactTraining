import "./SimpleComponent.css"; // Importing external CSS for additional styling if needed

// To use it elsewhere in the app, we simply reference it as a tag.
// <SimpleComponent />

export function SimpleComponent() {
  // Constant that holds the message to be logged on button click
  const buttonMessage = "Button clicked";

  // Function to handle button click
  const handleButtonClick = () => {
    console.log(buttonMessage);
  };

  // JSX Element returned by the component
  return (
    <div className="container">
      {/* Input field styled using the CSS class */}
      <input
        type="text"
        placeholder="Type something here..."
        className="input-field"
      />

      {/* Button styled using the CSS class, calling handleButtonClick on click */}
      <button className="submit-button" onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
}

export default function SimpleComponent1() {
  // Constant that holds the message to be logged on button click
  const buttonMessage = "Button clicked";

  // Function to handle button click
  const handleButtonClick = () => {
    console.log(buttonMessage);
  };

  // JSX Element returned by the component
  return (
    <div className="container">
      {/* Input field styled using the CSS class */}
      <input
        type="text"
        placeholder="Type something here..."
        className="input-field"
      />

      {/* Button styled using the CSS class, calling handleButtonClick on click */}
      <button className="submit-button" onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
}

//Component function definition
// export function SimpleComponent() {
//   // JSX Element returned by the component using inline styles
//   return (
//     <div
//       style={{
//         padding: 30,
//         display: "flex",
//         placeItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {/*
//         A simple input field.
//         It has a placeholder text and inline styles for height and padding.
//       */}
//       <input
//         type="text" // Defines the input field as a text input
//         placeholder="Type something here..." // Placeholder text inside the input field
//         style={{ height: 30, padding: 10 }} // Inline styles for the input (height and padding)
//       />
//       {/*
//         A simple button.
//         The button's label is "Submit", and it has inline styles for height and margin.
//       */}
//       <button style={{ height: 40, marginLeft: 20 }}>Submit</button>
//     </div>
//   );
// }
