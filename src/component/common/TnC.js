import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import routes from "../../constants/routes.json";

const userStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "50px",
  },
  pageTitle: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    fontSize: "50px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },

  desc: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    color: "#fff",
    fontSize: "16px",
    maxWidth: "100%",
    margin: "20px 0px",
    "& li": {
      margin: "15px 0px 15px 50px",
    },
  },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    color: "#fff",
    fontSize: "16px",
    maxWidth: "48%",
    margin: "20px 0 15px",
  },
  subHeading: {
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
  },
  orderedListBox: {
    "& li": {
      margin: "10px 0px",
      fontFamily: "Montserrat, sans-serif",
      // fontWeight: 700,
      color: "#fff",
      fontSize: "16px",
    },
  },
  listDesc: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    color: "#fff",
    fontSize: "16px",
    margin: "10px 0px",
    "& li": {
      margin: "15px 20px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      color: "#fff",
      fontSize: "16px",
    },
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

export default function TnC(props) {
  const classes = userStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box style={{ textAlign: "center" }}>
          <Typography className={classes.pageTitle}>
            Terms and Conditions
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.desc}>
            Please read these Terms & Conditions (the “Agreement”) carefully.
            Minty.art (“Minty”), is owned and operated by STK Asia Limited ("STK
            Asia"," "STK", "Us" or "our") Website (Minty.Art), (the "Website").
            STK Asia is a company limited by shares incorporated in Hong Kong
            with registration number 2675449, with registered address Room 1007,
            10/F, Wayson Commercial Building, No 28 Connaught Road West, Sheung
            Wan, Hong Kong SAR. Your use of access of the Site constitutes your
            consent to this Agreement. This Agreement is between you (the “User”
            or “You”) and STK Asia, concerning your use of, including any access
            to, the Site, mobile applications, web applications, decentralised
            applications, smart contracts and API located at any of Minty’s
            websites, together with any materials and services available therein
            and successor website(s) or application(s) thereto (collectively
            referred to as the “Site”).
          </Typography>
          <Typography className={classes.desc}>
            By clicking or tapping any button or box marked “accept” or “agree”
            (or a similar term) in connection with this Agreement, or by
            accessing or using the App, you agree to be bound by this Agreement,
            a current version of which is available at the Site, and which may
            be modified from time to time at our sole discretion. These terms of
            use (“Terms of Use”) are accessible at any time on the Site and will
            prevail over any other version or any other contradictory document,
            with the exception of the Token Usage Agreement which will prevail
            at all times. Where this Agreement incorporates any additional Terms
            of Use with respect to the Site these will be posted on the Site, or
            otherwise made available to you by email notification.
          </Typography>
          <Typography className={classes.desc}>
            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE
            SITE. THESE TERMS GOVERN YOUR USE OF THE SITE. WE ARE ONLY WILLING
            TO MAKE THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS.
            BY USING THE SITE, OR ANY PART OF IT, OR BY CLICKING “I ACCEPT”
            BELOW OR INDICATING YOUR ACCEPTANCE IN AN ADJOINING BOX, YOU ARE
            CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE
            TERMS. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR
            OTHER LEGAL ENTITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN
            WHICH “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH
            AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS THEN WE ARE
            UNWILLING TO MAKE THE SITE AVAILABLE TO YOU. IF YOU DO NOT AGREE TO
            THESE TERMS, YOU MAY NOT ACCESS OR USE THE SITE.
          </Typography>
          <Typography className={classes.desc}>
            WE WANT TO LET YOU KNOW THAT THESE TERMS INCLUDE AN ARBITRATION
            CLAUSE AND CLASS ACTION WAIVER. BY AGREEING TO THESE TERMS OF USE,
            YOU AGREE TO RESOLVE ALL DISPUTES THROUGH BINDING INDIVIDUAL
            ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT TO HAVE THOSE
            DISPUTES DECIDED BY A JUDGE OR JURY, AND THAT YOU WAIVE YOUR RIGHT
            TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS OR
            REPRESENTATIVE ACTIONS. YOU HAVE THE OPTION TO OPT OUT OF THE
            BINDING ARBITRATION AGREEMENT, SUBJECT TO CERTAIN NOTICE
            REQUIREMENTS.
          </Typography>
          <Typography className={classes.desc}>
            This Agreement sets out your rights and responsibilities when you
            use Minty, our mobile apps, access our Site and other services
            provided by Minty (the “Services”). Please read this Agreement
            carefully. By using any of our Services (even just browsing one of
            our websites), you are agreeing to the Terms of Use, you may not use
            our Services.
          </Typography>
        </Box>

        <Box className={classes.orderedListBox}>
          <ol>
            <li className={classes.fontWeight700}>DEFINITIONS</li>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Account -</span>
              refers to the identity created for the User on the Site that
              allows him/her/it to access the services of the Platform.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Buyer -</span>
              refers to the User acquiring the Digital Asset on Minty’s
              platform.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Cryptocurrency -</span>
              refers to any virtual asset designed to work as a medium of
              exchange on blockchain and accepted in payment for the Digital
              Asset.
            </Typography>

            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Collector -</span>
              refers to the person that buys the NFT from the Patron or sells
              the NFT to the Users.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Content -</span>
              refers to the content that Minty creates, uploads, sends,
              receives, posts, publishes or stores on the Site.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Creator -</span>
              refers to the artist.
            </Typography>

            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Currency -</span>
              refers to fiat currency that has legal tender status (e.g. US
              Dollar, Singapore Dollar, etc.).
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Digital Asset -</span>
              refers to the unique digital artwork that is available on the Site
              as well as the underlying non-fungible token that represents the
              asset.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>NFT -</span>
              refers to the non-fungible token generated according to the
              ERC-721 or ERC-1155 standards, implemented on the Ethereum
              blockchain using Smart Contracts, which represents on blockchain
              the Digital Asset.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Patron -</span>
              refers to the person that offers support and sponsor,
              encouragement and financial resources to the Creators. Patrons can
              also commission work to Creators.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Patronage -</span>
              refers to the way in which patrons have helped artists by
              sponsoring them at the early stage of their creation process, so
              that they have the funding to complete their most ambitious
              projects.
            </Typography>

            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Platform -</span>
              refers to the online Site that enables registered Users to
              acquire, collect and exchange Digital Assets and the underlying
              NFT.
            </Typography>

            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Seller -</span>
              refers to the User offering to sell his/her/their own Digital
              Asset on Minty’s platform.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Smart Contract -</span>
              refers to a computer program or a transaction protocol which is
              intended to automatically execute, control or document legally
              relevant events and actions according to the terms of a contract
              or an agreement.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Terms of Use -</span>
              refer to the terms and conditions which constitute a legally
              binding agreement between you and Minty, governing your access to
              and use of the Site and all associated services.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Token -</span>
              refers to NFTs which are a type of Digital Asset that represent
              and preserve the authenticity and scarcity of a unique real-world
              object. They are created via smart contracts and are smoothly
              transferable from wallets to wallets (like bank accounts) at the
              speed of light peer to peer.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>
                Token Usage Agreement -
              </span>
              refers to the agreement signed by You with Us that regulates your
              acquisition of the Tokens and your subsequent use of the Tokens,
              in each case, via the Platform and/or the Site.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>Transaction -</span>
              refers to the User’s offer to sell or purchase and the sell or
              purchase process through the Site with the intention to transfer
              or acquire a Digital Asset and the underlying NFT.
            </Typography>
            <Typography className={classes.listDesc}>
              <span className={classes.subHeading}>User -</span>
              refers to any natural person or legal person, either Creator,
              Patron or Collector, using the services offered by the platform,
              by visiting the website with a full legal capacity and who is not
              acting for purposes relating to the trade, business, craft or
              profession.
            </Typography>
            <li className={classes.fontWeight700}>SCOPE OF THE PLATFORM</li>
            <Typography className={classes.listDesc}>
              Minty is a distributed application that runs on the ethereum
              network, using specially developed Smart Contracts to enable users
              to create, buy, transfer and trade unique digital artwork (the
              “Digital Asset”), which can then be visualised on a website that
              the User can interact with the Site. Users can view their art and
              use the Smart Contracts to create, acquire and trade art with
              other Users. Minty is a state-of-the-art platform for artists
              Patronage, artwork tokenization and trading. Through the Patronage
              launchpad, Minty enables patrons to support creators by funding
              and tokenizing their artworks which will be resold to art
              collectors via the Minty platform. The Tokens will carry and
              self-execute properties and rights such as royalties during their
              whole existence removing the need for middlemen and the associated
              cost. Hence, the Token will distribute the royalties or any other
              Token benefits attached to the stakeholders, during its whole
              existence. cito create, sell, purchase, collect, transfer and
              trade Digital Assets. Minty is not a broker, a financial
              institution or a creditor. The services are an administrative
              platform only. Minty facilitates transactions between the Creator,
              the Patron and the Collectors involved in a transaction but it is
              not a party to any agreement in between any Users. The Site allows
              you to sell and purchase Digital Assets, including minting Tokens.
              You may only participate in the Auction by linking your digital
              wallets on MetaMask (
              <span style={{ color: "#2A7DE1" }}>
                <u> https://metamask.io/</u>
              </span>
              ), Fortmatic ({" "}
              <span style={{ color: "#2A7DE1" }}>
                <u> https://fortmatic.com</u>
              </span>
              ) and WalletConnect (
              <span style={{ color: "#2A7DE1" }}>
                <u> https://walletconnect.org</u>
              </span>
              ) (the “Web3 Wallet” and, collectively the “Web3 Wallets”). These
              are electronic wallets, which allows you to purchase, store, and
              engage in transactions using Ethereum (“ETH”) cryptocurrency.
              Before putting up your Digital Asset for auction or putting in an
              offer to purchase a Digital Asset from another User, we will ask
              you to download the MetaMask, Fortmatic or WalletConnect
              extension, and connect and unlock your digital wallets with any of
              the supported Web3 Wallets. Once you submit an order to sell or
              purchase a Digital Asset, your order is passed on to the Web3
              Wallet and the Web3 Wallet completes the transaction on your
              behalf. ALL TRANSACTIONS INITIATED THROUGH OUR SITE ARE
              FACILITATED AND RUN BY ONE OF THE WEB3 WALLETS AND BY USING OUR
              SERVICES YOU AGREE THAT YOU ARE GOVERNED BY THE TERMS OF SERVICE
              AND PRIVACY POLICY OF THE RESPECTIVE WEB3 WALLET, AS FOLLOWS:
              <ul>
                <li>
                  METAMASK: TERMS OF USE (
                  <span style={{ color: "#2A7DE1" }}>
                    <u>https://metamask.io/terms.html</u>
                  </span>
                  ) AND PRIVACY POLICY (
                  <span style={{ color: "#2A7DE1" }}>
                    <u>https://metamask.io/privacy.html</u>
                  </span>
                  ) OF METAMASK.
                </li>
                <li>
                  FORTMATIC: TERMS OF USE ({" "}
                  <span style={{ color: "#2A7DE1" }}>
                    <u>https://fortmatic.com/legal/user-terms</u>
                  </span>
                  ) AND PRIVACY POLICY (
                  <span style={{ color: "#2A7DE1" }}>
                    <u>https://fortmatic.com/legal/user-privacy-policy</u>
                  </span>
                  )
                </li>
              </ul>
              Minty reserves the right to change or modify this Agreement at any
              time and at our sole discretion. If we make changes to this
              Agreement, we will provide notice of such changes, such as by
              sending an email notification, providing notice through the Site
              or updating the "Last Updated" date at the beginning of this
              Agreement. By continuing to access or use the Site, you confirm
              your acceptance of the revised Agreement and all of the terms
              incorporated therein by reference. We encourage you to review the
              Agreement frequently to ensure that you understand the terms and
              conditions that apply when you access or use the Site. If you do
              not agree to the revised Agreement, you may not access or use the
              Site.
            </Typography>
            <Typography className={classes.listDesc}>
              These Terms of Use apply, without limitation or reservation, to
              any of the services offered through the Platform to all Users on
              its Site.{" "}
            </Typography>
            <li className={classes.fontWeight700}>OWNERSHIP OF THE PLATFORM</li>
            <Typography className={classes.listDesc}>
              <ol type="A">
                <li>
                  Unless otherwise indicated in writing by us, the Site and all
                  content and other materials contained therein, including,
                  without limitation, Minty’s logo and all designs, text,
                  graphics, pictures, information, data, software, sound files,
                  other files and the selection and arrangement thereof
                  (collectively, "Content") are the proprietary property of
                  Minty or our affiliates, licensors or users, as applicable.
                </li>
                <li>
                  Notwithstanding anything to the contrary in this Agreement,
                  the Site and Content may include software components provided
                  by Minty or its affiliates or a third party that are subject
                  to separate license terms, in which case those license terms
                  will govern such software components.
                </li>
                <li>
                  Minty’s logo and any Minty product or service names, logos or
                  slogans that may appear on the Site or Service are trademarks
                  of Minty or our affiliates and may not be copied, imitated or
                  used, in whole or in part, without our prior written
                  permission. You will not use, copy, adapt, modify, prepare
                  derivative works of, distribute, license, sell, transfer,
                  publicly display, publicly perform, transmit, broadcast or
                  otherwise exploit the Site or Content. All other trademarks,
                  registered trademarks, product names and Minty names or logos
                  mentioned on the Site are the property of their respective
                  owners and may not be copied, imitated or used, in whole or in
                  part, without the permission of the applicable trademark
                  holder. Reference to any products, services, processes or
                  other information by name, trademark, manufacturer, supplier
                  or otherwise does not constitute or imply endorsement,
                  sponsorship or recommendation by Minty.
                </li>
                <li>
                  No licenses or rights are granted to you by implication or
                  otherwise under any intellectual property rights owned or
                  controlled by Minty or its licensors, except for the licenses
                  and rights expressly granted in these Terms of Use.
                </li>
              </ol>
            </Typography>
            <li className={classes.fontWeight700}>ACCOUNT OPENING</li>
            <Typography className={classes.listDesc}>
              <ol type="A">
                <li>Account Registration and Communication Preferences</li>
                <ol type="a">
                  <li>
                    If you wish to participate in an Auction for Digital Assets,
                    you will need to register for an account on the Site
                    ("Account"). By creating an Account, you agree to (a)
                    provide accurate, current and complete Account information
                    about yourself, (b) maintain and promptly update from time
                    to time as necessary your Account information, (c) maintain
                    the security of your password and accept all risks of
                    unauthorized access to your Account and the information you
                    provide to us, and (d) immediately notify us if you discover
                    or otherwise suspect any security breaches related to the
                    Site, or your Account. Minty will block multiple accounts of
                    the same User.
                  </li>
                  <li>Also, you agree that you will not:</li>
                  <ol type="i">
                    <li>
                      create another account if we’ve disabled one you had
                      unless you have our written permission first;
                    </li>
                    <li>
                      buy, sell, rent or lease access to your Account or
                      username unless you have our written permission first;
                    </li>
                    <li>
                      provide false information or impersonate another person or
                      company through your account;
                    </li>
                    <li>share your Account password with anyone;</li>
                    <li>
                      log in or try to log in to access the Site through
                      unauthorized third party applications or clients;
                    </li>
                    <li>
                      Use language that is offensive, vulgar, infringes
                      someone’s intellectual property rights or otherwise
                      violates the Terms of Use.
                    </li>
                  </ol>
                  <li>
                    You must be 18 years or older to use our Services. Minors
                    under 18 and at least 13 years of age are only permitted to
                    use our Services through an account owned by a parent or
                    legal guardian with their appropriate authorisation and
                    under their direct supervision. Children under 13 years are
                    not permitted to use Minty or the Services. You are
                    responsible for any and all account activity conducted by a
                    minor on your account.
                  </li>
                  <li>
                    Your account with Minty does not create any agency,
                    partnership, joint venture, employment or franchisee
                    relationship between you and Minty.
                  </li>
                  <li>
                    Minty may require you to provide additional information and
                    documents at the request of any competent authority or in
                    case of application of any applicable law or regulation,
                    including laws related to anti-money laundering of criminal
                    proceeds, counteracting financing of terrorism or sanctions
                    laws. Minty may also require you to provide additional
                    information and documents in cases where it has reasons to
                    believe that:
                  </li>
                  <ol type="i">
                    <li>
                      Your Account is being used for money laundering, financing
                      of terrorism, sanctions circumvention or for any other
                      financial crime activity;
                    </li>
                    <li>
                      You have concealed or reported false identification
                      information and other details; or
                    </li>
                    <li>
                      Transactions effected via your Account were effected in
                      breach of this Agreement.
                    </li>
                  </ol>
                  <li>
                    In such cases, Minty in its sole discretion, may pause or
                    cancel your Transactions until such additional information
                    and documents are reviewed by Minty and accepted as
                    satisfying the requirements of applicable law. If you do not
                    provide complete and accurate information and documents in
                    response to such a request, Minty may refuse to provide the
                    Content to you. By creating an Account, you also consent to
                    receive electronic communications from Minty (e.g., via
                    email or by posting notices to the Site). These
                    communications may include notices about your Account (e.g.,
                    password changes and other transactional information) and
                    are part of your relationship with us. You agree that any
                    notices, agreements, disclosures or other communications
                    that we send to you electronically will satisfy any legal
                    communication requirements, including, but not limited to,
                    that such communications be in writing. We may also send you
                    promotional communications via email, including, but not
                    limited to, newsletters, special offers, surveys and other
                    news and information we think will be of interest to you.
                    You may opt out of receiving these promotional emails at any
                    time by following the unsubscribe instructions provided
                    therein.
                  </li>
                  <li>
                    You must provide all equipment and software necessary to
                    connect to the Site and services, including but not limited
                    to, a mobile device that is suitable to connect with and use
                    Site and services, in cases where the Site offers a mobile
                    component. You are solely responsible for any fees,
                    including Internet connection or mobile fees, that you incur
                    when accessing the Site or services.
                  </li>
                  <li>
                    As stated above, your participation in the Auction is also
                    subject to any rules available on the Site.
                  </li>
                  <li>
                    We welcome and encourage you to provide feedback, comments,
                    bug reports and suggestions for improvements to the Site.
                    You may submit feedback by emailing us at hello@minty.art or
                    by other means of communication. Any feedback you submit to
                    us will be considered non-confidential and non-proprietary
                    to you. By submitting feedback to us, you grant us a
                    non-exclusive, worldwide, royalty-free, irrevocable,
                    sub-licensable, perpetual license to use and publish those
                    ideas and materials for any purpose, without compensation to
                    you.
                  </li>
                </ol>
                <li>License to Access and Use Our Site and Content</li>
                <ol type="a" start="10">
                  <li>
                    You are hereby granted a limited, non-exclusive,
                    non-transferable, revocable, non-sublicensable license to
                    access and use the Site and Content. However, such license
                    is subject to this Agreement and does not include any right
                    to (a) sell, resell or use commercially the Site or
                    Contents, (b) distribute, publicly perform or publicly
                    display any Content, (c) modify or otherwise make any
                    derivative uses of the Site or Content, or any portion
                    thereof, (d) use any data mining, robots or similar data
                    gathering or extraction methods, (e) download (other than
                    page caching) any portion of the Site or Content, except as
                    expressly permitted by us, and (f) use the Site or Content
                    other than for their intended purposes.
                  </li>
                  <li>
                    Minty does not claim ownership of your User Materials. You
                    are and remain the owner of your User Materials. However,
                    when you as a User create, upload, send, receive, post,
                    publish or store your User Materials, such as text, photos,
                    audio, visual works, video or other materials and
                    information ("User Materials"), on, through or in the Site,
                    you represent that (a) you either are the sole and exclusive
                    owner of all User Materials that you make available on or
                    through the Site; (b) you have all rights, licenses,
                    consents and releases that are necessary to grant to Minty
                    the rights in and to such User Materials, as contemplated
                    under these Terms, including without limitation, that you
                    have a royalty-free, perpetual, irrevocable, worldwide,
                    non-exclusive right (including any moral rights) and license
                    to use, license, reproduce, modify, adapt, publish,
                    translate, create derivative works from, distribute, derive
                    revenue or other remuneration from, and communicate to the
                    public, perform and display your User Materials (in whole or
                    in part) worldwide and/or to incorporate it in other works
                    in any form, media or technology now known or later
                    developed, for the full term of any worldwide intellectual
                    property right that may exist in your User Materials; (c)
                    neither the User Materials nor your posting, uploading,
                    publication, submission or transmittal of the User Materials
                    or Minty’s use of the User Materials (or any portion
                    thereof) will infringe, misappropriate or violate a third
                    party's patent, copyright, trademark, trade secret, moral
                    rights or other proprietary or intellectual property rights,
                    or rights of publicity or privacy, or result in the
                    violation of any applicable law or regulation.
                  </li>
                  <li>
                    By creating, uploading, posting, sending, receiving,
                    storing, or otherwise making available any User Materials
                    on, in or through the Site, you grant to Minty a
                    non-exclusive, worldwide, royalty-free, license to such User
                    Materials to access, use, store, copy, modify, prepare
                    derivative works of, distribute, publish, transmit, stream,
                    broadcast, and otherwise distribute such User Materials
                    solely for the purpose of providing and/or promoting the
                    Site, such as featuring your User Materials within our Site
                    and promoting it through our marketing ecosystem. To the
                    extent applicable and permissible by law, you hereby waive
                    any and all claims that you may now or hereafter have in any
                    jurisdiction to so-called “moral rights” or right of “droit
                    moral” with respect to any of your User Materials. You may
                    request to remove your User Materials in accordance with our
                    <Link href={routes.PRIVACY_POLICY} color="inherit">
                      <span style={{ color: "#2A7DE1" }}>
                        <u> Privacy Policy</u>
                      </span>
                    </Link>
                    , which is hereby incorporated by reference.
                  </li>
                  <li>
                    Hyperlinks: You are granted a limited, non-exclusive,
                    revocable, non-transferable, non-sublicensable right to
                    create a text hyperlink to the Site for non-commercial
                    purposes, provided that such link does not portray Minty or
                    our affiliates or any of our products or services in a
                    false, misleading, derogatory or otherwise defamatory
                    manner, and provided further that the linking site does not
                    contain any adult or illegal material or any material that
                    is offensive, harassing or otherwise objectionable. This
                    limited right may be revoked at any time. You may not use a
                    logo or other proprietary graphic of Minty to link to the
                    Site or Content without our express written permission.
                    Further, you may not use, frame or utilize framing
                    techniques to enclose any Minty trademark, logo or other
                    proprietary information, including the images found on the
                    Site, the content of any text or the layout or design of any
                    page, or form contained on a page, on the Site without our
                    express written consent.
                  </li>
                  <li>
                    f you sell your artwork to another User on the Site, then
                    the license granted in Section 4 -B.j above with respect to
                    such artwork shall survive the termination of this
                    Agreement.
                  </li>
                </ol>
              </ol>
            </Typography>
            <li className={classes.fontWeight700}>YOUR USER MATERIALS</li>
            <ol type="A">
              <li>User Materials Policy</li>
              <ol type="a">
                <li>
                  Minty has great respect for intellectual property rights and
                  is committed to following appropriate legal procedures to
                  remove infringing User Materials from the Site.
                </li>
                <li>
                  There are certain types of User Materials that could be
                  considered inappropriate, false or misleading that Minty does
                  not want posted on Minty’s Site for legal reasons or
                  otherwise. You agree that you will not post any User Materials
                  that are abusive, threatening, defamatory, obscene, vulgar or
                  otherwise offensive or in violation of these Terms of Use. You
                  also agree not to post any content that is false and
                  misleading or uses the Site in a manner that is fraudulent or
                  deceptive.{" "}
                </li>
                <li>
                  As a matter of policy, we do not tolerate any User Materials
                  posted to the Site that, in our sole discretion: infringes
                  intellectual property rights; violates English law;
                  constitutes child pornography; or is obscene or defamatory. We
                  intend to, in good faith, remove, disable or restrict access
                  to, or the availability of, User Materials that, in our sole
                  discretion, we deem infringing, racist, obscene, obscene as to
                  minors, child pornography, lewd, lascivious, filthy,
                  excessively violent, harassing, or otherwise objectionable.
                  The provisions of this section are intended to implement this
                  policy but are not intended to impose a contractual obligation
                  on us to undertake or refrain from any particular course of
                  conduct.
                </li>
                <li>
                  We have the right to remove or refuse to post any User
                  Materials (a) for any or no reason in our sole discretion; (b)
                  take any action with respect to any User Materials that we
                  deem necessary or appropriate in our sole discretion,
                  including if we believe that such User Materials violates the
                  Terms of Use, infringes any intellectual property right of any
                  person or entity, threatens the personal safety of users of
                  the Site or the public, or could create liability for Minty;
                  (c) disclose your identity or other information about you to
                  any third party who claims that material posted by you
                  violates their rights, including their intellectual property
                  rights or their right to privacy; (d) take appropriate legal
                  action, including without limitation, referral to law
                  enforcement, for any illegal or unauthorized use of the Site;
                  (e) terminate or suspend your access to all or part of the
                  Site for any or no reason, including without limitation, any
                  violation of these Terms and Conditions. Without limiting the
                  foregoing, we have the right to cooperate fully with any law
                  enforcement authorities or court order requesting or directing
                  us to disclose the identity or other information of anyone
                  posting any materials on or through the Site.{" "}
                </li>
                <li>
                  If your User Materials are alleged to infringe another
                  person’s intellectual property, we will take appropriate
                  action, such as disabling it if we receive proper notice or
                  terminating your account if you are found to be a repeat
                  infringer. We will notify you if any of that happens.
                </li>
                <li>
                  You waive and hold harmless Minty and its affiliates,
                  licensees and service providers from any claims resulting from
                  any action taken by any of the foregoing parties during or
                  taken as a consequence of, investigations by either such
                  parties or law enforcement authorities.
                </li>
                <li>
                  However, we cannot undertake to review all User Materials
                  before it is posted on the Site, and cannot ensure prompt
                  removal of objectionable User Material after it has been
                  posted. Accordingly, we assume no liability for any action
                  regarding transmissions, communications, or content provided
                  by any User or third party.
                </li>
                <li>
                  If User Materials that you own or have rights to have been
                  posted to the Site without your permission and you want it
                  removed, please contact hello@minty.art.{" "}
                </li>
              </ol>
              <li>Third Party User Materials Complaints</li>
              <ol type="a" start="9">
                <li>
                  If you believe that someone has posted User Materials that
                  violates this policy (other than in cases of copyright
                  infringement, which is addressed separately below), we ask you
                  to promptly notify us by email at the following address:
                  [email address]. You must use this address if you want to
                  ensure that your complaint is actually received by the
                  appropriate person charged with investigating alleged policy
                  violations. In order to allow us to respond effectively,
                  please provide us with as much detail as possible, including:
                  (1) the nature of the right infringed or violated (including
                  the registration numbers of any registered trademarks or
                  patents allegedly infringed); (2) all facts which lead you to
                  believe that a right has been violated or infringed; (3) the
                  precise location where the offending User Materials can be
                  found; (4) any grounds to believe that the person who posted
                  the User Materials was not authorized to do so or did not have
                  a valid defense (including the defense of fair use); and (5)
                  if known, the identity of the person or persons who posted the
                  infringing or offending User Materials. By lodging a
                  complaint, you agree that the substance of your complaint
                  shall be deemed to constitute a representation made under
                  penalty of perjury under the laws of England. In addition, you
                  agree, at your own expense, to defend and indemnify us and
                  hold us harmless against all claims which may be asserted
                  against us, and all losses incurred, as a result of your
                  complaint and/or our response to it. We expect visitors to
                  take responsibility for their own actions and cannot assume
                  liability for any acts of third-parties which take place on
                  the Minty site. You waive any and all claims or remedies that
                  you might otherwise be able to assert against us under any
                  theory of law (including, without limitation, intellectual
                  property laws) that arise out of or relate in any way to the
                  User Materials at the site or our response, or failure to
                  respond, to a complaint. You agree that we have the right (but
                  not the obligation) to investigate any complaint received. By
                  reserving this right, we do not undertake any responsibility
                  in fact to investigate complaints or to remove, disable or
                  restrict access to or the availability of User Materials. We
                  support free speech on the Internet and therefore will not act
                  on complaints that we believe, in our subjective judgment, to
                  be deficient. If you believe that User Materials remain on the
                  site that violate your rights, your sole remedy shall be
                  against the person(s) responsible for posting or storing it,
                  not against us.
                </li>
                <li>
                  [COUNTRY] Copyright Act (“CA”) Compliance. Pursuant to CA, all
                  claims alleging copyright infringement for material that you
                  believe to be residing on the Site should be promptly sent in
                  the form of written notice to our designated agent:
                  hello@minty.art (the “Designated Agent”). Valid notification
                  must be a written communication that includes all of the
                  following elements:
                </li>
                <ol type="i">
                  <li>
                    Signature of copyright owner or person authorized to act on
                    behalf of the owner;
                  </li>
                  <li>
                    Identification of copyrighted work claimed to be infringed;
                  </li>
                  <li>
                    Identification of the material claimed to be infringing or
                    to be the subject of infringing activity and information
                    reasonably sufficient to permit the service provider to
                    locate the material;
                  </li>
                  <li>
                    Information reasonably sufficient to permit the service
                    provider to contact the complaining party (address, phone
                    number and, if available, email address);
                  </li>
                  <li>
                    A statement that the complaining party has a good faith
                    belief that use of the material in the manner complained is
                    not authorized by the copyright owner, its agent, or the
                    law; and
                  </li>
                  <li>
                    A statement that the information in the notification is
                    accurate, and under penalty of perjury, that the complaining
                    party is authorized to act on behalf of the owner of the
                    exclusive right allegedly being infringed.
                  </li>
                </ol>
                <li>
                  It is our policy that, upon receiving a proven-valid CA
                  notice, we will remove or disable access to allegedly
                  infringing material.
                </li>
                <li>
                  If a notice of alleged copyright infringement under the CA has
                  been wrongly filed against you, you may submit a
                  counter-notification to our Designated Agent. A valid
                  counter-notification must be a written communication that
                  includes all of the following elements:
                </li>
                <ol type="i">
                  <li>A physical or electronic signature;</li>
                  <li>
                    Identification of the material that has been removed or to
                    which access has been disabled and the location at which the
                    material appeared before it was removed or access to it was
                    disabled;
                  </li>
                  <li>
                    A statement under penalty of perjury that you have a good
                    faith belief that the material was removed or disabled as a
                    result of mistake or misidentification; and
                  </li>
                  <li>Your name, address and telephone number.</li>
                </ol>
                <li>
                  Upon receipt of a valid counter-notification, we will forward
                  it to the original complainant who submitted the CA notice
                  alleging copyright infringement. The original complainant will
                  then have ten days to notify us that it has filed a lawsuit
                  relating to the allegedly infringing material otherwise we
                  will restore the removed material or cease disabling access to
                  it.
                </li>
                <li>
                  Repeat Infringer Policy. It is our policy to terminate the
                  account of any repeat copyright infringer in appropriate
                  circumstances.
                </li>
              </ol>
            </ol>
            <li className={classes.fontWeight700}>
              OWNERSHIP OF USER MATERIAL
            </li>
            <ol type="A">
              <li>
                Owning a Digital Asset is analogous to owning a physical
                artwork, such as an original painting or print.
              </li>

              <li>
                When the Digital Asset is purchased or transferred by a User,
                the Ethereum-based non fungible token (the “NFT”) that
                represents the artwork is automatically transferred to the other
                User’s Ethereum address.
              </li>
            </ol>
            <li className={classes.fontWeight700}>USER CONDUCT</li>
            <ol type="A">
              <li>
                You agree that you will not violate any law, contract,
                intellectual property or other third party right, and that you
                are solely responsible for your conduct, while accessing or
                using the Site or participating in the Auction. You agree that
                you will abide by this Agreement and will not:
              </li>
              <ol type="a">
                <li>Provide false or misleading information to Minty;</li>
                <li>
                  Use or attempt to use another user’s Account without
                  authorization from such user and Minty;
                </li>
                <li>
                  Use the Site in any manner that could interfere with, disrupt,
                  negatively affect or inhibit other users from fully enjoying
                  the Site, or that could damage, disable, overburden or impair
                  the functioning of the Site in any manner;
                </li>
                <li>
                  Reverse engineer any aspect of the Site, or do anything that
                  might discover source code or bypass or circumvent measures
                  employed to prevent or limit access to any Service, area or
                  code of the Site;
                </li>
                <li>
                  Attempt to circumvent any content-filtering techniques we
                  employ, or attempt to access any feature or area of the Site
                  that you are not authorized to access;
                </li>

                <li>
                  Use any robot, spider, crawler, scraper, script, browser
                  extension, offline reader or other automated means or
                  interface not authorized by us to access the Site, extract
                  data or otherwise interfere with or modify the rendering of
                  Site pages or functionality;
                </li>
                <li>
                  Use data collected from our Site to contact individuals,
                  companies, or other persons or entities;
                </li>
                <li>
                  Use data collected from our Site for any direct marketing
                  activity (including without limitation, email marketing, SMS
                  marketing, telemarketing, and direct marketing);
                </li>
                <li>
                  Bypass or ignore instructions that control all automated
                  access to the Site; or
                </li>
                <li>
                  Use the Site for any illegal or unauthorized purpose, or
                  engage in, encourage or promote any activity that violates
                  this Agreement.
                </li>
                <li>
                  Use the Ethereum Platform and/or the Site to carry out any
                  illegal activities, including but not limited to money
                  laundering, terrorist financing, sanctions circumvention or
                  deliberately engaging in activities designed to adversely
                  affect the performance of the Ethereum Platform or the Site.
                </li>
              </ol>
            </ol>
            <li className={classes.fontWeight700}>FEES AND PAYMENT</li>
            <ol type="A">
              <li>
                If you elect to purchase, trade, or create art on the Site, or
                with or from other Users, any financial transactions that you
                engage in will be conducted solely through the Ethereum network
                via any compatible Web3 Wallets. We will have no insight into or
                control over these payments or transactions, nor do we have the
                ability to reverse any transactions.{" "}
              </li>
              <li>
                Minty has no liability to you or any third party for any claims
                or damages that may arise as a result of any transactions that
                you engage in via the Site, or using the Smart Contracts, or any
                other transactions that you conduct via the Ethereum Network or
                any of the Web3 Wallets engaged in the relevant transactions.
              </li>
              <li>
                You are required to pay the transaction fee (a “Gas Fee”)
                required in the Ethereum network to process each transaction.
              </li>
              <li>
                In addition to the Gas Fee, each time you utilize a Smart
                Contract to conduct a transaction with another User via the
                Site, you authorise us to collect a commission of the total
                value of such transaction (each, a “Commission”) and for all
                proceeding secondary sales of the NFT in the Site. You
                acknowledge and agree that the Commissions will be transferred
                directly to us through the Ethereum network as part of your
                payment.
              </li>
              <li>
                You will be solely responsible to pay any and all sales, use,
                value-added and other taxes, duties and assessments (except
                taxes on our net income) now or hereafter claimed or imposed by
                any governmental authority (collectively, “Taxes”) associated
                with your use of the Site, including any Taxes that become
                payable as the result of your ownership, transfer, or creation
                of any artworks.
              </li>
              <li>
                Except for income taxes levied on Minty, you: (i) will pay or
                reimburse us for all local or other taxes and assessments of any
                jurisdiction, including value added taxes and taxes as required
                by international tax treaties, customs or other import or export
                taxes, and amounts levied in lieu thereof based on charges set,
                services performed or payments made hereunder, as are now or
                hereafter may be imposed under the authority of any national,
                state, local or any other taxing jurisdiction; and (ii) shall
                not be entitled to deduct the amount of any such taxes, duties
                or assessments from payments made to us pursuant to these Terms.
              </li>
            </ol>
            <li className={classes.fontWeight700}>ACCEPTANCE OF RISK</li>
            <Typography className={classes.desc}>
              You accept and acknowledge:
            </Typography>
            <ol type="a">
              <li>
                The prices of blockchain generated assets are extremely
                volatile. Fluctuations in the price of other digital assets
                could materially and adversely affect the Digital Assets, which
                may also be subject to significant price volatility. We cannot
                guarantee that any purchasers of Digital Assets will not lose
                money.
              </li>
              <li>
                You are solely responsible for determining what, if any, taxes
                apply to your Digital Assets transactions. Neither Minty nor any
                other Minty Party is responsible for determining the taxes that
                apply to Digital Assets transactions.
              </li>
              <li>
                Our Site does not store, send, or receive Digital Assets. This
                is because Digital Assets exist only by virtue of the ownership
                record maintained on its supporting blockchain. Any transfer of
                Digital Assets occurs within the supporting blockchain and not
                on this Site.
              </li>
              <li>
                There are risks associated with using cryptocurrencies,
                including but not limited to, the risk of hardware, software and
                Internet connections, the risk of malicious software
                introduction, and the risk that third parties may obtain
                unauthorized access to information stored within your wallet.
                You accept and acknowledge that Minty will not be responsible
                for any communication failures, disruptions, errors, distortions
                or delays you may experience when using the Digital Assets,
                however caused.
              </li>
              <li>
                A lack of use or public interest in the creation and development
                of distributed ecosystems could negatively impact the
                development of the broader ecosystem and therefore the potential
                utility or value of Digital Assets.
              </li>
              <li>
                The regulatory regime governing blockchain technologies,
                cryptocurrencies, and tokens is uncertain, and new regulations
                or policies may materially adversely affect the development of
                the Auction and/or Site and the utility of Digital Assets.
              </li>
              <li>
                The Site will rely on third-party platforms such as MetaMask to
                perform the transactions for the Auction of Digital Assets. If
                a) we are unable to maintain a good relationship with such
                platform providers; b) the terms and conditions or pricing of
                such platform providers change; c) we violate or cannot comply
                with the terms and conditions of such platforms; or d) any of
                such platforms loses market share or falls out of favor or is
                unavailable for a prolonged period of time, access to and use of
                the Site will suffer.
              </li>
            </ol>
            <li className={classes.fontWeight700}>INDEMNIFICATION</li>
            <ol type="A">
              <li>Indemnification</li>
              <Typography className={classes.desc}>
                To the fullest extent permitted by applicable law, you agree to
                indemnify, defend and hold harmless Minty, and our respective
                past, present and future employees, officers, directors,
                contractors, consultants, equity holders, suppliers, vendors,
                service providers, parent companies, subsidiaries, affiliates,
                agents, representatives, predecessors, successors and assigns
                (individually and collectively, the "Minty Parties"), from and
                against all actual or alleged third party claims, damages,
                awards, judgments, losses, liabilities, obligations, penalties,
                interest, fees, expenses (including, without limitation,
                attorneys’ fees and expenses) and costs (including, without
                limitation, court costs, costs of settlement and costs of
                pursuing indemnification and insurance), of every kind and
                nature whatsoever, whether known or unknown, foreseen or
                unforeseen, matured or unmatured, or suspected or unsuspected,
                in law or equity, whether in tort, contract or otherwise
                (collectively, "Claims"), including, but not limited to, damages
                to property or personal injury, that are caused by, arise out of
                or are related to (a) your use or misuse of the Site, Content or
                Digital Assets, (b) any feedback you provide, (c) your violation
                of this Agreement, and (d) your violation of the rights of a
                third party, including another User or any of the Web3 Wallets.
                You agree to promptly notify Minty of any third party Claims and
                cooperate with the Minty Parties in defending such claims. You
                further agree that the Minty Parties shall have control of the
                defense or settlement of any third party Claims. THIS INDEMNITY
                IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER INDEMNITIES SET
                FORTH IN A WRITTEN AGREEMENT BETWEEN YOU AND MINTY.
              </Typography>
            </ol>
            <li className={classes.fontWeight700}>THIRD PARTY CONTENT</li>
            <ol type="A">
              <li>
                The Site may contain links to third-party websites ("Third-Party
                Websites") and applications ("Third-Party Applications"). When
                you click on a link to a Third-Party Website or Third-Party
                Application, we will not warn you that you have left our Site
                and are subject to the Agreement and conditions (including
                privacy policies) of another website or destination. Such
                Third-Party Websites and Third-Party Applications are not under
                the control of Minty. Minty is not responsible for any
                Third-Party Websites or Third-Party Applications. Minty provides
                these Third-Party Websites and Third-Party Applications only as
                a convenience and does not review, approve, monitor, endorse,
                warrant, or make any representations with respect to Third-Party
                Websites or Third-Party Applications, or their products or
                services. You use all links in Third-Party Websites, and
                Third-Party Applications at your own risk. When you leave our
                Site, our Agreement and policies no longer govern. You should
                review applicable agreements and policies, including privacy and
                data gathering practices, of any Third-Party Websites or
                Third-Party Applications, and should make whatever investigation
                you feel necessary or appropriate before proceeding with any
                transaction with any third party.
              </li>
            </ol>
            <li className={classes.fontWeight700}>TERMINATION</li>
            <ol type="A">
              <li>Termination by you</li>
              <ol type="a">
                <li>
                  You may terminate your Account with Minty at any time from
                  your Account settings.
                </li>
                <li>
                  Terminating your Account will not affect the availability of
                  some of your User Materials that you posted through the Site
                  prior to termination. However, you may lose any information
                  associated with your Account.
                </li>
              </ol>
              <li>Termination by Minty</li>
              <ol type="a">
                <li>
                  We may terminate or suspend your Account (and any Accounts
                  Minty determines that are related to your Account) and your
                  access to the Site should have reason to believe you, your
                  User Materials or your use of the Services violate our Terms
                  of Use.
                </li>
                <li>
                  You do not have a contractual or legal right to continue to
                  use or access our Site and our Services.
                </li>
                <li>
                  Generally, Minty will notify you that your Account has been
                  terminated or suspended, unless you’ve repeatedly violated our
                  Terms of Use or we have legal or regulatory reasons preventing
                  us from notifying you.
                </li>
                <li>
                  Terminating your Account will not affect the availability of
                  some of your User Materials that you posted through the Site
                  prior to termination. However, you may lose any information
                  associated with your Account.
                </li>
              </ol>
              <li>Discontinuation of Services</li>
              <ol type="a">
                <li>
                  Minty reserves the right to change, suspend or discontinue any
                  of the Services and access to the Site at any time, for any
                  reason, including those laid out in Minty’s policies under the
                  Terms of Use.
                </li>
                <li>
                  We will not be liable to you for the effect that any changes
                  to the Services or the Site may have on you, including your
                  income or your ability to generate revenue through the
                  Services or the Site.
                </li>
              </ol>
            </ol>
            <li className={classes.fontWeight700}>WARRANTIES</li>
            <Typography className={classes.listDesc}>
              MINTY IS DEDICATED TO MAKING OUR SERVICES THE BEST WAY THEY CAN BE
              AND YOU UNDERSTAND THAT, THE SITE, CONTENT CONTAINED THEREIN, AND
              DIGITAL ASSETS LISTED THEREIN ARE PROVIDED ON AN "AS IS" AND "AS
              AVAILABLE" BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. MINTY (AND ITS SUPPLIERS) MAKE NO
              WARRANTY THAT THE SITE: A) WILL MEET YOUR REQUIREMENTS; (B) WILL
              BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
              BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR
              SAFE. MINTY DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS
              OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR
              CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              TITLE AND NON-INFRINGEMENT AS TO THE SITE, CONTENT CONTAINED
              THEREIN. MINTY DOES NOT REPRESENT OR WARRANT THAT CONTENT ON THE
              SITE IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE. WE
              WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN
              OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE
              SITE. WHILE MINTY ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE
              SITE AND CONTENT SAFE, MINTY CANNOT AND DOES NOT REPRESENT OR
              WARRANT THAT A) THE SITE, CONTENT, ANY DIGITAL ASSETS LISTED ON
              OUR SITE OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS; B) THE SERVICES WILL BE SECURE OR AVAILABLE AT ANY
              PARTICULAR TIME OR LOCATION; C) THE RESULTS OF USING THE SERVICES
              WILL MEET YOUR EXPECTATIONS. WE CANNOT GUARANTEE THE SECURITY OF
              ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT
              SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER
              THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF
              SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
            </Typography>
            <Typography className={classes.listDesc}>
              WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKE
              NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE
              DIGITAL ASSETS OF INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES
              OR CLAIMS ARISING FROM: (A) USER ERROR SUCH AS FORGOTTEN
              PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED
              ADDRESSES; (B) SERVER FAILURE OR DATA LOSS; (C) CORRUPTED WALLET
              FILES; (D) UNAUTHORIZED ACCESS TO APPLICATIONS; (E) ANY
              UNAUTHORIZED THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION
              THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF
              ATTACK AGAINST THE SITE OR DIGITAL ASSETS. YOU USE THE SERVICES
              SOLELY AT YOUR OWN RISK.
            </Typography>
            <Typography className={classes.listDesc}>
              DIGITAL ASSETS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY
              VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ETHEREUM NETWORK.
              ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY DIGITAL ASSET OCCURS
              ON THE DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM. WE DO
              NOT GUARANTEE THAT MINTY OR ANY MINTY PARTY CAN EFFECT THE
              TRANSFER OF TITLE OR RIGHT IN ANY DIGITAL ASSETS.
            </Typography>
            <Typography className={classes.listDesc}>
              MINTY IS NOT RESPONSIBLE FOR SUSTAINED CASUALTIES DUE TO
              VULNERABILITY OR ANY KIND OF FAILURE, ABNORMAL BEHAVIOR OF
              SOFTWARE (E.G., WALLET, SMART CONTRACT), BLOCKCHAINS OR ANY OTHER
              FEATURES OF THE DIGITAL ASSETS. MINTY IS NOT RESPONSIBLE FOR
              CASUALTIES DUE TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR
              NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING
              DIGITAL ASSETS INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY OTHER
              ISSUES HAVING FUND LOSSES AS A RESULT.
            </Typography>
            <Typography className={classes.listDesc}>
              NOTHING IN THIS AGREEMENT SHALL EXCLUDE OR LIMIT LIABILITY OF
              EITHER PARTY FOR FRAUD, DEATH OR BODILY INJURY CAUSED BY
              NEGLIGENCE, VIOLATION OF LAWS, OR ANY OTHER ACTIVITY THAT CANNOT
              BE LIMITED OR EXCLUDED BY LEGITIMATE MEANS.
            </Typography>
            <Typography className={classes.listDesc}>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
              WARRANTIES IN CONTRACTS WITH CONSUMERS, SO THE ABOVE EXCLUSION MAY
              NOT APPLY TO YOU.
            </Typography>
            <li className={classes.fontWeight700}>LIMITATION OF LIABILITY</li>
            <Typography className={classes.listDesc}>
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL MINTY BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY
              INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR
              PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT, THE SITE, PRODUCTS
              OR THIRD PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO
              LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
              SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND
              WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT,
              OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF MINTY HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF,
              THE SITES, PRODUCTS OR THIRD PARTY SITES AND PRODUCTS ARE AT YOUR
              OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR
              ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF
              DATA RESULTING THEREFROM.{" "}
            </Typography>
            <Typography className={classes.listDesc}>
              {" "}
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO
              EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF MINTY ARISING OUT
              OF OR IN ANY WAY RELATED TO THIS AGREEMENT, THE ACCESS TO AND USE
              OF THE SITE, CONTENT, DIGITAL ASSETS, OR ANY PRODUCTS OR SERVICES
              PURCHASED ON THE SITE EXCEED THE AMOUNT RECEIVED BY MINTY FROM THE
              SALE OF DIGITAL ASSETS THAT ARE THE SUBJECT OF THE CLAIM.
            </Typography>
            <Typography className={classes.listDesc}>
              {" "}
              THE FOREGOING LIMITATIONS OF LIABILITY SHALL NOT APPLY TO
              LIABILITY OF MINTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A
              MEMBER OF MINTY’S NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A
              MEMBER OF MINTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.
            </Typography>
            <Typography className={classes.listDesc}>
              {" "}
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR
              EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS ALSO LIMIT
              DISCLAIMERS OR LIMITATIONS OF LIABILITY FOR PERSONAL INJURY FROM
              CONSUMER PRODUCTS, SO THIS LIMITATION MAY NOT APPLY TO PERSONAL
              INJURY CLAIMS.
            </Typography>
            <li className={classes.fontWeight700}>MODIFICATIONS TO THE SITE</li>
            <Typography className={classes.listDesc}>
              {" "}
              We reserve the right in our sole discretion to modify, suspend or
              discontinue, temporarily or permanently, the site (or any features
              or parts thereof) or suspend or discontinue the auction at any
              time and without liability therefor.
            </Typography>
            <li className={classes.fontWeight700}>DISPUTE RESOLUTION </li>
            <Typography className={classes.listDesc}>
              {" "}
              Please read the following arbitration agreement in this Section
              ("Arbitration Agreement") carefully. It requires you to arbitrate
              disputes with Minty and limits the manner in which you can seek
              relief from us.
            </Typography>
            <ol type="a">
              <li>
                <u>Applicability of Arbitration Agreement.</u> You agree that
                any dispute or claim relating in any way to the Token Usage
                Agreement, your access or use of the Site, to any products sold
                or distributed through the Site, or to any aspect of your
                relationship with Minty will be resolved by binding arbitration,
                rather than in court, except that (1) you may assert claims in
                small claims court if your claims qualify; and (2) you or Minty
                may seek equitable relief in court for infringement or other
                misuse of intellectual property rights (such as trademarks,
                trade dress, domain names, trade secrets, copyrights, and
                patents).
              </li>
              <li>
                <u>Arbitration Rules and Forum.</u> The arbitration will be
                conducted by the Singapore International Arbitration Centre
                (“SIAC”), an established alternative dispute resolution
                provider. The SIAC Arbitration Rules govern the interpretation
                and enforcement of this Arbitration Agreement. To begin an
                arbitration proceeding, you must send a letter requesting
                arbitration and describing your claim to our registered agent
                [include name and address of registered agent here]. The
                arbitration will be conducted by the Singapore International
                Arbitration Centre, an established alternative dispute
                resolution provider.
              </li>
              <li>
                <u>Authority of Arbitrator.</u> The arbitrator shall have
                exclusive authority to (a) determine the scope and
                enforceability of this Arbitration Agreement and (b) resolve any
                dispute related to the interpretation, applicability,
                enforceability or formation of this Arbitration Agreement
                including, but not limited to any claim that all or any part of
                this Arbitration Agreement is void or voidable. The arbitration
                will decide the rights and liabilities, if any, of you and
                Minty. The arbitration proceeding will not be consolidated with
                any other matters or joined with any other cases or parties. The
                arbitrator shall have the authority to grant motions dispositive
                of all or part of any claim. The arbitrator shall have the
                authority to award monetary damages and to grant any
                non-monetary remedy or relief available to an individual under
                applicable law, the arbitral forum’s rules, and the Agreement
                (including the Arbitration Agreement). The arbitrator shall
                issue a written award and statement of decision describing the
                essential findings and conclusions on which the award is based,
                including the calculation of any damages awarded. The arbitrator
                has the same authority to award relief on an individual basis
                that a judge in a court of law would have. The award of the
                arbitrator is final and binding upon you and us.
              </li>
              <li>
                <u>Waiver of Jury Trial.</u> YOU AND MINTY HEREBY WAIVE ANY
                CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A
                TRIAL IN FRONT OF A JUDGE OR A JURY. You and Minty are instead
                electing that all claims and disputes shall be resolved by
                arbitration under this Arbitration Agreement. An arbitrator can
                award on an individual basis the same damages and relief as a
                court and must follow this Agreement as a court would. However,
                there is no judge or jury in arbitration, and court review of an
                arbitration award is subject to very limited review.
              </li>
              <li>
                <u>Waiver of Class or Other Non-Individualized Relief.</u>ALL
                CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION
                AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A
                OR COLLECTIVE CLASS BASIS, ONLY INDIVIDUAL RELIEF IS AVAILABLE,
                AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE
                ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR
                USER. If a decision is issued stating that applicable law
                precludes enforcement of any part of this subsection’s
                limitations as to a given claim for relief, then that claim must
                be severed from the arbitration and brought in the courts
                located in Singapore. All other claims shall be arbitrated.
              </li>
              <li>
                <u>30-Day Right to Opt Out.</u>You have the right to opt out of
                the provisions of this Arbitration Agreement by sending written
                notice of your decision to opt out to the following
                address:hello@minty.art within 30 days after first becoming
                subject to this Arbitration Agreement. You may also submit your
                decision top [email]. Your notice must include your name and
                address, the email address you used to set up your account (if
                you have one), and an unequivocal statement that you want to opt
                out of this Arbitration Agreement. If you opt out of this
                Arbitration Agreement, all other parts of this Agreement will
                continue to apply to you. Opting out of this Arbitration
                Agreement has no effect on any other arbitration agreements that
                you may currently have, or may enter in the future, with us.
              </li>
              <li>
                <u>Severability.</u> If any part or parts of this Arbitration
                Agreement are found under the law to be invalid or
                unenforceable, then such specific part or parts shall be of no
                force and effect and shall be severed and the remainder of the
                Arbitration Agreement shall continue in full force and effect.
              </li>
              <li>
                <u>Survival of Agreement.</u>his Arbitration Agreement will
                survive the termination of your relationship with Minty.
              </li>
              <li>
                <u>Modification.</u> Notwithstanding any provision in this
                Agreement to the contrary, we agree that if Minty makes any
                future material change to this Arbitration Agreement, you may
                reject that change within thirty (30) days of such change
                becoming effective by writing to Minty at the following address:
                hello@minty.artGoverning Law and Venue This Agreement, your
                access to and use of the Site and Content, and your
                participation in the Auction shall be governed by and construed
                and enforced in accordance with the laws of England, without
                regard to conflict of law rules or principles of England, or any
                other jurisdiction) that would cause the application of the laws
                of any other jurisdiction. Any Dispute between the parties that
                is not subject to arbitration, shall be resolved in Singapore.
              </li>
            </ol>
            <li className={classes.fontWeight700}>PRIVACY POLICY</li>

            <Typography className={classes.listDesc}>
              Both Minty and Sellers process members’ personal information (for
              example Buyerƒ’s name, email address and delivery address) are
              considered separate and independent data controllers of Buyers’
              personal information. That means that each party is responsible
              for the personal information it processes in providing the
              Services. For example, if a Seller accidentally discloses a
              Buyer’s name and email address when fulfilling another Buyer’s
              order, the Seller and not Minty, will be responsible for that
              unauthorized disclosure.
            </Typography>
            <Typography className={classes.listDesc}>
              If, however, Minty and Sellers are found to be joint data
              controllers of Buyers’ personal information and, if Minty is sued,
              fined, or otherwise incurs expenses because of something that you
              did as a joint data controller of a Buyer’s personal information,
              you agree to indemnify Minty for the expenses it occurs in
              connection with your processing of Buyers’ personal information.
            </Typography>
            <Typography className={classes.listDesc}>
              Please refer to our
              <Link href={routes.PRIVACY_POLICY} color="inherit">
                <span style={{ color: "#2A7DE1" }}>
                  <u> Privacy Policy</u>
                </span>
              </Link>{" "}
              for information about how we collect, use and share information
              about you.
            </Typography>
            <li className={classes.fontWeight700}>MISCELLANEOUS</li>
            <Typography className={classes.listDesc}>
              This Agreement constitutes the entire agreement between you and
              Minty relating to your access to and use of the Sites and Content,
              and your participation in the Auction. This Agreement, and any
              rights and licenses granted hereunder, may not be transferred or
              assigned by you without the prior written consent of Minty prior,
              concurrent or subsequent circumstance, and Minty’s failure to
              assert any right or provision under this Agreement shall not
              constitute a waiver of such right or provision. Except as
              otherwise provided herein, this Agreement is intended solely for
              the benefit of the parties and is not intended to confer third
              party beneficiary rights upon any other person or entity.
            </Typography>
          </ol>
        </Box>
      </Container>
      {/* <iframe src="https://docs.google.com/document/d/1ZnMV7MX74LWVWtYh_5lDa-iErHL2CTj19D4gudWs9WQ/edit" width='99%' height='714'></iframe> */}
    </>
  );
}
