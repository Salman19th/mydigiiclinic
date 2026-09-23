'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  HeartPulse,
  ChevronRight,
  Search,
  UserRound,
  Stethoscope,
  Building2,
  Shield,
  HelpCircle,
  CalendarDays,
  Video,
  LayoutDashboard
} from 'lucide-react';

const groups = [
  {
    title: 'For Patients',
    icon: UserRound,
    items: [
      ['Find a Clinic', 'Search clinics by speciality, treatment or location.', '/clinics', Search],
      ['Book Appointment', 'Choose a clinic, doctor and available slot.', '/clinics', CalendarDays],
      ['Consult Your Doctor', 'Continue care with an online consultation.', '/teleconsult', Video],
      ['Your Clinic', 'Appointments, records and follow-ups in one place.', '/dashboard', HeartPulse],
    ],
  },
  {
    title: 'For Doctors & Clinics',
    icon: Stethoscope,
    items: [
      ['Join Us', 'Create your clinic presence on MyDigiClinic.', '/for-clinics', Building2],
      ['Your Clinic', 'Open the clinic workspace and patient schedule.', '/doctor-portal', LayoutDashboard],
      ['Contact', 'Talk to the MyDigiClinic team.', '/contact', HelpCircle],
      ['Features', 'See tools for clinics, doctors and patient connection.', '/features', Shield],
    ],
  },
  {
    title: 'Company',
    icon: Building2,
    items: [
      ['About', 'Why MyDigiClinic exists and how it works.', '/about', HeartPulse],
      ['Contact', 'Get in touch with the team.', '/contact', HelpCircle],
      ['Help', 'Support and product guidance.', '/help', HelpCircle],
      ['Privacy', 'How patient and clinic information is handled.', '/privacy', Shield],
      ['Terms & Conditions', 'Terms for using MyDigiClinic.', '/terms', Shield],
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav">
          <button
            className="menuBtn"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu />
          </button>

          <Link href="/" className="brand">
            <Image
              src="/mydigiiclinic/logo.png"
              alt="MyDigiClinic"
              width={42}
              height={42}
              className="brandLogo"
              priority
            />
            <span className="brandName">
                <span className="brandBlue">My</span>
                <span className="brandGreen">Digi</span>
                <span className="brandBlue">Clinic</span>
            </span>
          </Link>

          <div className="headerActions">
            <Link href="/login" className="headerLogin">
              Log in
            </Link>

            <Link href="/for-clinics" className="headerJoin">
              Join us
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="menuOverlay"
          role="presentation"
          onMouseDown={() => setOpen(false)}
        >
          <aside
            className="menuDrawer"
            role="dialog"
            aria-modal="true"
            aria-label="MyDigiClinic navigation"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="drawerTop">
              <Link
                href="/"
                className="brand"
                onClick={() => setOpen(false)}
              >
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
              </Link>

              <button
                className="drawerClose"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X />
              </button>
            </div>

            <div className="drawerIntro">
              <span>YOUR CLINIC • YOUR PATIENT</span>
              <h2>Where would you like to go?</h2>
            </div>

            <div className="drawerGroups">
              {groups.map((g) => {
                const GI = g.icon;

                return (
                  <section className="drawerGroup" key={g.title}>
                    <div className="drawerGroupTitle">
                      <GI />
                      <b>{g.title}</b>
                    </div>

                    {g.items.map(([name, desc, href, Icon]: any) => (
                      <Link
                        href={href}
                        className="drawerLink"
                        key={`${g.title}-${name}`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="drawerItemIcon">
                          <Icon />
                        </span>

                        <span className="drawerLinkText">
                          <b>{name}</b>
                          <small>{desc}</small>
                        </span>

                        <ChevronRight className="drawerChevron" />
                      </Link>
                    ))}
                  </section>
                );
              })}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}