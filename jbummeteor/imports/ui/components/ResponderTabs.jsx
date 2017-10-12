import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AllIcon from 'material-ui/svg-icons/places/all-inclusive';
import AdultIcon from 'material-ui/svg-icons/action/question-answer';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const ResponderTabs = ({push, match}) => (
  <Tabs className="dashboard-tabs" inkBarStyle={{background: 'blue'}}>
    <Tab
      icon={<FontIcon className="material-icons">feedback</FontIcon>}
      label="Responder"
      onActive={()=> push('/responder')}
    />
    <Tab
      icon={<AllIcon/>}
      label="All"
      onActive={()=> push('/responder/all')}
    />
    <Tab
      icon={<AdultIcon/>}
      label="Adult"
      onActive={()=> push('/responder/adult')}
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="Favorites"
      onActive={()=> push('/responder/fav')}
    />
  </Tabs>
);

export default ResponderTabs;