function showCategories() {

  mediaContainer.innerHTML = `

  <div style="
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
        cursor:pointer;
      ">

      🔍 Search Diagrams

    </button>

  </div>

  `;

}

function openDiagramSearch() {

  document.querySelector(".bottom-nav").style.display = "none";

  window.location.href =
  "https://bbtechrule.github.io/Diagram-website-/";

}
