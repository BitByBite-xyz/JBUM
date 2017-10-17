import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AllIcon from 'material-ui/svg-icons/places/all-inclusive';
import AdultIcon from 'material-ui/svg-icons/action/question-answer';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const ResponderTabs = ({push, pathname}) => {
  console.log(pathname,push);
  let index = 0;
  switch (pathname) {
    case '/responder':
      index = 0;
      break;
    case '/responder/adult':
      index = 1;
      break;
    case '/responder/all':
      index = 2;
      break;
    case '/responder/fav':
      index = 3;
      break;
    default:
      break;
  }
  return (
          <Tabs initialSelectedIndex={index} className="dashboard-tabs" inkBarStyle={{background: 'blue'}}>
            <Tab
              icon={<FontIcon className="material-icons">feedback</FontIcon>}
              label="Professional"
              onActive={()=> push('/responder')}
            />
            <Tab
              icon={<AdultIcon/>}
              label="Adult"
              onActive={()=> push('/responder/adult')}
            />
            <Tab
              icon={<AllIcon/>}
              label="All"
              onActive={()=> push('/responder/all')}
            />
            <Tab
              icon={<FontIcon className="material-icons">favorite</FontIcon>}
              label="Saved"
              onActive={()=> push('/responder/fav')}
            />
          </Tabs>
    );
  }

export default ResponderTabs;