const forums = document.getElementById("forums");

function updateProfile() {
  const languageSelect = document.getElementById("language-select");
  const selectedLanguage = languageSelect.value;
  const language = languages[selectedLanguage];
  document.getElementById("language-name").innerHTML = language.name;
  document.getElementById("introduction").innerHTML = language.introduction;
  document.getElementById("syntax").innerHTML = language.syntax;
  document.getElementById("data-types").innerHTML = "";
  for (const dataType of language.dataTypes) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(dataType));
    document.getElementById("data-types").appendChild(li);
  }
  document.getElementById("uses").innerHTML = "";
  for (const use of language.uses) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(use));
    document.getElementById("uses").appendChild(li);
  }
  document.getElementById("examples").innerHTML = "";
  for (const example of language.examples) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.appendChild(document.createTextNode(example.title));
    li.appendChild(h3);
    const pre = document.createElement("pre");
    pre.appendChild(document.createTextNode(example.code));
    li.appendChild(pre);
    document.getElementById("examples").appendChild(li);
  }
  document.getElementById("frameworks").innerHTML = "";
  for (const framework of language.frameworks) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(framework));
    document.getElementById("frameworks").appendChild(li);
  }
  forums.innerHTML = "";
  for (const forum of language.forums) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = forum.link;
    a.appendChild(document.createTextNode(forum.name));
    li.appendChild(a);
    forums.appendChild(li);
  }
}
