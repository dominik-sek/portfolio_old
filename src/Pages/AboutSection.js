import Section from "Components/Section";

import HTMLico from '../img/html5.svg';
import CSSico from '../img/css3.svg';
import JSico from '../img/javascript.svg';
import REACTico from '../img/react.svg';
import PGico from '../img/postgresql.svg';
import STYLEDico from '../img/styled.svg';
import GITico from '../img/git.svg'

import TSico from '../img/ts.svg'
import MDBico from '../img/mongodb.svg'
import EXico from '../img/express.svg'
import FIGMAico from '../img/figma.svg'
import SASSico from '../img/sass.svg'


const AboutSection = () => {
    return (
        <Section id="about" title="About me">

            <div className="desc">
            <h1>I am a third-year student at<br />
          Academy of Applied Sciences in Tarnów<br />
          currently studying applied computer science</h1>

            </div>
        <div className='left-side'>
            <h2>Currently learning:</h2>
            <div className="learning">
                
                <ul >
                    <li><img alt="" src={TSico}/></li>
                    <li><img alt="" src={EXico}/></li>
                    <li><img alt="" src={FIGMAico}/></li>
                    <li><img alt="" src={SASSico}/></li>
                    <li><img alt="" src={MDBico}/></li>


                </ul>
            </div>
        </div>

        <div className='right-side'>
        <h2>I'm familiar with:</h2>
            <div className="familiar">

                <ul >
                    <li><img alt="" src={HTMLico}/></li>
                    <li><img alt="" src={CSSico}/></li>
                    <li><img alt="" src={JSico}/></li>

                    <li><img alt="" src={REACTico}/></li>
                    <li><img alt="" src={PGico}/></li>
                    <li><img alt="" src={STYLEDico}/></li>
                    <li><img alt="" src={GITico}/></li>

                </ul>

            </div>

        </div>
      </Section>
      );
}



export default AboutSection;