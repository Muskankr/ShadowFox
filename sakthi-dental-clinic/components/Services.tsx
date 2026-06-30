"use client";

import { motion } from "framer-motion";
import {
Smile,
Sparkles,
ShieldPlus,
Syringe,
Stethoscope,
BadgePlus
} from "lucide-react";

const services=[
{
title:"Teeth Cleaning",
icon:<Smile size={40}/>
},
{
title:"Root Canal",
icon:<ShieldPlus size={40}/>
},
{
title:"Dental Implants",
icon:<BadgePlus size={40}/>
},
{
title:"Cosmetic Dentistry",
icon:<Sparkles size={40}/>
},
{
title:"Braces & Aligners",
icon:<Stethoscope size={40}/>
},
{
title:"Painless Extraction",
icon:<Syringe size={40}/>
},
];

export default function Services(){

return(

<section id="services" className="section">

<h2 className="title">
Our Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{services.map((service,index)=>(

<motion.div

key={index}

whileHover={{y:-12}}

className="card p-8 text-center"

>

<div className="text-cyan-400 flex justify-center mb-5">

{service.icon}

</div>

<h3 className="text-2xl font-bold">

{service.title}

</h3>

<p className="text-gray-400 mt-4">

Professional treatment using the latest equipment
and modern dental procedures.

</p>

</motion.div>

))}

</div>

</section>

)

}