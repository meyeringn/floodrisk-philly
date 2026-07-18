/ FloodRisk Philly Rename this file from app.txt to app.js after
downloading. This is a starter placeholder because the original
generated app.js is no longer available in the current execution
environment. /

document.addEventListener(“DOMContentLoaded”, () => { const form =
document.querySelector(“#address-form”); const status =
document.querySelector(“#status”);

if (form) { form.addEventListener(“submit”, (e) => { e.preventDefault();
const input = document.querySelector(“#address”); const value = input ?
input.value.trim() : ““; if (!value) { if (status) status.textContent
=”Please enter a Philadelphia address.”; return; } if (status) {
status.textContent = “Address lookup will be connected in the next
rebuild.”; } }); } });
