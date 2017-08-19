import React from 'react';
import GenderSurveyChart from '../components/GenderSurveyChart';

import FlaggedPost from '../components/FlaggedPost';

const Flagged = () => (
  <div>
    <FlaggedPost
      postTitle={'Test post title!'}
      postQuestion={'asjdaslkdjsa ldjaasdassdjjaskasdksja dlkasjd lkasdja s ldksajdlksajd lsakdjsa kldjsa dsajdlsadj askdjas ldasjd lasdjasldjaslkdjasdasd asdsa dasd sadasd sdsa dasdsdlksajd lkasdjas djasd ajskdjasdas jdkasjd asdj asdjas dasjd asjd askdjasd'}
    />
    <FlaggedPost
      postTitle={'Another post title!'}
      postQuestion={'asjdaslkdjsa ldjasdlksajd lkasdjas djasd ajskdjasdas jdkasjd asdj asdjas dasjd asjd askdjasd'}
    />
    <FlaggedPost
      postTitle={'More post titles!'}
      postQuestion={'asjdaslkdjsa ldjasdlksajd lkasdjas djasd ajskdjasdas jdkasjd asdj asdjas dasjd asjd askdjasd'}
    />
    <FlaggedPost
      postTitle={'MORE post titlesss!'}
      postQuestion={'sadasdasd ldjasdlksajd lkasdjas djasd heheh jdkasjd asdj asdjas dasjd asjd askdjasd'}
    />
  </div>
)


export default Flagged;
