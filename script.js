const icons = document.querySelectorAll(".icon-carts");

for (const icon of icons) {
  icon.addEventListener("click", function () {
    if (!icon.classList.contains("icon-carts-active")) {
      icon.classList.add("icon-carts-active");
    } else {
      icon.classList.remove("icon-carts-active");
    }
  });
}

// const talents = document.querySelectorAll('.talent-box')

// for (const talent of talents){
//     talent.addEventListener('click' , function() {
//         if(!talent.classList.contains('talent-box-select' ,'icon-talent-select')){
//             talent.classList.add('talent-box-select', 'icon-talent-select')
//         } else{
//             talent.classList.remove('talent-box-select','icon-talent-select')
//         }
//     })

// }

const talentsContainer = document.querySelector(".container-talent");
const talents = document.querySelectorAll(".talent-box");

talentsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".talent-box");

  if (!clicked) return;
  talents.forEach(function (t) {
    return t.classList.remove("talent-box-select", "icon-talent-select");
  });

  clicked.classList.add("talent-box-select", "icon-talent-select");
});

/*====================================*/
const popupJoin = document.querySelector(".popup-join");
const coverBlur = document.querySelector(".cover-blur");
const btnClosePopupJoin = document.querySelector(".btn-close-popup-join");
const btnsOpenPopupJoin = document.querySelectorAll(".cta");

const openPopupJoin = function (e) {
  e.preventDefault();
  popupJoin.classList.remove("hidden");
  coverBlur.classList.remove("hidden");
};

const closePopupJoin = function () {
  popupJoin.classList.add("hidden");
  coverBlur.classList.add("hidden");
};

btnsOpenPopupJoin.forEach((btn) =>
  btn.addEventListener("click", openPopupJoin)
);
btnClosePopupJoin.addEventListener("click", closePopupJoin);
coverBlur.addEventListener("click", closePopupJoin);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popupJoin.classList.contains("hidden")) {
    closeModal();
  }
});
