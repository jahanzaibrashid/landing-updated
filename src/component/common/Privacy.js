import privacyPDF from "../../assets/pdf/MintyPP.pdf";
import React from "react";

function Privacy() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        margin: "0px",
      }}
    >
      <embed
        src={privacyPDF}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        type="application/pdf"
      ></embed>
    </div>
  );
}
export default Privacy;






// import React from "react";
// import {
//   Box,
//   Container,
//   makeStyles,
//   Typography,
//   Link,
// } from "@material-ui/core";
// import routes from "../../constants/routes.json";

// const userStyles = makeStyles((theme)=>({
//   container: {
//     paddingTop: "50px",
//   },
//   pageTitle:{
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 500,
//     fontSize:"50px",
//     color: "#fff",
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '30px',
//     },
//   },

//   desc: {
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 400,
//     color: "#fff",
//     fontSize: "16px",
//     maxWidth: "100%",
//     margin: "20px 0px",
//     "& li": {
//       margin: "15px 0px 15px 50px",
//     },
//   },
//   heading: {
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 700,
//     color: "#fff",
//     fontSize: "16px",
//     maxWidth: "48%",
//     margin: "20px 0 15px",
//   },
//   subHeading: {
//     fontWeight: 700,
//   },
// }));

// export default function Privacy(props) {
//   const classes = userStyles();
//   return (
//     <>
//       <Container maxWidth="lg" className={classes.container}>
//       <Box style={{textAlign:"center"}}>
//           <Typography className={classes.pageTitle}>Privacy Policy</Typography>

