function Footer() {
  return (
    <div>
      <div className="py-6 mx-auto">
        <p className="text-center text-[#09080e] text-[32px] font-bold ">
          Gadget Heaven
        </p>
        <p className="text-center text-[#09080e]/60 text-base font-medium">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />
      <footer className="footer   p-10 sm:flex justify-center gap-[166px]">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
