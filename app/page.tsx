import Link from 'next/link';
import Shell from '@/components/Shell';
import {ArrowRight, Building2, CalendarDays, CheckCircle2, HeartPulse, MapPin, QrCode, Search, Stethoscope, UserRound, Video, Users, BarChart3, ClipboardCheck, Hospital, Footprints, FileHeart} from 'lucide-react';

export default function Home(){
  const patientServices=[
    [CalendarDays,'Book Appointment','Choose your clinic, doctor and a convenient slot.','/clinics'],
    [UserRound,'Explore & Connect','Discover clinics and doctors and stay connected with your care team.','/clinics'],
    [HeartPulse,'Follow-up / Revisit','Return to your clinic for ongoing care, records and follow-ups.','/dashboard'],
    [Video,'Online Consultation','Consult your doctor online when a virtual visit is suitable.','/teleconsult'],
  ] as const;
  const providerServices=[
    [Building2,'Clinic Page','Give your clinic a simple digital home patients can find and revisit.'],
    [CalendarDays,'Online Booking','Let patients request and manage appointments digitally.'],
    [Users,'Patient Connection','Stay connected with patients before and after the visit.'],
    [QrCode,'QR-based Access','Give patients instant access to the clinic through a simple QR scan.'],
    [BarChart3,'Clinic Insights','Understand bookings, patient activity and clinic engagement.'],
    [ClipboardCheck,'Less Front-desk Work','Reduce repetitive booking and patient-information tasks.'],
  ] as const;
  const discover=[
    ['Speciality',['Gynaecologist','Pediatrician','Oncologist','Dentist','Orthopaedic','General Physician']],
    ['Clinics',['Dental Clinics','Skin Clinics','Ortho Clinics','Women & Child Clinics','Multi-speciality Clinics','Nearby Clinics']],
    ['Treatment',['Women’s Health','Skin','Hair','ENT','Homeopathy','Diabetes']],
    ['Location',['Near Me','New Delhi','Gurugram','Noida','Ghaziabad','Faridabad']],
  ];
  const traditional=[
    [Search,'Search again','Find a hospital or doctor every time care is needed.'],
    [CalendarDays,'Book an appointment','Call, message or use separate booking channels.'],
    [Hospital,'Visit the clinic','Your relationship often stays tied to that single visit.'],
    [Footprints,'Start over later','For a follow-up, patients often repeat the same discovery process.'],
  ] as const;
  const connected=[
    ['01','Find your clinic','Search by speciality, treatment or location.'],
    ['02','Choose your doctor','Explore the doctors available inside your clinic.'],
    ['03','Book your visit','Choose an in-clinic appointment or online consultation.'],
    ['04','Stay connected','Return to the same clinic for records, follow-ups and ongoing care.'],
  ] as const;
  return <Shell>
    <section className="hero heroSimplified">
      <div className="heroGrid">
        <div className="heroCopySimple">
          <h1>Your clinic,<br/><em>now just one tap away.</em></h1>
          <div className="actions heroActionsSimple"><Link className="primary heroFind" href="/clinics"><Search/> Find a Clinic</Link></div>
        </div>
        <div className="phone"><div className="phoneTop"><span>MyDigiClinic</span><HeartPulse/></div><div className="phoneSearch"><Search/> Search doctors, clinics, treatments</div><div className="phoneCard"><small>YOUR CLINIC</small><b>CarePoint Multispeciality</b><span>Greater Kailash · Open today</span></div><div className="phoneRow"><div><CalendarDays/><b>Book</b><span>Appointment</span></div><div><Video/><b>Consult</b><span>Online</span></div></div><div className="phoneNotice"><CheckCircle2/> Appointment confirmed · 4:00 PM</div></div>
      </div>
    </section>

    <section className="servicesSection section">
      <div className="sectionHead serviceHeading"><h2>Our Services</h2></div>
      <div className="serviceDuo">
        <div className="servicePanel patientPanel"><div className="servicePanelHead"><span className="serviceHeadIcon"><UserRound/></span><div><small>FOR PATIENTS</small><h3>Patient Experience</h3></div></div><div className="serviceItems">{patientServices.map(([Icon,title,text,href])=><Link className="serviceItem" href={href} key={title}><span><Icon/></span><div><b>{title}</b><p>{text}</p></div><ArrowRight className="serviceArrow"/></Link>)}</div></div>
        <div className="servicePanel providerPanelLight"><div className="servicePanelHead"><span className="serviceHeadIcon"><Stethoscope/></span><div><small>FOR HEALTHCARE PROVIDERS</small><h3>For Healthcare</h3></div></div><div className="providerServiceGrid">{providerServices.map(([Icon,title,text])=><div className="providerService" key={title}><Icon/><b>{title}</b><p>{text}</p></div>)}</div><Link className="providerJoinLink" href="/for-clinics">Explore clinic features <ArrowRight/></Link></div>
      </div>
    </section>

    <section className="findDoctorSection">
      <div className="section"><div className="sectionHead leftHead"><span className="eyebrow">EXPLORE CARE</span><h2>Find Your Doctor</h2><p>Start the way that feels natural — by speciality, clinic, treatment or location.</p></div>
        <div className="discoverGrid">{discover.map(([title,items])=><div className="discoverColumn" key={title as string}><h3>{title}</h3>{(items as string[]).map((item,i)=><Link href="/clinics" key={item}>{item}{i===0&&title==='Location'?<MapPin/>:<ArrowRight/>}</Link>)}</div>)}</div>
      </div>
    </section>

    <section className="careStory section">
      <div className="sectionHead"><span className="eyebrow">WHY MYDIGICLINIC</span><h2>Healthcare shouldn’t end after one appointment.</h2><p>The traditional journey is fragmented. MyDigiClinic is designed to keep the patient connected to the clinic beyond the first visit.</p></div>
      <div className="experienceBlock traditionalBlock"><div className="experienceTitle"><span>TRADITIONAL HEALTHCARE</span><h3>A visit-by-visit experience</h3></div><div className="experienceSteps">{traditional.map(([Icon,title,text],i)=><div className="experienceStep" key={title}><span className="experienceIcon muted"><Icon/></span><small>0{i+1}</small><b>{title}</b><p>{text}</p></div>)}</div></div>
      <div className="experienceBlock connectedBlock"><div className="experienceTitle"><span>MYDIGICLINIC EXPERIENCE</span><h3>One connected care journey</h3></div><div className="experienceSteps">{connected.map(([n,title,text])=><div className="experienceStep" key={n}><span className="experienceIcon"><FileHeart/></span><small>{n}</small><b>{title}</b><p>{text}</p></div>)}</div></div>
    </section>

    <section className="howWorks">
      <div className="section"><div className="sectionHead"><span className="eyebrow teal">HOW IT WORKS</span><h2>Simple for patients. Useful for clinics.</h2><p>MyDigiClinic connects discovery, booking, consultation and follow-up around the clinic relationship.</p></div><div className="howGrid"><div><Search/><b>Discover</b><span>Find the right clinic and doctor.</span></div><div><CalendarDays/><b>Book</b><span>Choose how and when you want to visit.</span></div><div><Video/><b>Consult</b><span>Visit the clinic or connect online.</span></div><div><HeartPulse/><b>Continue</b><span>Come back for follow-ups and ongoing care.</span></div></div></div>
    </section>
  </Shell>
}
