import React, { Fragment } from "react";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import pdf from "././../../assets/pdf/PrivacyPolicy.pdf";
import { PrivacyPolicyText } from "../../constants/privacyData";
// import { PrivacyPolicyText } from "./htmlPagesForMinty/pp.html";

const userStyles = makeStyles({
  container: {
    paddingTop: "50px",
  },

  desc: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    color: "#fff",
    fontSize: "16px",
    maxWidth: "100%",
    margin: "20px 0px",
    "& li":{
      margin:"15px 0px 15px 50px"
    }
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
    fontWeight: 700,
  },
});

export default function Privacy(props) {
  const classes = userStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box>
          <Typography className={classes.desc}>
            This Privacy Policy (“Policy”) describes how Minty.Art (“Minty” or
            “we” or “our” or “us”) collects, stores, shares and uses information
            and your choices about privacy when you use our website, products
            and services (collectively, “Services”). Your privacy is important
            to us, and we ask that you read this Policy carefully to be informed
            about our practices. If you see an undefined term in this Privacy
            Policy, it has the same definition as in our T&Cs
          </Typography>
          <Typography className={classes.desc}>
            This Policy is part of our T&Cs. Any capitalized terms that are used
            but not defined in this Policy have the same meaning given to them
            in our T&Cs. By accessing or using our Services in any way, you
            agree that your information may be collected, stored, shared, and
            used as described in this Policy and our T&Cs.
          </Typography>
          <Typography className={classes.desc}>
            By submitting any Personal Information through our Site or by using
            our Services, you agree to the terms of this Privacy Policy and you
            expressly consent to the collection, use and disclosure of your
            Personal Information in accordance with this Policy. You may
            withdraw consent at any time in writing, however such withdrawal
            does not negate our right to process your data prior to your
            withdrawal.
          </Typography>
        </Box>

        <Box>
          <Typography className={classes.heading}>
            WHEN THIS PRIVACY POLICY APPLIES
          </Typography>
          <Typography className={classes.desc}>
            This Policy applies to all of our Services, regardless of how you
            use them, and whether or not you register for a Minty account. This
            Policy applies to how we collect, store, share, and use information.
            This Policy does not apply to any entity that we do not own or
            control, or to any person that we do not employ or manage. If, at
            any time during the course of using our Services, you are directed
            to a third-party site, you understand and agree that the policies of
            the third-party site govern.
          </Typography>
        </Box>

        <Box>
          <Typography className={classes.heading}>
            TYPES OF INFORMATION WE PROCESS{" "}
          </Typography>
          <Typography className={classes.desc}>
            <span className={classes.subHeading}>
              Information You Provide :
            </span>{" "}
            We may collect the information that you provide (such as your
            username, email address, your public Web3 wallet address and your
            social media profile, if any) or otherwise make available to us when
            you access or use our Services, including when you:
          </Typography>
          <Typography className={classes.desc}>
            <ul>
              <li>To identify you as a User in our system;</li>
              <li>
                to provide our Services to you, including new Services we
                develop later (reason: legitimate business purpose and
                performance of a contract);
              </li>
              <li>
                to provide you with customer support (reason: legitimate
                business purpose);
              </li>
              <li>
                to facilitate your communications or transactions with us,
                Patrons, Collectors or other users (reason: to receive consent,
                and for legitimate business purpose);
              </li>
              <li>
                to operate, improve, and customize our Services, Content, and
                marketing, to develop new Services, and to understand how you
                use and interact with our Services and Content, and the
                products, services, and Content of others (reason: legitimate
                business purpose);
              </li>
              <li>
                to develop and display more customized Content and ads to you on
                or off our Services (reason: to receive consent, and for
                legitimate business purpose);
              </li>
              <li>
                to promote and maintain a trusted, safer, and more reliable
                environment on our Services, for example, to help detect,
                prevent or otherwise address fraud, security or technical
                issues, conduct investigations or risk assessments, or verify
                actions taken by you or associated with your account (reason: to
                protect the public interest and for legitimate business
                purpose);
              </li>
              <li>
                to contact you (by email or as otherwise authorized by you) in
                order to address issues with your account or use of our
                Services, collect fees, send you updates about our Services or
                policies, or for other purposes permitted by law (reason:
                performance of a contract and for legitimate business purpose);
              </li>
              <li>
                to contact you (by email, postal mail, telephone, mobile
                devices, SMS text message, or as otherwise authorized by you) in
                order to send you marketing communications, promotional
                messages, and offers about our Services and Content, and the
                products, services, and Content of others (see below for
                information on how to opt out of receiving certain
                communications from us) (reason: to receive consent, and for
                legitimate business purpose);
              </li>
              <li>
                to facilitate your participation in contests, sweepstakes or
                other promotional events sponsored or conducted by us or by
                others in conjunction with us (reason: performance of a
                contract);
              </li>
              <li>
                to comply with our legal obligations, resolve disputes, or
                enforce our T&Cs or any other Minty policies or agreements with
                Users (reason: compliance with a legal obligation); and
              </li>
              <li>
                to perform other functions as described when the information is
                collected or requested, or for other purposes with your prior
                consent (reason: legitimate business purpose).
              </li>
            </ul>
          </Typography>
        </Box>
      </Container>

      {/* <iframe src="https://docs.google.com/document/d/1Ys4s0f8uSTeH3vD_cd84EUgTHs7PD9k35hM7XiaoYTk/edit#" width='99%' height='714'></iframe> */}
    </>
  );
}
