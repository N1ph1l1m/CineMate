import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Dropdown } from "./dropdown/dropdown";
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Dropdown],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuItems = [{
    title:"Фильмы",
    items:[
      {name:"Популярные",link:"/movies"},
      {name:"Смотрят сейчас" , link:"movies/now-playing"},
      { name:"Ожидаемые", link:"movies/upcoming"}, {name:"Лучшие",link:"movies/top-rated"}]
  },
  {
    title:"Сериалы",
    items:[
      {name:"Популярные",link:"serials"},
      {name:"В эфире сейчас", link:"serials/now-playing"},
      {name:"По телефиденью", link:"serials/to-tv"},
      {name:"Лучшие" ,  link:"serials/top-rated"}]
  },
  {
    title:"Люди",
    items:[{name:"Популярные люди",link:"/person"}]
  }]
}
