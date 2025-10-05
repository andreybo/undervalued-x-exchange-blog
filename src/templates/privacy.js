import React from "react";
import Seo from "../components/seo";

const Privacy = () => {

  return (
    <div className="tp">

      <div className="tp__inner container">
        <h1 className="tp__inner-title">Privacy Policy</h1>
        <p>
          This Privacy Policy governs the manner in which{" "}
          <strong>undervalued-x-exchange</strong> collects, uses, maintains and discloses
          information collected from users (each, a <strong>“User”</strong>) of
          the <strong>“https://www.undervalued-x-exchange.co”</strong> website (
          <strong>“Site”</strong>) and{" "}
          <a href="https://www.blog.undervalued-x-exchange.co">https://www.blog.undervalued-x-exchange.co</a> or
          any other subdomain related to{" "}
          <a href="https://www.undervalued-x-exchange.co.">https://www.undervalued-x-exchange.co.</a>
          <br />
          <br />
          In this Privacy Policy, <strong>“We”</strong>, <strong>“Us”</strong>,{" "}
          <strong>“Our”</strong> and other similar references mean{" "}
          <strong>undervalued-x-exchange</strong> and <strong>“You”</strong> and{" "}
          <strong>“Your”</strong> and other similar references mean a specific{" "}
          <strong>“User”</strong> of the service.
          <br />
          <br />
          This privacy policy applies to the Site and all products and services
          offered by <strong>undervalued-x-exchange</strong>.<br />
          <br />
        </p>
        <h2>Personal identification information</h2>
        <br />
        <p>
          We may collect personal identification information from Users in a
          variety of ways, including, but not limited to, when Users visit our
          site, register on the site, fill out a form, and in connection with
          other activities, services, features or resources we make available on
          our Site. Users may be asked for, as appropriate, name, email address,
          phone number. We will collect personal identification information from
          Users only if they voluntarily submit such information to us. Users
          can always refuse to supply personally identification information,
          except that it may prevent them from engaging in certain Site related
          activities.
          <br />
          <br />
        </p>
        <h2>Non-personal identification information</h2>
        <br />
        <p>
          We may collect non-personal identification information about Users
          whenever they interact with our Site. Non-personal identification
          information may include the browser name, the type of computer and
          technical information about Users means of connection to our Site,
          such as the operating system and the Internet service provider
          utilized and other similar information.
          <br />
          <br />
        </p>
        <h2>Web browser cookies</h2>
        <br />
        <p>
          Our Site may use “cookies” to enhance User experience. User’s web
          browser places cookies on their hard drive for record-keeping purposes
          and sometimes to track information about them. User may choose to set
          their web browser to refuse cookies, or to alert you when cookies are
          being sent. If they do so, note that some parts of the Site may not
          function properly.
          <br />
          <br />
        </p>
        <h2>How we use collected information</h2>
        <br />
        <p>
          <strong>undervalued-x-exchange</strong> may collect and use Users personal information
          for the following purposes:
          <br />
          <br />– To improve our Site. We may use feedback you provide to
          improve our products and services.
          <br />
          <br />– To send periodic emails. We may use the email address to send
          User information and updates pertaining to their order. It may also be
          used to respond to their inquiries, questions, and/or other requests.
          <br />
          <br />
        </p>
        <h2>How we protect your information</h2>
        <br />
        <p>
          We adopt appropriate data collection, storage and processing practices
          and security measures to protect against unauthorized access,
          alteration, disclosure or destruction of your personal information,
          username, password, transaction information and data stored on our
          Site.
          <br />
          <br />
          Sensitive and private data exchange between the Site and its Users
          happens over a SSL secured communication channel and is encrypted and
          protected with digital signatures.
          <br />
        </p>
        <h2>Sharing your personal information</h2>
        <br />
        <p>
          We do not sell, trade, or rent Users personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates and advertisers for the purposes outlined above. We may use
          third party service providers to help us operate our business and the
          Site or administer activities on our behalf, such as sending out
          newsletters or surveys. We may share your information with these third
          parties for those limited purposes provided that you have given us
          your permission.
          <br />
          <br />
        </p>
        <p></p>
        <h2>Changes to this privacy policy</h2>
        <br />
        <p>
          <strong>undervalued-x-exchange</strong> has the discretion to update this privacy
          policy at any time. When we do, we will send you an email. We
          encourage Users to frequently check this page for any changes to stay
          informed about how we are helping to protect the personal information
          we collect. You acknowledge and agree that it is your responsibility
          to review this privacy policy periodically and become aware of
          modifications.
          <br />
          <br />
        </p>
        <h2>Your acceptance of these terms</h2>
        <br />
        <p>
          By using this Site, you signify your acceptance of this policy. If you
          do not agree to this policy, please do not use our Site. Your
          continued use of the Site following the posting of changes to this
          policy will be deemed your acceptance of those changes.
        </p>
        <br />
        <br />
        <h2>Last Modification</h2>
        <br />
        <p>This Privacy Policy was last modified on August 15th, 2016.</p>
        <br />
        <br />
        <h2>Contact us</h2>
        <br />
        <p>
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this site, please contact us at:{" "}
          <a href="mailto:hello@undervalued-x-exchange.co">hello@undervalued-x-exchange.co</a>.
          <br />
          <br />
          <strong>
            undervalued-x-exchange Ltd.,
            <br />
            <br />
            Ribarska 4,
            <br />
            Osijek, Osjecko-Baranjska County 31000,
            <br />
            Croatia <br />
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Privacy;

export const Head = () => (
  <Seo
    title="Privacy Policy"
    metaDesciption="undervalued-x-exchange Privacy Policy for your reading pleasure."
  />
)