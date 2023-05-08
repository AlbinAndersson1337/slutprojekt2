const pythonBtn = document.getElementById("python-btn");
const csharpBtn = document.getElementById("csharp-btn");
const javaBtn = document.getElementById("java-btn");
const htmlBtn = document.getElementById("html-btn");

pythonBtn.addEventListener("click", function() {
  window.location.href = "python.html";
});

csharpBtn.addEventListener("click", function() {
  window.location.href = "csharp.html";
});

javaBtn.addEventListener("click", function() {
  window.location.href = "java.html";
});

htmlBtn.addEventListener("click", function() {
  window.location.href = "html.html";
});
