import '../node_modules/@gas-digital/components/lib/assets/styles/global.scss';

import NavList from "./components/NavList";
import Logo from "./components/Logo";
import FooterLogo from "./components/FooterLogo";
import FooterLeft from "./components/FooterLeft";
import FooterNavList from "./components/FooterNavList";

import { Card,
         CardGroup,
         Directory,
         PageSection,
         Split,
         Header,
         PullQuote,
         GridItem,
         GridRow,
         Navigation,
         Footer,
       }
from '@gas-digital/components';

export default function(Vue, { router, head, isClient }) {

  Vue.component('Logo', Logo);
  Vue.component('NavList', NavList);
  Vue.component('FooterLogo', FooterLogo);
  Vue.component('FooterNavList', FooterNavList);
  Vue.component('FooterLeft', FooterLeft);

  Vue.component('Navigation', Navigation);
  Vue.component('Logo', Logo);
  Vue.component('Card', Card);
  Vue.component('CardGroup', CardGroup);
  Vue.component('Split', Split);
  Vue.component('Header', Header);
  Vue.component('PullQuote', PullQuote);
  Vue.component('GridItem', GridItem);
  Vue.component('GridRow', GridRow);
  Vue.component('Directory', Directory);
  Vue.component('PageSection', PageSection);
  Vue.component('Footer', Footer);
}
