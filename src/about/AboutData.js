import React from 'react';
import AboutDownloadButton from './AboutDownloadButton';
import AboutInfo from './AboutInfo';

function AboutData() {
  return (
    <div className='about__data'>
      <p className='about__description'>
        On this website you can preview some projects I have worked on, read
        about my skills and services. I also have a blog where I will post my
        investments, strategies and portfolio updates.
        <br />
        <br />
        This website was built by scratch using HTML, CSS, JavaScript and React.
        It is hosted using Github Pages.
      </p>

      <div className='about__info'>
        <AboutInfo title='2' name1='Years' name2='experience' />
        <AboutInfo title='20' name1='Completed' name2='projects' />
        <AboutInfo title='2' name1='Companies' name2='worked for' />
      </div>

      <div className='about__buttons'>
        <AboutDownloadButton />
      </div>
    </div>
  );
}

export default AboutData;
