import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const userStyles = makeStyles({
  root: {
    padding: "50px 0",
    "& .title": {
      color: "#fff",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 900,
      fontSize: "28px",
      textTransform: "none",
      textAlign: "center",
    },
    "& p": {
      color: "#fff",
      fontFamily: "Montserrat, sans-serif",
    },
    "& .rootContent": {
      margin: "20px 0",
      "& .contentTitle": {
        marginTop: "20px",
        fontSize: "40px",
      },
    },
    "& .content": {
      margin: "10px 0",
    },
    "& .contentText": {
      margin: "10px 0",
    },
    "& .contextTextList": {
      marginLeft: "20px",
    },
    "& .bold": {
      fontWeight: 900,
    },
    "& .quote": {
      margin: "30px 0",
      "& p": {
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
      },
      "& .quote_text": {
        marginBottom: "25px",
      },
    },
  },
});

const Whitepaper = () => {
  const classes = userStyles();

  const Quote = ({ text, name, title }) => {
    return (
      <div className="quote">
        <Typography className="quote_text">{text}</Typography>
        <Typography className="quote_name">{name}</Typography>
        <Typography className="quote_title">{title}</Typography>
      </div>
    );
  };

  return (
    <>
        <iframe height="800px" width="100%" src="https://docs.google.com/document/d/1P5zNaO1R6L_6RAgJjDImzBuNyKTM6jgV1qPVdUZ47k4/edit"></iframe>
      {/* <Container maxWidth="lg" className={classes.root}>
        <div className="rootContent">
          <div className="content">
            <Typography className="contentTitle">Abstract</Typography>
            <Typography className="contentText">
              Traditional curation of art has been controlled and limited via
              elitist accessibility, galleries and auction houses consolidating
              power. Auction houses Christie’s and Sotheby’s already account for
              more than 80% all major artworks sold, an effective duopoly. While
              excellent for their margins (north of 30%), this art and artists
              censorship is the assassin of creativity, and such duopolies
              curate and limit the full potential and diversity of art. Minty
              stands for artists, unbound creativity and removing homogeneity.
              Minty is all things quirky, all things democratic and above all -
              a fair exposure for all. It is about using technology to bring
              value back to artists and reduce censorship from the few. It is
              about democratizing art with the power of Blockchain technology.
            </Typography>
          </div>
          <div className="content">
            <Typography className="contentTitle">The Problem</Typography>
            <Typography className="contentText bold">
              The art world faces the same threats as all economic systems that
              dominate our globe; wealth is concentrated at the top, being
              traded by the selected few, with little trickling down to the
              source, to the artists who produce the works, to the writers,
              curators and creators in general who play vital roles in shaping
              our cultures.
            </Typography>
            <Typography className="contentText">
              For ages, artists have been struggling to fund and live from their
              passion. Although the internet offered a means of exposure to a
              global audience, there’s never been a good working model that
              would finance their projects and enable them to capture the fair
              value of their work, from its immediate usage and future
              appreciation. Minty believes that art comes from unbound
              diversity, and that systems should be designed to promote
              creativity at a global scale. The Art ecosystem has not adapted to
              current technology. As a result, it centralises value into a
              handful of organisations at the expense of artists.
            </Typography>
            <Quote
              name="Jeffrey Deitch"
              title="Art Dealer & Curator"
              text="“The most challenging problem facing the art world today may be the conflict between the new global audience of visually fluent people versus the traditional art-world elites. Could a small group of influential people leading the major museums, galleries, auction houses, and art publications continue to define which artists would be celebrated? Avoid the tyranny of consensus. Art should dismantle consensus, not collude towards it.”"
            />
            <Quote
              name="Christy MacLear"
              text="“There is no true art market. A market is a transparent forum of exchange—public and private pricing combined. We must resist the desire to keep this forum sacred—and put the data into the hands of all. Digitize to revolutionize—put your pricing online and level the playing fields—putting more power into the hands of the artists and creating a new currency for them. Create the digital pricing forum to create the true market.”"
              title="CEO, Robert Rauschenberg Foundation"
            />
          </div>
          <div className="content">
            <Typography className="contentTitle">The Solution</Typography>
            <Typography className="contentText">
              Blockchain technology offers an infrastructure to rule and
              coordinate the governance and efforts of a decentralized movement,
              building a foundation of fairness, openness, and democratic
              principles. Minty endeavours to bring back the control and value
              in between the hands of art creators and collectors. We are
              re-imagining the art patronage. Minty is a software platform
              enabling art funding and trading, using Blockchain technology,
              decentralized finance (DeFI) and non-fungible tokens (NFTs). Minty
              empowers artists, giving them complete control over their work.
              Artists can control scarcity, avoid counterfeiting, enjoy
              copyright protection, create multiple revenue incomes from their
              work and realise their true potential by using Minty’s patronage
              scheme. On the other side of the trade, Patrons, have the
              privilege to be part of the creation process and fund the next
              generation of artist
            </Typography>
            <Quote
              name="Ben Gentilli"
              title="Artist"
              text='“I think that not since the Renaissance have we seen such a shift in power back into the hands of the artists,"'
            />
          </div>
          <div className="content">
            <Typography className="contentTitle">How does it work?</Typography>
            <Typography className="contentText">
              Creators and artists showcase their future projects and pre-sale
              it. Any creation can be submitted, physical or digital. On the
              other side of the trade, Patrons are brought in during the
              creative process and sponsor the avant garde artists of their
              choice. Once finished, the artwork is minted via a unique
              non-fungible token, a crypto asset that captures the property and
              the value of the artwork. The token that gives all the rights can
              be traded while distributing royalties to the creator. Collectors
              can buy listed artworks but cannot participate in pre-sales.
            </Typography>
            <Typography className="contentText bold">
              The Minty platform collects fees from the different transactions
              in the patronage and the marketplace section.
            </Typography>
            <Typography className="contentText">
              The MINTY Token is a platform token used to reward and align the
              platform users interests. It is the crypto-asset that captures the
              value created within the minty platform. Collectors can earn MINTY
              tokens by buying and trading artworks. By collecting it,
              collectors become patrons and unlock exclusive features and perks.
              Minty’s unique digital patronage program democratises the curation
              process and allows artists to find their tribes and followers
              earlier on. Minty lets artists and collectors be themselves -
              powering creativity and bringing colours to this world.
            </Typography>
          </div>
          <div className="content">
            <Typography className="contentTitle">
              Overview of the Art Landscape
            </Typography>
            <Typography className="contentTitle bold">
              The Art Evolution
            </Typography>
            <Typography className="contentText">
              For centuries, art has adapted to the times, changing medium,
              distribution, but never its purpose. From the creation of the
              paintbrush to virtual reality, it has evolved at the speed of
              industrial and technological revolutions.
            </Typography>
            <Typography className="contentText">
              Technology had been both an ally and a foe in many senses here.
              Art was able to transition from being accessible to the privileged
              elite (such as commissioned royal works) to the many (with the
              move to acrylic paint, followed by the convenience from canevas,
              then the advent of impressionism and later the camera).
            </Typography>
            <h1>IMAGE1</h1>
            <Typography className="contentText">
              Being in the digital age, art is no exception. Digital art slowly
              emerged in the late 1980s with the introduction of personal
              computers. Thirty years later we have a screen-dominated world
              with the average person spending ten hours a day on digital
              devices.
            </Typography>
            <Typography className="contentText">
              At the same time, there’s been a radical decline in the cost of
              digital art software with the exponential growth of chip power and
              bandwidth. This has made creating digital art affordable for
              artists and other creative individuals wanting to explore this
              medium’s potential.
            </Typography>
            <Typography className="contentText">
              As production became simpler, so did duplication – as Andy Warhol
              proved with his many Monroe’s and cans of soup. From Andy Warhol
              using the Commodore Amiga, to Ben Laposky’s “Oscillon 40” in the
              1950s, there have always been artists pushing the boundaries of
              digital art.
            </Typography>
            <Typography className="contentText">
              On the flip side, as infinitely reproducible, digital prints have
              removed the sense of ownership, the scarcity that canvas arts
              enjoyed: this reduced perceived value and increased counterfeits.
            </Typography>
            <Typography className="contentText">
              Value started trickling up the chain towards marketplaces where
              trust in authenticity was established, and away from the actual
              creators.
            </Typography>
            <Typography className="contentTitle bold">
              The Non Fungible Token Innovation
            </Typography>
            <h1>Image2</h1>
            <Typography className="contentText">
              What digitisation first removed from art, blockchain brings back.
              The Blockchain enables assets to be tokenized, meaning to be
              wrapped into a token. Tokens are assets living on the blockchain.
              Tokenization is one of the cornerstones of decentralized finance
              and a native functionality of the Ethereum blockchain. Tokens not
              only fuel the network but also unlock a variety of economic
              possibilities. Simply speaking, a token is a digital asset that is
              created, issued, and managed on a blockchain. Tokens are designed
              to be secure and instantly transferable, and they can be
              programmed with a range of built-in functionalities. From real
              estate security tokens that represent fractionalized properties to
              platform-specific tokens that incentivize the use of a particular
              application,{" "}
              <Typography variant="span" className="bold">
                tokens have emerged as a secure and digital alternative for
                users across the world to access, trade, and store value.
              </Typography>
            </Typography>
            <Typography className="contentText">
              Non-fungible tokens (NFTs) are blockchain programmable
              cryptographic tokens which can digitally represent anything that
              is physical or digital. In this case, a piece of art. The metadata
              encapsulated in the NFT enables each token to be unique. Thanks to
              its transparency, the full history of each artwork is recorded and
              verifiable on the blockchain, reducing to zero the risk of
              counterfeits.
            </Typography>
            <Typography className="bold">
              NFTs can be used to ensure scarcity, traceability and proof of
              ownership, the most essential properties needed to create store
              and maintain the value of art.
            </Typography>
            <h1>image3</h1>
            <Typography className="contentTitle bold">
              From Tokenization to Monetization
            </Typography>
            <Typography className="contentText">
              Previously intricate street art lacked the ability to be
              monetised. Today, digitalization and cryptography permit street
              art creators to immortalize digitally, own and trade their works.
              Pascal Boyard, aka P-Boy has painted several frescos on Paris
              public walls
            </Typography>
            <h1>Image4</h1>
            <Typography className="contentText">
              and the inserted Bitcoin #QRcodes on the paintings, has permitted
              the monetisation by allowing passers-by and financially supporting
              the artist through donations without any intermediaries.
            </Typography>
            <Typography className="contentText">
              In the same process of establishing alternative funding models for
              real creative independence, the fresco was "tokenized" on Opensea
              in October 2020 in the form of a digital collectible "NFT" (Non
              Fungible Token). The one-of-a-kind NFT{" "}
              <span className="bold">
                was sold for 50ETH (US$65,000 _ 1ETH= US$1,300)
              </span>
            </Typography>
            <Typography className="contentText">
              In 2019 he paints the highly mediatised "Liberte Guidant le Peuple
              2019”, on rue d’Aubervilliers, Paris. The artwork was censored a
              month later. Fortunately, P-Boy tokenized the Fresco and
              fractionized the NFT in 100 pieces all sold out again on Opensea.
            </Typography>
            <Typography className="contentTitle bold">
              The Booming Crypto Art
            </Typography>
            <Typography className="contentText">
              Crypto art is quickly growing in popularity due to its emergence
              as a niche genre in the developing realm of blockchain networks.
              This is largely due to the unprecedented ability of blockchain
              technology to allow anyone
              <span className="bold">
                to buy, sell or collect art in a decentralized manner.
              </span>
            </Typography>
            <Typography className="contentText">
              The activity is surging at an exponential rate. This pertains to
              both an influx of digital artists and NFTs minting. According to
              decrypt.co trading volume surged 57% over the summer of 2020
              alone.
            </Typography>
            <Typography className="contentText">
              Digital art is already capturing the attention of the art world.
              Individual artworks are consistently selling for six and even 7
              figure values. During the first week of October 2020, a
              blockchain-based artwork was sold for ten times the estimated
              value,
              <Typography variant="span" className="bold">
                a record $131,000
              </Typography>{" "}
              fee at Christie’s auction house.
            </Typography>
            <h1>image5</h1>
            <Typography className="contentTitle">Crypto Patronage</Typography>
            <Typography className="contentText">
              In 2020, as the world was facing the pandemic, Pascal decides to
              lock himself down in a gold foundry in Paris and start painting a
              revisited version of MichelAngelo's masterpiece, “The Sistine
              Chapel”.
            </Typography>
            <h1>image6</h1>
            <Typography className="contentText">
              Dear to the artist's values ​​centered on freedom and independence
              in his creations, he launched a patronage campaign in
              cryptocurrencies (Bitcoin and Ethereum) to finance this daring
              project (equipment, painting, logistics ...) .
            </Typography>
            <h1>image7</h1>
            <Typography className="contentText">
              Particularity: Patronage gives the right to "NFTs" representing
              certain parts of the work in the digital version. In other words,
              each of the 12 international donors / patrons who supported the
              project become the purchaser of the work in digital version;
              unlike the physical work which will never be for sale.
            </Typography>
          </div>
          <Typography className="contentTitle bold">
            Minty’s Business
          </Typography>
          <Typography className="contentTitle">
            Patronage as a Framework
          </Typography>
          <h1>image8</h1>
          <Typography className="contentText">
            As presented above, Patronage is the support, encouragement and
            financial backing of artists by early believers, or patrons. It is a
            way in which collectors and investors can help artists by investing
            in them before or during the creation process. This allows artists
            to chase ever more ambitious projects, for creators to be part of
            the creation process and overall make both sides of the market
            synergistic.
          </Typography>
          <Typography className="contentText">
            By reimagining Patronage, Minty allows creators to access
            pre-funding in a fair and democratic manner, but also removes the
            biases of the few that have been defining the art of the time for
            too long.
          </Typography>
          <Typography className="contentText">
            The combination of the tokenization system with a built-in
            marketplace will help to turn physical or digital artwork, into a
            liquid asset which will accelerate the capitalization and adoption
            of this booming industry.
          </Typography>
          <Typography className="contentText">
            Perhaps the best example of art patronage in art history is the
            legacy of the Medici family in Florence, during the Renaissance. The
            Medici practically supported artists to dispose of their power and
            disrupt the attention appointed by citizens to the origin of their
            wealth, which patronage helped to grow.
          </Typography>
          <Typography className="contentText">
            The Italian family that stood at the core of the financial,
            religious, and political life of Grand Duchy of Tuscany for two
            centuries were responsible for an enormous production of paintings,
            sculptures, and architectural sites made by the leading Renaissance
            masters such as Filippo Brunelleschi, Michelangelo Buonarroti,
            Leonardo da Vinci, and Sandro Botticelli.
          </Typography>
          <Typography className="contentTitle">
            Minty’s Business Model
          </Typography>
          <Typography className="contentText">
            Minty’s business idea lies on the concept of Patronage. It allows
            artists to fund the working capital necessary to complete their most
            ambitious endeavours. Artists can outline their next big project by
            sharing their vision in a form of sketches, pictures, video content
            or else. Minty will offer an exhaustive selection of tools that will
            help creators to keep their patrons up to date about the work in
            progress.
          </Typography>
          <Typography className="contentText">
            The project will be submitted to the community of connoisseurs and
            fine collectors alike who can decide to support by sending their
            allocations to a smart contract that will release funds according to
            the milestones predefined at the raise. This reduces individual
            project risk and allows patrons to fund multiple artists and
            projects safely.
          </Typography>
          <Typography className="contentText">
            As early supporters and believers, Patrons will be part of creations
            at the ideation stage paying the nominal cost of production. If the
            resulting artwork is a success and the artist's popularity grows,
            they may resell it on the secondary market via the Minty Marketplace
            and enjoy a potential upside compared to the original cost.
          </Typography>
          <Typography className="contentTitle">
            Token Based Economics
          </Typography>
          <Typography className="contentTitle">
            The MINTY platform token
          </Typography>
          <Typography className="contentText">
            Minty collects fees whenever a piece of art is sold or sponsored via
            the patronage process. An additional revenue stream comes from the
            sale of MINTY tokens. The MINTY token is a standard fungible ERC-20
            token that will be available on decentralized exchanges.
          </Typography>
          <Typography className="contentText">
            MINTY is a reward token meant to capture the value of the Minty
            platform. It incentivizes users to engage with the platform. Buying,
            sharing, referring, promoting, curating, etc. are some of the
            actions that will be rewarded in MINTY tokens. By staking MINTY
            tokens, collectors unlock the Patron status and hence can fund
            artists. (more details below).
          </Typography>
          <Typography className="contentText">
            MINTY Token will also act as an onchain governance vehicle that
            stakeholders will be able to use to participate in the decision
            making process of the platform. Artist curation, features
            implementation, fees, etc. will be part of the decisions submitted
            to the board of voters. However, fully decentralized governance
            takes time and will be a gradual process.
          </Typography>
          <Typography className="contentText">
            What does it mean to be a Patron?
          </Typography>
          <Typography className="contentText">
            <Typography variant="span" className="bold">
              By staking MINTY tokens in their wallet, collectors can unlock the
              Patron status.
            </Typography>
            The Patron status offers rights to an extensive list of perks and
            benefits on the platform that collectors don’t have access to. Here
            is a non exhaustive list of perks a Patron would get:
          </Typography>
          <h1>image</h1>
          <Typography className="contentTitle">Token Metrics</Typography>
          <h1>image</h1>
          <Typography className="contentTitle">DeFI powering MINTY</Typography>
          <Typography className="contentText">
            The Minty.Art platform creates a fair and sustainable ecosystem by
            leveraging the limitless features of Decentralized Finance (DeFi)
            and NFT.
          </Typography>
          <Typography className="contentTitle">What is DeFi?</Typography>
          <Typography className="contentText">
            Decentralized finance (commonly referred to as DeFi) is an
            experimental form of finance that does not rely on central financial
            intermediaries such as brokerages, exchanges, or banks, and instead
            utilizes smart contracts on blockchains, the most common being
            Ethereum. DeFi platforms allow people to lend or borrow funds from
            others, speculate on price movements on a range of assets using
            derivatives, trade cryptocurrencies, insure against risks, and earn
            interest in savings-like accounts, also called Staking.
          </Typography>
          <Typography className="contentTitle">What is Staking?</Typography>
          <Typography className="contentText">
            Staking is analogous to an interest-bearing savings account: stakers
            receive interest (rewards) for validating blocks on the Ethereum
            protocol. Staking basically a token is when a user can give up the
            use of that token by locking it into a staking contract in exchange
            for interests.
          </Typography>
          <Typography className="contentText">
            We can stake any of the following:
          </Typography>

          <ul>
            <li>
              <Typography className="contentText">MINTY TOKENS</Typography>
            </li>
            <li>
              <Typography className="contentText">
                UNISWAP MINTY/ETH tokens (UNISWAP LP Tokens)
              </Typography>
            </li>
            <li>
              <Typography className="contentText">
                UNISWAP MINTY/DAI tokens
              </Typography>
            </li>
          </ul>

          <Typography className="contentTitle">
            How does Staking work?
          </Typography>

          <ul>
            <li>
              <Typography className="contentText">Minty tokens</Typography>
            </li>
          </ul>

          <Typography className="contentText">
            After buying the tokens, they can be staked to generate a yield in
            form of an inflation of MINTY tokens. The yield will be a function
            of the amount and the time the tokens are staked.
          </Typography>

          <ul>
            <li>
              <Typography className="contentText">UNISWAP tokens</Typography>
            </li>
          </ul>

          <Typography className="contentText">
            UNISWAP LP tokens are gained from staking MINTY and a second asset
            into a liquidity pool. Liquidity pools will enable people to trade
            MINTY for ETH or DAI and will also determine the price of the MINTY
            token.
          </Typography>

          <Typography className="contentText">
            When MINTY tokens are staked in a UNISWAP liquidity pool (LP),
            UNISWAP LP tokens are received in return. These LP tokens are needed
            to redeem the MINTY / ETH / DAI from the Uniswap liquidity pool.
          </Typography>

          <Typography className="contentText">
            Hence, staking UNISWAP tokens not only locks up minty tokens but
            also helps price discovery and therefore is better rewarded than
            just staking MINTY tokens.
          </Typography>

          <Typography className="contentTitle">Royalties</Typography>

          <Typography className="contentText">
            Royalties are programmed in the token smart contract. When an asset
            is created on the platform, it will{" "}
            <Typography variant="span" className="bold">
              automatically transfer royalties
            </Typography>{" "}
            to the creator of the artwork and the previous owner. This
            incentivisation mechanism will be the primary function to keep the
            activity on the platform. Royalties will be adjusted according to
            the market usage and the secondary marketplaces terms and
            conditions.
          </Typography>

          <Typography className="contentTitle">Platform fees</Typography>

          <Typography className="contentText">
            For each trade of assets,{" "}
            <Typography variant="span" className="bold">
              2.5% platform fees
            </Typography>{" "}
            are applied to the retail price. MINTY token could grant discounts
            on the platform fees.
          </Typography>

          <Typography className="contentTitle">Patronage fees</Typography>

          <Typography className="contentText">
            Minty will collect a{" "}
            <Typography variant="span" className="bold">
              7.5%
            </Typography>{" "}
            fee on successful fundraising that creators will obtain via the
            platform’s Patrons.
          </Typography>

          <Typography className="contentTitle">User Persona</Typography>

          <Typography className="contentText">
            3 types of users will be interacting on the platform. Creators,
            collectors and patrons.
          </Typography>

          <Typography className="contentTitle bold">Creator</Typography>

          <Typography className="contentText">
            are any type of project creator: an artist, sculpteur, painter, but
            also entrepreneurs or other builder, capable of digitising his
            creation rand willing to benefit from the platform features. For a
            safe launch, creators will be curated and verified by the Minty team
          </Typography>

          <Typography className="contentTitle bold">Collector</Typography>

          <Typography className="contentText">
            will be able to use the platform freely. They can buy and trade
            existing artworks in the marketplace. Only Patrons can access the
            Patronage section and features.
          </Typography>

          <Typography className="contentTitle bold">Patron</Typography>

          <Typography className="contentText">
            which is a collector who is holding and staking Minty tokens..
            He/she will need to buy, or earn MINTY tokens. By holding the Minty
            tokens in their crypto wallet, collectors will{" "}
            <Typography variant="span" className="bold">
              unlock the Patron status
            </Typography>
          </Typography>
        </div>
      </Container> */}
    </>
  );
};

export default Whitepaper;
