export default function Contact() {
  return (
    <div className="container flex flex-col justify-center items-center bg-white mx-auto p-10 ">
      <h2 className="text-[#373737] text-6xl my-5">Contact</h2>
      <p className="px-96 text-center text-[#373737] text-4xl my-5">
        You can contact me through LinkedIn or Github.
      </p>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/manuel-alejandro-guaicara-dagger-784a06194/"
          target="blank"
        >
          <img className="size-48 m-10" src="social.png" alt="linkdin" />
        </a>
        <a href="https://github.com/ManuelGuaicaraDagger" target="blank">
          <img className="size-48 m-10" src="github.png" alt="github" />
        </a>
      </div>
      <img
        src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
        alt="Banner"
      />
    </div>
  );
}
