import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l}from"./assets/vendor-78be7656.js";const t=document.querySelector(".feedback-form"),r=document.querySelector("input"),s=document.querySelector("textarea"),o="feedback-form-state";let e=JSON.parse(localStorage.getItem(o))??{};r.value=e.email??"";s.textContent=e.message??"";function m(){localStorage.setItem(o,JSON.stringify(e))}function c(a){if(a.preventDefault(),e.email&&e.message){console.log(e),localStorage.removeItem(o),t.reset(),s.textContent="";return}else alert("Заповніть усі поля форми, а то мене ментор прибʼє, якщо я 3-й раз неправильно ДЗ відправлю ;-)")}t.addEventListener("input",l(()=>{const a=t.email.value,n=t.message.value;e.email=a,e.message=n,m()},500));t.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers3.js.map
