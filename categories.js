function showCategories(){

mediaContainer.innerHTML = `

<div style="
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
background:#000;
">

<button
onclick="openDiagramSearch()"
style="
background:#007bff;
color:white;
border:none;
padding:18px 30px;
border-radius:12px;
font-size:18px;
font-weight:bold;
cursor:pointer;
">

🔍 Search Diagrams

</button>

</div>

`;

}

function openDiagramSearch(){

window.location.href =
"https://bbtechrule.github.io/Diagram-website-/";

}