//         </Box>
//         <Box>
//           <Typography className={classes.desc}>
//             This Privacy Policy (“Policy”) describes how Minty.Art (“Minty” or
//             “we” or “our” or “us”) collects, stores, shares and uses information
//             and your choices about privacy when you use our website, products
//             and services (collectively, “Services”). Your privacy is important
//             to us, and we ask that you read this Policy carefully to be informed
//             about our practices. If you see an undefined term in this Privacy
//             Policy, it has the same definition as in our
//             <Link href={routes.TNC} color="inherit">
//               <span style={{ color: "#2A7DE1" }}>
//                 <u> T&Cs</u>
//               </span>
//             </Link>
//           </Typography>
//           <Typography className={classes.desc}>
//             This Policy is part of our T&Cs. Any capitalized terms that are used
//             but not defined in this Policy have the same meaning given to them
//             in our T&Cs. By accessing or using our Services in any way, you
//             agree that your information may be collected, stored, shared, and
//             used as described in this Policy and our T&Cs.
//           </Typography>
//           <Typography className={classes.desc}>
//             By submitting any Personal Information through our Site or by using
//             our Services, you agree to the terms of this Privacy Policy and you
//             expressly consent to the collection, use and disclosure of your
//             Personal Information in accordance with this Policy. You may
//             withdraw consent at any time in writing, however such withdrawal
//             does not negate our right to process your data prior to your
//             withdrawal.
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>
//             WHEN THIS PRIVACY POLICY APPLIES
//           </Typography>
//           <Typography className={classes.desc}>
//             This Policy applies to all of our Services, regardless of how you
//             use them, and whether or not you register for a Minty account. This
//             Policy applies to how we collect, store, share, and use information.
//             This Policy does not apply to any entity that we do not own or
//             control, or to any person that we do not employ or manage. If, at
//             any time during the course of using our Services, you are directed
//             to a third-party site, you understand and agree that the policies of
//             the third-party site govern.
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>
//             TYPES OF INFORMATION WE PROCESS{" "}
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Information You Provide :
//             </span>{" "}
//             We may collect the information that you provide (such as your
//             username, email address, your public Web3 wallet address and your
//             social media profile, if any) or otherwise make available to us when
//             you access or use our Services, including when you:
//           </Typography>
//           <Typography className={classes.desc}>
//             <ul>
//               <li>To identify you as a User in our system;</li>
//               <li>
//                 to provide our Services to you, including new Services we
//                 develop later (reason: legitimate business purpose and
//                 performance of a contract);
//               </li>
//               <li>
//                 to provide you with customer support (reason: legitimate
//                 business purpose);
//               </li>
//               <li>
//                 to facilitate your communications or transactions with us,
//                 Patrons, Collectors or other users (reason: to receive consent,
//                 and for legitimate business purpose);
//               </li>
//               <li>
//                 to operate, improve, and customize our Services, Content, and
//                 marketing, to develop new Services, and to understand how you
//                 use and interact with our Services and Content, and the
//                 products, services, and Content of others (reason: legitimate
//                 business purpose);
//               </li>
//               <li>
//                 to develop and display more customized Content and ads to you on
//                 or off our Services (reason: to receive consent, and for
//                 legitimate business purpose);
//               </li>
//               <li>
//                 to promote and maintain a trusted, safer, and more reliable
//                 environment on our Services, for example, to help detect,
//                 prevent or otherwise address fraud, security or technical
//                 issues, conduct investigations or risk assessments, or verify
//                 actions taken by you or associated with your account (reason: to
//                 protect the public interest and for legitimate business
//                 purpose);
//               </li>
//               <li>
//                 to contact you (by email or as otherwise authorized by you) in
//                 order to address issues with your account or use of our
//                 Services, collect fees, send you updates about our Services or
//                 policies, or for other purposes permitted by law (reason:
//                 performance of a contract and for legitimate business purpose);
//               </li>
//               <li>
//                 to contact you (by email, postal mail, telephone, mobile
//                 devices, SMS text message, or as otherwise authorized by you) in
//                 order to send you marketing communications, promotional
//                 messages, and offers about our Services and Content, and the
//                 products, services, and Content of others (see below for
//                 information on how to opt out of receiving certain
//                 communications from us) (reason: to receive consent, and for
//                 legitimate business purpose);
//               </li>
//               <li>
//                 to facilitate your participation in contests, sweepstakes or
//                 other promotional events sponsored or conducted by us or by
//                 others in conjunction with us (reason: performance of a
//                 contract);
//               </li>
//               <li>
//                 to comply with our legal obligations, resolve disputes, or
//                 enforce our T&Cs or any other Minty policies or agreements with
//                 Users (reason: compliance with a legal obligation); and
//               </li>
//               <li>
//                 to perform other functions as described when the information is
//                 collected or requested, or for other purposes with your prior
//                 consent (reason: legitimate business purpose).
//               </li>
//             </ul>
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             COMMUNICATION PREFERENCES
//           </Typography>
//           <Typography className={classes.desc}>
//             We provide registered Users with settings on our Services to control
//             whether they receive certain communications from us. If you do not
//             want to receive marketing email from us, you can unsubscribe by
//             following the unsubscribe link in the email you received, changing
//             your preferences in your profile and account settings (if you have
//             registered for a Minty account), or emailing us at hello@minty.art.
//             You may not be able to opt out of receiving some communications from
//             us, such as email about your account, your relationship with us, or
//             your transactions with us or other Users. For further information,
//             please don’t hesitate to contact us at hello@minty.art. Please note
//             that unsubscribing from receiving emails from us may result in a
//             less robust experience of our Services.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             ACCOUNTS AND USER PROFILES
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Registration, Access and Records:
//             </span>
//             To register for a Minty account, you will need to do so by providing
//             your username, valid email address and Web3 Wallet address. If you
//             have received our permission to use our Services as a business, you
//             may need to complete an additional registration process and provide
//             additional information. If you have a Minty account, you may access,
//             add, remove or update certain information about you in your profile
//             and account settings, as indicated on our Services. It is your
//             responsibility to update all such information as necessary to keep
//             it accurate and current. When you update your account or profile
//             information, we may keep a record of the unrevised information for
//             purposes consistent with this Policy. If you wish to cancel your
//             account, you may do so by using the tools provided in your profile
//             and account settings, subject to any other agreements between you
//             and us and any transactions which have not yet been completed. If
//             you terminate your account, we may keep a record of any or all
//             information associated with you or your account, as required or
//             permitted by law, for purposes consistent with this Policy, and any
//             such data shall be attached to a unique identifier which cannot be
//             used to identify you; specific account data that includes Personal
//             Information including your name, e-mail, contact information, and
//             certain other records such as settings and collector profiles will
//             be removed at such termination. For further information, please
//             contact us at hello@minty.art.
//           </Typography>

