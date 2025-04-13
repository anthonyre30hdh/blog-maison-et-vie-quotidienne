const container = document.getElementById("articles");
if (container) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  if (articles.length === 0) {
    container.innerHTML = "<p>Aucun article pour le moment.</p>";
  } else {
    articles.forEach(article => {
      container.innerHTML += `
        <div>
          <h2><a href="article.html?id=${article.id}">${article.titre}</a></h2>
          <p><em>${article.date}</em></p>
          <p>${article.contenu.substring(0, 100)}...</p>
        </div>
      `;
    });
  }
}