import Film from '@/views/Films/Films';
import Nowplaying from '@/views/Films/Nowplaying';
import Comingsoon from '@/views/Films/Comingsoon';

var FilmRouter = {
    path: '/Films',
    redirect: './Films/Nowplaying',
    component: Film,
    children: [
        { path: 'Nowplaying', component: Nowplaying },
        { path: 'Comingsoon', component: Comingsoon }
    ]
};
export default FilmRouter;