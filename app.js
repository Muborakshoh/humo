const field1 = document.getElementById("name");
const field2 = document.getElementById("comp");
const field3 = document.getElementById("c");
const field4 = document.getElementById("tel");
const select = document.getElementById("select");
const helper = document.getElementById("helper");
const headingElement = document.getElementById('heading');
const title = document.getElementById('title');
const languageToggleButton = document.getElementById('languageToggle');
const surname = document.getElementById('surname');
const branch = document.getElementById('branch');
const consist = document.getElementById('consist');
const r = document.getElementById('r');
const p = document.getElementById('p');
const t = document.getElementById('t');
const o = document.getElementById('o');
const problem = document.getElementById('problem');
const telephon = document.getElementById('telephon');
const span = document.getElementById('comp-span');
const span1 = document.getElementById('consist-span');
const span2 = document.getElementById('c-span');
const span_place = document.getElementById("span-place");

let isvalid = true;
let isTajikLanguage = false;

      const Send = document.getElementById("Send");
      Send.addEventListener("click", () => {
        if (isvalid) {
        const data = {
          textInput: field1.value,
          textInput1: field2.value,
          textInput2: field3.value,
          textInput3: field4.value,
          textInput4: select.value,
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        fetch("https://jsonplaceholder.typicode.com/todos/1", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Произошла ошибка при отправление данных: ", error);
          });
        }
        else{
          redInputBorder();
          if(isTajikLanguage){
            helper.innerText = "Упс, заполняйте пожалуйста обязательные поля!"           
          }else{
          helper.innerText = 'Лутфан майдонҳои заруриро пур кунед!'
          }
        }
      });
       


languageToggleButton.addEventListener('click', () => {
  isTajikLanguage = !isTajikLanguage;
  if (isTajikLanguage) {
    headingElement.textContent = 'Жалоба';
    title.textContent = `Ваша жалоба является анонимной и отправляется в HR Департамент.`;
    surname.innerHTML = `Имя и фамилия` ;
    branch.textContent = 'Головной офис / Филиал / ЦМО';
    r.textContent = 'Грубое обращение';
    p.textContent = 'Гендерная дискриминация';
    t.textContent = 'Сексуальное домогательство';
    o.textContent = 'Другое';
    consist.textContent = 'Вид жалобы';
    problem.textContent = ' Опишите неприятную проблему, с которой вы столкнулись!';
    telephon.textContent = 'Ваши контакты';
    span_place.textContent = 'Обязательные поля';
    //helper.textContent = 'Упс, заполняйте пожалуйста обязательные поля!'
    Send.textContent = 'Отправить';
    languageToggleButton.textContent = 'рус';
  } else {
    headingElement.textContent = 'Шикоят';
    title.textContent = 'Шикояти шумо махфӣ буда, ба Департаменти ҳайати идоракунии кормандон ирсол мегардад.';
    surname.textContent = 'Ном ва насаб';
    branch.textContent = 'Саридора / Филиал / МХМХ';
    r.textContent = 'Рафтори дағалона';
    p.textContent = 'Паст задани шаъну шарафи занҳо ё мардҳо';
    t.textContent = 'Таҳқири шаҳвонӣ';
    o.textContent = 'Дигар';
    consist.textContent = 'Намуди шикоят';
    problem.textContent = 'Мушкилотеро, ки Шумо аз сар гузаронидед, нависед!';
    telephon.textContent = 'Рақами телефони Шумо';
    //helper.textContent = 'Лутфан майдонҳои заруриро пур кунед!'
    Send.textContent = 'Ирсол';
    span_place.textContent = 'Майдонҳои зарурӣ';
    languageToggleButton.textContent = 'тоҷ';
  }
  
});

function displayRedStar() {
  if (field2.value.trim() === '') {
    isvalid = false;
   // console.log(field2);
  }
  else if (select.value.trim() === '') {
    isvalid = false;
    //console.log(select);
  }
  else if (field3.value.trim() === '') {
    isvalid = false;
   // console.log(field3); 
     } else{
    isvalid = true;
  }
}
displayRedStar();

function redInputBorder() {
  if (field2.value.trim() === '') {
    field2.classList.add('red-border')
    select.classList.add('red-border')
    field3.classList.add('red-border')
  } else {
    field2.classList.remove('red-border');
    select.classList.remove('red-border')
    field3.classList.remove('red-border')
  }
}
