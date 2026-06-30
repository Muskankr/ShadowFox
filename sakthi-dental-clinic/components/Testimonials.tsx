"use client";

const reviews = [

{
name:"Arun Kumar",
review:"Amazing experience. The doctors were friendly and the treatment was painless."
},

{
name:"Priya Sharma",
review:"Very modern clinic with excellent staff. Highly recommended."
},

{
name:"Rahul Verma",
review:"Best dental clinic I've visited. Clean environment and affordable pricing."
}

];

export default function Testimonials(){

return(

<section id="testimonials" className="section">

<h2 className="title">

Patient Testimonials

</h2>

<div className="grid md:grid-cols-3 gap-8">

{reviews.map((review,index)=>(

<div key={index} className="card p-8">

<p className="italic text-gray-300">

"{review.review}"

</p>

<h3 className="mt-6 text-cyan-400 font-bold">

{review.name}

</h3>

</div>

))}

</div>

</section>

)

}