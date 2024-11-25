import "./AccountForm.css";

/**
 * Objective:
 * - Ensure the layout of the account form is clear and visually well-organized,
 *   with appropriate and logical component nesting.
 * - Relocate the buttons ("Save" and "Clear") to appear immediately after the input
 * - field for the first name.
 * - Position the entire content (input field + buttons) directly under the "Account Settings"
 *   section in the parent component.
 * - Preserve a logical and structured nesting for clarity and adaptability.
 */

// Wrapper component for the entire page
export function AccountForm() {
  return (
    <div className="page-container">
      <AccountSection />
      <FirstNameInputSection />
    </div>
  );
}

/**
 * Container component for organizing account-related details
 */
function AccountSection() {
  return (
    <div className="account-section-container">
      <AccountHeader />
    </div>
  );
}

/**
 * Component displaying the account details URL and the "Account Settings" heading
 */
function AccountHeader() {
  return (
    <>
      <a
        href="https://www.example.com/secure-account"
        target="_blank"
        rel="noopener noreferrer"
      >
        View details
      </a>
      <h2>Account settings</h2>
    </>
  );
}

/**
 * Component that encapsulates the "Save" and "Clear" buttons
 */
function ActionButtons() {
  return (
    <div className="action-buttons-container">
      <button>Save</button>
      <button>Clear</button>
    </div>
  );
}

/**
 * Component for rendering an input field with a label
 */
function FirstNameInputField() {
  return (
    <>
      <p>First name:</p>
      <input type="text" placeholder="Type your name here..." />
    </>
  );
}

/**
 * Wrapper component for the first name input field
 */
function FirstNameInputSection() {
  return (
    <div className="first-name-section-container">
      <FirstNameInputField />
      <ActionButtons />
    </div>
  );
}
