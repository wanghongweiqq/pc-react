import layout from '../../layout';
import Page2 from '../../views/demo1/Page2';
import Page3 from '../../views/demo1/Page3';

const demo1={
  path: "about",
  title: 'about1',
  component: layout,
  // exact: true,
  children: [
    {
      path: "page2",
      title: 'about2',
      component: Page2,
      exact: true
    },
    {
      path: "page3",
      title: 'about3',
      component: Page3,
      exact: true,
    },
  ]
}
export default demo1