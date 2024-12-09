import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LeaveRequestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    const errors = [];

    if (!employeeId.match(/^\d+$/)) {
      errors.push("Employee ID must contain only numbers.");
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.push("Email is invalid.");
    }
    if (!phoneNumber.match(/^\+?\d{10,15}$/)) {
      errors.push("Phone number must be between 10 and 15 digits.");
    }
    if (note.split(" ").length > 300) {
      errors.push("Note must not exceed 300 words.");
    }

    if (errors.length > 0) {
      errors.forEach((error) =>
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !employeeId ||
      !email ||
      !phoneNumber ||
      !fromDate ||
      !toDate ||
      !note
    ) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!validateInputs()) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Leave request submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFirstName("");
      setLastName("");
      setEmployeeId("");
      setEmail("");
      setPhoneNumber("");
      setFromDate("");
      setToDate("");
      setNote("");
    }, 2000);
  };

  return (
    <div className="p-4">
      <h2 className="text-sm text-gray-700 font-semibold mb-4">
        /Dashboard/Leave
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="e.g., 12345"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@test.com"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+971 54678765"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
              From
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
              To
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="note" className="block text-sm font-medium text-gray-700">
            Note
          </label>
          <textarea
            id="note"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Please define the reason for leave (max 300 words)."
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-400" : "bg-indigo-500 hover:bg-indigo-600"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default LeaveRequestForm;
