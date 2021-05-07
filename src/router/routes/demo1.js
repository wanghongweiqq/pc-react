import Page1 from '../../container/Page1';
import Page2 from '../../container/Page2';
import Page3 from '../../container/Page3';

const  routes = [
   {
        path:"/a",
        component:Page2,
        // exact:true
    },
    {
        path:"/about",
        title: 'about1',
        component:Page1,
        // exact: true,
        children: [
            {
                path:"/about/about",
                title: 'about2',
                component: Page2,
                exact: true
            },
            {
                path:"/about/Page3",
                title: 'about3',

                component: Page3,
                exact: true,
            },
        ]
    }
]
export default routes;