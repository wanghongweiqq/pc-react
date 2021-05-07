import layout from '../../layout';
import Page1 from '../../views/demo1/Page1';
import Page2 from '../../views/demo1/Page2';
import Page3 from '../../views/demo1/Page3';

const demo1={
  path: "about",
  component: layout,
  // exact: true,
  children: [
    {
      path: "page1/:id",
      component: Page1,
      exact: true
    },
    {
      path: "page2",
      component: Page2,
      exact: true
    },
    {
      path: "page3",
      component: Page3,
      exact: true,
    },
  ]
}
export default demo1