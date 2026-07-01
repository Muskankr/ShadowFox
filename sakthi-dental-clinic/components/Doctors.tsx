"use client";

import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sakthi",
    qualification: "BDS, MDS",
    specialization: "Chief Dental Surgeon",
    experience: "15+ Years Experience",
    image: "/images/doctor1.jpg",
  },
  {
    name: "Dr. Priya",
    qualification: "BDS, MDS",
    specialization: "Cosmetic & Pediatric Dentist",
    experience: "10+ Years Experience",
    image: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Rahul",
    qualification: "BDS, MDS",
    specialization: "Orthodontist & Implant Specialist",
    experience: "8+ Years Experience",
    image: "/images/doctor3.jpg",
  },
];

export default function Doctors(){

return(

<section id="doctors" className="section">

<h2 className="title">

Meet Our Experts

</h2>

<div className="grid md:grid-cols-3 gap-8">

{doctors.map((doctor,index)=>(

<div

key={index}

className="card p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"

>

<Image

src={doctor.image}

alt={doctor.name}

width={300}

height={320}

className="rounded-2xl w-full h-[320px] object-cover shadow-lg"

/>

<h3 className="text-2xl font-bold mt-5">
  {doctor.name}
</h3>

<p className="text-cyan-400 font-medium mt-2">
  {doctor.specialization}
</p>

<p className="text-gray-300 mt-2">
  {doctor.qualification}
</p>

<p className="text-gray-400 text-sm mt-1">
  {doctor.experience}
</p>

</div>

))}

</div>

</section>

)

}