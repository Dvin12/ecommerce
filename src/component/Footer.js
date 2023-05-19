import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
function Footer() {
  return (
    <section className="bg-gray-900 p-12 ">
      <article className="mx-40 my-10  grid grid-cols-4 items-start justify-items-center  ">
        <div className="flex flex-col gap-2 ">
          <h3 className="text-4xl font-semibold text-white">LOGO</h3>
          <ul className="my-2  flex gap-4  text-lg text-white ">
            <li className="cursor-pointer rounded-full  bg-gray-800 p-2">
              <FaTwitter></FaTwitter>
            </li>
            <li className="cursor-pointer rounded-full bg-gray-800 p-2">
              <FaInstagram></FaInstagram>
            </li>
            <li className="cursor-pointer rounded-full  bg-gray-800 p-2">
              <FaLinkedinIn></FaLinkedinIn>
            </li>
            <li className="cursor-pointer rounded-full bg-gray-800 p-2">
              <FaFacebookF></FaFacebookF>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Product & Service</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
            <li>Laptops</li>
            <li>Tablets</li>
            <li>Cameras</li>
            <li>Camera Lenses</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Shop</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
            <li>Offers</li>
            <li>Equal Store</li>
            <li>Where to Buy</li>
            <li>Online Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Support</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
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
