//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    let Y = window.scrollY;
    navbar.classList.toggle("sticky", Y > 0);
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Search Button Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function seacrch_btn_effect() {
    const location_input = document.getElementById("location_input");
    const search_field = document.getElementById("search_field");
    const location_input_btn = document.getElementById("location_input_btn");
    const iframe = document.getElementById("iframe");
    const base_url = "https://www.google.com/maps/embed?key=";
    const encode_url = encodeURIComponent(location_input.value);
    const final_url = base_url + encode_url;
    let search_field_width, main_value;

    location_input_btn.addEventListener("click", (e) => {
            if (location_input_btn.value === "\uf110 Search") {
            //  make it like previous
            e.preventDefault();
            location_input_btn.value = "Search";
            location_input.style.display = "none";
            location_input_btn.style.transform = "translate(0%,0%)";
            iframe.style.display = "block";
            iframe.style.display = "none";
        }
        
        else if (location_input.style.display = "none") {
            // make magnifying glass icon
            location_input_btn.value = "\uf002 Search";
            location_input.style.display = "block";
            search_field_width = (location_input.offsetWidth - location_input_btn.offsetWidth);
            main_value = 0;
            location_input_btn.style.transform = `translate(${search_field_width}px,0%)`;
        }
    });
     
    search_field.addEventListener("submit", () => {
        if (location_input.style.display = "block") {
            // make loading icon
            location_input_btn.value = "\uf110 Search";
            iframe.src = final_url;
            iframe.style.display = "block";
        }
    });
}

seacrch_btn_effect()
    
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Search Button Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ login Popup @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let form_validtation = document.getElementById("form_validtation");
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", () => {
    form_validtation.classList.toggle("d-none");
});

function login_popup() {
    const login_form = document.querySelector(".login_form");
    const pass_inp_btn = document.querySelector("#pass_inp_btn");
    login_form.setAttribute("novalidate", "");
    
    const data = [ // attribute database
        {
            attribute: "pattern",
            isValid: inp => {
                const pattern_vlu = document.querySelector("#email").getAttribute(data[0].attribute);
                const valid_pattern = new RegExp(pattern_vlu);
                return valid_pattern.test(inp.value);
            },
            error_Text :lbl => `*${lbl.innerHTML} should follow the pattern`,
        },
        {
            attribute: "required",
            isValid: inp => {
                return inp.value !== "";
            },
            error_Text: lbl => `*${lbl.innerHTML} is required`,
        },
    ]

    function iterate(form_item) { // conditational jone
        const label = form_item.querySelector("label");
        const input = form_item.querySelector("input");
        const small = form_item.querySelector("small");
        const fa_circle_check = form_item.querySelector(".fa-circle-check");
        const fa_circle_exclamation = form_item.querySelector(".fa-circle-exclamation");
        let error = false;

        data.map(vlu => {
            if (input.hasAttribute(vlu.attribute) && !vlu.isValid(input)) {
                small.innerHTML = vlu.error_Text(label);
                fa_circle_check?.classList.toggle("d-block");
                error = true;
            }
            else if (input.hasAttribute(vlu.attribute) && !error){
                small.innerHTML = "";
                fa_circle_check?.classList.toggle("d-none");
            }
        });

        return !error;
    }

    Array.from(document.querySelectorAll(".form_group input")).forEach(vlu => { // blur event
        vlu.addEventListener("blur", (e) => {
            iterate(e.target.parentElement.parentElement);
        });
    });

    pass_inp_btn.addEventListener("click", (e) => { //pass eye slash click event
        e.preventDefault();
        const fa_eye = login_form.querySelector(".fa-eye");
        const fa_eye_slash = login_form.querySelector(".fa-eye-slash");
        const password = login_form.querySelector("#password");

        if (password.type === "password" && fa_eye.style.display != "block") {
            fa_eye_slash.classList.add("d-none")
            fa_eye.classList.remove("d-none");
            fa_eye.classList.add("d-block");
            password.type = "text";
        }
        else {
            fa_eye.classList.add("d-none")
            fa_eye_slash.classList.remove("d-none");
            fa_eye_slash.classList.add("d-block");
            password.type = "password";
        }
    });

    login_form.addEventListener("submit", (e) => { //submit event
        const x = Array.from(document.querySelectorAll(".form_group")).every(vlu => iterate(vlu));
        if (!x) {
            console.log(x);
            e.preventDefault();
        }
    })

}
login_popup();

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ login Popup @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ lang switcher @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const dropdown_lang_ul = document.getElementById("dropdown_lang_ul");
const dropdown_lang_input = document.getElementById("dropdown_lang_input");
const dropdown_lang_a = document.querySelectorAll(".dropdown_lang_a");
let lng_item = [];

// Function to update the language array and local storage
function updateLang() {
  dropdown_lang_a.forEach(vlu => {
    let vlu_text = vlu.innerText;
    lng_item.push(vlu_text);

    vlu.addEventListener("click", () => { 
      // Update the input value when a language is clicked
      dropdown_lang_input.value = vlu_text;

      // Update the language in local storage
      localStorage.setItem("input_vlu", vlu_text);
    });
  });
}

// Function to check and restore the language from local storage
function restoreLanguage() {
  if (lng_item.includes(localStorage.getItem("input_vlu"))) {
    dropdown_lang_input.value = localStorage.getItem("input_vlu");
  } else {
    dropdown_lang_input.value = "EN";
  }
}

dropdown_lang_input.addEventListener("click", () => {
  dropdown_lang_ul.classList.toggle("d-none");
});

updateLang();
restoreLanguage();



//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ lang switcher @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@