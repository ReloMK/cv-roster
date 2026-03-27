import React from "react";

const fakeData = [

{
score: 18,
job: "Marketing Manager",
verdict: "Reads like a grocery list written in panic.",
date: "Mar 2026"
},

{
score: 24,
job: "Software Developer",
verdict: "Buzzwords fighting for survival.",
date: "Mar 2026"
},

{
score: 42,
job: "Project Manager",
verdict: "Leadership mentioned, evidence missing.",
date: "Feb 2026"
}

];

function flames(score){

if(score < 20) return "🔥🔥🔥🔥🔥";

if(score < 35) return "🔥🔥🔥🔥";

return "🔥🔥🔥";

}

function badgeColor(score){

if(score < 20) return "#ef4444";

if(score < 35) return "#fb923c";

return "#fb9278";

}

export default function WallOfShame(){

return(

<div style={{

padding:"40px",
background:"linear-gradient(180deg,#020617,#0f172a,#1e293b)",
minHeight:"100vh",
color:"#f1f5f9"

}}>

<h1 style={{

fontSize:"42px",
marginBottom:"10px"

}}>
Wall of Shame
</h1>

<p style={{

color:"#94a3b8",
marginBottom:"30px"

}}>
A public hall of career disasters.
Scores below 50 live here forever.
</p>

{fakeData
.sort((a,b)=>a.score-b.score)
.map((cv,index)=>(

<div key={index}

style={{

background:"rgba(30,41,59,0.6)",
padding:"20px",
marginBottom:"16px",
borderRadius:"14px",
border:"1px solid rgba(255,255,255,0.08)"

}}

>

<div style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}>

<div>

<h3>{cv.job}</h3>

<p style={{color:"#94a3b8"}}>{cv.date}</p>

</div>

<div style={{

width:"50px",
height:"50px",
borderRadius:"50%",
background:badgeColor(cv.score),
display:"flex",
alignItems:"center",
justifyContent:"center",
fontWeight:"bold"

}}>

{cv.score}

</div>

</div>

<p style={{

marginTop:"12px",
fontStyle:"italic"

}}>

"{cv.verdict}"

</p>

<p style={{

marginTop:"8px"

}}>

{flames(cv.score)}

</p>

</div>

))}

<a href="/">

<button style={{

marginTop:"30px",
padding:"14px",
background:"#fb9278",
border:"none",
borderRadius:"10px"

}}>

Roast My CV

</button>

</a>

</div>

);

}
