import logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo" />
          <p className="my-5 text-justify">
            Transform your body and reach your fitness goals with our unmatched
            gym. Experience Premium Training and State-of-Art Studios.
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Useful Links</h4>
          <p className="my-5">
            <a href="https://www.acefitness.org/">
              American Council on Exercise
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://www.heart.org/en/healthy-living/fitness"
              className="my-5"
            >
              The American Heart Association
            </a>
          </p>
          <p>
            <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness">
              Mayo Clinic
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">2404 Rosedale Ave, Billings, MT 59102, USA</p>
          <p>(907) 567-4321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
