import Logo from "@/assets/Logo.png";
// import NowFitLogo from "@/assets/NowFitLogo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flextext-white">
        <div className="mt-16 basis-1/2 md:mt-0 ">
          {/* <img alt="logo" src={NowFitLogo}  className="h-28 w-36"/> */}
          <p className="my-5">
            Our facility also offers personalized training programs and nutrition plans to provide a comprehensive approach to fitness that is tailored to each individual's needs and goals.
          </p>
          <p>© NowFit All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p>(828)-761-1745</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;