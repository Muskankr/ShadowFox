"use client";

import Image from "next/image";

const doctors=[

{
name:"Dr. Sakthi",
speciality:"Chief Dental Surgeon",
image:"/images/doctor1.jpg"
},

{
name:"Dr. Priya",
speciality:"Orthodontist",
image:"/images/doctor2.jpg"
},

{
name:"Dr. Rahul",
speciality:"Implant Specialist",
image:"/images/doctor3.jpg"
}

]

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

className="card p-6 text-center"

>

<Image

src={doctor.image}

alt={doctor.name}

width={300}

height={320}

className="rounded-2xl w-full h-[320px] object-cover"

/>

<h3 className="text-2xl font-bold mt-5">

{doctor.name}

</h3>

<p className="text-cyan-400">

{doctor.speciality}

</p>

</div>

))}

</div>

</section>

)

}