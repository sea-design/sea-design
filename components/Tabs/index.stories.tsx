import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Tabs} from './index';
import {Tab} from './Tab';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
} as Meta;

export const Default = () => (
  <Tabs>
    <Tab title="React">
      <h1>React</h1>
      <div>
        React (also known as React.js or ReactJS) is an open-source JavaScript
        library[3] for building user interfaces or UI components. It is
        maintained by Facebook and a community of individual developers and
        companies.[4][5][6] React can be used as a base in the development of
        single-page or mobile applications. However, React is only concerned
        with rendering data to the DOM, and so creating React applications
        usually requires the use of additional libraries for state management
        and routing.[7][8] Redux[9] and React Router[10] are respective examples
        of such libraries.
      </div>
    </Tab>
    <Tab title="Vue">
      <h1>Vue</h1>
      <div>
        Vue.js (commonly referred to as Vue; pronounced /vjuː/, like "view"[4])
        is an open-source model–view–viewmodel JavaScript framework for building
        user interfaces and single-page applications.[11] It was created by Evan
        You, and is maintained by him and the rest of the active core team
        members coming from various companies such as Netlify and Netguru.[12]
      </div>
    </Tab>
    <Tab title="Angular">
      <h1>Angular</h1>
      <div>
        Angular (commonly referred to as "Angular 2+" or "Angular v2 and
        above")[3][4] is a TypeScript-based open-source web application
        framework led by the Angular Team at Google and by a community of
        individuals and corporations. Angular is a complete rewrite from the
        same team that built AngularJS.
      </div>
    </Tab>
  </Tabs>
);
