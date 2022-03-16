import Section from "Components/Section";
const ContactSection = () => {
    return (
        <Section id="contact" title="Contact">

        <form target="_blank" action="https://formsubmit.co/0f2d4c75d7d6f672c66393078f87fb39" method="POST">
        <h1>Get in touch</h1>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required></textarea>
            <input type="hidden" name="_template" value="table"/>
            <button type="submit" >Send</button>
        </form>
      </Section>
      );
}
export default ContactSection;

