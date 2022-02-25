import { findAllByTestId } from '@testing-library/react';
import React, { useState } from 'react';
import QualificationDataLeft from './QualificationDataLeft';
import QualificationDataRight from './QualificationDataRight';
import QualificationTabs from './QualificationTabs';

function QualificationContainer() {
  const [educationActive, setEducationActive] = useState(true);
  const [workActive, setWorkActive] = useState(false);

  return (
    <div className='qualification__container container'>
      <QualificationTabs
        setEducationActive={setEducationActive}
        educationActive={educationActive}
        setWorkActive={setWorkActive}
        workActive={workActive}
      />

      <div className='qualification__section'>
        <div
          className={`qualification__content ${
            educationActive ? 'qualification__active' : ''
          }`}
          id='education'
        >
          <QualificationDataLeft
            title='Computer Science, Maths, Sociology, Physics'
            subtitle='A Levels'
            date='2017 - 2019'
          />

          <QualificationDataRight
            title='Maths'
            subtitle='AS Level'
            date='2017-2019'
          />

          <QualificationDataLeft
            title='BsC Computer Science'
            subtitle='Degree'
            date='2019 - Current'
            end={true}
          />
        </div>

        <div
          className={`qualification__content ${
            workActive ? 'qualification__active' : ''
          }`}
          id='work'
        >
          <QualificationDataLeft
            title='UST Global'
            subtitle='Work Experience'
            date='2016'
          />
          <QualificationDataRight
            title='HMA Solicitors'
            subtitle='Work Experience'
            date='2016'
          />
          <QualificationDataLeft
            title='Brooks and Partners Solicitors'
            subtitle='Work Experience and Employment'
            date='2017 - 2018'
          />
          <QualificationDataRight
            title='Primark Retail Store'
            subtitle='Employment'
            date='2017 - 2018'
          />
          <QualificationDataLeft
            title='Longacres Garden Center'
            subtitle='Employment'
            date='2018 - 2020'
          />
          <QualificationDataRight
            title='Amazon Delivery Driver'
            subtitle='Employment'
            date='2019 - Current'
          />
          <QualificationDataLeft
            title='DogLog'
            subtitle='Internship - Silicon Valley Startup'
            date='2020 - 2021'
            end={true}
          />
        </div>
      </div>
    </div>
  );
}

export default QualificationContainer;
