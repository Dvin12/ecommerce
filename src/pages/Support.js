import ContactForm from "../component/ContactForm";
import { FaWhatsapp, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Support() {
  return (
    <section className="h-screen bg-slate-200">
      <div className="mx-48 p-28">
        <div className="grid grid-cols-2 items-start justify-center gap-20">
          <div className="flex w-full flex-col justify-center gap-4">
            <h2 className="text-5xl font-semibold text-indigo-400">
              Contact Us
            </h2>
            <p className="tracking-wide">
              We are here to help. If you have questions about our products or
              experiencing technical difficulties, please don't hesitate and
              contact us by filling out the form or by using other services
              linked below. Our team will be in touch as soon as possible.
            </p>
            <ul className="my-2 flex flex-col gap-4 text-lg">
              <li className="flex items-center gap-2">
                <FaEnvelope></FaEnvelope>info@laplens.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt></FaPhoneAlt> +375 001 35789
              </li>
              <li className="flex gap-2 text-2xl">
                <FaWhatsapp className="cursor-pointer duration-300 hover:text-green-800"></FaWhatsapp>
                <FaTwitter className="cursor-pointer duration-300 hover:text-indigo-400"></FaTwitter>
              </li>
            </ul>
          </div>
          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
