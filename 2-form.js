import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={formFeedback:document.querySelector(".feedback-form"),input:document.querySelector("input[name='email']"),textarea:document.querySelector("textarea[name='message']")},o=document.createElement("div");o.classList.add("form-container");e.formFeedback.parentNode.insertBefore(o,e.formFeedback);o.appendChild(e.formFeedback);let r={email:"",message:""};const c=t=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));if(a===null)return;r=a,Object.keys(a).forEach(n=>{e.formFeedback.elements[n].value=a[n]})};c();const l=({target:t})=>{const a=t.name,m=t.value;r[a]=m,localStorage.setItem("feedback-form-state",JSON.stringify(r))},s=t=>{if(t.preventDefault(),e.input.value===""||e.textarea.value===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),t.currentTarget.reset()};e.formFeedback.addEventListener("input",l);e.formFeedback.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map
