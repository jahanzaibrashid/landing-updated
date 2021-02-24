import React, { Fragment } from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const userStyles = makeStyles({
  root: {
    padding: '50px 0',
    '& .title': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 900,
      fontSize: '28px',
      textTransform: 'none',
      textAlign: 'center',
    },
    '& p': {
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
    },
    '& .rootContent': {
      margin: '20px 0',
      '& .contentTitle': {
        fontWeight: 900,
        marginTop: '20px',
      },
    },
    '& .content': {
      margin: '10px 0',
    },
    '& .contentText': {
      margin: '10px 0',
    },
    '& .contextTextList': {
      marginLeft: '20px',
    },
  },
});

export default function Privacy(props) {
  const classes = userStyles();
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography className='title'>TOKEN USAGE AGREEMENT</Typography>
      <div className='rootContent'>
        {/* GENERAL */}
        <div className='content'>
          <Typography className='contentTitle'>1. General</Typography>
          <Typography className='contentText'>
            1.1 You acknowledge and agree that You have read, understood,
            accepted and agreed to be bound by the terms of this Token Usage
            Agreement.
          </Typography>
          <Typography className='contentText'>
            1.2 You acknowledge and agree that if You do not agree to this Token
            Usage Agreement, then We do not grant You and do not intend for You
            to:
          </Typography>
          <Typography className='contentText contextTextList'>
            1.2.1 have any right to acquire and/or hold and/or store the Tokens;
            and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            1.2.2 in any way access or use any content and/or functionality of
            the Tokens.
          </Typography>
          <Typography className='contentText'>
            1.3 You re-affirm that
          </Typography>
          <Typography className='contentText contextTextList'>
            1.3.1 Your access to the Online Tools is strictly subject to the
            Terms of Use and the Privacy Policy; and
          </Typography>
          <Typography className='contentText contextTextList'>
            1.3.2 You have read, understood, accepted and agreed to be bound by
            the Terms of Use and the Privacy Policy.
          </Typography>
        </div>
        {/* PARTIES */}
        <div className='content'>
          <Typography className='contentTitle'>2. PARTIES</Typography>
          <Typography className='contentText'>
            2.1 Corporate Details: STK Asia Limited is a company limited by
            shares incorporated in Hong Kong with registration number 2675449
            (“We”, “Our”, “Us”). Our registered address is Room 1007, 10/F,
            Wayson Commercial Building, No 28 Connaught Road West, Sheung Wan,
            Hong Kong SAR.
          </Typography>
          <Typography className='contentText'>
            2.2 Sole Obligor: We are the sole obligor in respect of the Tokens
            for the purposes of this Token Usage Agreement. None of our holding
            companies, subsidiaries or Affiliates (including any such entities
            which conduct the business described in the White Paper) have any
            obligations to You under this Token Usage Agreement.
          </Typography>
          <Typography className='contentText'>
            2.3 Natural Person: You are the natural person who is presently
            visiting The Site in Your own individual capacity and/or on behalf
            of Your company and/or organisation, in each case, as a User and
            which has agreed to be bound by this Token Usage Agreement, Terms of
            Use and Privacy Policy (“You”, “Your”, “Yours”).
          </Typography>
        </div>
        {/* APPLICABILITY */}
        <div className='content'>
          <Typography className='contentTitle'>3. APPLICABILITY </Typography>
          <Typography className='contentText'>
            3.1 Scope of this Token Usage Agreement: You acknowledge and agree
            that:
          </Typography>
          <Typography className='contentText contextTextList'>
            3.1.1 this Token Usage Agreement strictly governs Your Use of any
            Tokens that you may lawfully acquire, whether through a valid
            purchase in the Platform Token Issuance or as otherwise permitted,
            including through the issue of Bonus Tokens; and
          </Typography>
          <Typography className='contentText contextTextList'>
            3.1.2 You shall at all times strictly comply with its terms when
            Using those Tokens.
          </Typography>
          <Typography className='contentText'>
            3.2 Agreements: By Using the Tokens, You unconditionally acknowledge
            and agree that You have accepted and at all times shall comply with:
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.1 this Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.2 the Privacy Policy entered into with the Platform Provider;
            and
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.3 the Terms of Use entered into with the Platform Provider.
          </Typography>
          <Typography className='contentText'>
            3.3 Non-acceptance: If You do not accept and agree to this Token
            Usage Agreement, You unconditionally acknowledge and agree that You
            have no rights whatsoever to Use the Tokens and You must immediately
            exit from the Online Tools.
          </Typography>
        </div>
        {/* APPLICABILITY */}
        <div className='content'>
          <Typography className='contentTitle'>4. CONFLICT </Typography>
          <Typography className='contentText'>
            4.1 Scope of this Token Usage Agreement: You acknowledge and agree
            that:
          </Typography>
          <Typography className='contentText contextTextList'>
            4.1.1 this Token Usage Agreement strictly governs Your Use of any
            Tokens that you may lawfully acquire, whether through a valid
            purchase in the Platform Token Issuance or as otherwise permitted,
            including through the issue of Bonus Tokens; and
          </Typography>
          <Typography className='contentText contextTextList'>
            4.1.2 You shall at all times strictly comply with its terms when
            Using those Tokens.
          </Typography>
          <Typography className='contentText'>
            4.2 Agreements: By Using the Tokens, You unconditionally acknowledge
            and agree that You have accepted and at all times shall comply with:
          </Typography>
          <Typography className='contentText'>
            4.3 Non-acceptance: If You do not accept and agree to this Token
            Usage Agreement, You unconditionally acknowledge and agree that You
            have no rights whatsoever to Use the Tokens and You must immediately
            exit from the Online Tools.
          </Typography>
          <Typography className='contentText contextTextList'>
            4.3.1 this Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            4.3.2 the Privacy Policy entered into with the Platform Provider;
            and
          </Typography>
        </div>
        {/* RIGHT TO USE */}
        <div className='content'>
          <Typography className='contentTitle'>5. RIGHT TO USE </Typography>
          <Typography className='contentText'>
            5.1 Token Acquisition: Strictly subject to Clauses 5.3, 5.14 and
            5.15, You may:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.1 acquire the Tokens through a valid purchase in the Platform
            Token Issuance or as otherwise permitted, including through the
            issue of Bonus Tokens; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.2 thereafter Use the Tokens.
          </Typography>
          <Typography className='contentText'>
            5.2 Online Tools: You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.1 You can only acquire and/or Use the Tokens through the Online
            Tools or as otherwise expressly permitted by Us; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.2 any acquisition and/or Use through any other means that are
            not sanctioned or permitted by Us will create no obligation on Us
            towards You under any circumstance.
          </Typography>
          <Typography className='contentText'>
            5.3 Use Right: Subject to Your continuing compliance with this Token
            Usage Agreement, the Terms of Use and the Privacy Policy, You are
            granted a revocable, royalty-free, non-exclusive, non-transferable
            licence to Use the Tokens including to utilise the available
            functionality of the Tokens as it may exist from time to time.
          </Typography>
          <Typography className='contentText'>
            5.4 No Guarantee of Use: For the purposes of Clause 5.3, you
            acknowledge and agree that We give no guarantees whatsoever in
            relation to Your future ability to Use the Tokens including as
            contemplated in the White Paper.
          </Typography>
          <Typography className='contentText'>
            5.5 Confirmations in Respect of Value: You acknowledge and agree
            that:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.5.1 the Tokens do not have any intrinsic value and You may never
            recover any cash, cryptocurrency or other assets which are used
            directly or indirectly to acquire the Tokens;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.5.2 there is no market-standard valuation process to determine the
            value of the Token at any given time;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.5.3 We give no guarantees whatsoever on the value of the Tokens
            which may be highly volatile and could reduce to zero; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.5.4 You are not acquiring or holding the Token for any investment,
            speculative or other financial purposes.
          </Typography>
          <Typography className='contentText'>
            5.6 Rights in Relation to the Tokens: You acknowledge and agree that
            each Token of a particular kind, once validly acquired pursuant to
            Clause 5.1.1 shall be subject to the Additional Token-Specific Terms
            applicable to that Token.
          </Typography>
          <Typography className='contentText'>
            5.7 Functionality of the Token: You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.7.1 the functionality and utility of the Tokens is limited to
            interacting with users/content within the confines of a single
            technology platform through a blockchain-enabled software; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.7.2 while We will endeavour to offer the functionality of the
            Tokens described in the White Paper, You acknowledge and agree and
            understand that:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) the White Paper is of a descriptive and informational nature
            only and is akin to a concept paper;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) the White Paper is not binding and does not form part of this
            Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) there can be no assurance that the Token will have the
            anticipated functionality including providing access to the products
            and services described in the White Paper;
          </Typography>
          <Typography className='contentText contextTextList'>
            (d) the regulatory regime governing the issue and/or use of digital
            tokens and the use of cryptocurrency as a medium of payment is
            uncertain and evolving; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (e) We reserve the right to alter the business plan as outlined in
            the White Paper at Our sole discretion.
          </Typography>
          <Typography className='contentText'>
            5.8 Possible Token Functionality Change: You acknowledge and agree
            that We may amend the functionality of the Token in order to
            facilitate compliance with any legal or regulatory issues which may
            arise or shall be anticipated, including the following:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.8.1 the occurrence of a Regulatory Event; or
          </Typography>
          <Typography className='contentText contextTextList'>
            5.8.2 any additional legal or regulatory risk mitigation in respect
            of the functionality of the Token that We decide to undertake at any
            time.
          </Typography>
          <Typography className='contentText'>
            5.9 Consequences of Token Functionality Change: If We amend the
            functionality of the Tokens pursuant to Clause 5.8 above, We shall
            publish an Important Notice. It is Your responsibility to regularly
            check for any such notices on The Site.
          </Typography>
          <Typography className='contentText'>
            5.10 Our Rights in Respect of the Tokens: You acknowledge and agree
            that We reserve the right to:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.10.1 reserve unsold and unused Platform Tokens;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.10.2 issue additional Platform Tokens at any time;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.10.3 procure the implementation of changes to the blockchain
            platform (including hard and soft forks) to deal with actual or
            imminent security breaches; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.10.4 issue substitute Tokens and take or procure such other
            actions as may be required in relation to the Platform.
          </Typography>
          <Typography className='contentText'>
            5.11 Not an Investment Product: You acknowledge and agree that the
            Tokens do not constitute and are not intended to constitute a
            security or other investment product issued by Us or Our Affiliates
            to You and are not;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.1 rights, options, or derivatives in respect of any form of
            security or other investment product;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.2 rights under a contract for differences or under any other
            contract the purpose or pretended purpose of which is to secure a
            profit or avoid a loss;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.3 units in a collective investment scheme;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.4 a debenture offering a right of redemption of any kind
            against Us;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.5 units in a business trust; or
          </Typography>
          <Typography className='contentText contextTextList'>
            5.11.6 any other security or class of securities.
          </Typography>
          <Typography className='contentText'>
            5.12 No Ownership or Governance Rights: You hereby acknowledge and
            agree that the Tokens:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.1 do not provide You with rights of any type with respect to
            Us, Our Affiliates or our respective revenues or assets, including
            any distribution, redemption, liquidation, proprietary or other
            payment, financial or legal rights;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.2 do not provide You nor are they intended to represent or
            confer You with any participation or governance rights in relation
            to Us or Our Affiliates including:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) ownership rights or stake;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) rights to a share or security;
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) voting rights;
          </Typography>
          <Typography className='contentText contextTextList'>
            (d) rights to nominate a director to the board;
          </Typography>
          <Typography className='contentText contextTextList'>
            (e) rights to requisition and/or participate in shareholder
            meetings;
          </Typography>
          <Typography className='contentText contextTextList'>
            (f) rights to receive accounts, financial statements or any other
            financial data; or
          </Typography>
          <Typography className='contentText contextTextList'>
            (g) any rights similar or equivalent to those in Clauses 5.12.2 (a)
            to (f) above.
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.3 do not provide You with any IPR in respect of Our business or
            the Platform;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.4 do not entitle You to any say in how We or Our Affiliates
            conduct our business;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.5 do not constitute a loan, debenture or similar instrument in
            any form from You to Us or Our Affiliates;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.6 do not constitute any form of money or legal tender in any
            jurisdiction or any representation of money (including electronic
            money or a digital payment token that is a medium of exchange
            accepted by the public as payment); and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.12.7 do not constitute a good or a service provided by Us or Our
            Affiliates or any Third Parties to You from a legal, tax, accounting
            or other perspective.
          </Typography>
          <Typography className='contentText'>
            5.13 Eligibility Criteria: You acknowledge and agree that We may
            impose eligibility criteria to access certain functionality in
            respect of the Tokens which may require You to incur additional time
            and money costs.
          </Typography>
          <Typography className='contentText'>
            5.14 Compliance-Related Conditionality: Your Use of the Tokens
            (including your use of the Online Tools to Use the Tokens) is
            strictly conditional on You ensuring that You shall not (and shall
            not cause or permit anyone else to) breach:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.14.1 the Privacy Policy;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.14.2 the Terms of Use;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.14.3 this Token Usage Agreement including for each type of Token,
            the Additional Token-Specific Terms; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            5.14.4 Applicable Law.
          </Typography>
          <Typography className='contentText'>
            5.15 Wallet-specific Conditionality: You acknowledge and agree that
            Your Use of the Tokens is conditional on Your:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.15.1 holding a wallet that is at all times capable of holding the
            Tokens and for which You control the private key and which does not
            belong to an exchange for digital assets; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.15.2 continuing to have secure access to such wallet through Your
            private key.
          </Typography>
          <Typography className='contentText'>
            5.16 Loss of Access to Token Functionality: If You are no longer in
            possession of Your private keys or any device associated with Your
            account or are not able to provide Your login or identifying
            credentials:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.16.1 You may lose all of Your Tokens and/or access to the Token
            functionality and access to your wallet; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.16.2 We may, in Our sole discretion, and only if We are able,
            grant access to Your account to any party providing additional
            credentials to Us, subject to the imposition of such conditions that
            We think fit.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – TOKENS */}
        <div className='content'>
          <Typography className='contentTitle'>
            6. USER CONFIRMATIONS – TOKENS
          </Typography>
          <Typography className='contentText'>
            6.1 You warrant and represent to Us as at the Token Usage Agreement
            Date, the Token Acquisition Date and at all times that You Use the
            Tokens that:
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.1 Reading of Background Materials: You have read and understand:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) this Token Usage Agreement (including all Exhibits) including
            the rights of the Token set out in Clause 5 and the Additional
            Token-Specific Terms;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) the latest version of the White Paper; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) the risk factors in respect of the Tokens set out in Exhibit 2.
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.2 Sufficient Information: You have obtained sufficient
            information about Us, the Tokens and the Platform Token Issuance to
            make an informed decision to:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) acquire Tokens; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) upon acquisition, to continue to hold and store the Tokens and
            Use the Token functionality.
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.3 Sufficient Industry Knowledge: You have sufficient knowledge
            and experience in business and financial matters and matters
            relating to the Token, including a sufficient understanding of:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) blockchain, cryptographic tokens, non-fungible tokens and other
            digital assets;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) public keys and private keys;
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) smart contracts and their equivalent;
          </Typography>
          <Typography className='contentText contextTextList'>
            (d) token storage mechanisms (such as digital wallets of different
            kinds);
          </Typography>
          <Typography className='contentText contextTextList'>
            (e) software systems based on blockchain-technology; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (f) consensus algorithms, voting systems and distributed,
            decentralized or peer-to-peer networks or systems.
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.4 Risk of Loss: You are able to bear the risks of holding the
            Token including:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) loss of all or any assets used, directly or indirectly, to
            acquire the Tokens;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) the loss of Tokens including loss of access as a result of
            losing access to your private key; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) liability to Us (as defined in Clause 16 (Indemnification)) and
            others for Your acts and omissions, including any acts or omissions
            constituting a breach of this Token Usage Agreement.
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.5 Sufficient Understanding of Non-fungible Tokens: You
            understand and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) the Platform is a distributed application that runs on the
            Ethereum network, using specially-developed smart contracts to
            enable users to (i) generate; and/or (ii) own, transfer, and trade,
            unique digital items , which can then be visualized through the
            Platform and interests in such items shall be represented by
            non-fungible tokens (the "Other Tokens"); and
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) Interests in the digital items represented by the Other Tokens
            exist only by virtue of the ownership record maintained on the
            Ethereum network. The Token Electronic Contract and events and
            transactions processed through the Token Electronic Contract in
            respect of the Other Tokens are operationalized through a
            decentralized ledger within the Ethereum Platform over which neither
            Us nor the Platform have control.
          </Typography>
          <Typography className='contentText contextTextList'>
            6.1.6 Sufficient Understanding of Digital Payment Tokens: You
            understand and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) You should not transact on our Platform if you are not familiar
            with any digital payment tokens you use to make payments on the
            Platform;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) Transacting in digital payment tokens may not be suitable for
            you if you are not familiar with the technology that digital payment
            token services are provided; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) You should be aware that the value of digital payment tokens may
            fluctuate greatly. You should only transact in digital payment
            tokens if you are prepared to accept the risk of losing all of the
            money you put into such tokens.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – BASIC WARRANTIES */}
        <div className='content'>
          <Typography className='contentTitle'>
            7. USER CONFIRMATIONS – BASIC WARRANTIES
          </Typography>
          <Typography className='contentText'>
            7.1 Capacity/Authority: You warrant and represent to Us as at the
            Token Usage Agreement Date, the Token Acquisition Date and at all
            times that You Use the Tokens that:
          </Typography>
          <Typography className='contentText contextTextList'>
            7.1.1 You have the necessary authority and consent to accept this
            Token Usage Agreement, to enter into a binding agreement with Us and
            to enjoy the functionality in respect of the Token;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.1.2 If You are an individual, You are at least 18 years old and of
            sufficient legal age and capacity to acquire the Tokens;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.1.3 If You are an entity:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) You are duly incorporated and/or organised, validly existing and
            in good standing under the laws of Your domiciliary jurisdiction and
            each jurisdiction where You conduct business; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) acquiring, attempting to acquire, holding the Token and enjoying
            its functionality does not breach Your constitutional documents;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.1.4 No Conflict: Your entry into this Token Usage Agreement and
            Your Use of the Tokens shall not:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) breach any provision of any judgment, decree or order imposed on
            You by any court or governmental or regulatory authority; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) breach or be in conflict with or constitute a default under
            (with or without the passage of time or the giving of notice) any
            agreement, obligation, duty or commitment to which You are a party
            or by which You or Your assets are bound;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.1.5 No Breach etc.: The entry of the Token Usage Agreement and
            Your Use of the Tokens shall not:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) breach any Applicable Law; or
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) require any consents, waivers, approvals or other action from
            any governmental or regulatory authority of any kind.
          </Typography>
          <Typography className='contentText'>
            7.2 Regulatory Matters: You warrant and represent to Us as at the
            Token Usage Agreement Date, the Token Acquisition Date and at all
            times that You Use the Tokens that You are and shall remain in
            compliance with:
          </Typography>
          <Typography className='contentText contextTextList'>
            7.2.1 the Securities Law Representations;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.2.2 the Sanctions Law Representations;
          </Typography>
          <Typography className='contentText contextTextList'>
            7.2.3 the AML Representations; and
          </Typography>
          <Typography className='contentText contextTextList'>
            7.2.4 all other Applicable Laws.
          </Typography>
          <Typography className='contentText'>
            7.3 No Unlawful Use of Tokens: You warrant and represent to Us as at
            the Token Usage Agreement Date, the Token Acquisition Date and at
            all times that You Use the Tokens that You will not use the Tokens
            to finance, engage in, or otherwise support any unlawful activities
            or in a manner which aids or facilitates another party in the same.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – TAX ASPECTS OF THE TOKEN */}
        <div className='content'>
          <Typography className='contentTitle'>
            8. USER CONFIRMATIONS – TAX ASPECTS OF THE TOKEN
          </Typography>
          <Typography className='contentText'>
            8.1 Uncertain Tax Regime: You acknowledge and agree that the tax
            treatment of cryptocurrency and digital tokens is uncertain and
            evolving and that Your entry into this Token Usage Agreement and the
            Use of the Tokens could subject You to adverse tax consequences in a
            number of jurisdictions.
          </Typography>
          <Typography className='contentText'>
            8.2 Sole Responsibility for Tax Compliance: You acknowledge and
            agree that You shall be solely responsible for complying with any
            tax obligations arising from Your entry into this Token Usage
            Agreement and the Use of the Tokens including:
          </Typography>
          <Typography className='contentText contextTextList'>
            8.2.1 determining what taxes may apply to Your acquisition (through
            purchase or otherwise), possession, storage, sale or other Use of
            the Tokens including, for example, sales, use, value-added and
            similar taxes; and
          </Typography>
          <Typography className='contentText contextTextList'>
            8.2.2 complying with any obligations to withhold, collect, report
            and remit the correct taxes to the appropriate tax authorities in
            relation to Your acquisition, possession, storage, sale or other Use
            of Tokens.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – PLATFORM-SPECIFIC ASPECTS OF THE TOKEN */}
        <div className='content'>
          <Typography className='contentTitle'>
            9. USER CONFIRMATIONS – PLATFORM-SPECIFIC ASPECTS OF THE TOKEN
          </Typography>
          <Typography className='contentText'>
            9.1 “As is” Basis of Platform: You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            9.1.1 You can only Use the Tokens and access the Platform through
            The Site; and
          </Typography>
          <Typography className='contentText contextTextList'>
            9.1.2 Your access to the Online Tools is subject to Your agreement
            with the Terms of Use which includes, among other things, an
            acknowledgement that the Online Tools are being provided on an “as
            is” and “as available” basis.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – TOKEN ISSUER */}
        <div className='content'>
          <Typography className='contentTitle'>
            10. USER CONFIRMATIONS – TOKEN ISSUER
          </Typography>
          <Typography className='contentText'>
            10.1 You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            10.1.1 No Solicitation: Neither the White Paper nor this Token Usage
            Agreement:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) constitute a prospectus or offering document of any kind;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) are intended to be a solicitation for investment or an offering
            of securities in any jurisdiction; or
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) are intended to constitute the basis for an investment decision;
          </Typography>
          <Typography className='contentText contextTextList'>
            10.1.2 No Exchange: There can be no assurance that the Tokens will
            be exchangeable on any cryptographic exchanges or secondary markets;
          </Typography>
          <Typography className='contentText contextTextList'>
            10.1.3 Use of Proceeds: Any funds collected by Us through the
            Platform Token Issuance and/or the operation of the Platform will be
            utilised by Us and/or Our Affiliates in their sole discretion
            generally in accordance with the plan specified in the White Paper,
            subject always to Clauses 4.2 and 5.8; and
          </Typography>
          <Typography className='contentText contextTextList'>
            10.1.4 No Custodial Services: We do not provide any custodial
            services for the Tokens.
          </Typography>
          <Typography className='contentText'>
            10.2 Independent Contracting Parties: You and We are independent
            contracting parties, and therefore:
          </Typography>
          <Typography className='contentText contextTextList'>
            10.2.1 neither of us is an agent or fiduciary of the other;
          </Typography>
          <Typography className='contentText contextTextList'>
            10.2.2 neither of us has the authority to bind the other; and
          </Typography>
          <Typography className='contentText contextTextList'>
            10.2.3 Your actions as a User do not create any form of partnership,
            joint venture, franchise or any other similar relationship between
            Us and You.
          </Typography>
          <Typography className='contentText'>
            10.3 No Third Party Involvement: No third-party service provider or
            third-party website is allowed or has been in any way supported,
            engaged, authorised or endorsed by Us in connection with the issue
            of the Tokens and We have no relationship in any way with any such
            third party.
          </Typography>
          <Typography className='contentText'>
            10.4 Not a Financial Institution or Intermediary: You acknowledge
            and agree that We:
          </Typography>
          <Typography className='contentText contextTextList'>
            10.4.1 are not a financial institution and are not licensed by or
            under the supervision of any financial supervisory authority; and
          </Typography>
          <Typography className='contentText contextTextList'>
            10.4.2 do not provide any licensed financial services such as
            investment services, capital raising, fund management or investment
            advice.
          </Typography>
          <Typography className='contentText contextTextList'>
            10.4.3 no communication or information provided to You by Us is
            intended as, or shall be considered or construed as, investment
            advice, financial advice, trading advice, or any other sort of
            advice; and
          </Typography>
          <Typography className='contentText contextTextList'>
            10.4.4 You have consulted such legal or tax professionals as
            necessary regarding your specific situation prior to accessing the
            Platform and Using the Tokens.
          </Typography>
        </div>
        {/* USER CONFIRMATIONS – PLATFORM TOKEN ISSUANCE PROCESS */}
        <div className='content'>
          <Typography className='contentTitle'>
            11. USER CONFIRMATIONS – PLATFORM TOKEN ISSUANCE PROCESS
          </Typography>
          <Typography className='contentText'>
            11.1 Confirmation of Sale Procedures: You warrant and represent to
            Us as at the Token Usage Agreement Date, the Token Acquisition Date
            and at all times that You Use the Tokens that You have read and
            understood the information about the Platform Token Issuance
            Procedures.
          </Typography>
          <Typography className='contentText'>
            11.2 Consequences of Failure to Comply: By sending Us the payment
            for the Tokens, You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            11.2.1 You are in agreement with the Platform Token Issuance
            Procedures; and
          </Typography>
          <Typography className='contentText contextTextList'>
            11.2.2 Your failure to follow the Platform Token Issuance Procedures
            may result in You not receiving any Tokens.
          </Typography>
          <Typography className='contentText'>
            11.3 Finality of Our decision: You also acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            11.3.1 We reserve the right to refuse or cancel any requests to
            purchase Tokens from Us as part of the Platform Token Issuance at
            any time at Our sole discretion; and
          </Typography>
          <Typography className='contentText contextTextList'>
            11.3.2 any acquisition of Tokens by you from Us in the Platform
            Token Issuance is final and there are no refunds or cancellations or
            compensation in lieu thereof except as may be required by Applicable
            Law.
          </Typography>
          <Typography className='contentText'>
            11.4 Authorised Website: You acknowledge and agree that the only
            official and authorised website in relation to the Tokens is The
            Site.
          </Typography>
        </div>
        {/* USER UNDERTAKINGS – SECURITY */}
        <div className='content'>
          <Typography className='contentTitle'>
            12. USER UNDERTAKINGS – SECURITY
          </Typography>
          <Typography className='contentText'>
            12.1 You acknowledge and agree that at the Token Usage Agreement
            Date, the Token Acquisition Date and at all times that You Use the
            Tokens:
          </Typography>
          <Typography className='contentText contextTextList'>
            12.1.1 Reasonable Security Measures: You will implement reasonable
            measures for securing access to the wallet, vault or other storage
            mechanism utilised to receive and hold the acquired Tokens,
            including any:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) requisite private keys; and
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) other credentials necessary to access such storage mechanisms;
          </Typography>
          <Typography className='contentText contextTextList'>
            12.1.2 Security Breach: If You suspect a security breach in any of
            the security measures detailed in Clause 12.1.1 above, You will
            inform Us immediately so We can take any measures We deem necessary
            to secure Your User Account, The Site, the Platform, the Tokens and
            systems as a whole.
          </Typography>
        </div>
        {/* USER UNDERTAKINGS – REQUEST FOR ADDITIONAL INFORMATION */}
        <div className='content'>
          <Typography className='contentTitle'>
            13. USER UNDERTAKINGS – REQUEST FOR ADDITIONAL INFORMATION
          </Typography>
          <Typography className='contentText'>
            13.1 Compliance with Laws: You acknowledge and agree and undertake
            that You will provide Us or Our nominee with such information as We
            may deem necessary or appropriate in order to maintain compliance
            with Applicable Law:
          </Typography>
          <Typography className='contentText contextTextList'>
            13.1.1 any anti-money laundering laws and any "Know Your Customer"
            requirements; and
          </Typography>
          <Typography className='contentText contextTextList'>
            13.1.2 to address any actual inquiries or inquiries that We may (at
            Our sole discretion) expect from regulatory authorities, courts or
            arbitral authorities in any jurisdiction.
          </Typography>
          <Typography className='contentText'>
            13.2 Request for Documents: You acknowledge and agree that such
            information or documents may include:
          </Typography>
          <Typography className='contentText contextTextList'>
            13.2.1 identity documents such as passports, driver's licenses,
            utility bills, other government-issued IDs and photographs;
          </Typography>
          <Typography className='contentText contextTextList'>
            13.2.2 (for non-individuals) incorporation or notarised formation
            documents; and
          </Typography>
          <Typography className='contentText contextTextList'>
            13.2.3 supporting documentation to confirm Your compliance with
            Securities Law Representations, Sanctions Law Representations, AML
            Representations or any Applicable Laws.
          </Typography>
          <Typography className='contentText'>
            13.3 Request for Notarised Documents: You acknowledge and agree that
            We may require attested or notarised copies of any documents listed
            in this Clause 13.
          </Typography>
          <Typography className='contentText'>
            13.4 Consequences of Regulatory Investigations: You acknowledge and
            agree that by accessing the Platform, We have the right to
            investigate any violation of this Token Usage Agreement,
            unilaterally determine whether you have violated this Token Usage
            Agreement, and take actions under relevant regulations without your
            consent or prior notice and including in response to any requests or
            demands from regulatory authorities which exercise or purport to
            exercise jurisdiction over the Tokens, the Platform or Us. You
            acknowledge and agree that such actions include, to the extent
            feasible for Us from a technological perspective:
          </Typography>
          <Typography className='contentText contextTextList'>
            13.4.1 blocking and closing your transactions on the Platform;
          </Typography>
          <Typography className='contentText contextTextList'>
            13.4.2 freezing your account;
          </Typography>
          <Typography className='contentText contextTextList'>
            13.4.3 reporting the incident to the authorities; and
          </Typography>
          <Typography className='contentText contextTextList'>
            13.4.4 publishing the alleged violations and actions that have been
            taken; and
          </Typography>
          <Typography className='contentText contextTextList'>
            13.4.5 deleting any information You published or reversing any
            transactions that are found to be violations.
          </Typography>
        </div>
        {/* OUR WARRANTIES */}
        <div className='content'>
          <Typography className='contentTitle'>14. OUR WARRANTIES</Typography>
          <Typography className='contentText'>
            14.1 “As is” Basis of the Tokens: You acknowledge and agree that the
            Tokens are provided strictly on an “as is” and “as available” basis.
          </Typography>
          <Typography className='contentText'>
            14.2 No Warranties: Neither We nor any of Our Affiliates make any
            representations or warranties, express or implied, including any
            warranties of title or implied warranties of merchantability or
            fitness for a particular purpose with respect to:
          </Typography>
          <Typography className='contentText contextTextList'>
            14.2.1 the Token Electronic Contract;
          </Typography>
          <Typography className='contentText contextTextList'>
            14.2.2 the Tokens, their functionality or other utility; or
          </Typography>
          <Typography className='contentText contextTextList'>
            14.2.3 the ability of anyone to acquire, hold, store or use the
            Tokens.
          </Typography>
          <Typography className='contentText'>
            14.3 Not Uninterrupted or Error-Free: Without limiting the
            foregoing, neither We nor Our Affiliates represent or warrant that
            the process of purchasing and/or acquiring the Tokens will be
            uninterrupted or error-free or that the Tokens are or will be
            reliable and error-free.
          </Typography>
          <Typography className='contentText'>
            14.4 Loss of Amounts Paid: You acknowledge and agree that We are not
            obliged tor refund You or any Third Party for any amount paid to
            acquire the Token.
          </Typography>
          <Typography className='contentText'>
            14.5 Exclusion: We exclude all conditions, warranties,
            representations or other terms which may apply to the Tokens to the
            maximum extent permitted by Applicable Law.
          </Typography>
        </div>
        {/* LIABILITY */}
        <div className='content'>
          <Typography className='contentTitle'>15. LIABILITY</Typography>
          <Typography className='contentText'>
            15.1 No Refunds: By acquiring the Tokens, You acknowledge and agree
            that:
          </Typography>
          <Typography className='contentText contextTextList'>
            15.1.1 any and all acquisitions of Tokens through the Platform Token
            Issuance or any other permitted means are final and non-refundable;
          </Typography>
          <Typography className='contentText contextTextList'>
            15.1.2 neither We nor Our Affiliates undertake or are required to
            provide any refund for the acquired Tokens for any reason; and
          </Typography>
          <Typography className='contentText contextTextList'>
            15.1.3 You will not receive or demand cryptocurrency, money or other
            compensation for any Tokens that are not used or remain unused for
            any reason.
          </Typography>
          <Typography className='contentText'>
            15.2 Online Tool Unavailability: In this Clause 15, “Online Tool
            Unavailability” shall refer to any inability to Use the Tokens as a
            result of an inability to access the Online Tools in part or in full
            for any reason including as a result of:
          </Typography>
          <Typography className='contentText contextTextList'>
            15.2.1 inability to access or use the material, information,
            software, facilities, services or content on the Online Tools;
          </Typography>
          <Typography className='contentText contextTextList'>
            15.2.2 abnormal and unforeseen circumstances beyond Our control,
            including phone and internet network failures; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            15.2.3 You being out of mobile or internet coverage.
          </Typography>
          <Typography className='contentText'>
            15.3 No Liability for Loss or Damages: We shall not be liable to You
            for any loss or damage of any nature whatsoever, whether direct,
            indirect or consequential, which is caused or arising out of or in
            connection with:
          </Typography>
          <Typography className='contentText contextTextList'>
            15.3.1 Your reliance on the functionality of the Tokens made
            available via the Online Tools;
          </Typography>
          <Typography className='contentText contextTextList'>
            15.3.2 Your Use of, or inability to Use the Tokens including as a
            result of Online Tool Unavailability; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            15.3.3 any change of the value (if it is ever attributed to it) of
            the Tokens or Cryptocurrency used to purchase the Tokens.
          </Typography>
          <Typography className='contentText'>
            15.4 Release of Liability: You acknowledge and agree that We shall
            not be liable to You for and You irrevocably release Us from all
            liability whatsoever (irrespective of the basis upon which the
            liability is claimed) for any damages, liability or losses arising
            out of or in connection with:
          </Typography>
          <Typography className='contentText contextTextList'>
            15.4.1 Your reliance on the functionality of the Tokens made
            available via the Online Tools;
          </Typography>
          <Typography className='contentText contextTextList'>
            15.4.2 Your Use of, or inability to Use the Tokens including as a
            result of Online Tool Unavailability; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            15.4.3 any transaction or relationship between You and any Third
            Party provider, including where such transaction or relationship is
            associated with the ability to Use the Tokens including through the
            provision of the Online Tools.
          </Typography>
          <Typography className='contentText'>
            15.5 No Guarantees for Sale or Transfer or Repurchase: You
            acknowledge and agree that neither We nor Our Affiliates shall
            guarantee in any way that Tokens may be issued to You or sold or
            transferred by You or repurchased by Us or any Third Party either
            during or after the Platform Token Issuance.
          </Typography>
          <Typography className='contentText'>
            15.6 No Liability for Circumstances Beyond Our Control: You shall
            not have any claim of any nature whatsoever against Us for any
            failure or delay by Us to carry out any of Our obligations herein as
            a result of causes beyond Our control, including:
          </Typography>
          <Typography className='contentText contextTextList'>
            15.6.1 as a direct or indirect result of a Force Majeure Event; or
          </Typography>
          <Typography className='contentText contextTextList'>
            15.6.2 an act of state or government including regulatory action
            imposed, any delay in securing any permit, consent or approval
            required by Us, to provide the Token functionality; or
          </Typography>
          <Typography className='contentText contextTextList'>
            15.6.3 any other cause whatsoever beyond Our absolute and direct
            control.
          </Typography>
          <Typography className='contentText'>
            15.7 Consumer law: The limitations and disclaimer in this Clause 15
            do not purport to limit Our liability or alter Your rights as a
            consumer in any manner impermissible under Applicable Law.
          </Typography>
          <Typography className='contentText'>
            15.8 Affiliates: You acknowledge and agree that for the purposes of
            this Clause 15, We shall be deemed to include Us, Our Affiliates and
            the employees, agents, directors, shareholders and officers of Us
            and Our Affiliates.
          </Typography>
        </div>
        {/* INDEMNITY */}
        <div className='content'>
          <Typography className='contentTitle'>16. INDEMNITY</Typography>
          <Typography className='contentText'>
            16.1 Indemnity: You acknowledge and agree that You shall fully
            indemnify Us from and against any and all claims and/or losses of
            whatever nature suffered, sustained or incurred, arising out of or
            in connection with:
          </Typography>
          <Typography className='contentText contextTextList'>
            16.1.1 Your breach of this Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            16.1.2 Your use of the Tokens; or
          </Typography>
          <Typography className='contentText contextTextList'>
            16.1.3 Our use of any and all information that You submit to Us
            including via the Use of the Tokens or through the Online Tools in
            connection with the acquisition, prospective purchase, storage or
            holding of a Token or use of the Token functionality.
          </Typography>
          <Typography className='contentText'>
            16.2 Affiliates: For the purposes of Clause 16.1, We shall be deemed
            to include Us, Our Affiliates and the employees, agents, directors,
            shareholders and officers of Us and Our Affiliates.
          </Typography>
        </div>
        {/* TERMINATION */}
        <div className='content'>
          <Typography className='contentTitle'>17. TERMINATION</Typography>
          <Typography className='contentText'>
            17.1 Deletion by You: You may delete Your User Account at any time
            solely in accordance with the Terms of the Use.
          </Typography>
          <Typography className='contentText'>
            17.2 Deletion by Us: We may, in Our sole and absolute discretion and
            at any time, terminate or procure the termination of Your ability to
            Use the Tokens including through termination of Your User Account
            if:
          </Typography>
          <Typography className='contentText contextTextList'>
            17.2.1 a Regulatory Event occurs; or
          </Typography>
          <Typography className='contentText contextTextList'>
            17.2.2 if We believe that You are a Restricted Person.
          </Typography>
          <Typography className='contentText'>
            17.3 Consequences of termination on accrued rights and obligations:
            Upon termination of the User Account (whether by You or by Us or as
            We otherwise procure), this Token Usage Agreement stands terminated
            save in respect of any accrued rights and obligations.
          </Typography>
          <Typography className='contentText'>
            17.4 Consequences of Termination for You: Upon termination of this
            Token Usage Agreement for any reason, all rights You have in respect
            of the Tokens shall immediately end.
          </Typography>
        </div>
        {/* GENERAL PROVISIONS */}
        <div className='content'>
          <Typography className='contentTitle'>
            18. GENERAL PROVISIONS
          </Typography>
          <Typography className='contentText'>
            18.1 Media References: You acknowledge and agree that You shall not
            refer to Us, Our Affiliates or Our licensors in any public media for
            any purposes.
          </Typography>
          <Typography className='contentText'>
            18.2 Revisions to this Token Usage Agreement: You acknowledge and
            agree that We may revise this Token Usage Agreement at any time
            (including to specify and/or update the Additional Token Specific
            Terms applicable to a Token at the time of its issue or thereafter)
            so it is Your responsibility to review the Token Usage Agreement for
            updates each time You use the Tokens.
          </Typography>
          <Typography className='contentText'>
            18.3 Consequences of Continued Use: Your continued Use of the Tokens
            shall be deemed an acceptance by You of the terms of this Token
            Usage Agreement as revised from time to time pursuant to Clause
            18.2.
          </Typography>
          <Typography className='contentText'>
            18.4 Relevant Legal Information: You will be able to view, and You
            agree to check each time You Use the Tokens, the current version of
            this Token Usage Agreement within The Site by clicking the “Token
            Usage Agreement” link at the bottom of the landing page of the Site.
          </Typography>
          <Typography className='contentText'>
            18.5 Acknowledgment of Reliance: You acknowledge and agree that We
            can and will rely on the warranties, representations and
            undertakings You provide to Us in Clauses 6 to 13 inclusive.
          </Typography>
          <Typography className='contentText'>
            18.6 Suspension of Your Access: We may, in Our sole and absolute
            discretion and at any time, modify, suspend or terminate operation
            of or access to the Use of Tokens (including through procuring the
            termination of your access to the Online Tools) (or any part
            thereof) which may affect Your access to the Token functionality.
          </Typography>
          <Typography className='contentText'>
            18.7 Entire Agreement: This Token Usage Agreement constitutes the
            entire agreement between You and Us:
          </Typography>
          <Typography className='contentText contextTextList'>
            18.7.1 relating to Your Use of the Tokens to the exclusion of all
            other terms and conditions, and any prior written or oral agreement
            between both parties; and
          </Typography>
          <Typography className='contentText contextTextList'>
            18.7.2 save in respect of Your use of the Online Tools to Use the
            Tokens which, as set out in the Terms of Use, shall be governed by
            the Terms of Use.
          </Typography>
          <Typography className='contentText'>
            18.8 No Rights against Affiliates: You acknowledge and agree that
            this Token Usage Agreement does not create any rights that are
            enforceable against any of Our Affiliates.
          </Typography>
          <Typography className='contentText'>
            18.9 Assignment and Novation by You: You may not assign, novate, or
            otherwise transfer all or any of Your rights, benefits or
            obligations under this Token Usage Agreement without Our prior
            written approval
          </Typography>
          <Typography className='contentText'>
            18.10 Assignment and Novation by Us: We may assign, transfer or deal
            in any way with Our rights under this Token Usage Agreement
            including to an Affiliate or any Third Party without any prior
            consent or approval from You.
          </Typography>
          <Typography className='contentText'>
            18.11 Failure or Delay: No failure to exercise, nor any delay in
            exercising, any right, power or remedy under this Token Usage
            Agreement shall operate as or be deemed a waiver of the same.
            Waivers must always be given in writing.
          </Typography>
          <Typography className='contentText'>
            18.12 Waiver: Any waiver of any breach of this Token Usage Agreement
            shall not be deemed to be a waiver of any subsequent breach.
          </Typography>
          <Typography className='contentText'>
            18.13 Illegality: If any provision of this Token Usage Agreement is
            determined to be invalid, illegal or void by any court or
            administrative body of competent jurisdiction, this Token Usage
            Agreement shall be deemed modified to the minimum extent necessary
            to make it valid and enforceable.
          </Typography>
          <Typography className='contentText'>
            18.14 Deemed Modification Not Possible: Where the deemed
            modification in Clause 18.13 is not possible, the relevant invalid,
            illegal or void provision(s) shall be deemed deleted and the rest of
            this Token Usage Agreement shall still remain in full force and
            effect.
          </Typography>
          <Typography className='contentText'>
            18.15 No Rights for Third Parties: Except as expressly stated
            herein, this Token Usage Agreement does not create any rights that
            are enforceable by any Third Parties. You acknowledge and agree that
            only the following Persons have rights under this Token Usage
            Agreement:
          </Typography>
          <Typography className='contentText contextTextList'>
            18.15.1 You;
          </Typography>
          <Typography className='contentText'>
            18.15.2 Us and Our Affiliates; and
          </Typography>

          <Typography className='contentText'>
            18.16 Notices to Us: All notices under this Token Usage Agreement
            shall be in writing and shall be delivered by email to the party due
            to receive it at the party’s designated email address. In Our case,
            please send it to hello@minty.art.
          </Typography>
          <Typography className='contentText'>
            18.17 Notices By Us: If We decide, in Our sole discretion, to make
            any information publicly available to Users in connection with the
            matters described in this Token Usage Agreement, We shall do so
            through an Important Notice.
          </Typography>
          <Typography className='contentText contextTextList'>
            18.18 English Language: This Token Usage Agreement is drawn up in
            the English language and the English language version of the same
            shall always prevail over any translation. This Token Usage
            Agreement shall be construed, interpreted and administered in
            English.
          </Typography>

          <Typography className='contentText'>
            18.19 Governing Law: This Token Usage Agreement is governed by and
            shall be construed in accordance with English law.
          </Typography>
          <Typography className='contentText'>
            18.20 Arbitration: Any dispute arising out of or in connection with
            this Token Usage Agreement shall be referred to and finally resolved
            by arbitration administered by the Singapore International
            Arbitration Centre (“SIAC”) and the following shall apply:
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.1 the arbitration shall be conducted in accordance with the
            Arbitration Rules of the SIAC (“SIAC Rules”), which are deemed
            incorporated by reference in this Clause;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.2 the number of arbitrators shall be three;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.3 the arbitrators nominated by the claimant and the respondent
            shall jointly nominate the third arbitrator who, subject to
            confirmation by SIAC, will act as president of the arbitral
            tribunal;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.4 the arbitrators nominated by the parties to the dispute
            shall endeavour to agree on the nomination of the third arbitrator
            within 30 days from the confirmation or appointment of the
            co-arbitrators;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.5 where the arbitrators nominated by the parties to the
            dispute are unable to agree on the nomination of the third
            arbitrator within the time period specified in Clause 18.20.4, the
            third arbitrator shall be appointed by the SIAC in accordance with
            the SIAC Rules;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.6 the seat or legal place of arbitration shall be Singapore;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.7 the language used in the arbitral proceedings shall be
            English;
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.8 all documents submitted in connection with the proceedings
            shall be in the English language, or, if in another language,
            accompanied by an English translation; and
          </Typography>
          <Typography className='contentText contextTextList'>
            18.20.9 any award of the tribunal shall be final and binding from
            the day it is made.
          </Typography>

          <Typography className='contentText'>
            18.21 No Class Action Rights: Any dispute is personal to You and Us
            and will be resolved solely through individual arbitration and will
            not be brought as a class arbitration, class action or any other
            type of representative proceeding. There will be no class
            arbitration or arbitration in which any individual attempts to
            resolve a dispute as a representative of another individual or group
            of individuals. Further, a dispute cannot be brought as a class or
            other type of representative action, whether within or outside of
            arbitration, or on behalf of any other individual or group of
            individuals.
          </Typography>
        </div>
        {/* INTERPRETATION */}
        <div className='content'>
          <Typography className='contentTitle'>19. INTERPRETATION</Typography>
          <Typography className='contentText'>
            19.1 In this Token Usage Agreement, the following rules of
            interpretation shall apply:
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.1 except where expressly indicated otherwise, references to
            exhibits are references to the exhibits of this Token Usage
            Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.2 a reference to a numbered Clause or Paragraph is a reference
            to the clause or paragraph of this Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.3 the word “including” and its other grammatical forms shall be
            construed without any limitation;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.4 headings in this Token Usage Agreement (including headings of
            sub-clauses) are for convenience only and do not affect the
            construction or interpretation of this Token Usage Agreement;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.5 a reference to a party shall include that party’s successors
            and permitted assigns;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.6 any reference to this Token Usage Agreement includes the
            exhibits to it, each of which forms part of this Token Usage
            Agreement for all purposes;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.7 the singular includes the plural and vice versa and reference
            to any gender includes a reference to all other genders;
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.8 references in this Token Usage Agreement to any English legal
            term, English statute or enactment shall be deemed to include any
            equivalent or analogous terms, or laws or rules, respectively, in
            any other jurisdiction; and
          </Typography>
          <Typography className='contentText contextTextList'>
            19.1.9 references in this Token Usage Agreement shall be deemed to
            be references to this Token Usage Agreement as may from time to time
            be amended, varied, supplemented, substituted, novated or assigned.
          </Typography>
        </div>
        {/* DEFINITIONS */}
        <div className='content'>
          <Typography className='contentTitle'>20. DEFINITIONS</Typography>
          <Typography className='contentText'>
            20.1 In this Token Usage Agreement, the defined terms set out below
            shall have the meaning ascribed to them herein.
          </Typography>
          <Typography className='contentText'>
            20.2 “Affiliate” means any entity that is Controlled by a Person or
            under common Control of that Person.
          </Typography>
          <Typography className='contentText'>
            20.3 “Additional Token-Specific Terms” means the specific terms that
            apply to a particular Token as set out in the White Paper.
          </Typography>
          <Typography className='contentText'>
            20.4 “AML Representations” means the representations and warranties
            pertaining to anti-money laundering and “know your client” laws set
            out in Part C of Exhibit 1.
          </Typography>
          <Typography className='contentText'>
            20.5 “Applicable Law” means all national, state, local, municipal
            legislation, regulations, statutes, by-laws, approvals and/or other
            laws and any other instrument having the force of law as may be
            issued and in force from time to time (and any amendment or
            subordinate provisions) relating to, or connected with, the
            activities contemplated under this Token Usage Agreement wherever so
            located or performed.
          </Typography>
          <Typography className='contentText'>
            20.6 “Bonus Tokens” shall have the meaning given to it in Exhibit 3.
          </Typography>
          <Typography className='contentText'>
            20.7 “Control” means the:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) ownership or control (whether directly or indirectly) of more
            than 50 percent of the voting share capital of the relevant entity;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) ability to direct the casting of more than 50 percent of the
            votes exercisable at general meetings of the relevant entity on all,
            or substantially all, matters; or
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) right to appoint or remove directors of the relevant entity
            holding a majority of the voting rights at meetings of the board on
            all, or substantially all, matters, and the terms “Controls”,
            “Controlled” and “Controlling” shall have the equivalent grammatical
            meaning;
          </Typography>
          <Typography className='contentText'>
            20.8 "Cryptocurrency" means Ether or such other digital assets, fiat
            or other currency that We permit as a medium of payment for Platform
            Tokens in the Platform Token Issuance.
          </Typography>
          <Typography className='contentText'>
            20.9 “Force Majeure Event” means any unforeseeable event or
            occurrence which is beyond the reasonable control of a party and
            which prevents or delays that party from performing any or all of
            its obligations under this Token Usage Agreement (e.g. acts of God,
            civil unrest, political situations, pandemics etc.).
          </Typography>
          <Typography className='contentText'>
            20.10 “Important Notice” means a notice accessible at The Site by
            clicking the "Important Notice" link at the bottom of the landing
            page of The Site.
          </Typography>
          <Typography className='contentText'>
            20.11 “IPR” means patents, inventions (whether patentable or not),
            copyrights, moral rights, design rights, trade-marks, trade names,
            business names, service marks, brands, logos, service names, trade
            secrets, know-how, domain names, database rights and any other
            intellectual property or proprietary rights (whether registered or
            unregistered, and whether in electronic form or otherwise) including
            rights in computer software, and all registrations and applications
            to register any of the aforesaid items, rights in the nature of the
            aforesaid items in any country or jurisdiction, any rights in the
            nature of unfair competition rights, and rights to sue for passing
            off.
          </Typography>
          <Typography className='contentText'>
            20.12 “Platform” means the platform which is maintained for the use
            of the Tokens.
          </Typography>
          <Typography className='contentText'>
            20.13 “Platform Token Issuance” means the issuance of the Tokens by
            Us through sale or otherwise.
          </Typography>
          <Typography className='contentText'>
            20.14 “Platform Token Issuance Procedures” means the procedures in
            respect of the issue of the Platform Tokens by Us as part of the
            Platform Token Issuance set out in Exhibit 3.
          </Typography>
          <Typography className='contentText'>
            20.15 “Online Tools” means The Site.
          </Typography>
          <Typography className='contentText'>
            20.16 “Other Tokens” shall have the meaning given to it in Clause
            6.1.5.
          </Typography>
          <Typography className='contentText'>
            20.17 “Person” means a legal person, a firm, a body corporate, an
            unincorporated association, or an authority and such entities’ legal
            successors or an individual.
          </Typography>
          <Typography className='contentText'>
            20.18 “Platform Provider” means Us in our capacity as the provider
            of the Platform.
          </Typography>
          <Typography className='contentText'>
            20.19 “Privacy Policy” means the privacy policy and (as and when
            available, the cookie policy) in respect of the Online Tools, as
            amended from time to time accessible at The Site by clicking the
            "Privacy Policy" link at the bottom of the landing page of The Site.
          </Typography>
          <Typography className='contentText'>
            20.20 “Regulatory Event” means actual action taken, or potential
            action that We (in Our sole discretion) expect to be taken, by a
            court or regulatory authority in any jurisdiction in relation to the
            Use of the Token and all related matters.
          </Typography>
          <Typography className='contentText'>
            20.21 “Restricted Person” means a User who is unable or unwilling to
            give any of the Securities Law Representations, the Sanctions Law
            Representations or the AML Representations.
          </Typography>
          <Typography className='contentText'>
            20.22 “Sanctions Law Representations” means the representations and
            warranties pertaining to sanctions laws set out in Part B of Exhibit
            1.
          </Typography>
          <Typography className='contentText'>
            20.23 “Securities Law Representations” means the representations and
            warranties pertaining to securities laws set out in Part A of
            Exhibit 1.
          </Typography>
          <Typography className='contentText'>
            20.24 “Terms of Use” shall means the terms of use of the Online
            Tools, as amended from time to time, that is confirmed as between a
            User and the Platform Provider, and which is accessible at The Site
            by clicking the "Terms of Use" link at the bottom of the landing
            page of The Site.
          </Typography>
          <Typography className='contentText'>
            20.25 “The Site” means the website at www.minty.art.
          </Typography>
          <Typography className='contentText'>
            20.26 “Third Party” means a natural person or legal entity who is
            neither You nor Us.
          </Typography>
          <Typography className='contentText'>
            20.27 “Tokens” shall mean each of the Platform Tokens and the Other
            Tokens listed in Exhibit 4 and Token shall mean any one of them.
          </Typography>
          <Typography className='contentText'>
            20.28 “Token Acquisition Date” means the date of acquisition of
            Tokens through electronic or other means.
          </Typography>
          <Typography className='contentText'>
            20.29 “Token Electronic Contract” means, in relation to a Token, the
            blockchain-based electronic protocol used to facilitate the Use of
            that Token.
          </Typography>
          <Typography className='contentText'>
            20.30 “Token Usage Agreement” means this agreement as amended from
            time to time.
          </Typography>
          <Typography className='contentText'>
            20.31 “Token Usage Agreement Date” means the date You confirm Your
            acceptance of this Token Usage Agreement (and the Exhibits hereto),
            whether through electronic or other means.
          </Typography>
          <Typography className='contentText'>
            20.32 “Use” of the Tokens means any use you may make of the Tokens
            via the Online Tools either directly or indirectly in connection
            with:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) the acquisition of Platform Tokens in the Platform Token
            Issuance or as otherwise permitted by Us;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) the acquisition of the Other Tokens through permitted means;
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) holding the Tokens;
          </Typography>
          <Typography className='contentText contextTextList'>
            (d) storing the Tokens; and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            (e) utilising any functionality of the Token.
          </Typography>
          <Typography className='contentText'>
            20.33 “User” means any natural person who has visited The Site or
            the legal entity that they are authorised to represent who Uses the
            Tokens.
          </Typography>
          <Typography className='contentText'>
            20.34 “User Account” has the meaning given to it the Terms of Use.
          </Typography>
          <Typography className='contentText'>
            20.35 “Virus” means any viruses, worms, trojan horses, cancel bolts
            or any other computer code designed to disrupt or adversely impact
            computer systems, networks or devices.
          </Typography>
          <Typography className='contentText'>
            20.36 "White Paper" means the document describing the Tokens and
            their functionality, the Platform and other matters related to the
            Token (as may be amended from time to time) and available on The
            Site.
          </Typography>
        </div>
      </div>
      <div className='rootContent'>
        <Typography className='title'>EXHIBIT 1- REPRESENTATIONS</Typography>
        {/* PART A - SECURITIES LAW REPRESENTATIONS */}
        <div className='content'>
          <Typography className='contentTitle'>
            1. PART A - SECURITIES LAW REPRESENTATIONS
          </Typography>
          <Typography className='contentText'>
            1.1 You acknowledge and agree and undertake that:
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.1 You are familiar with all related regulations in the specific
            jurisdiction in which You are based and that acquiring cryptographic
            Tokens (through purchase or otherwise) in that jurisdiction is not
            prohibited, restricted or subject to additional conditions of any
            kind;
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.2 You agree and acknowledge that no regulatory authority has
            examined or approved of the information set out in the White Paper
            or any other material in connection with the Token;
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.3 You will not Use the Token if such Use would constitute a
            public offering of the Token in any country or jurisdiction where
            action for that purpose is required;
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.4 You confirm that the distribution or dissemination of the
            White Paper, any part thereof or any copy thereof, or any Use of the
            Tokens by You, is not prohibited or restricted by the applicable
            laws, regulations, or rules in Your jurisdiction, and where any
            restrictions in relation to possession are applicable, You have
            observed and complied with all such restrictions at Your own expense
            and risk without liability to Us;
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.5 You will also ensure that no obligations are imposed on Us in
            any such jurisdiction as a result of any of the actions taken by You
            in Clause 1.1.4 above; and
          </Typography>
          <Typography className='contentText contextTextList'>
            1.1.6 We will have no responsibility for and You will obtain any
            consent, approval or permission required by You for, the
            acquisition, offer, sale or delivery by You of the Token under the
            laws and regulations in force in any jurisdiction to which You are
            subject or in or from which You Use the Token.
          </Typography>
          <Typography className='contentText'>
            1.2 You acknowledge and agree the following jurisdiction-specific
            restrictions:
          </Typography>
          <Typography className='contentText contextTextList'>
            1.2.1 United States: You are not located or resident in the United
            States. In addition, the Tokens have not been and will not be
            registered under the U.S. Securities Act of 1933, as amended (the
            “U.S. Securities Act”) or any state securities laws in the United
            States and may not be offered or sold within the United States
            except pursuant to an exemption from, or in a transaction not
            subject to, the registration requirements of the U.S. Securities Act
            and applicable state securities laws in the United States.
            Accordingly, the Tokens are being offered and sold outside the
            United States in “offshore transactions” as that term is defined in,
            and in reliance on, Regulation S of the U.S. Securities Act. The
            Tokens have not been recommended by any U.S. federal or state
            securities commission or regulatory authority. Furthermore, the
            foregoing authorities have not confirmed the accuracy or determined
            the adequacy of the Whitepaper.
          </Typography>
          <Typography className='contentText contextTextList'>
            1.2.2 People’s Republic of China: You are not:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) a citizen or resident (tax or otherwise) of the People's
            Republic of China (“PRC");
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) a natural person residing in the PRC; or
          </Typography>
          <Typography className='contentText contextTextList'>
            (c) any entity organized or incorporated under the laws of the PRC.
          </Typography>
          <Typography className='contentText contextTextList'>
            1.2.3 Singapore: You understand and acknowledge that users of this
            Platform are hereby notified that nothing in the Platform
            constitutes or shall be deemed to constitute:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) an offer to provide, or an advertisement containing any offer to
            provide, to the public in Singapore or any section of the public in
            Singapore, any type of payment service in the Republic of Singapore
            or elsewhere;
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) the making of an offer or invitation, or an advertisement
            containing any offer or invitation, to the public in the Republic of
            Singapore or any section of the public in the Republic of Singapore,
            to enter into any agreement relating to the provision by any person
            of any type of payment service, whether in Singapore or elsewhere.
            <br />
            For the avoidance of doubt, reference to providing a payment service
            to persons in Republic of Singapore in the preceding sentence shall
            include, without limitation: (i) e-money or any digital payment
            token being available for purchase or other acquisition by persons
            in Republic of Singapore; (ii) e-money denominated in Singapore
            dollars being available for purchase or other acquisition; and (iii)
            the facilitation of the exchange of digital payment tokens for
            Singapore dollars.
            <br />
            You confirm that you understand and agree that the Whitepaper has
            not been and will not be registered as a prospectus with the
            Monetary Authority of Singapore.
            <br />
            You confirm that you understand and agree that neither We nor the
            Platform have been or are proposed to be registered with the
            Monetary Authority of Singapore and/or licensed under the Singapore
            Payment Services Act.
          </Typography>
        </div>
        {/* PART B - SANCTIONS LAW REPRESENTATIONS */}
        <div className='content'>
          <Typography className='contentTitle'>
            2. PART B - SANCTIONS LAW REPRESENTATIONS
          </Typography>
          <Typography className='contentText'>
            2.1 You acknowledge and agree that:
          </Typography>
          <Typography className='contentText contextTextList'>
            2.1.1 You are not:
          </Typography>
          <Typography className='contentText contextTextList'>
            (a) currently subject to any U.S. sanctions administered or enforced
            by the Office of Foreign Assets Control of the U.S. Department of
            the Treasury ("OFAC'), the United Nations Security Council, the
            European Union, the United Kingdom or other relevant sanctions
            authority (collectively, "Sanctions"); nor
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) located, organized or resident in a country or territory that is
            the subject of Sanctions;
          </Typography>
          <Typography className='contentText contextTextList'>
            2.1.2 You are not listed in any list of sanctioned persons including
            those maintained under the Sanctions including the List of Specially
            Designated Nationals and Blocked Persons or the Foreign Sanctions
            Evaders List maintained by OFAC;
          </Typography>
          <Typography className='contentText contextTextList'>
            2.1.3 You are not directly or indirectly owned or controlled by any
            Person subject to Clauses 2.1.1 and 2.1.2 above; and
          </Typography>
          <Typography className='contentText contextTextList'>
            2.1.4 “You” in this Clause 2.1 includes, if You are not a natural
            person, You and any of Your subsidiaries or, to Your knowledge any
            director, officer, or employee of You or Your subsidiaries.
          </Typography>
          <Typography className='contentText'>2.2 You:</Typography>
          <Typography className='contentText contextTextList'>
            2.2.1 represent and covenant that you will not use the proceeds of
            the sale of any Tokens and will not, directly or indirectly, use,
            lend, contribute or otherwise make available such proceeds to any of
            Your subsidiaries, joint venture partners or other Person (A) for
            the purpose of funding or facilitating any activities or business of
            or with any Person or in any country that, at the time of such
            funding or facilitation, is the subject of Sanctions; or (B) in any
            other manner that will result in a violation of Sanctions by any
            Person (including any Person participating in the acquisition of
            Tokens as adviser or otherwise); and
          </Typography>
          <Typography className='contentText contextTextList'>
            2.2.2 acknowledge and agree that none of the Use of the Tokens, the
            execution, delivery and performance of the Token Use Agreement, the
            consummation of any other transaction contemplated under the Token
            Usage Agreement will result in a violation by You or Your subsidiary
            of any of the Sanctions.
          </Typography>
        </div>
        {/* PART C - AML REPRESENTATIONS */}
        <div className='content'>
          <Typography className='contentTitle'>
            3. PART C - AML REPRESENTATIONS
          </Typography>
          <Typography className='contentText'>
            3.1 You undertake that You are not acquiring the Tokens through the
            proceeds of any illegal activity, including money laundering and the
            financing of terrorism.
          </Typography>
          <Typography className='contentText'>3.2 You confirm that:</Typography>
          <Typography className='contentText contextTextList'>
            (a) You shall comply with all laws relating to anti-money laundering
            and countering the financing of terrorism including all applicable
            statutes of all jurisdictions in which You are located, resident,
            organized or operate, and/or to which you may otherwise be subject
            and the rules and regulations thereunder (collectively, the "Money
            Laundering Laws"); and/or
          </Typography>
          <Typography className='contentText contextTextList'>
            (b) no action, suit or proceeding by or before any court or
            governmental agency, authority or body or any arbitrator involving
            You or any of Your Affiliates with respect to the Money Laundering
            Laws is pending or, to the best of Your knowledge (after due and
            careful enquiry), threatened.
          </Typography>
        </div>
      </div>
      <div className='rootContent'>
        <Typography className='title'>EXHIBIT 2 - RISK FACTORS</Typography>
        <Typography className='contentText'>
          An acquisition of the Tokens involves a high degree of risk. Users
          should carefully consider the following information about these risks
          before they decide to buy the Tokens. If any of the following risks
          actually occurs, it could have a material, adverse effect on the
          business, the Platform and/or the value of the Tokens.
        </Typography>
        <Typography className='contentText'>
          We have described the risks and uncertainties that We believe are
          material, but these risks and uncertainties may not be the only ones
          the parties ultimately face. Additional risks and uncertainties,
          including those We are currently not aware of or deem immaterial, may
          also have a material, adverse effect on the business, the Platform
          and/or the value of the Tokens.
        </Typography>
        {/* RISKS CONNECTED TO THE VALUE OF TOKENS */}
        <div className='content'>
          <Typography className='contentTitle'>
            1. RISKS CONNECTED TO THE VALUE OF TOKENS
          </Typography>
          <Typography className='contentText'>
            1.1 No Rights, Functionality or Features: The Tokens do not have any
            rights, uses, purpose, attributes, functionalities or features,
            express or implied, except for those which are specifically
            described in the White Paper and which may change from time to time.
          </Typography>
          <Typography className='contentText'>
            1.2 Lack of Development of Market for Tokens: There may be no active
            or liquid market for the Tokens, and their price may be highly
            volatile. If a liquid trading market for the Tokens does not
            develop, the price of the Tokens may become more volatile and the
            Token holder may be unable to sell or otherwise transact in the
            Tokens at any time. We do not in any way give any assurances that
            the Tokens will be exchangeable on any cryptographic exchanges or
            secondary markets.
          </Typography>
          <Typography className='contentText'>
            1.3 Risks Relating to Price: The prices of assets such as Ether and
            non-fungible tokens have historically been subject to dramatic
            fluctuations and are highly volatile. Even if “stablecoins” may be
            used in providing the services delivered through the Platform, the
            stability of such assets also cannot be guaranteed or assured. As
            relatively new products and technologies, blockchain-based assets
            are not widely accepted as a means of payment for goods and
            services. A significant portion of demand for these assets is
            generated by speculators and investors seeking to profit from the
            short- or long-term holding of blockchain assets. The market value
            of any Tokens may decline below the price paid. You acknowledge that
            the cost and speed of transacting with cryptographic and
            blockchain-based systems such as Ethereum are variable and may
            increase dramatically at any time, resulting in prolonged inability
            to access or use the Services. The valuation of digital Tokens in a
            secondary market is usually not transparent, and highly speculative.
            The Tokens do not hold any ownership rights to Our assets or the
            assets of Our Affiliates and, therefore, are not backed by any
            tangible physical asset that We own. There is a high risk that a
            Token holder could lose his/her entire contribution amount and that
            the Tokens could be rendered worthless.
          </Typography>
          <Typography className='contentText'>
            1.4 Tokens May Have No Value: The Tokens may have no value and there
            is no guarantee or representation of liquidity for the Tokens. We
            are not and shall not be responsible for or liable for the market
            value of the Tokens, the transferability and/or liquidity of the
            Tokens and/or the availability of any market for the Tokens through
            third parties or otherwise. You will be solely responsible for
            identifying the correct Platform Tokens required to access the
            features of the Platform that you require. You should be aware that
            there may be digital tokens with a similar name to the Platform
            Tokens. In particular, while We understand that the Tokens could be
            listed or available for purchase on digital asset exchanges
            including decentralized exchanges, We will not have control over any
            such listing and/or purchase process.
          </Typography>
          <Typography className='contentText'>
            1.5 Tokens are Non-Refundable: We are not obliged to provide the
            Token holders with a refund related to the Tokens for any reason,
            and the Token holders acknowledge and agree that they will not
            receive money or other compensation in lieu of a refund. No promises
            of future performance or price are or will be made in respect to the
            Tokens, including no promise of inherent value, no promise of
            continuing payments, and no guarantee that the Tokens will hold any
            particular value. Therefore, the recovery of spent resources may be
            impossible or may be subject to foreign laws or regulations, which
            may not be the same as the laws in the jurisdiction of the Token
            holder.
          </Typography>
          <Typography className='contentText'>
            1.6 Cryptocurrency paid may be non-refundable: Users should be aware
            that we accept cryptocurrency as a medium of payment. In certain
            circumstances, any such cryptocurrency does not constitute property
            or an entitlement to property and therefore may not be returned to
            You in the same form or at all. As an example, We are entitled, at
            Our discretion (including for the avoidance of doubt, the occurrence
            of a Regulatory Event), to perform a refund of payment (partially or
            in full) made by a person in favour of Us in order to acquire the
            Platform Tokens. In such a scenario, We are not obliged to make a
            refund of payments in the same amount and same type of
            cryptocurrency received from You and may make a refund in such
            digital form and through such digital means that we choose at Our
            discretion.
          </Typography>
          <Typography className='contentText'>
            1.7 Risks Relating to Eligibility Criteria: Your purchase of the
            Tokens may not automatically entitle you to use all the
            functionality of the Tokens as you may have to comply with certain
            eligibility criteria to access certain features of the Platform-
            which could include both qualitative and quantitative criteria.
          </Typography>
        </div>
        {/* BLOCKCHAIN AND SOFTWARE RISKS */}
        <div className='content'>
          <Typography className='contentTitle'>
            2. BLOCKCHAIN AND SOFTWARE RISKS
          </Typography>
          <Typography className='contentText'>
            2.1 Blockchain Delay Risk: On most blockchains used for
            cryptocurrency transactions, timing of block production is
            determined by proof of work so block production can occur at random
            times. The respective blockchain may not include the User’s
            transaction at the time User expects and the payment for the Tokens
            may not reach the intended wallet address on the same day that the
            User sends the cryptocurrency.
          </Typography>
          <Typography className='contentText'>
            2.2 Blockchain Congestion Risk: Most blockchains used for
            cryptocurrency transactions are prone to periodic congestion during
            which transactions can be delayed or lost. Individuals may also
            intentionally spam the network in an attempt to gain an advantage in
            purchasing Tokens. That may result in a situation where block
            producers may not include the User’s transaction when the User wants
            or the User’s transaction may not be included at all.
          </Typography>
          <Typography className='contentText'>
            2.3 Risk of Software Weaknesses: The Token Electronic Contract
            concept, the underlying software application and software platform
            are still in an early development stage and unproven. There are no
            representations and warranties that the process for creating the
            Tokens will be uninterrupted or error-free. There is an inherent
            risk that the software could contain weaknesses, vulnerabilities or
            bugs causing, inter alia, the complete loss of the cryptocurrency
            and/or the Tokens.
          </Typography>
          <Typography className='contentText'>
            2.4 Risk of New Technology: The Platform, the Tokens and all of the
            matters set forth in the White Paper are new and untested. It is
            possible that no blockchain utilizing the full proposed
            functionality of the Platform will be ever launched. User should not
            rely on the Platform, the Token Electronic Contract or the ability
            to receive the Tokens associated with the Platform in the future.
            Even if the Platform is fully completed, implemented and adopted, it
            might not function as intended, and any Tokens may not have
            functionality that is desirable or valuable. Also, technology is
            changing rapidly, so the Platform and the Tokens may become
            outdated. The technology utilized in the Platform depends on public
            peer-to-peer networks that are not under Our control or influence
            and are subject to many risks and uncertainties. You are solely
            responsible for the safekeeping of the private key associated with
            the blockchain address associated with your use of the services
            accessed through the Platform. We will not be able to restore or
            issue any refund in respect of any use of the Platform due to lost
            private keys.
          </Typography>
          <Typography className='contentText'>
            2.5 Fork Handling: The blockchain networks utilized by the Platform
            may be subject to “forks.” Forks occur when some or all individuals
            or entities running the software clients for a particular blockchain
            adopt a new client or a new version of an existing client that: (a)
            changes the protocol rules in backwards-compatible or
            backwards-incompatible manner that affects which transactions can be
            added into later blocks, how later blocks are added to the
            blockchain, or other matters relating to the future operation of the
            protocol; or (b) reorganizes or changes past blocks to alter the
            history of the blockchain. Some forks are “contentious” and thus may
            result in two or more persistent alternative versions of the
            protocol or blockchain, either of which may be viewed as or claimed
            to be the legitimate or genuine continuation of the original. We may
            not be able to anticipate, control or influence the occurrence or
            outcome of forks, and does not assume any risk, liability, or
            obligation in connection therewith. Without limiting the generality
            of the foregoing, We do not assume any responsibility to notify you
            of pending, threatened, or completed forks. We will respond to any
            forks We determine in Our sole and absolute discretion, and We shall
            not have any duty or obligation or liability to you if such response
            (or lack of such response) acts to your detriment. You assume full
            responsibility to independently remain apprised of and informed
            about possible forks, and to manage your own interests in connection
            therewith.
          </Typography>
          <Typography className='contentText'>
            2.6 Risks association with the Ethereum protocol: Because Tokens are
            based on the Ethereum blockchain, any malfunction, breakdown or
            abandonment of the Ethereum protocol may result in the loss of or
            inability to transfer Tokens. The Ethereum network is prone to
            periodic congestion during which transactions could be delayed or
            lost. Individuals may also intentionally spam the Ethereum network
            in an attempt to gain an advantage in purchasing cryptographic
            tokens. That may result in a situation where block producers may not
            include a user’s transaction at the time such user expects, or a
            user’s transaction may not be included at all. Moreover, advances in
            cryptography, or technical advances such as the development of
            quantum computing, could present risks by undermining or vitiating
            the cryptographic consensus mechanism that underpins the Ethereum
            protocol. Also, governmental and regulatory agencies could prohibit
            the use of current and/or future cryptographic protocols which could
            adversely impact the ability to transfer the Tokens, resulting in a
            significant loss of value of the Tokens.
          </Typography>
        </div>
        {/* SECURITY RISKS */}
        <div className='content'>
          <Typography className='contentTitle'>3. SECURITY RISKS</Typography>
          <Typography className='contentText'>
            3.1 Risk of Loss of Access to Wallet: The Tokens may be held by a
            User only a Token wallet that is capable of holding the Tokens.
            Accordingly, loss of any details required to obtain access to such
            wallet could result in an inability to access the User’s Tokens,
            access to the User’s Token balance and/or any initial balances in
            blockchains created by third parties. Your Tokens will be held in a
            crypto-wallet. Your crypto-wallet stores your private key and public
            keys. Public keys allow outside parties to transmit cryptocurrencies
            into your digital wallet. Private keys allow you to receive, hold,
            access and transfer Tokens. Accordingly, loss of requisite private
            key(s) associated with your wallet will result in your inability to
            access your Tokens, and they will be unrecoverable. Moreover, any
            third party that gains access to such private key(s), including by
            gaining access to login credentials of a hosted wallet service you
            use, may be able to misappropriate your Tokens. Any errors or
            malfunctions caused by or otherwise related to the wallet you choose
            to receive and store Tokens, including your own failure to properly
            maintain or use such wallet, may also result in the loss of your
            Tokens.
          </Typography>
          <Typography className='contentText'>
            3.2 No Assurance of Token Security: While we believe our platform
            offers a high degree of security, there can be no assurance of this.
            The Tokens may be subject to expropriation and or/theft. Hackers or
            other malicious groups or organizations may attempt to interfere
            with the Token Electronic Contract or the Tokens in a variety of
            ways, including malware attacks, denial of service attacks,
            consensus-based attacks, Sybil attacks, smurfing and spoofing.
            Furthermore, because the Platform rests on an open source software,
            there is the risk that the Token contracts may contain intentional
            or unintentional bugs or weaknesses which may adversely affect the
            Tokens or result in the loss of Tokens, or the loss of ability to
            access or control the Tokens. In the event of such a software bug or
            weakness, there may be no remedy and Users are not guaranteed any
            remedy, refund or compensation.
          </Typography>
          <Typography className='contentText'>
            3.3 Attacks on Token Electronic Contract: The blockchain used for
            the Token Electronic Contract is susceptible to mining attacks,
            including double-spend attacks, majority mining power attacks,
            "selfish-mining" attacks, and race condition attacks. Any successful
            attacks present a risk to the Token Electronic Contract, expected
            proper execution and sequencing of the Token transactions, and
            expected proper execution and sequencing of contract computations.
          </Typography>
        </div>
        {/* RISKS RELATING TO PLATFORM DEVELOPMENT */}
        <div className='content'>
          <Typography className='contentTitle'>
            4. RISKS RELATING TO PLATFORM DEVELOPMENT
          </Typography>
          <Typography className='contentText'>
            4.1 Risk Related to Reliance on Third Parties: Even if completed,
            the Platform will rely, in whole or in part, on third parties to
            adopt and implement it and to continue to develop, supply, and
            otherwise support it including through supporting many of the key
            technological functions of our Platform. There is no assurance or
            guarantee that those third parties will complete their work,
            properly carry out their obligations, or otherwise meet
            requirements, all of which might have a material adverse effect on
            the Platform.
          </Typography>
          <Typography className='contentText'>
            4.2 Dependence of Platform on Senior Management Team: The success of
            the senior management team of the Platform Provider, is dependent to
            a large degree on the services of each member of that team. The loss
            or diminution in the services of any member of the senior management
            team or an inability to attract, retain and maintain additional
            senior management personnel, could have a material adverse effect on
            the Platform. Competition for personnel with relevant expertise is
            intense due to the small number of qualified individuals, and this
            situation may adversely impact the Platform Provider’s ability to
            retain existing senior management and/or attract additional
            qualified senior management personnel, which could, in turn, have a
            material adverse effect on the Platform.
          </Typography>
          <Typography className='contentText'>
            4.3 Dependence of Platform on Various Factors: The development of
            the Platform may be abandoned for a number of reasons, including
            lack of interest from the public, lack of funding, lack of
            commercial feasibility or departure of key personnel. Even if the
            Platform is completed, adopted and launched, the ongoing success of
            the Platform relies on the interest and participation of third
            parties. There can be no assurance or guarantee that there will be
            sufficient interest or participation in the Platform.
          </Typography>
          <Typography className='contentText'>
            4.4 Changes to the Platform: The Platform is still under development
            and may undergo significant changes over time. Although the project
            management team of the Platform Provider intends for the Platform to
            have the features and specifications set forth in the White Paper,
            changes to such features and specifications can be made for any
            number of reasons, any of which may mean that the Platform does not
            meet expectations of holder of the Tokens.
          </Typography>
          <Typography className='contentText'>
            4.5 Risk associated with Other Applications: The launch of the
            Platform may encourage other, alternative projects with a similar
            business model, promoted by unaffiliated third parties, under which
            the Token will have no intrinsic value.
          </Typography>
          <Typography className='contentText'>
            4.6 Risk of an Unfavorable Fluctuation of Cryptocurrency Value: The
            proceeds of the sale of the Tokens will be denominated in
            cryptocurrency, and may be converted into other cryptographic and
            fiat currencies. If the value of cryptocurrencies fluctuates
            unfavorably during or after the issue of any Tokens, We, in our
            capacity as Platform Provider may not be able to fund development,
            or may not be able to develop or maintain the Platform in the manner
            that it intended.
          </Typography>
        </div>
        {/* RISKS ARISING IN THE COURSE OF THE COMPANY’S BUSINESS */}
        <div className='content'>
          <Typography className='contentTitle'>
            5. RISKS ARISING IN THE COURSE OF THE COMPANY’S BUSINESS
          </Typography>
          <Typography className='contentText'>
            5.1 Risks Relating to the Commercial success of Our Platform: The
            commercial success of the Platform is subject to a number of factors
            beyond Our control and/or the control of the Platform Provider, such
            as:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.1 ability / inability to meet users' expectations regarding the
            functionality of the Platform;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.2 interest from a limited number of users;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.3 limited bandwidth to manage unexpected growth;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.4 inability to continuously adapt the business model underlying
            the Token to meet market needs;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.5 significant competition from new and existing players in this
            space who introduce similar platforms; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.1.6 any other new and untested technology that underlies the
            Platform in the future may not function as planned.
          </Typography>
          <Typography className='contentText'>
            5.2 Risks Relating to the Development and Acceptance of Blockchain
            Networks: The further development and acceptance of blockchain
            networks, including the network on which the Token is based, are
            part of a new and rapidly changing industry, which is subject to a
            variety of factors that are difficult to evaluate. The slowing or
            stopping of the development or acceptance of blockchain networks and
            blockchain-enabled digital representation of rights could have an
            adverse material effect on the utility of the Tokens. The growth of
            the blockchain industry in general, as well as the blockchain
            networks with which the Token will rely and interact, is subject to
            a high degree of uncertainty. The factors affecting the further
            development of the cryptocurrency industry, as well as blockchain
            networks, include, without limitation:
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.1 worldwide growth in the adoption and use of Bitcoin, Ether and
            other blockchain technologies;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.2 government and quasi-government regulation of Bitcoin,
            Ethereum and other blockchain assets and their use, or restrictions
            on or regulation of access to and operation of blockchain networks
            or similar systems;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.3 the maintenance and development of the open-source software of
            the Bitcoin, Ethereum and other cryptocurrency networks;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.4 changes in consumer demographics and public tastes and
            preferences;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.5 the availability and popularity of other forms or methods of
            buying and selling goods and services, or trading assets including
            new means of using fiat currencies or existing networks;
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.6 general economic conditions and the regulatory environment
            relating to cryptocurrencies; and
          </Typography>
          <Typography className='contentText contextTextList'>
            5.2.7 a decline in the popularity or acceptance of the Bitcoin,
            Ethereum or other networks. The slowing or stopping of the
            development, general acceptance and adoption and usage of blockchain
            networks and blockchain assets may deter or delay the acceptance and
            adoption of the Tokens.
          </Typography>
          <Typography className='contentText'>
            5.3 Limited Historical Information: We and our Affiliates are
            start-up companies, and, therefore have limited prior business
            operations, financial historical information and other business
            information relating to the business operations or future prospects
            of the group.
          </Typography>
          <Typography className='contentText'>
            5.4 Risk of Conflicts of Interest: We may be engaged in transactions
            with related parties, including companies controlled by Us or in
            which We own an interest, and other Affiliates, and may continue to
            do so in the future. Conflicts of interest may arise between any of
            Our Affiliates and Us, potentially resulting in the conclusion of
            transactions on terms not determined by market forces.
          </Typography>
          <Typography className='contentText'>
            5.5 Risks Related to Invalidation of Transactions: We and Our
            Affiliates may take a variety of actions relating to the business
            that, if successfully challenged for not complying with Applicable
            Law, could be invalidated or could result in the imposition of
            liabilities on Us. Since applicable legislation may be subject to
            many different interpretations, We may not be able to successfully
            defend any challenge brought against such transactions, and the
            invalidation of any such transactions or imposition of any such
            liability may, individually or in the aggregate, have a material
            adverse effect on the Platform.
          </Typography>
          <Typography className='contentText'>
            5.6 Risk Arising from Emerging Markets: We may operate in several
            emerging markets. Emerging markets are subject to greater risks than
            more developed markets, including significant legal, economic and
            political risks. Emerging economies are subject to rapid change and
            the User understands that the information set out in this Token
            Usage Agreement and the White Paper may become outdated relatively
            quickly.
          </Typography>
          <Typography className='contentText'>
            5.7 Lack of Information: A holder of Tokens may not be able to
            obtain all information it would want regarding the Token on a timely
            basis or at all going forward. It is possible that the holder may
            not therefore be aware on a timely basis of material adverse changes
            that have occurred which could affect the Tokens.
          </Typography>
          <Typography className='contentText'>
            5.8 Compliance Burden: Our business and industry is subject to
            compliance with a number of laws including those relating to data
            protection, security, privacy, and other government- and
            industry-specific requirements including those that could require Us
            to notify individuals of data security incidents involving certain
            types of personal data. Security compromises could harm Our
            reputation, erode user confidence in the effectiveness of Our
            security measures, adversely impact Our ability to attract new
            users, or cause existing users to stop using the Platform.
          </Typography>
        </div>
        {/* GOVERNMENTAL RISKS */}
        <div className='content'>
          <Typography className='contentTitle'>
            6. GOVERNMENTAL RISKS
          </Typography>
          <Typography className='contentText'>
            6.1 Uncertain Regulatory Framework: The regulatory status of
            cryptocurrency, digital assets, blockchain technology and
            decentralised exchanges is unclear or unsettled in many
            jurisdictions. Advances in code cracking or technical advances such
            as the development of quantum computers may present risks to the
            services delivered through the Platform, which could result in the
            theft, loss or inaccessibility thereof. It is difficult to predict
            how or whether governmental authorities will regulate such
            technologies particularly as We believe the Platform offers several
            first-of-its-kind features. It is likewise difficult to predict how
            or whether any governmental authority may make changes to existing
            laws, regulations and/or rules that will affect cryptocurrency,
            digital assets, blockchain technology and its applications. Such
            changes could adversely impact the Tokens in various ways,
            including, for example, through a determination that the Tokens are
            regulated financial instruments that require registration. You
            should be aware that neither We nor the White Paper nor the Tokens
            are registered with any securities regulator in any jurisdiction
            including, in Hong Kong, the Securities and Futures Commission or
            the Hong Kong Monetary Authority or in Singapore, the Monetary
            Authority of Singapore. We and/or the Platform Provider (as
            applicable) may cease the distribution of the Tokens, the
            development of the Platform and/or cease operations in a
            jurisdiction in the event that governmental actions make it unlawful
            or commercially undesirable to continue to do so.
          </Typography>
          <Typography className='contentText'>
            6.2 Failure to Obtain, Maintain or Renew Licenses and Permits. We
            may require a number of permits, licenses, authorisations, consents,
            decrees, waivers, approvals and filings (statutory, regulatory or
            otherwise) to lawfully operate the business in accordance with
            Applicable Law (the “Approvals”). There is a risk that requirements
            for Approvals for the issue of Tokens through the Platform or
            otherwise may be adopted in the future and may relate to Us. In this
            case, the business will depend on obtaining such required Approvals,
            the continuing validity of such Approvals and Our compliance with
            their terms. Regulatory authorities will exercise considerable
            discretion in the timing of Approval issuance and renewal and the
            monitoring of Our compliance with the terms of such Approvals.
            Requirements which may by imposed by these authorities and which may
            require Us and/or the Platform Provider to comply with numerous
            standards, recruit qualified personnel, maintain necessary technical
            equipment and quality control systems, monitor operations, maintain
            appropriate filings and, upon request, submit appropriate
            information to the licensing authorities, may be costly and time-
            consuming and may result in delays in the commencement or
            continuation of operation of the Platform. Further, private
            individuals and the public at large may possess rights to comment on
            and otherwise engage in the Approval process, including through
            intervention in courts and political pressure. Accordingly, the
            Approvals We may need may not be issued or renewed, or if issued or
            renewed, may not be issued or renewed in a timely fashion, or may
            involve requirements which restrict Our ability to conduct
            operations or to do so profitably.
          </Typography>
          <Typography className='contentText'>
            6.3 Risk of Government Action: The industry in which We operate is
            new, and may be subject to heightened oversight and scrutiny,
            including investigations or enforcement actions. There can be no
            assurance that governmental authorities will not examine Our
            operations and/or pursue enforcement actions against Us. All of this
            may subject Us and/or the Platform Provider to judgments,
            settlements, fines or penalties, or cause Us to restructure Our
            operations and activities or to cease offering certain products or
            services, all of which could harm Our reputation or lead to higher
            operational costs, which may in turn have a material adverse effect
            on the Tokens and/or the development of the Platform.
          </Typography>
          <Typography className='contentText'>
            6.4 Risk of Burdensomeness of Applicable Laws, Regulations, and
            Standards: Failure to comply with Applicable Law or the findings of
            government inspections, or increased governmental regulation of Our
            operations, could result in substantial additional compliance costs
            or various sanctions, which could materially adversely affect Our
            business and the Platform. Our operations and properties are subject
            to regulation by various government entities and agencies, in
            connection with ongoing compliance with Applicable Law. One example
            is a number of data protection, security, privacy and other
            government- and industry-specific requirements, including those that
            require companies to notify individuals of data security incidents
            involving certain types of personal data. Security compromises could
            harm our reputation, erode user confidence in the effectiveness of
            our security measures, negatively impact our ability to attract new
            users, or cause existing users to stop using our Platform.
            Regulatory authorities exercise considerable discretion in matters
            of enforcement and interpretation of Applicable Law. Respective
            authorities have the right to conduct periodic inspections of Our
            operations and properties throughout the year. Any such future
            inspections may conclude that We have violated laws, decrees or
            regulations, and We may be unable to refute such conclusions or
            remedy the violations. Our failure to comply with existing laws and
            regulations or the findings of government inspections may result in
            the imposition of fines or penalties or more severe sanctions or in
            requirements We cease certain business activities, or in criminal
            and administrative penalties applicable to Our officers. Any such
            decisions, requirements or sanctions, or any increase in
            governmental regulation of respective operations, could increase Our
            costs and have a material adverse effect on the business and the
            Platform.
          </Typography>
          <Typography className='contentText'>
            6.5 Unlawful or Arbitrary Government Action: Governmental
            authorities may have a high degree of discretion and, at times, act
            selectively or arbitrarily, without hearing or prior notice, and
            sometimes in a manner that is contrary to law or influenced by
            political or commercial considerations. Moreover, governmental
            authorities also have the power in certain circumstances, by
            regulation or government act, to interfere with the performance of,
            nullify or terminate contracts. Unlawful, selective or arbitrary
            governmental actions have reportedly included the denial or
            withdrawal of licenses, sudden and unexpected tax audits, criminal
            prosecutions and civil actions. Federal and local government
            entities have also used common defects in matters surrounding a
            Token issue as pretexts for court claims and other demands to
            invalidate or to void any related transaction, often for political
            purposes. In this environment, Our competitors may receive
            preferential treatment from the government, potentially giving them
            a competitive advantage over Us.
          </Typography>
          <Typography className='contentText'>
            6.6 Risks Relating to Taxation: The tax treatment of acquisition of
            Tokens (through purchase or otherwise) is uncertain and there may be
            adverse tax consequences for acquirers. Each acquirer must seek its
            own tax advice in connection with the purchase of Tokens. The
            acquisition of Tokens may result in adverse tax consequences to
            acquirers, including withholding taxes, income taxes and tax
            reporting requirements. Each acquirer should consult with and must
            rely upon the advice of its own professional tax advisors with
            respect to the tax treatment of the acquisition of Tokens.
          </Typography>
        </div>

        {/* RISKS RELATING TO THE PLATFORM TOKEN ISSUANCE PROCESS */}
        <div className='content'>
          <Typography className='contentTitle'>
            7. RISKS RELATING TO THE PLATFORM TOKEN ISSUANCE PROCESS
          </Typography>
          <Typography className='contentText'>
            7.1 Risks Relating to the Platform Token Issuance Process: You are
            subject to certain risks as a result of the Platform Token Issuance
            process. You understand that these risks include the fact that You
            may not be able to acquire and/or hold any Tokens if among other
            things, We believe you are a Restricted Person or that a Regulatory
            Event has occurred.
          </Typography>
        </div>

        {/* RISKS RELATING TO DIGITAL COLLECTIBLES */}
        <div className='content'>
          <Typography className='contentTitle'>
            8. RISKS RELATING TO DIGITAL COLLECTIBLES
          </Typography>
          <Typography className='contentText'>
            8.1 Limited information; No independent investigation: There may be
            limited information available on the origin of the digital
            collectibles available for sale on the Platform and no independent
            investigation done on various aspects of the digital collectibles.
            Users should note that unlike financial assets, there is no
            standardised diligence methodology for a digital collectible. There
            is no assurance being given by the Platform or any Third Party that
            the digital collectibles are not forgeries or fakes or unauthorised
            copies. We have not undertaken and will not undertake any
            investigations, searches or other actions to fully verify all
            relevant details in respect of the digital collectibles. The
            Platform will not evaluate the claims of a potential purchaser
            against a creator, resolve disputes between a creator and a
            purchaser or offer refunds on digital collectibles purchased through
            the Platform.
          </Typography>
          <Typography className='contentText'>
            8.2 No standardised art valuation methodology: Investors should note
            that unlike financial assets, there is no standardised valuation
            methodology for digital collectibles. Standards for valuation are
            ambiguous and little consensus exists about how to conduct a
            valuation of digital collectibles. While we expect that our Platform
            will enable genuine price discovery in relation to the value of a
            digital collectible, users should not that any price estimate there
            will depend on valuations, projections, forecasts and estimates that
            could be speculative in nature, and it can be expected that some or
            all of the underlying assumptions may differ or may prove
            substantially incorrect. Therefore, there can be no assurance that
            the price at which a digital collectible is sold on the Platform
            either as part of an initial sale or a resale will genuinely reflect
            its value.
          </Typography>
          <Typography className='contentText'>
            8.3 No assurance in relation to completion of digital collectibles:
            There can be no assurance that any creator of a digital collectible
            that has been prefunded or otherwise supported under the Patron
            program will actually complete the creation process in time or at
            all or in the manner expected.
          </Typography>
        </div>
      </div>
      <div className='rootContent'>
        <Typography className='title'>
          EXHIBIT 3 –ISSUANCE PROCEDURES FOR PLATFORM TOKENS
        </Typography>
        <div className='content'>
          <Typography className='contentTitle'>
            1. Process for Purchase of paid Platform Tokens-Payment Information
          </Typography>
          <Typography className='contentText'>
            8.4 Payment for the purchase of Platform Tokens from Us shall take
            place on such terms as shall be agreed between You and Us at the
            relevant time.
          </Typography>
          <Typography className='contentText'>
            8.5 We may facilitate the sale of certain Other Tokens through
            purchase and resale from time to time and in such a scenario,
            payment for the purchase of the Other Tokens from Us shall take
            place on such terms as shall be agreed between You and Us at the
            relevant time.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            2. Process for Purchase of paid Platform Tokens-Additional
            Information
          </Typography>
          <Typography className='contentText'>
            8.6 To purchase the Platform Tokens, We may require a User to
            complete Our KYC process including:
          </Typography>
          <Typography className='contentText contextTextList'>
            8.6.1 submitting any required documentation to our service
            providers; and
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.2 await verification.
          </Typography>
          <Typography className='contentText'>
            8.7 Users are reminded that given the complexity of the KYC process,
            if we exercise our discretion to conduct verification, the
            verification may fail or be delayed and that they can only purchase
            the Platform Tokens once the verification process has been
            completed.
          </Typography>
          <Typography className='contentText'>
            8.8 We reserve the right to refuse or cancel purchase requests for
            Platform Tokens at any time in Our sole discretion, including cases
            when
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.3 the information provided by User upon any requests is not
            sufficient, inaccurate or misleading;
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.4 a User is believed to be a Restricted Person; or
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.5 a User has not complied with any of the requirements of the
            Platform.
          </Typography>
          <Typography className='contentText'>
            8.9 In the case specified in Clause 2.3 hereof, We may, at Our sole
            discretion, either:
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.6 retain all the funds paid by the respective payer if required
            by Applicable Law; or
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.7 refund to the payer of the funds in accordance with Clause 6
            hereof.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            3. Bonus Programs and Airdrops
          </Typography>
          <Typography className='contentText'>
            8.10 Certain Users may be eligible to receive Platform Tokens at no
            payment ("Bonus Tokens") including additional Platform Tokens based
            on their existing holding of Platform Tokens or other eligibility
            criteria as detailed in our White Paper.
          </Typography>
          <Typography className='contentText'>
            8.11 We may launch different bonus programs enabling different
            persons to receive the Bonus Tokens. Different bonus programs may be
            launched for the benefit of different persons.
          </Typography>
          <Typography className='contentText'>
            8.12 Programmes for the issue of Bonus Tokens may be additive.
          </Typography>
          <Typography className='contentText'>
            8.13 Bonus Tokens may also be issued in fractional components of
            Platform Tokens.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            4. Receipt of Platform Tokens by Users
          </Typography>
          <Typography className='contentText'>
            8.14 You can only receive the Platform Tokens in a wallet that is
            capable of holding the Platform Tokens.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            5. Stop of Distribution Process
          </Typography>
          <Typography className='contentText'>
            8.15 We reserve a right in an emergency to stop the process of
            distribution of the Platform Tokens in limited situations, such as,
            but not limited to:
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.8 detection of a serious security issue;
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.9 serious network performance issue, depriving all users of
            equal treatment;
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.10 any type of material attack on the Platform Tokens, the
            Platform, The Site or the cryptocurrency networks;
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.11 the occurrence of a Regulatory Event; or
          </Typography>
          <Typography className='contentText contextTextList'>
            3.2.12 We believe that you are a Restricted Person.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            6. Refund of Payments
          </Typography>
          <Typography className='contentText'>
            8.16 We are entitled, at Our discretion (including for the avoidance
            of doubt, the occurrence of a Regulatory Event), to perform a refund
            of payment (partially or in full) made by a person in favour of Us
            in order to acquire the Platform Tokens ("Refund Receiver").
          </Typography>
          <Typography className='contentText'>
            8.17 We are not obliged to make a refund of payments in the same
            amount and same type of cryptocurrency received from You and may
            make a refund in such digital form and through such digital means
            that we choose at Our discretion. For the avoidance of doubt, the
            price of any cryptocurrency received by Us shall not be set in fiat
            currency and We are under no obligation to the refund the fiat
            currency equivalent of any cryptocurrency received by Us.
          </Typography>
          <Typography className='contentText'>
            8.18 We are not obliged to make a refund of payments in the same
            amount and same type of cryptocurrency received from You and may
            make a refund in such digital form and through such digital means
            that we choose at Our discretion. For the avoidance of doubt, the
            price of any cryptocurrency received by Us shall not be set in fiat
            currency and We are under no obligation to the refund the fiat
            currency equivalent of any cryptocurrency received by Us.
          </Typography>
          <Typography className='contentText'>
            8.19 Any refunds made in favor of the Refund Receiver will be
            reduced by an amount of any expenses that We have incurred or may
            incur in future in this regard, including any exchange fees, bank
            fees, agency and brokerage fees, taxes, charges, fees for blockchain
            transactions including gas fees, etc.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>
            7. Changes to Sale and Distribution procedures
          </Typography>
          <Typography className='contentText'>
            8.20 We reserve the right to amend the terms and conditions of the
            Platform Token Issuance set out therein, at Our sole discretion, at
            any time.
          </Typography>
          <Typography className='contentText'>
            8.21 We shall publish a notice on The Site to inform Users of any
            material changes to the terms and conditions of the Platform Token
            Issuance as soon as reasonably practicable. It is Your
            responsibility to regularly check The Site for any such notices.
          </Typography>
        </div>
      </div>
      <div className='rootContent'>
        <Typography className='title'>EXHIBIT 4 – LIST OF TOKENS</Typography>
        <div className='content'>
          <Typography className='contentTitle'>1. Platform Tokens</Typography>
          <Typography className='contentText'>
            8.22 Such Platform Tokens that are set out in the list of Platform
            Tokens made available by way of an Important Notice.
          </Typography>
        </div>
        <div className='content'>
          <Typography className='contentTitle'>8. Other Tokens</Typography>
          <Typography className='contentText'>
            8.23 Such Other Tokens that are set out in the list of Other Tokens
            made available by way of an Important Notice.
          </Typography>
        </div>
      </div>
    </Container>
    // <Typography className="contentText contextTextList">
    //       (a) text
    //       </Typography>
    //       <Typography className="contentText contextTextList">
    //       (b) text
    //       </Typography>
    //       <Typography className="contentText contextTextList">
    //       (c) text
    //       </Typography>
  );
}
