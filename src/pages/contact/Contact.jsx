import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";


const Contact = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>

<section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Contact</h2>
        <p className="section__subheader">
        Need help or have a question? Contact our support team for assistance with orders, product details, or technical issues. We're here to help via email, phone. Reach out today
        </p>
      </section>
      <div className="container mx-auto p-4">
        <div className="flex flex-col ml-10 md:flex-row p-4 md:p-16 my-20 gap-6 justify-center">
          {/* First Card */}
          <div className="flex flex-col p-4 space-y-4 items-center border rounded-xl shadow-xl w-72 h-auto ">
            <div className="p-4 bg-sky-100 rounded-full">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <div className="p-4 text-center space-y-2">
              <p className="text-2xl font-bold">Location</p>
              <p className="text-lg text-gray-500">Vadodara</p>
              <p className="text-lg text-gray-500">India</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col p-4 space-y-4 items-center border rounded-xl shadow-xl w-72 h-auto ">
            <div className="p-4 bg-sky-100 rounded-full">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <div className="p-4 text-center space-y-2">
              <p className="text-2xl font-bold">Contact</p>
              <p className="text-lg text-gray-500">+91 96 244 38565</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col p-4 space-y-4 items-center border rounded-xl shadow-xl w-72 h-auto ">
            <div className="p-4 bg-sky-100 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <div className="p-4 text-center space-y-2">
              <p className="text-2xl font-bold">Email</p>
              <p className="text-lg text-gray-500  text-center">
              support@gamelife.com
              </p>
            </div>
          </div>
        </div>

        {/* Form Section to send message */}
        <div className="flex flex-col p-14 md:p-16 my-20 items-center space-y-4">
          <p className="text-2xl md:text-5xl font-bold">Send a message</p>
          <p className="text-lg md:text-lg text-gray-500">
            We'll get back to you as soon as possible.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <input
              type="text"
              placeholder="Name"
              className="p-4  border rounded-3xl shadow-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4  border rounded-3xl shadow-lg"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="p-4  border rounded-3xl shadow-lg"
            />
            <button
              type="submit"
              className="p-4 text-white max-w-screen-md  bg-primary hover:opacity-80 transition-all duration-300 rounded-xl font-bold text-xl"
            >
              Send
            </button>
          </form>
          <div className="justify-center">
            <span>{result}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
