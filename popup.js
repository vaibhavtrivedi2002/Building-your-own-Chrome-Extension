document.getElementById("getQuestion").addEventListener("click", async () => {
  const concepts = await chrome.storage.local.get("concepts");
  // Logic to generate question based on concepts (replace with your implementation)
  const question = "Write a function to reverse a string"; // Example question
  document.getElementById("question").innerText = question;
});
