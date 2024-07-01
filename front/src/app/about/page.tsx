export default function About() {
  return (
    <div className="container flex flex-col justify-center items-center bg-white mx-auto p-10 ">
      <h2 className="text-[#373737] text-6xl my-5">About us</h2>
      <p className="px-96 text-center text-[#373737] text-4xl my-5">
        My name is Manuel Guaicara, fullstack developer in progress. This
        project was done using NextJs and typescript. For the styles I used
        Styled.Component and Tailwind.
      </p>
      <img
        src="https://static.eway.ca/content/landingpage/251/en/Profesisonal_appleforbusiness_headerbanner.jpg"
        alt="Banner"
      />
    </div>
  );
}
