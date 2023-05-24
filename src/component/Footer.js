import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
function Footer() {
  return (
    <section className=" bg-gray-900 p-12 ">
      <article className="mx-auto my-1 flex  flex-wrap items-start  justify-items-center gap-8 xl:mx-40  xl:my-10 xl:grid xl:grid-cols-4 xl:gap-0  ">
        <div className="flex  flex-col gap-2 ">
          <h3 className="text-4xl font-semibold text-white">LapLens</h3>
          <ul className="my-2  flex gap-4  text-lg text-white ">
            <li className="cursor-pointer rounded-full  bg-gray-800 p-2 duration-300 hover:bg-gray-700">
              <FaTwitter></FaTwitter>
            </li>
            <li className="cursor-pointer rounded-full bg-gray-800 p-2 duration-300 hover:bg-gray-700">
              <FaInstagram></FaInstagram>
            </li>
            <li className="cursor-pointer rounded-full  bg-gray-800 p-2 duration-300 hover:bg-gray-700">
              <FaLinkedinIn></FaLinkedinIn>
            </li>
            <li className="cursor-pointer rounded-full bg-gray-800 p-2 duration-300 hover:bg-gray-700">
              <FaFacebookF></FaFacebookF>
            </li>
          </ul>
          <span className="text-sm font-medium text-gray-500">
            &copy; Edvin Venclavovic 2023
          </span>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Product & Service</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Laptops
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Tablets
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Cameras
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Camera Lenses
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Shop</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Offers
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Equal Store
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Where to Buy
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Online Shop
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium  text-white">Support</h3>
          <ul className="my-2 flex flex-col gap-2 text-sm font-light tracking-wider text-gray-200 ">
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Email Support
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              WhatsApp
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Live Chat
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Phone Support
            </li>
            <li className="cursor-pointer duration-300 hover:text-gray-400">
              Service Location
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Footer;
