import React, { useState } from 'react';
import SkillContent from './SkillContent';

function SkillsContainer() {
  const skillsData1 = [
    {
      name: 'HTML',
      number: 90,
    },
    { name: 'CSS', number: '80' },
    { name: 'JavaScript', number: '60' },
    { name: 'React', number: '85' },
  ];

  const skillsData2 = [
    {
      name: 'PHP',
      number: '80',
    },
    { name: 'Node JS', number: '70' },
    { name: 'Firebase', number: '40' },
    { name: 'Python', number: '55' },
  ];

  const skillsData3 = [
    {
      name: 'Figma',
      number: '90',
    },
    { name: 'Sketch', number: '85' },
    { name: 'Photoshop', number: '85' },
  ];

  const [skill1Open, setSkill1Open] = useState(true);
  const [skill2Open, setSkill2Open] = useState(false);
  const [skill3Open, setSkill3Open] = useState(false);

  return (
    <div className='skills__container container grid'>
      <div className='skills__container__inner'>
        <SkillContent
          title='Frontend developer'
          subtitle='More than 2 years'
          data={skillsData1}
          skillOpen={skill1Open}
          setSkillOpen={setSkill1Open}
        />
        <SkillContent
          title='Backend developer'
          subtitle='More than 2 years'
          data={skillsData2}
          skillOpen={skill2Open}
          setSkillOpen={setSkill2Open}
        />
      </div>

      <SkillContent
        title='Designer'
        subtitle='More than 2 years'
        data={skillsData3}
        skillOpen={skill3Open}
        setSkillOpen={setSkill3Open}
      />
    </div>
  );
}

export default SkillsContainer;
