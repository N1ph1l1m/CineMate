import { Routes } from '@angular/router';
import { Layout } from './common-ui/layout/layout';
import { Mainpage } from './pages/mainpage/mainpage';
import { Popular } from './pages/movies/popular/popular';
import { NowPlaying } from './pages/movies/now-playing/now-playing';
import { Upcomming } from './pages/movies/upcomming/upcomming';
import { TopRated } from './pages/movies/top-rated/top-rated';
import { SerialsPopular } from './pages/serials/serials-popular/serials-popular';
import { SerialsNowPlaying } from './pages/serials/serials-now-playing/serials-now-playing';
import { SerialsToTv } from './pages/serials/serials-to-tv/serials-to-tv';
import { SerialsTopRated } from './pages/serials/serials-top-rated/serials-top-rated';
import { PeoplePopular } from './pages/people/people-popular/people-popular';
import { PeopleDetail } from './pages/people/people-detail/people-detail';

export const routes: Routes = [
    {path:"",component:Layout, children:[
        {path:"", redirectTo:"main",pathMatch:'full'},
        {path:"main",component:Mainpage},
        {path:"movies",children:[
            {path:"",component:Popular},
            {path:"now-playing",component:NowPlaying},
            {path:"upcoming",component:Upcomming},
            {path:"top-rated",component:TopRated}
        ]},
        {path:"serials",children:[
            {path:"",component:SerialsPopular},
            {path:"now-playing",component:SerialsNowPlaying},
            {path:"to-tv",component:SerialsToTv},
            {path:"top-rated",component:SerialsTopRated}
        ]},
        {
            path:"people",children:[
                {path:"",component:PeoplePopular},
                {path:"people/:id",component:PeopleDetail}
            ]
        }
    ]}];
