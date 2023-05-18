import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
function Footer() {
  return (
    <section className="bg-gray-900 p-12 ">
      <article className="grid grid-cols-4  my-10 items-start justify-items-center  ">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-4xl font-semibold text-white">LOGO</h3>
          <ul className="flex  gap-4 text-lg  text-white my-2 ">
            <li className="bg-gray-800 p-2  rounded-full cursor-pointer">
              <FaTwitter></FaTwitter>
            </li>
            <li className="bg-gray-800 p-2 rounded-full cursor-pointer">
              <FaInstagram></FaInstagram>
            </li>
            <li className="bg-gray-800 p-2  rounded-full cursor-pointer">
              <FaLinkedinIn></FaLinkedinIn>
            </li>
            <li className="bg-gray-800 p-2 rounded-full cursor-pointer">
              <FaFacebookF></FaFacebookF>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Product & Service</h3>
          <ul className="text-gray-200 text-sm font-light tracking-wider flex flex-col gap-2 my-2 ">
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Cameras</li>
            <li>Camera Lenses</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Shop</h3>
          <ul className="text-gray-200 text-sm font-light tracking-wider flex flex-col gap-2 my-2 ">
            <li>Offers</li>
            <li>Equal Store</li>
            <li>Where to Buy</li>
            <li>Online Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Support</h3>
          <ul className="text-gray-200 text-sm font-light tracking-wider flex flex-col gap-2 my-2 ">
            <li>Email Support</li>
            <li>WhatsApp</li>
            <li>Live Chat</li>
            <li>Phone Support</li>
            <li>Service Location</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Footer;
