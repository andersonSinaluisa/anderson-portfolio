import {
  IonBadge,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { Route, useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, callOutline, codeWorkingOutline, constructOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personOutline, personSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import Work from '../pages/work/Work';
import About from '../pages/about/About';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  component: React.FC;
}

const appPages: AppPage[] = [
  {
    title: 'Work',
    url: '/',
    iosIcon: codeWorkingOutline,
    mdIcon: codeWorkingOutline,
    component: Work
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: personOutline,
    mdIcon: personOutline,
    component: About

  },
  {
    title: 'Wip',
    url: '/wip',
    iosIcon: constructOutline,
    mdIcon: constructOutline,
    component: Work

  },
  {
    title: 'Contact',
    url: '/contact',
    iosIcon: callOutline,
    mdIcon: callOutline,
    component: Work

  },

];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonPage id="main">
      <IonTabs>
        <IonTabBar slot="top" >
          {
            appPages.map(e => (
              <IonTabButton tab={e.title} href={e.url}>
                <IonLabel>{e.title}</IonLabel>
              </IonTabButton>
            ))
          }

        </IonTabBar>
        <IonRouterOutlet>
          {
            appPages.map(e => (
              <Route path={e.url} component={e.component} exact={true} />
            ))
          }
        </IonRouterOutlet>

      </IonTabs>
    </IonPage>
  );
};

export default Menu;