//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Profile and Account Information:
//             </span>
//             To make our Services more interactive, certain information about
//             Users’ profiles or accounts may be made accessible to other Users on
//             or through our Services, as indicated in Users’ profile and account
//             settings on our Services, or as otherwise indicated by us when you
//             use certain Services. Our Services may include settings to control
//             how certain profile or account information is shared with other
//             Users on or through our Services, and you should check your profile
//             and account settings regularly to be informed of your current
//             choices. For further information, please contact us at
//             hello@minty.art.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>Data Retention:</span> We will
//             keep and use your data as described in this Policy for (i) as long
//             as your account is in use, is open, or is active; (ii) as long as is
//             necessary to comply with any tax, legal, and/or other regulatory
//             requirements; and (iii) to protect and defend against potential
//             legal claims. If you would like to request the deletion of your
//             personally identifiable information or request that it be returned
//             to you, please contact us at hello@minty.art. By deleting your data
//             from our Site, you understand that you will no longer be able to use
//             our Services. We will retain your anonymized, aggregated,
//             depersonalized data after it has been deleted from our Site.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             FAVORITES AND FOLLOWS
//           </Typography>
//           <Typography className={classes.desc}>
//             Our Services may include features that enable you to designate your
//             “favorite” artists, creators, artwork or other items, or categories
//             of artwork or other items. Our Services may also include features
//             that enable you to “follow” artists, patrons or other Users, or
//             categories of artwork or other items. If you enable such
//             designations, we may include you in email communications regarding
//             those designations. If you would like to opt out of receiving those
//             emails, please follow the unsubscribe link at the bottom of the
//             relevant email or visit your account profile to update your email
//             settings. For further information, please contact us at
//             hello@minty.art.
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>USER CONTENT</Typography>
//           <Typography className={classes.desc}>
//             As described in our T&Cs, some Services may enable you to provide
//             User Materials on or through our Services. When you post or publish
//             User Materials on our Services, any information contained in the
//             User Materials (including information in images or videos) becomes
//             publicly accessible on our Services (and may also be indexed by and
//             accessible through third-party search engines), and we and other
//             Users may access and use the User Materials as described in our
//             T&Cs. This applies even if you or someone else also provides such
//             information to us by other means, and our use of such information
//             might have been more limited under this Policy if such information
//             was only provided to us by such other means. It is your
//             responsibility to ensure that you have the right to share any
//             information about others that you may share with us or with others
//             through our Services.
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>
//             USER COMMUNICATIONS
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Connecting with Creators:{" "}
//             </span>{" "}
//             We aim to provide a platform where Users can discover and engage
//             with a wide range of artwork from around the world. To help make
//             this happen, our Services may include features, such email addresses
//             hosted on our Services. For example, when an artist, a patron or a
//             collector lists an artwork or the NFT on our Services, our Services
//             may enable you to contact them about that item.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Sharing Information with Other Users:
//             </span>{" "}
//             When you use our Services to perform a transaction with another
//             User, it may be visible to other Users your past transactions and
//             any assets you may hold, including your username, if you have
//             expressly permitted so, and your Web3 Wallet address depending on
//             the permissions that you may have configured. Sometimes such Users
//             may be able to obtain additional information about you when you use
//             our Services to perform a transaction with them. For example, they
//             may be able to obtain information about your location, interests and
//             other information, as indicated in your profile and account
//             settings. Our Services may include settings that enable you to
//             choose how certain information is shared with other Users when you
//             perform a transaction with them, as indicated when you use these
//             Services or in your profile and account settings.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             WITH WHOM DO WE SHARE PERSONAL INFORMATION?
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>Personal Information.</span>{" "}
//             Under this Policy, "Personal Information" means information that by
//             itself can be used to identify or contact a specific person (for
//             example, username, email address and/or your public Web3 Wallet
//             address), and Personal Information does not include information that
//             has been aggregated or made anonymous so that by itself it no longer
//             identifies and can no longer reasonably be used to contact a
//             specific person. In certain circumstances, Personal Information may
//             also include information you voluntarily provide to us such as
//             artists, patrons or collectors you choose to follow. We will not
//             share your Personal Information with others other than in the ways
//             described in this Policy, or otherwise with your prior consent. In
//             addition to the other sharing of Personal Information described in
//             this Policy, we may share your Personal Information with others in
//             the following contexts.
//             <ul>
//               <li>
//                 Service Providers: We may contract with third-party service
//                 providers that help us provide our Services, or that perform
//                 services for us related to our Services, and they may process
//                 your Personal Information as necessary to perform those
//                 functions for us. Examples may include but are not limited to:
//                 identity verification, document authentication, public database
//                 review, order fulfillment, package delivery, payment processing,
//                 bill collection, fraud investigation, email and postal mail
//                 administration, customer service assistance, web and mobile data
//                 analytics, display ads, and server and database hosting
//                 services. For the avoidance of doubt, we do not sell your
//                 Personal Information to our Service Providers.{" "}
//               </li>
//               <li>
//                 Transactions: For conducting cryptocurrency transactions we use
//                 third-party electronic wallet extensions such as (but not
//                 limited to) MetaMask, Fortmatic and WalletConnect; your
//                 interactions with any of the Web3 Wallets are governed by the
//                 applicable privacy policies. In the case of MetaMask, its
//                 privacy policy is available at
//                 <Link href="https://metamask.io/privacy.html" color="inherit">
//                   <span style={{ color: "#2A7DE1" }}>
//                     <u> Metamask Privacy Policy</u>
//                   </span>
//                 </Link>
//                 , and Fortmatic (
//                 <Link
//                   href="https://fortmatic.com/legal/user-privacy-policy"
//                   color="inherit"
//                 >
//                   <span style={{ color: "#2A7DE1" }}>
//                     <u> Fortmatic Privacy Policy</u>
//                   </span>
//                 </Link>
//                 ).
//               </li>
//               <li>
//                 Business Transfers: If we are involved in a merger, acquisition,
//                 or sale of assets, your Personal Information may be one of the
//                 assets transferred. In this event, if you have registered for a
//                 Minty account, we will notify you of the change of ownership by
//                 sending an email to the most recent email address you provided
//                 us under your Minty account.
//               </li>
//               <li>
//                 Legal Purposes: We may access, preserve, and disclose your
//                 Personal Information and/or other information if we believe that
//                 such access, preservation or disclosure is reasonably necessary
//                 to: (i) comply with any law, regulation, legal process or
//                 governmental request (such as search warrants, subpoenas or
//                 court orders), which may include responding to legal requests
//                 from jurisdictions outside the United States; (ii) enforce our
//                 T&Cs or our other policies or agreements with Users, or
//                 investigate potential violations; (iii) detect, prevent or
//                 otherwise address fraud, security or technical issues; (iv)
//                 protect or enforce the rights or property of Minty, you, or any
//                 other person or entity; or (v) prevent physical harm to any
//                 person, including situations involving possible violence or
//                 self-harm.
//               </li>
//             </ul>
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>
//             AGGREGATED AND NON-PERSONAL INFORMATION
//           </Typography>
//           <Typography className={classes.desc}>
//             We may aggregate and/or make anonymous any Personal Information that
//             we have obtained in any way from or about you or others so that such
//             information no longer contains any Personal Information. We may use
//             and share any aggregated, anonymous or other non-personally
//             identifying information for any legitimate business purposes,
//             including research and development, marketing, and to inform others
//             about how our Services or Content are engaged with or used.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             OTHER WEBSITES AND SERVICES
//           </Typography>
//           <Typography className={classes.desc}>
//             Our Services may include links to other websites or services that we
//             do not own or control, and other websites or services that we do not
//             own or control may include links to our Services. Our Services may
//             also include features that enable you to link your Minty account to
//             your account on other social media services. For example, you may be
//             able to sign up for (or sign in to) our Services through another
//             social media service. Our Services may also include features that
//             enable you to share Content on other websites and social media
//             services. However, these links and features are not an endorsement
//             by us of any other websites or services, or any of their privacy
//             policies or practices. When you visit or use other websites or
//             services, they may collect information from you, including through
//             the use of cookies, web beacons or similar technologies. We
//             encourage you to read the privacy policies of other websites and
//             services that you visit or use to be informed of their practices.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             INTERNATIONAL PROCESSING
//           </Typography>
//           <Typography className={classes.desc}>
//             Minty is headquartered in Hong Kong. Our Users, service providers,
//             and other third parties you may interact with in connection with our
//             Services, may be located in other countries around the world,
//             including countries that may not offer the same level of protection
//             for Personal Information as that offered in Hong Kong. By accessing
//             or using our Services in Hong Kong or any other country or
//             jurisdiction, you agree that your information may be transferred and
//             processed in Hong Kong and any other country or jurisdiction.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             CHILDREN’S INFORMATION
//           </Typography>
//           <Typography className={classes.desc}>
//             Our Services are not directed to children under the age of 18, and
//             we do not knowingly collect Personal Information from people in this
//             age group. If you believe we may have collected Personal Information
//             from anyone under the age of 18, please contact us.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>SECURITY</Typography>
//           <Typography className={classes.desc}>
//             Every Minty account is protected to help maintain privacy and
//             security on our Services. If you register for an account, we urge
//             you to use a strong password containing unique numbers, letters and
//             special characters, and to protect the confidentiality of your
//             password at all times. If you suspect or become aware of any
//             unauthorized access to or use of your account or password, you agree
//             to immediately notify us and change your password. We take
//             reasonable technical and organizational measures to guard against
//             unauthorized or unlawful processing of your personal data and
//             against accidental loss or destruction of, or damage to, your
//             Personal Information. While no system is completely secure, we
//             believe the measures implemented by the Site reduce our
//             vulnerability to security problems to a level appropriate to the
//             type of data involved. We have security measures in place to protect
//             our user database and access to this database is restricted
//             internally. However, it remains your responsibility:
//             <ol>
//               <li>
//                 To protect against unauthorized access to your use of the Site
//                 and/or Services;
//               </li>
//               <li>
//                 To ensure no one else uses the Site and/or Services while your
//                 machine is logged on to the Site (including by logging on to
//                 your machine through a mobile, Wi-Fi or shared access connection
//                 you are using);
//               </li>
//               <li>
//                 To log off or exit from the Site and/or Services when not using
//                 it;
//               </li>
//               <li>
//                 Where relevant, to keep your password or other access
//                 information secret. Your password and login details are personal
//                 to you and should not be given to anyone else or used to provide
//                 shared access for example over a network; and
//               </li>
//               <li>To maintain good internet security.</li>
//             </ol>
//             You should keep all of your account details secure. If you think
//             that any of your accounts has been compromised you should change
//             your account credentials with us, and in particular make sure any
//             compromised account does not allow access to your account with us.
//             You should also tell us as soon as you can, so that we can try to
//             help you keep your account secure and if necessary warn anyone else
//             who could be affected.
//             <br />
//             Please note that while we seek to protect your information and
//             maintain the security of our Services, due to the possibility of
//             hardware or software failure, unauthorized entry or use and other
//             factors, we cannot guarantee the security of any information,
//             whether online or offline. Any transmission of information is at
//             your own risk. Please also note that any information you provide to
//             us via email is unencrypted.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             STATUTORY REQUESTS
//           </Typography>
//           <Typography className={classes.desc}>
//             Some jurisdictions have laws that give people the right to access or
//             correct their Personal Information which a company has about them.
//             We will honor any statutory right you may have to access or correct
//             your Personal Information that we have in our records, and you can
//             email such requests to hello@minty.art. Once we receive your
//             request, we will let you know if an administrative fee will apply to
//             fulfill your request, as permitted by applicable law. However,
//             please note that even if you have a legal right to request access to
//             information or to correct information, as permitted by applicable
//             law, we may reject requests that are unreasonably repetitive, would
//             require disproportionate technical effort (for example, developing a
//             new system or materially changing an existing practice), would
//             jeopardize the privacy of others, or would be extremely impractical
//             to fulfill (for example, requests to access information located on
//             backup systems).
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             DISPUTE RESOLUTION
//           </Typography>
//           <Typography className={classes.desc}>
//             As this Policy is part of our T&Cs, any disputes involving you and
//             us that relate to privacy or the use of your information, and that
//             arise out of or are related to this Policy or our Services, will be
//             subject to our T&Cs, including any provisions regarding the
//             limitation of damages and liability, choice of law, and dispute
//             resolution.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>
//             CHANGES TO THIS PRIVACY POLICY
//           </Typography>
//           <Typography className={classes.desc}>
//             Our business changes with time, and our Privacy Policy will change
//             also. We reserve the right to change this Policy, without prior
//             notice, at any time at our sole discretion. For example, and without
//             limitation, we may change this Policy to reflect changes to the law
//             or changes to our Services. All changes to this Policy will be
//             effective when posted on our Services, or at such later date as may
//             be specified in the updated Policy. We will notify you of any
//             changes to this Policy by posting the updated Policy on our
//             Services, and you agree to review this Policy regularly and inform
//             yourself of all applicable changes. By continuing to use our
//             Services after any changes to this Policy become effective, you
//             agree to such changes and the updated Policy. Unless we notify you
//             otherwise, the current version of this Policy will apply to all
//             information that we have about you or your account.
//           </Typography>
//         </Box>
//         <Box>
//           <Typography className={classes.heading}>COOKIE POLICY</Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Cookies, Web Beacons, and Similar Technologies:{" "}
//             </span>{" "}
//             We may use cookies, web beacons and similar technologies, such as
//             tracking URLs, to collect information about how you or others access
//             or engage with our Services, Content, emails, and ads displayed on
//             or off our Services, and to operate, develop, improve, and customize
//             our Services, Content, and marketing, including ads displayed on or
//             off our Services. Most browsers automatically accept cookies, but
//             your browser may have settings that enable you to decline or delete
//             cookies on your device. Please note that if you decline cookies, you
//             may not be able to sign in, customize, or use some of the
//             interactive features of our Services, as some of our Services
//             require cookies to operate.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               What these Technologies Are:
//             </span>{" "}
//             “Cookies” are small data files placed on your computer or other
//             device which record information. For example, a cookie could enable
//             our Services to recognize your browser, while another cookie could
//             store your account preferences and other information to help make
//             our Services more customized. We may use two kinds of cookies,
//             “session cookies” and “persistent cookies.” Session cookies normally
//             expire when you close your browser, while persistent cookies remain
//             on your device until they expire or are deleted. “Web beacons” (also
//             known as “pixel tags” or “clear GIFS”) are pieces of code or pixels
//             embedded in a web page or email to track engagement with and
//             responses to emails, web pages or ads, or to access or communicate
//             with cookies. “Tracking URLs” are special URLs that can be used to
//             track engagement with and responses to emails or web pages.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Third-Party Analytics, Service, and Ad Providers:
//             </span>{" "}
//             We may use third-party analytics and services providers who help us
//             to better understand how our Services and Content are accessed and
//             used, including for web analytics, audience measurement,
//             personalization and segmentation, and relationship management
//             purposes. In turn, this information helps us to develop and improve
//             our Services and Content. Our third-party analytics and service
//             providers include but are not limited to Google Analytics. These
//             providers may use cookies, web beacons and similar technologies to
//             collect information about how Users access or engage with our
//             Services, Content, emails, and ads on or off our Services. For more
//             information about how Google may collect and process information in
//             connection with Google Analytics, click here.
//             <br />
//           </Typography>
//           <Typography className={classes.desc}>
//             We may also use third-party advertising providers, including ad
//             networks or exchanges, to help display ads on our Services or on
//             other websites, including customized ads based on past online
//             activity. These third parties may use cookies, web beacons and
//             similar technologies to help provide their services to us, and to
//             collect information about your and others’ online activity across
//             different websites. These providers may also collect your IP
//             address, device identifier, or identifier for advertising (IDFA).
//             The third-party advertising providers we use include but are not
//             limited to Google Analytics, and we use its Remarketing and
//             Demographics and Interest Reporting features, which enables Google
//             Analytics to collect data about traffic on our Services through
//             Google advertising cookies and anonymous identifiers. We and
//             third-party providers, including Google Analytics, may use
//             first-party cookies (i.e. cookies set by the website you are
//             visiting) and third-party cookies (i.e. cookies set by a third-party
//             website other than the website you are visiting) to inform,
//             optimize, and serve ads based on past visits to our Services. We do
//             not control the practices of any third-party providers, and this
//             Cookie Policy (and our Privacy Policy in general) does not cover the
//             use of cookies, web beacons or similar technologies by any third
//             parties.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>Opting-Out:</span> Third-party
//             providers may offer you a way to opt-out of receiving cookies from
//             them by visiting their own websites or the websites of industry
//             groups such as the Network Advertising Initiative and the Digital
//             Advertising Alliance. For example, you may opt-out of receiving
//             ad-related cookies from Google through its Ad Settings. If you
//             opt-out of receiving cookies from one of these providers, it may
//             place a cookie on your device to remember your preference. For more
//             information about AdChoice, please visit their website. Accordingly,
//             if you delete cookies, install a new browser, or start using a new
//             device, you may need to repeat the opt-out process. To opt out of
//             receiving any marketing materials, please email us at
//             hello@minty.art.
//           </Typography>
//           <Typography className={classes.desc}>
//             <span className={classes.subHeading}>
//               Changes to this Cookie Policy:
//             </span>{" "}
//             As this Cookie Policy is part of our Privacy Policy, we may update
//             it at any time as described in our Privacy Policy. Please review
//             this Cookie Policy regularly to be informed of any updates.
//           </Typography>
//         </Box>

