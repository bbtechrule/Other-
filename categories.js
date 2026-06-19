function showCategories() {

  mediaContainer.innerHTML = `

  <div class="categories-page">

    <button
      class="category-btn"
      onclick="openDiagramSearch()">

      🔍 Search Diagrams

    </button>

  </div>

  `;

}

function openDiagramSearch() {

  // Hide bottom navigation
  document.querySelector(".bottom-nav").style.display = "none";

  // Open Diagram Search Website
  window.location.href =
    "https://bbtechrule.github.io/Diagram-website-/";

}
