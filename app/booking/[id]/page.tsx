import Link from 'next/link';
import Shell from '@/components/Shell';
import { PageHero } from '@/components/UI';
import { doctors, clinics } from '@/lib/data';

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const d = doctors.find((x) => x.id === id) || doctors[0];
  const c = clinics.find((x) => x.id === d.clinicId)!;

  return (
    <Shell>
      <PageHero
        eyebrow="BOOK APPOINTMENT"
        title="Confirm your visit."
        text="Choose your details and continue to the demo checkout."
      />

      <section className="section narrow">
        <div className="formCard">
          <div className="summary">
            <div className="avatar">
              {d.name.split(' ').pop()![0]}
            </div>

            <div>
              <b>{d.name}</b>
              <span>{d.speciality}</span>
              <span>
                {d.slots[0]} · {c.name}
              </span>
            </div>

            <strong>₹{d.fee}</strong>
          </div>

          <div className="formGrid">
            <label>
              Patient name
              <input placeholder="Full name" />
            </label>

            <label>
              Mobile number
              <input placeholder="+91" />
            </label>

            <label>
              Email
              <input placeholder="name@email.com" />
            </label>

            <label>
              Reason for visit
              <input placeholder="Brief concern" />
            </label>
          </div>

          <Link className="primary" href="/payment">
            Proceed to payment →
          </Link>
        </div>
      </section>
    </Shell>
  );
}