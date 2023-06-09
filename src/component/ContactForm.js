import Buttons from "./Buttons";

function ContactForm() {
  return (
    <section className="  rounded-xl bg-gray-100 drop-shadow-md">
      <form className=" flex w-[350px] flex-col gap-6 p-6 md:w-[700px] md:p-10 xl:w-full xl:justify-center xl:p-12">
        <div>
          <input
            placeholder="Full name"
            className="w-full rounded-md p-3"
            type="text"
          ></input>
        </div>
        <div>
          <input
            placeholder="Email address"
            className="w-full rounded-md p-3"
            type="email"
          ></input>
        </div>
        <div>
          <input
            placeholder="Subject"
            className="w-full rounded-md p-3"
            type="text"
          ></input>
        </div>
        <div>
          <textarea
            placeholder="Message"
            className="h-[100px] w-full resize-none rounded-lg p-3"
            maxLength="200"
          ></textarea>
        </div>
        <div className="text-center text-sm xl:w-full">
          <Buttons variant="send" label="Send Message"></Buttons>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
