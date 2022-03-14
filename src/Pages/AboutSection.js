import Section from "Components/Section";
import './sections.css';
import HtmlIco from '../img/html5.svg'
const AboutSection = () => {
    return (
        <Section id="about" title="about me">
        <div className='left-side'>
          <h2>I am a third-year student at<br />
          Academy of Applied Sciences in Tarnów<br />
          currently studying applied computer science</h2>

        </div>

        <div className='right-side'>
        I'm familiar with:
            <div className="familiar">

                <ul >
                    <li>html5</li>
                    <li>css3</li>
                    <li>js</li>

                    <li>React</li>
                    <li>Postgres</li>
                    <li>Styled components</li>
                </ul>

            </div>
        Currently learning:
            <div className="learning">
                
            <ul >
                    <li>typescript</li>
                    <li>mongo</li>
                    <li>express</li>
                    <li>figma</li>

                </ul>
            </div>
        </div>
      </Section>
      );
}



export default AboutSection;