//         <Box>
//           <Typography className={classes.heading}>CONTACTING MINTY</Typography>
//           <Typography className={classes.desc}>
//             If you have questions or comments about our Privacy Policy or our
//             privacy practices, or you would like to know what Personal
//             Information we hold about you, or would like to update, delete, or
//             request access to such Personal Information, you may contact us by
//             email sent to hello@minty.art.
//           </Typography>
//           <Typography className={classes.desc}>
//             If you completely delete all of your Personal Information, then your
//             Minty account may become deactivated. We will use commercially
//             reasonable efforts to honor your request. We may retain an archived
//             copy of your records as required by law or for legitimate business
//             purposes, such as information stored in blockchain technology for
//             the purpose of verifying authenticity and value of digital assets.
//           </Typography>
//           <Typography className={classes.desc}>
//             You may access, correct, amend, or delete your User Materials by
//             accessing your Minty account (including any imported contacts). You
//             control all User Materials you upload. User Materials that you
//             delete (including User Materials containing personal information)
//             may be retained in archived or backup copies in order to enable you
//             to use certain features like revision history and base snapshots.
//             For instructions on how to permanently delete User Materials from
//             your account, please contact us at hello@minty.art. Please note that
//             permanent deletion of your User Materials through this process will
//             impair or disable those features with respect to that User
//             Materials.
//           </Typography>
//           <Typography className={classes.desc}>
//             You may access, correct, amend, or delete Personal Information we
//             have about you by logging into your account and navigating to your
//             account page. If you wish to cancel your account, you may do so
//             through your account page. If you do, personally identifiable
//             information associated with your account will be deleted as soon as
//             is reasonably practical or as required by applicable law. Please
//             note that we may retain information that is otherwise deleted in
//             anonymized and aggregated form, in archived or backup copies as
//             required pursuant to records retention obligations, or otherwise as
//             required by law.
//           </Typography>
//         </Box>
//       </Container>

//       {/* <iframe src="https://docs.google.com/document/d/1Ys4s0f8uSTeH3vD_cd84EUgTHs7PD9k35hM7XiaoYTk/edit#" width='99%' height='714'></iframe> */}
//     </>
//   );
// }
