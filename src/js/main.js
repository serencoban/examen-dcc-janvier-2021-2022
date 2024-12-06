import {fonts} from "./fonts"
import {settings as s} from "./settings"

const ulCardElement = document.querySelector(s.ulCardSelector);   // s = settings

//parcourire les police des caracteres, le tableau dcp avec une boucle
for (const font of fonts) {
    ulCardElement.insertAdjacentHTML('beforeend', `
    <li data-font-name="${font.name}" data-family="famille" class=\\'app__item\\'>
     <div class="app__item__info"><span class="app__item__info__name">nom</span>
     <span class="app__item__info__info">famille - auteur</span>
     </div>
     <img class=\\'app__item__font\\' src=\\'./assets/fonts/file.svg\\' alt=\\'Aa, abcdefghijklmnopqrstuvwxyz, ABCDEFGHIJKLMNOPQRSTUVWXYZ\\'>
     '</li>`)
}
