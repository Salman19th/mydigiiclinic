import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <div className="brand light">
            <Image
              src="/mydigiiclinic/logo.png"
              alt="MyDigiClinic"
              width={42}
              height={42}
              className="brandLogo"
            />
            <span className="brandName">
              <span className="brandBlue">My</span>
              <span className="brandGreen">Digi</span>
              <span className="brandBlue">Clinic</span>
            </span>
          </div>

          <p>Your clinic. Your patients. One digital connection.</p>
        </div>

        <div>
          <b>For Patients</b>
          <Link href="/clinics">Find a Clinic</Link>
          <Link href="/doctors">Find Doctors</Link>
          <Link href="/dashboard">Your Clinic</Link>
        </div>

        <div>
          <b>For Doctors</b>
          <Link href="/for-clinics">Join Us</Link>
          <Link href="/doctor-portal">Clinic Workspace</Link>
          <Link href="/features">Features</Link>
        </div>

        <div>
          <b>Company</b>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/help">Help</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">T&amp;C</Link>
        </div>
      </div>

      <div className="copyright">
        © 2026 MyDigiClinic. Prototype website for client presentation.
      </div>
    </footer>
  );
}