var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const questAndAnswer = [
    {
      id: 1,
      q: "What Is Cloud Computing ? ",
      a: "cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping you lower your operating costs, run your infrastructure more efficiently, and scale as your business needs change."
    },

    {
      id: 2,
      q: "What Is An Ip Address ?",
      a: "An IP address is a string of numbers separated by periods. IP addresses are expressed as a set of four numbers — an example address might be 192.158.1.38. Each number in the set can range from 0 to 255. So, the full IP addressing range goes from 0.0.0.0 to 255.255.255.255. IP addresses are not random. They are mathematically produced and allocated by the Internet Assigned Numbers Authority (IANA), a division of the Internet Corporation for Assigned Names and Numbers (ICANN)."
    },


    {
      id: 3,
      q: "What Is AI ?",
      a: "Artificial intelligence (AI) is the ability of machines to perform tasks that are typically associated with human intelligence, such as learning and problem-solving. AI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), and competing at the highest level in strategic games (such as chess and Go)."
    },


    {
      id: 4,
      q: "What is Quantum Computing ? ",
      a: "Quantum computing is an area of computer science that uses the principles of quantum theory. Quantum theory explains the behavior of energy and material on the atomic and subatomic levels. Quantum computing uses subatomic particles, such as electrons or photons."
    },


    {
      id: 5,
      q: "What is Web 3 ? ",
      a: "Web3 is being touted as the future of the internet. The vision for this new, blockchain-based web includes cryptocurrencies, NFTs, DAOs, decentralized finance, and more. It offers a read/write/own version of the web, in which users have a financial stake in and more control over the web communities they belong to. Web3 promises to transform the experience of being online as dramatically as PCs and smartphones did. It is not, however, without risk. Some companies have entered the space only to face a backlash over the environmental impact and financial speculation"
    },


    {
      id: 6,
      q: "What Is A Server ?",
      a: "In computing, a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called clients. This architecture is called the client–server model. Servers can provide various functionalities, often called services, such as sharing data or resources among multiple clients or performing computations for a client. A single server can serve multiple clients, and a single client can use multiple servers. A client process may run on the same device or may connect over a network to a server on a different device."
    },


    {
      id: 7,
      q: "What Is A Transistor ? ",
      a: "A transistor is a miniature semiconductor that regulates or controls current or voltage flow in addition amplifying and generating these electrical signals and acting as a switch/gate for them. Typically, transistors consist of three layers, or terminals, of a semiconductor material, each of which can carry a current."
    },


    {
      id: 8,
      q: "What Is Bitcoin ? ",
      a: "Bitcoin is a decentralized digital currency. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto."
    },


    {
      id: 9,
      q: "What Is Machine Learning ? ",
      a: "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.Over the last couple of decades, the technological advances in storage and processing power have enabled some innovative products based on machine learning, such as Netflix’s recommendation engine and self-driving cars."
    },


    {
      id: 10,
      q: "What Is SaaS ?",
      a: "About 29,60,00,000 results (0.42 seconds) Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet. Common examples are email, calendaring, and office tools (such as Microsoft Office 365). SaaS provides a complete software solution that you purchase on a pay-as-you-go basis from a cloud service provider."
    },


    {
      id: 11,
      q: "What Is SSL ? ",
      a: "One of the most important components of online business is creating a trusted environment where potential customers feel confident in making purchases. SSL certificates create a foundation of trust by establishing a secure connection. To assure visitors their connection is secure, browsers provide special visual cues that we call EV indicators—anything from a green padlock to branded URL bar.SSL certificates have a key pair: a public and a private key. These keys work together to establish an encrypted connection. The certificate also contains what is called the “subject,” which is the identity of the certificate/website owner"
    },



  ]


  res.render('index', { questAndAnswer });
});

module.exports = router;
