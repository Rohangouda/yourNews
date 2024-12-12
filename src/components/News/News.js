import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.avif";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";

function News(props) {
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const category = newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;
  const fallbackData ={
    "status": "ok",
    "totalResults": 13314,
    "articles": [
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Prithvi Shaw: The rise and fade of Indian cricket's wonder boy",
    "description": "It has been a steep fall for the 25-year-old batter, once hailed as Indian cricket's 'next big thing'.",
    "url": "https://www.bbc.com/news/articles/czxdlyz87yjo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33c2/live/00f89240-b074-11ef-8ab9-9192db313061.jpg",
    "publishedAt": "2024-12-08T01:15:43Z",
    "content": "Prithvi Shaw went unsold in the IPL auction in November\r\nLast month, Rishabh Pant became the most expensive player in the history of the Indian Premier League (IPL) as he was signed by Lucknow SuperG… [+6049 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "BBC Sport",
    "title": "Pant becomes most expensive player in IPL history",
    "description": "Rishabh Pant becomes the most expensive player in the history of the Indian Premier League as he joins Lucknow Super Giants for 27 crore (£2.54m).",
    "url": "https://www.bbc.com/sport/cricket/articles/c5yp0n29j4no",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/e035/live/4eec4e70-aa5b-11ef-9739-6bd0dfdfa161.jpg",
    "publishedAt": "2024-11-24T11:57:46Z",
    "content": "Rishabh Pant became the most expensive player in the history of the Indian Premier League as he was signed by Lucknow Super Giants for 27 crore (£2.54m) at the mega auction in Saudi Arabia.\r\nThe Indi… [+1045 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Arunima Kar",
    "title": "Can Artificial Rain, Drones, or Satellites Clean Toxic Air?",
    "description": "India’s capital has turned to tech to fight its worst air pollution in eight years.",
    "url": "https://www.wired.com/story/artificial-rain-drones-and-satellites-can-tech-clean-indias-toxic-air/",
    "urlToImage": "https://media.wired.com/photos/6734cff01daede74a78d6818/191:100/w_1280,c_limit/AP24306187920631.jpg",
    "publishedAt": "2024-12-02T11:30:00Z",
    "content": "Amid all of these concerns, the city has been turning to drones to monitor pollution hotspots, in addition to those spraying water to suppress PM2.5. Drones are useful for accessing areas that are ha… [+3243 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
    "title": "Redmi Note 14 Pro Plus looks to redefine mid-range with powerful SoC and AI-powered upgrades",
    "description": "Xiaomi's sub-brand Redmi releases three new phones for the Indian market, bringing an affordable flagship experience to the masses.",
    "url": "https://www.androidcentral.com/phones/redmi-note-14-pro-plus-announced-in-india",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/RqC73bH9sXbNkR4gC2i754-1200-80.jpg",
    "publishedAt": "2024-12-10T08:33:17Z",
    "content": "What you need to know\r\n<ul><li>Redmi Note 14 Pro Plus, Redmi Note 14 Pro, and Redmi Note 14 announced for the Indian market.</li><li>The Plus model debuts Qualcomm's latest Snapdragon 7s Gen 3 SoC an… [+3028 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Ten newborns killed in hospital fire in northern India",
    "description": "The fire broke out in a neonatal ward at a hospital in Jhansi, Uttar Pradesh, on Friday night.",
    "url": "https://www.bbc.com/news/articles/ckglzvq294eo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6761/live/0bd568d0-a3dd-11ef-bdf5-b7cb2fa86e10.jpg",
    "publishedAt": "2024-11-16T06:31:24Z",
    "content": "At least 10 newborns have died in a fire at a hospital in northern India after a blaze broke out in the neonatal ward.\r\nStaff at the hospital in the town of Jhansi in Uttar Pradesh state were able to… [+1405 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Erin Snodgrass",
    "title": "Indian billionaire Gautam Adani indicted on bribery charges in alleged bribery scheme",
    "description": "Prosecutors charged billionaire Gautam Adani and seven senior executives in a massive bribery scheme.",
    "url": "https://www.businessinsider.com/indian-billionaire-gautam-adani-charged-in-bribery-scheme-2024-11",
    "urlToImage": "https://i.insider.com/63d79608fc184700195545ee?width=1200&format=jpeg",
    "publishedAt": "2024-11-20T21:51:44Z",
    "content": "Prosecutors have charged Indian billionaire Gautam Adani in a massive bribery scheme.Photo credit should read SAM PANTHAKY/AFP via Getty Images\r\n<ul><li>Indian billionaire Gautam Adani has been charg… [+1862 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "msmash",
    "title": "AI Helps Indian Ecommerce Firm Cut Customer Call Costs By 75%",
    "description": "An anonymous reader shares a report: Softbank-backed online shopping site Meesho has rolled out what it claims is the first GenAI-powered voice bot among Indian e-commerce firms for customer support, paring down some expenses by 75%. Meesho has more than 160 …",
    "url": "https://slashdot.org/story/24/11/26/131222/ai-helps-indian-ecommerce-firm-cut-customer-call-costs-by-75",
    "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
    "publishedAt": "2024-11-26T15:21:00Z",
    "content": "That's 75% savings is hands down a 75% reduction in staff. Let's say they're lying and it's only 1/3 that, you are still talking about a 25% across the board reduction in staff and therefore jobs. We… [+1376 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "James Doubek",
    "title": "The USS Edsall, sunk by Japanese forces in World War II, has been found",
    "description": "The USS Edsall was overpowered by a Japanese fleet in the Indian Ocean but fought valiantly to the end, the U.S. Navy said. It was found in deep waters south of Australia's Christmas Island.",
    "url": "https://www.npr.org/2024/11/12/nx-s1-5187066/uss-edsall-world-war-ii-shipwreck-discovered-japan-australia",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6236x3508+0+1293/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fd2%2F54%2F693e973d494face478710741a2ab%2Fnh-69331.jpg",
    "publishedAt": "2024-11-13T10:00:00Z",
    "content": "The USS Edsall, an American warship known for its crew's courageous last stand against Japanese forces during World War II, has been found. \r\nThe U.S. Navy announced the discovery on Monday. The 314-… [+4279 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Diaa Hadid",
    "title": "Trump claims he can bring peace to the world. In India, many believe him",
    "description": "The world's most populous country has consistently favorable views of U.S. President-elect Trump. In a Pew Research Center poll, 42% of Indians, including 51% of men, said they had confidence in him.",
    "url": "https://www.npr.org/2024/11/15/g-s1-34174/trump-election-india-peace",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5005x2815+0+258/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fd3%2F5d%2Fae427bbb469e968097b11e437d5d%2Fgettyimages-2182541799.jpg",
    "publishedAt": "2024-11-15T19:16:20Z",
    "content": "CHENNAI, India On the eve of the U.S. presidential election in the southern Indian city of Chennai, one retired professional said he was all in for Donald Trump: \"He's the right man,\" said Bala Raja,… [+4836 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Matthew Loh",
    "title": "Prosecutors say Gautam Adani's associates used Excel and PowerPoint to discuss their bribe options in a $250 million scheme",
    "description": "Federal prosecutors said a consultant created multiple presentations, including one discussing how to reimburse Adani for the bribes.",
    "url": "https://www.businessinsider.com/prosecutors-gautam-adani-associates-powerpoint-list-bribe-options-2024-11",
    "urlToImage": "https://i.insider.com/67400e939f2901eb60364969?width=1200&format=jpeg",
    "publishedAt": "2024-11-22T07:07:46Z",
    "content": "Gautam Adani has been named as one of eight defendants in a $250 million bribery case.PUNIT PARANJPE/AFP via Getty Images\r\n<ul><li>Gautam Adani has been charged with bribery in a $250 million case by… [+3834 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Adam Burke",
    "title": "Soft medium, hard truths - National Endowment for the Arts recognizes a Navajo quilter",
    "description": "A Navajo woman who has spent 50 years sewing has now been honored with an NEA award for her unique quilts. She is unafraid to criticize the mainstream culture that's marginalized Indigenous artists.",
    "url": "https://www.npr.org/2024/12/09/nx-s1-5118388/soft-medium-hard-truths-national-endowment-for-the-arts-recognizes-a-navajo-quilter",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2048x1152+0+589/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F3c%2F8d%2Fc25c488d4ed5ae7f41cd312881c6%2Ftears-of-our-children-tears-for-our-children.jpeg",
    "publishedAt": "2024-12-09T20:30:00Z",
    "content": "Susan Hudson's studio near Ignacio, Colorado, is often a chaotic mess of brightly colored fabrics and half-finished projects.\r\n\"I'm disorganized/organized,\" she said with a laugh. \"I know where every… [+9156 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Migrants brought to UK from remote military island",
    "description": "Their journey to the UK marks the end of years of complex legal battles.",
    "url": "https://www.bbc.com/news/articles/cwy45d954yzo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0e45/live/1fc19d40-b0e0-11ef-b68b-bfdf9b9361ef.jpg",
    "publishedAt": "2024-12-02T22:54:24Z",
    "content": "Diego Garcia hosts a joint UK-US military base\r\nMigrants stranded for more than three years on the remote Indian Ocean island of Diego Garcia have been brought to the UK.\r\nThe Sri Lankan Tamils are p… [+4686 chars]"
    },
    {
    "source": {
    "id": "time",
    "name": "Time"
    },
    "author": "OMAR FARUK",
    "title": "Somalia Says 24 People Died After 2 Boats Capsized in the Indian Ocean",
    "description": "Somalia’s Foreign Minister said that while 46 people were rescued, 24 have died after 2 boats capsized off the Madagascar coast.",
    "url": "https://time.com/7178897/somalia-madagascar-boats-capsize/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2024/11/GettyImages-2140808419.jpg?quality=85&w=1024&h=628&crop=1",
    "publishedAt": "2024-11-24T18:44:42Z",
    "content": "MOGADISHU, Somalia (AP) Twenty-four people died after two boats capsized off the Madagascar coast in the Indian Ocean, Somalia's government said Sunday.\r\nSomalias Foreign Minister Ahmed Moalim Fiqi s… [+1100 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Funeral for murdered Harshita Brella held in India",
    "description": "Ms Brella's family say they are frustrated by the pace of a police investigation into her murder.",
    "url": "https://www.bbc.com/news/articles/c2exkxw8d0po",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a764/live/ca6e3b50-b170-11ef-b7ba-299d961d4316.jpg",
    "publishedAt": "2024-12-03T12:33:05Z",
    "content": "Northamptonshire Police confirmed Harshita Brella's body would be returned to her family in India\r\nThe funeral of Harshita Brella, whose body was discovered in a car boot in east London, has taken pl… [+2286 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Indian tribes seek to bring back ancestral skulls from UK",
    "description": "The Nagas want to bring home human remains which colonial administrators had removed from the country.",
    "url": "https://www.bbc.com/news/articles/c9vn13zr1n9o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5f2c/live/81ca9550-a1b3-11ef-897a-cfb3ce396193.jpg",
    "publishedAt": "2024-11-19T00:35:57Z",
    "content": "Naga human remains, including skulls, were taken out of India by European colonial administrators\r\nLast month, Ellen Konyak was shocked to discover that a 19th-Century skull from the north-eastern In… [+6010 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Why it is so difficult to walk in Indian cities",
    "description": "Citizen activists are taking unusual steps to push authorities for better pedestrian infrastructure.",
    "url": "https://www.bbc.com/news/articles/c98en7v43qzo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0932/live/ef8093c0-a310-11ef-95e1-3f87b53caa3f.jpg",
    "publishedAt": "2024-11-17T01:09:22Z",
    "content": "Many cities have roads with narrow footpaths that are not conducive to walking\r\nIn India, if you ask a pedestrian how many obstacles they've encountered on a footpath, they may not be able to count t… [+6072 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Comeback of 1990s Indian crime drama evokes nostalgia",
    "description": "Fans of CID, one of India's longest-running TV shows, are thrilled about its much-anticipated comeback.",
    "url": "https://www.bbc.com/news/articles/c4gp792n57po",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6cbc/live/d583dbb0-b3ac-11ef-991c-c92d4878530f.png",
    "publishedAt": "2024-12-07T05:02:32Z",
    "content": "The show featured three intrepid policemen solving cases\r\n\"Daya, darwaaza tod do.\" (Daya, break down the door)\r\nMost Indians will instantly recognise this dialogue from the popular detective show CID… [+5197 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Wanderingthru.com"
    },
    "author": "Ryan Johnston",
    "title": "Why are Indian and African wildlife so similar?",
    "description": "People often comment on how Indian and African wildlife are similar. They’re right, they are, and here we have a look at the reasons for it.",
    "url": "https://wanderingthru.com/why-are-indian-and-african-animals-so-similar/",
    "urlToImage": "https://wanderingthru.com/wp-content/uploads/photo-2023-03-03-18-04-02.jpeg",
    "publishedAt": "2024-11-17T13:33:16Z",
    "content": "How and why is Indian and African wildlife so similar? This is a question that we as guides often get asked when guests are interested in exploring these two special places. This not only includes th… [+7117 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Arpan  Chaturvedi",
    "title": "Gautam Adani breaks silence on US allegations to say his group is committed to compliance",
    "description": "NEW DELHI (Reuters) -Adani Group founder Gautam Adani responded for the first time on Saturday to allegations by U.S. authorities that he was part of a $265 ...",
    "url": "https://finance.yahoo.com/news/gautam-adani-breaks-silence-us-160834895.html",
    "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/6f8ca32c8ca675e2ce68a9be43304a7d",
    "publishedAt": "2024-11-30T16:08:34Z",
    "content": "By Arpan Chaturvedi\r\nNEW DELHI (Reuters) -Adani Group founder Gautam Adani responded for the first time on Saturday to allegations by U.S. authorities that he was part of a $265 million bribery schem… [+1886 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "MICHAEL GOLDBERG and RYAN J. FOLEY",
    "title": "An Indian family froze to death crossing the Canada-US border, a perilous trip becoming more common",
    "description": "On the last night of their lives, Jagdish Patel, his wife and their two young children tried to slip into the U.S. across a near-empty stretch of the...",
    "url": "https://www.yahoo.com/news/indian-family-froze-death-crossing-050438619.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/N9RtD6NtHsKPr78Ei4LlsA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/3cb7605fd8237f34fa4bacb01c4aed9f",
    "publishedAt": "2024-11-16T05:04:38Z",
    "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nM… [+7533 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Associated Press",
    "title": "Thousands of Indian Sikhs visit the shrine of the founder of their religion to mark his birthday",
    "description": "Thousands of Sikh pilgrims from India and around the world thronged a shrine to the founder of the Sikh religion, Guru Nanak, in Pakistan on Tuesday to...",
    "url": "https://www.yahoo.com/news/thousands-indian-sikhs-visit-shrine-085514374.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yW8PuWYNWVPnnLoak82_nw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/785333f0e94538e58211600c76232549",
    "publishedAt": "2024-11-19T08:55:14Z",
    "content": "KARTARPUR, Pakistan (AP) Thousands of Sikh pilgrims from India and around the world thronged a shrine to the founder of the Sikh religion, Guru Nanak, in Pakistan on Tuesday to commemorate his birth,… [+835 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "BeauHD",
    "title": "India Plans To Build a Moon-Orbiting Space Station By 2040",
    "description": "India plans to build a moon-orbiting space station by 2040 that will support crewed missions to the moon and serve as a hub for scientific research. Space Magazine reports: If all goes according to plan, the lunar space station will be completed around the sa…",
    "url": "https://science.slashdot.org/story/24/11/19/0052216/india-plans-to-build-a-moon-orbiting-space-station-by-2040",
    "urlToImage": "https://a.fsdn.com/sd/topics/iss_64.png",
    "publishedAt": "2024-11-19T10:00:00Z",
    "content": "If all goes according to plan, the lunar space station will be completed around the same time the nation's astronauts land on the moon, with construction of a permanent base on the surface before 205… [+487 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "The families fleeing Delhi to escape deadly smog",
    "description": "Some people are choosing to move out of Delhi to escape the Indian capital's poisonous air.",
    "url": "https://www.bbc.com/news/articles/cjw08v13wp3o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33d2/live/da991be0-acb5-11ef-bdf5-b7cb2fa86e10.jpg",
    "publishedAt": "2024-11-27T22:26:51Z",
    "content": "Saurabh Bhasin left Delhi for the coastal state of Goa after his daughter was diagnosed with asthma\r\nSaurabh Bhasin loved Delhi, the city where he was born. \r\nGrowing up, he longed for the winter mon… [+6072 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "'They threw her body into the ocean' - woman dies on boat headed for French island",
    "description": "Woman's body thrown overboard after boat abandoned by people smugglers in the Indian Ocean.",
    "url": "https://www.bbc.com/news/articles/ce8d5334vmyo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/33f2/live/52e1c7b0-ade1-11ef-87df-bbcf5052d2b3.jpg",
    "publishedAt": "2024-12-01T01:21:07Z",
    "content": "The family of beauty-salon owner Fathi Hussein are deep in mourning at their home in Somalia's capital, Mogadishu, following her horrific death at sea after a deal she struck with migrant smugglers t… [+5052 chars]"
    },
    {
    "source": {
    "id": "time",
    "name": "Time"
    },
    "author": "Michael Kugelman",
    "title": "Why India and China Are Finally Starting to Patch Things Up",
    "description": "The recent Ladakh border deal and prospect of more economic cooperation are promising signs. Yet deep differences remain.",
    "url": "https://time.com/7175644/india-china-ladakh-deal-rapprochement/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2024/11/GettyImages-2179786809.jpg?quality=85&w=1024&h=628&crop=1",
    "publishedAt": "2024-11-17T10:00:00Z",
    "content": "In June 2020, a bloody border clash broke out between India and China in the Ladakh regionthe deadliest since a 1962 war. Relations between the nuclear-armed neighbors plunged to their lowest level i… [+5559 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Makezine.com"
    },
    "author": "Kevin T",
    "title": "San Francisco Bay Area Cool Event Alert!",
    "description": "Dogbotic Audio Carnival is happening this Sunday, December 8, 2024 from 1pm–5pm at 924 Gilman in Berkeley!\nThe post San Francisco Bay Area Cool Event Alert! appeared first on Make: DIY Projects and Ideas for Makers.",
    "url": "https://makezine.com/article/maker-news/san-francisco-bay-area-cool-event-alert/",
    "urlToImage": "https://makezine.com/wp-content/uploads/2024/12/Kirk-Pearson-Headshot.jpeg",
    "publishedAt": "2024-12-06T01:51:58Z",
    "content": "Are you a:\r\nA) Maker who loves music?\r\nB) Musician who likes making things?\r\nC) Curious adventurer whos looking for fun?\r\nD) All of the above?\r\nThen you (yes, you!) are cordially invited to the Dogbo… [+928 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Why India's latest Sun mission finding is crucial for the world",
    "description": "Indian scientists have reported Aditya-L1's “first significant result”. What is it and why is it significant?",
    "url": "https://www.bbc.com/news/articles/c0qdy5dg7v7o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0fda/live/94c9b9e0-a890-11ef-8725-7db796b893b0.jpg",
    "publishedAt": "2024-11-27T00:02:41Z",
    "content": "The Sun is the largest object in our solar system and essential to our survival\r\nScientists in India have reported the first significant result from Aditya-L1, the countrys first solar observation mi… [+5366 chars]"
    },
    {
    "source": {
    "id": "time",
    "name": "Time"
    },
    "author": "Shannon Carlin",
    "title": "Wandering Stars",
    "description": "Tommy Orange’s family saga, Wandering Stars, picks up where his 2019 Pulitzer Prize finalist, There There, left off. In the wake of a 2018 shooting, high-school freshman Orvil Red Feather struggles to make sense of the violence he has endured. To better under…",
    "url": "https://time.com/7172744/wandering-stars/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2024/10/Wandering-Stars-Tommy-Orange.jpg?quality=85&w=1200&h=628&crop=1",
    "publishedAt": "2024-11-13T13:24:46Z",
    "content": "Tommy Oranges family saga, Wandering Stars, picks up where his 2019 Pulitzer Prize finalist, There There, left off. In the wake of a 2018 shooting, high-school freshman Orvil Red Feather struggles to… [+903 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "New Mauritius PM has reservations about UK's Chagos deal",
    "description": "Navinchandra Ramgoolam, in power for a fortnight, spoke after meeting British envoy Jonathan Powell.",
    "url": "https://www.bbc.com/news/articles/crr9y0rz15vo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ce72/live/66d5dfa0-ac23-11ef-bdf5-b7cb2fa86e10.jpg",
    "publishedAt": "2024-11-26T19:04:56Z",
    "content": "The new prime minister of Mauritius has said he has reservations about a deal struck by his predecessor with the UK government over the Chagos Islands.\r\nAgreed last month, it said the UK would give u… [+3325 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "msmash",
    "title": "Weekends Were a Mistake, Says Infosys Co-founder Narayana Murthy",
    "description": "Infosys founder Narayana Murthy has tripled down on his previous statements that 70-hour work weeks are what's needed in India and revealed he also thinks weekends were a mistake. From a report: Speaking on Indian TV channel CNBC-TV18 at the Global Leadership…",
    "url": "https://slashdot.org/story/24/11/18/1814244/weekends-were-a-mistake-says-infosys-co-founder-narayana-murthy",
    "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
    "publishedAt": "2024-11-18T18:15:00Z",
    "content": "Speaking on Indian TV channel CNBC-TV18 at the Global Leadership Summit in Mumbai last week Murthy once again declared he did not \"believe in work-life balance.\" \"I have not changed my view; I will t… [+969 chars]"
    },
    {
    "source": {
    "id": "buzzfeed",
    "name": "Buzzfeed"
    },
    "author": "Varsha Yajman",
    "title": "Never Fear, The Great Indian Shift Is Here And Apparently, South Asians Are Finally Attractive",
    "description": "\"It’s clear that this shift is not about acceptance.\"View Entire Post ›",
    "url": "https://www.buzzfeed.com/varshayajman/the-great-indian-shift",
    "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2024-11/28/23/campaign_images/426f0469afc3/never-fear-the-great-indian-shift-is-here-and-app-2-1490-1732835594-1_dblbig.jpg",
    "publishedAt": "2024-11-28T23:39:54Z",
    "content": "Thankfully, this changed when once I had immediately swiped left on brown people that came across my screen, I began to question and rethink that maybe the way I felt about brown people was not what … [+889 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Aditya Kalra",
    "title": "Exclusive-Blackstone eyes 20% stake in India Haldiram's snacks at $8 billion valuation, sources say",
    "description": "Blackstone has dropped plans to acquire a majority stake in the snacks business of India's Haldiram's but is now discussing purchase of a 20% stake at a...",
    "url": "https://ca.finance.yahoo.com/news/exclusive-blackstone-eyes-20-stake-104329076.html",
    "urlToImage": "https://media.zenfs.com/en/reuters.com/2b081bf618bb344961801b679120d388",
    "publishedAt": "2024-11-14T10:43:29Z",
    "content": "By Aditya Kalra\r\nNEW DELHI (Reuters) - Blackstone has dropped plans to acquire a majority stake in the snacks business of India's Haldiram's but is now discussing purchase of a 20% stake at a valuati… [+2187 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Juliana Kim",
    "title": "With a record number of international students in the U.S., Trump brings uncertainty",
    "description": "Some schools and international students in the U.S. worry about what's to come in the incoming Trump administration. Meanwhile, a new report finds more international students in the U.S. than ever.",
    "url": "https://www.npr.org/2024/11/26/g-s1-35654/trump-international-students-visa-colleges-universities",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x3375+0+313/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F57%2F76%2Fa91c1e1f4d5aaeb01fe582d520c2%2Fgettyimages-1385201927.jpg",
    "publishedAt": "2024-11-26T20:26:32Z",
    "content": "The 2023-24 school year saw more international students in the United States than ever before setting a new record largely driven by graduate students and recent graduates in internship-type programs… [+6321 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "Indian regulators keep pushing antitrust report forward, despite Apple's hold request",
    "description": "India's antitrust regulators have declined to grant Apple's request for a temporary hold on a report that alleges app developers are compelled to adhere to unfair terms to be on the App Store.India's CCI rejects Apple's request to halt investigation reportIn …",
    "url": "https://appleinsider.com/articles/24/11/25/indian-regulators-keep-pushing-antitrust-report-forward-despite-apples-hold-request",
    "urlToImage": "https://photos5.appleinsider.com/gallery/60347-124071-000-lead-App-Store-xl.jpg",
    "publishedAt": "2024-11-25T15:09:15Z",
    "content": "India's antitrust regulators have declined to grant Apple's request for a temporary hold on a report that alleges app developers are compelled to adhere to unfair terms to be on the App Store.\r\nIn 20… [+1922 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kotaku"
    },
    "author": "Keith Nelson Jr",
    "title": "The MCU Is Getting Ready To Enter 'The Age of Mutants'",
    "description": "Marvel fans, it sounds like our patience will soon be rewarded. After nearly two decades of the Marvel Cinematic Universe being a world-changing wrecking ball to the film industry and our lives, the X-Men we’ve long wanted to see join the party are coming. At…",
    "url": "https://kotaku.com/x-men-mcu-marvel-kevin-feige-1851704071",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e7def049d293cf24e5e9c241dac8b8f6.jpg",
    "publishedAt": "2024-11-20T19:05:00Z",
    "content": "Marvel fans, it sounds like our patience will soon be rewarded. After nearly two decades of the Marvel Cinematic Universe being a world-changing wrecking ball to the film industry and our lives, the … [+1637 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Atlantic"
    },
    "author": "Daniel Block",
    "title": "How a Strongman Made Himself Look Weak",
    "description": "Narendra Modi has picked a needless fight with the United States and Canada.",
    "url": "https://www.theatlantic.com/international/archive/2024/11/narendra-modi-india-canada-assassinations/680805/",
    "urlToImage": "https://cdn.theatlantic.com/thumbor/kSUAHVjS2iAo-bXTFz8w0XMokRQ=/0x52:2434x1320/1200x625/media/img/mt/2024/11/2024_11_21_modi_/original.jpg",
    "publishedAt": "2024-11-30T12:00:00Z",
    "content": "For Indian Prime Minister Narendra Modi, strength is everything. At home, that means repressing minorities and co-opting the press. Abroad, it means responding to any criticism of New Delhi with ange… [+8781 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "mwall@space.com (Mike Wall)",
    "title": "SpaceX launching 1st mission for Indian Space Research Organisation today",
    "description": "SpaceX is set to launch the GSAT-N2 satellite today (Nov. 18), the company's first-ever mission for the Indian Space Research Organisation (ISRO).",
    "url": "https://www.space.com/space-exploration/launches-spacecraft/spacex-launching-1st-mission-for-indian-space-research-organisation-today",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/EkBRv2qWqXVLZsAW5VJEN5-1200-80.jpg",
    "publishedAt": "2024-11-18T12:00:00Z",
    "content": "SpaceX is set to launch its first-ever mission for the Indian Space Research Organisation (ISRO) today (Nov. 18).\r\nA Falcon 9 rocket carrying ISRO's GSAT-N2 communications satellite is scheduled to l… [+2630 chars]"
    },
    {
    "source": {
    "id": "die-zeit",
    "name": "Die Zeit"
    },
    "author": "ZEIT ONLINE: Reisen - Sarah Jäggi",
    "title": "Indian Palace in Olten: \"Große Menge, guter Preis!\"",
    "description": "Jedes Jahr besuchen Tausende Inder die Schweiz. Sie fahren an den Rheinfall oder aufs Jungfraujoch – und nach Olten. Dahin lockt sie nicht die schöne Landschaft.",
    "url": "https://www.zeit.de/2024/52/inidan-palace-olten-restaurant-schweiz-indien-tourismus",
    "urlToImage": "https://img.zeit.de/2024/52/grosse-menge-guter-preis-bild-1/wide__1300x731",
    "publishedAt": "2024-12-10T07:32:46Z",
    "content": "Die Schweizer Kleinstadt Olten ist so ziemlich das Gegenteil einer Touristenhochburg. Overtourism? Kennt man hier nicht. Doch für Tausende indische Urlauber ist Olten the place to be oder besser gesa… [+892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple ramping up India manufacturing expansion to avoid Trump tariffs on China",
    "description": "Indian media has revealed that Apple is in talks with more than 40 firms in the region to become component suppliers for devices including the iPhone, ahead of a Trump administration applying tariffs to Chinese imports.Tim Cook in a previous visit to India — …",
    "url": "https://appleinsider.com/articles/24/11/22/apple-ramping-up-india-manufacturing-expansion-to-avoid-trump-tariffs-on-china",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50675-99851-46196-89931-000-lead-Tim-Cook-in-India-xl-xl.jpg",
    "publishedAt": "2024-11-22T16:59:44Z",
    "content": "Indian media has revealed that Apple is in talks with more than 40 firms in the region to become component suppliers for devices including the iPhone, ahead of a Trump administration applying tariffs… [+2917 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "The missing puzzle piece in India’s child stunting crisis",
    "description": "A new study finds that caste plays a vital role in high rates of stunting in children in India.",
    "url": "https://www.bbc.com/news/articles/cj9n0420w8go",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e797/live/d69c64d0-a11a-11ef-a4fe-a3e9a6c5d640.jpg",
    "publishedAt": "2024-11-15T00:46:38Z",
    "content": "Official data shows that 35% of Indias 137 million children under five are stunted\r\nDecades of caste discrimination have contributed to India having higher levels of child stunting rates than across … [+5193 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Associated Press",
    "title": "California will rename places to remove racist term for a Native American woman",
    "description": "A racist term for a Native American woman will be removed from nearly three dozen geographic features and place names on California lands, the state Natural ...",
    "url": "https://www.yahoo.com/news/california-rename-places-remove-racist-232211642.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/0OHmOP4VRHl4_bNp73wjtw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/126b72f2b9aef554093acde734253101",
    "publishedAt": "2024-11-15T23:22:11Z",
    "content": "SACRAMENTO, Calif. (AP) A racist term for a Native American woman will be removed from nearly three dozen geographic features and place names on California lands, the state Natural Resources Agency a… [+1825 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "The specialty coffee wave sweeping small-town India",
    "description": "Once restricted to only big cities, high-end specialty coffee chains are finding new customers across India.",
    "url": "https://www.bbc.com/news/articles/c5y38vnpnn2o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2bcd/live/c72a59d0-ae21-11ef-8ab9-9192db313061.jpg",
    "publishedAt": "2024-11-30T01:58:23Z",
    "content": "Coffee is gradually gaining popularity among the historically tea-drinking population of north India\r\n\"It's not just about brewing a good cup of coffee but connecting with customers on a deeper level… [+6480 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "India city tense after violence over mosque survey",
    "description": "Three people have died and dozens injured after clashes broke out between police and protesters on Sunday.",
    "url": "https://www.bbc.com/news/articles/c3de7k5gk78o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a752/live/d2d4d7b0-aaed-11ef-be93-877b018d9f23.jpg",
    "publishedAt": "2024-11-25T07:00:07Z",
    "content": "Sambhal city in the northern Indian state of Uttar Pradesh is on alert after three people died and dozens were injured in violent clashes on Sunday.\r\nClashes broke out between protesters and the poli… [+2758 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Charissa Cheong",
    "title": "I was born in the 'Silicon Valley' of India and watched it change from a quiet, green city to an international tech hub",
    "description": "Vikram Chandrashekar was born in Bengaluru, the city dubbed India's \"Silicon Valley.\" The veteran Oracle employee shared how the city's changed.",
    "url": "https://www.businessinsider.com/bengaluru-city-tech-hub-water-crisis-traffic-2024-12",
    "urlToImage": "https://i.insider.com/674f7985ef9a5d904789c486?width=1200&format=jpeg",
    "publishedAt": "2024-12-10T11:32:15Z",
    "content": "Chandrashekar supports carpooling and rainwater harvesting to deal with infrastructure issues in the city.Photo courtesy of Divya Balasubramanyam, Tyler Le/BI\r\n<ul><li>When Vikram Chandrashekar was g… [+6429 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Trevor Mogg",
    "title": "Why was a piece of fruit floating inside Starship on its sixth test flight?",
    "description": "A banana — albeit a toy one — made an appearance inside the Starship spacecraft during SpaceX's sixth test flight on Tuesday. But what was it doing there?",
    "url": "https://www.digitaltrends.com/space/why-was-a-banana-floating-inside-starship-on-6th-test-flight/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/11/starship-banana.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2024-11-21T01:25:02Z",
    "content": "Anyone who watched SpaceX’s sixth test flight of its mighty Starship rocket on Tuesday will have noticed the odd sight of a banana — albeit a fake one — floating in the hold of the spacecraft as it s… [+2189 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Discriminatory job ads for iPhone workers ended after Reuters report; Apple didn’t comment",
    "description": "Reuters found discriminatory job ads for iPhone workers in India, with recruitment leaflets stating that women applying for positions with Foxconn must be unmarried and aged 18 to 32.\n\n\n\nThe offending ads have been withdrawn following the launch of state and …",
    "url": "https://9to5mac.com/2024/11/18/discriminatory-job-ads-for-iphone-workers-ended-after-reuters-report-apple-didnt-comment/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/Discriminatory-job-ads-for-iPhone-workers-ended-after-Reuters-report.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-11-18T11:54:56Z",
    "content": "Reuters found discriminatory job ads for iPhone workers in India, with recruitment leaflets stating that women applying for positions with Foxconn must be unmarried and aged 18 to 32.\r\nThe offending … [+2757 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Dezeen"
    },
    "author": "Amy Frearson",
    "title": "Girish Doshi creates landscape of cuboids for Sār Residence in Pune",
    "description": "Indian furniture brand Sār has unveiled an experimental house designed by architect Girish Doshi, set to be used for exhibitions, performances and design residencies. Located in the city of Pune, Sār Residence is the first physical space for the brand found…",
    "url": "https://www.dezeen.com/2024/11/26/sar-residence-girish-doshi-pune/",
    "urlToImage": "https://static.dezeen.com/uploads/2024/11/sar-residence_dezeen_2364_hero_0-600x600.jpg",
    "publishedAt": "2024-11-26T11:30:57Z",
    "content": "Indian furniture brand Sār has unveiled an experimental house designed by architect Girish Doshi, set to be used for exhibitions, performances and design residencies.\r\nLocated in the city of Pune, S… [+5066 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "mwall@space.com (Mike Wall)",
    "title": "Watch SpaceX's 6th Starship spacecraft splash down in amazing 'buoycam' footage (video)",
    "description": "A camera set up on a buoy in the Indian Ocean caught the end of the sixth test flight of SpaceX's Starship megarocket on Nov. 19.",
    "url": "https://www.space.com/space-exploration/launches-spacecraft/watch-spacexs-6th-starship-spacecraft-splash-down-in-amazing-buoycam-footage-video",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/A4zekwM3Xfp2FbBB67DLbk-1200-80.jpg",
    "publishedAt": "2024-11-25T14:59:41Z",
    "content": "A camera set up on a buoy in the Indian Ocean caught the end of SpaceX's latest Starship test flight, and it's quite a sight to behold.\r\nThat suborbital flight, which launched from SpaceX's Starbase … [+2453 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "mwall@space.com (Mike Wall)",
    "title": "Europe’s Proba-3 satellites will launch early Dec. 4 to create artificial eclipses in space. Watch the liftoff live",
    "description": "An Indian PSLV rocket will launch Europe's Proba-3 precision formation-flying mission to orbit early Wednesday (Dec. 4), and you can watch the action live.",
    "url": "https://www.space.com/space-exploration/satellites/europes-proba-3-satellites-will-launch-early-dec-4-to-create-artificial-eclipses-in-space-watch-the-liftoff-live",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/DXuV6igN9ZzXYf8FP6ryDZ-1200-80.jpg",
    "publishedAt": "2024-12-03T22:00:20Z",
    "content": "A European mission that will use two satellites to create artificial eclipses in Earth orbit will launch early Wednesday morning (Dec. 4), and you can watch the action live.\r\nThe European Space Agenc… [+4259 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Florida Today"
    },
    "author": "Lianna Norman, Rick Neale and Jennifer Sangalang, USA TODAY NETWORK - Florida",
    "title": "SpaceX rocket launch Wednesday: List of Florida beaches, parks & best views to watch",
    "description": "Who's up for an early morning launch on Wednesday? Weather permitting, a SpaceX Falcon 9 rocket should be visible from the Treasure and Space Coasts.",
    "url": "https://www.floridatoday.com/story/news/2024/12/02/rocket-launch-today-florida-spacex-starlink-nasa-canaveral-kennedy-space-how-watch/76705933007/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/HYLJGDNS3npXUV7hjpZyjw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTI-/https://media.zenfs.com/en/florida-today/bb9e5de5d3b14107cd35bcff945c25e9",
    "publishedAt": "2024-12-02T17:53:41Z",
    "content": "An early morning rocket launch is potentially scheduled to lift off Wednesday and depending on weather and visibility, there could be quite a show in the sky above the Space Coast.\r\nBelow are suggest… [+5755 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Neha Arora",
    "title": "Adani smelter expansion will cut India's refined copper imports, government says",
    "description": "India will no longer need to rely on refined copper imports once billionaire Gautam Adani's new copper smelter ramps up its capacity, the federal Ministry of...",
    "url": "https://sg.finance.yahoo.com/news/adani-smelter-expansion-cut-indias-134925660.html",
    "urlToImage": "https://media.zenfs.com/en/reuters.com/be41368100e6f544aceae51cbc4d67ce",
    "publishedAt": "2024-12-06T13:49:25Z",
    "content": "By Neha Arora\r\nNEW DELHI (Reuters) - India will no longer need to rely on refined copper imports once billionaire Gautam Adani's new copper smelter ramps up its capacity, the federal Ministry of Mine… [+2026 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Steven Symes",
    "title": "Secret Speed Bump Surprises Motorists",
    "description": "Normally speed bumps are painted yellow or some other color that stands out, so drivers see them. In some areas they even put a road sign next to speed bumps...",
    "url": "https://autos.yahoo.com/secret-speed-bump-surprises-motorists-153000308.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XG7yGYH6z5hlsiMez6adEA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/the_auto_wire_articles_747/62133fc4d6ac9a6cff50908c50c0ca3c",
    "publishedAt": "2024-11-15T15:30:00Z",
    "content": "Read the full story on The Auto Wire\r\nSecret Speed Bump Surprises Motorists\r\nNormally speed bumps are painted yellow or some other color that stands out, so drivers see them. In some areas they even … [+1744 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "AFP",
    "title": "India launches European 'artifical eclipse' satellites",
    "description": "India on Thursday successfully launched into space a pair of European satellites that will create artificial solar eclipses to help scientists catch a rare...",
    "url": "https://www.yahoo.com/news/india-launches-european-artifical-eclipse-114315454.html",
    "urlToImage": "https://media.zenfs.com/en/afp.com/95fe78a12ab12a33320770cb38154eca",
    "publishedAt": "2024-12-05T11:43:15Z",
    "content": "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nI… [+2236 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "AJ Fabino",
    "title": "Inside Ivanka's $24 Million 'Billionaire Bunker' Mansion With A $15 Million Mortgage",
    "description": "A two-year renovation has transformed a neoclassical estate into one of Miami’s most notable modern mansions as Ivanka Trump and Jared Kushner complete work ...",
    "url": "https://finance.yahoo.com/news/inside-ivankas-24-million-billionaire-172551417.html",
    "urlToImage": "https://media.zenfs.com/en/Benzinga/c37520ff171a4352db18f928cd962274",
    "publishedAt": "2024-11-12T17:25:51Z",
    "content": "A two-year renovation has transformed a neoclassical estate into one of Miamis most notable modern mansions as Ivanka Trump and Jared Kushner complete work on their $24 million Indian Creek Island pr… [+3515 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "2024-11-12T13:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "PetaPixel"
    },
    "author": "Matt Growcoot",
    "title": "Invideo Lets You Generate Full-Length Videos Using AI or Stock Footage",
    "description": "Indian-based startup Invideo has released its V3 model which lets creators seamlessly generate full-length videos from just a single prompt.\n[Read More]",
    "url": "https://petapixel.com/2024/11/22/invideo-lets-you-generate-full-length-videos-using-ai-or-stock-footage/",
    "urlToImage": "https://petapixel.com/assets/uploads/2024/11/invideo-logo.jpg",
    "publishedAt": "2024-11-22T15:47:48Z",
    "content": "Indian-based startup Invideo has released its V3 model which lets creators seamlessly generate full-length videos from just a single prompt. \r\nPetaPixel gave a brief prompt to Invideo requesting a vi… [+2120 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Indian conglomerate chair Gautam Adani indicted in the US",
    "description": "One of the richest people in the world, Gautam Adani, was indicted over an alleged multibillion-dollar fraud scheme.",
    "url": "https://www.aljazeera.com/economy/2024/11/20/indian-conglomerate-chair-gautam-adani-indicted-in-the-us",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/02/AP23033185616255.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-20T22:12:59Z",
    "content": "Gautam Adani, the chair of Indian conglomerate Adani Group and one of the worlds richest people, has been indicted in New York over an alleged multibillion-dollar fraud scheme, United States prosecut… [+2781 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Somesh Jha",
    "title": "Amazon faces Indian court scrutiny for labour conditions at warehouse",
    "description": "Workers detail stories of an unsafe work environment and unreasonable targets at a major warehouse.",
    "url": "https://www.aljazeera.com/news/2024/11/30/amazon-faces-indian-court-scrutiny-for-labour-conditions-at-warehouse",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/2024-11-11T060313Z_125425438_RC2T2BACIV3L_RTRMADP_3_AMAZON-FLIPKART-INDIA-1732852675.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-30T02:34:54Z",
    "content": "Amazon is facing prosecution in an Indian court for labour law violations at a major warehouse near the countrys national capital of Delhi.\r\nDocuments reviewed by Al Jazeera through Indias Right to I… [+12042 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "IndieWire"
    },
    "author": "Christian Zilko",
    "title": "‘Sugarcane’ Leads 2025 Cinema Eye Honors Nominations — Complete List",
    "description": "The documentary about abuse in an Indian residential school received six nominations, including Nonfiction Feature and Direction.",
    "url": "https://www.indiewire.com/awards/results/2025-cinema-eye-honors-nominations-complete-list-1235066029/",
    "urlToImage": "https://www.indiewire.com/wp-content/uploads/2024/11/Screen-Shot-2024-11-14-at-11.47.29-AM.png?w=650",
    "publishedAt": "2024-11-14T21:00:00Z",
    "content": "The Cinema Eye Honors, an Oscar bellwether that often predicts the Best Documentary Feature race, has unveiled its 2025 nominations. \r\nLeading the pack is “Sugarcane,” Julian Brave NoiseCat and Emily… [+9655 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GSMArena.com"
    },
    "author": "Sagar",
    "title": "iQOO 13 will launch with a smaller battery in India",
    "description": "The iQOO 13, unveiled last month in China, will launch in India on December 3. It will be powered by the Snapdragon 8 Elite SoC, and while one would expect the Indian model to share the rest of the specs with its Chinese counterpart, that's not the case becau…",
    "url": "https://www.gsmarena.com/iqoo_13_india_model_specs_colors_battery_size-news-65299.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/11/iqoo-13-india-model-battery-size/-952x498w6/gsmarena_001.jpg",
    "publishedAt": "2024-11-13T10:25:01Z",
    "content": "The iQOO 13, unveiled last month in China, will launch in India on December 3. It will be powered by the Snapdragon 8 Elite SoC, and while one would expect the Indian model to share the rest of the s… [+927 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Simon Sharwood",
    "title": "Billionaire food app CEO wants you to pay for the privilege of working with him",
    "description": "Zomato boss Deepinder Goyal leaves a sour taste in the mouth\nThe CEO of Indian restaurant booking and food deliver app Zomato has posted a job ad in which he seeks a chief of staff who is willing to pay for the privilege of working with him.…<!--#include virt…",
    "url": "https://www.theregister.com/2024/11/21/zomato_deepinder_goyal_job_ad/",
    "urlToImage": "https://regmedia.co.uk/2017/01/11/calculator-zero.jpg",
    "publishedAt": "2024-11-21T07:26:05Z",
    "content": "The CEO of Indian restaurant booking and food deliver app Zomato has posted a job ad in which he seeks a chief of staff who is willing to pay for the privilege of working with him.\r\nThe ad, posted to… [+2137 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Trevor Mogg",
    "title": "SpaceX image captures dramatic moment during latest Starship test",
    "description": "A newly released photo from SpaceX shows the dramatic moment when the upper-stage Starship separated as planned from the first-stage Super Heavy booster.",
    "url": "https://www.digitaltrends.com/space/spacex-dramatic-moment-sixth-starship-test/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/11/stage-separation.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2024-11-22T06:05:51Z",
    "content": "SpaceX recently completed the sixth test of the Starship, the most powerful rocket ever to fly.\r\nIn the days following Tuesday’s flight, the Elon Musk-led spaceflight company has been dropping variou… [+1722 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Trevor Mogg",
    "title": "How to watch SpaceX’s sixth test flight of Starship megarocket",
    "description": "Fans of spaceflight development won't want to miss SpaceX's sixth test flight of the Starship megarocket. Here's how to watch.",
    "url": "https://www.digitaltrends.com/space/watch-spacex-sixth-test-flight-of-starship-megarocket/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/starship-test.jpg?resize=1200%2C630&p=1",
    "publishedAt": "2024-11-12T01:30:06Z",
    "content": "SpaceX is making final preparations for the sixth test flight of its mighty Starship rocket featuring the most Super Heavy, the most powerful booster ever to fly.\r\nThe Elon Musk-led spaceflight compa… [+1741 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Gukesh and Ding Liren draw Game 4 of tied World Chess Championship final",
    "description": "Indian teenager and China's reigning world champion record second draw of 14-game final in Singapore.",
    "url": "https://www.aljazeera.com/sports/2024/11/29/gukesh-and-ding-liren-draw-game-4-of-tied-world-chess-championship-final",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/2023-04-29T102517Z_83995259_RC2AO0A9S5RJ_RTRMADP_3_CHESS-WORLD-1732887882.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-29T14:35:43Z",
    "content": "Indias Gukesh Dommaraju and reigning world champion Ding Liren of China have tied their fourth match of the ongoing World Chess Championship final with the overall score level at 2-2 in Singapore.\r\nT… [+2417 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Gukesh defeats Ding, takes 6-5 lead in world chess championship",
    "description": "The Indian teenager Gukesh Dommaraju moves a step closer to becoming the youngest chess world champion.",
    "url": "https://www.aljazeera.com/sports/2024/12/8/gukesh-defeats-ding-takes-6-5-lead-in-world-chess-championship",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/12/AFP__20241125__36N78VE__v2__HighRes__ChessSinIndChnWorldChampionship-1-1733671642.jpg?resize=1920%2C1440",
    "publishedAt": "2024-12-08T15:45:52Z",
    "content": "Teenage challenger Gukesh Dommaraju beat Chinas Ding Liren in the 11th game of their world championship match, taking a crucial lead as the tournament entered the final stretch.\r\nGukesh, whose win ga… [+1571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Emmet Livingstone",
    "title": "D.R. Congo's mining capital is at the heart of Biden's bid to counter China in Africa",
    "description": "Kolwezi has some of the world's largest copper and cobalt reserves and that makes it a key location at the heart of the U.S. and China's jostle for mineral supremacy on the African continent.",
    "url": "https://www.npr.org/2024/12/04/nx-s1-5208953/dr-congo-mining-capital-us-china-lobito-corridor-minerals-copper-africa-angola",
    "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2250+0+375/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F73%2F12%2F692f40e8448284e8bde4c7f4f86e%2Fgettyimages-1244864950.jpg",
    "publishedAt": "2024-12-04T11:00:00Z",
    "content": "KOLWEZI, Democratic Republic of Congo Little about Kolwezi, a small city in southern Democratic Republic of Congo, hints at its global importance.\r\nNondescript and ringed by slag heaps, pits and quar… [+4126 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Jalopnik"
    },
    "author": "Amber DaSilva",
    "title": "Hear The Story Of Every Owner Norton Has Ever Had",
    "description": "Indian motorcycle outfit TVS purchased the historic band Norton last year, promising to bring the British marquee back to life after mismanagement from its prior owner. And the owner before that. And the one before that one, the one before them, and so on and…",
    "url": "https://jalopnik.com/hear-the-story-of-every-owner-norton-has-ever-had-1851713840",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6ce7b1535e0f1a196e493e9af0472ac6.png",
    "publishedAt": "2024-12-05T14:55:00Z",
    "content": "Indian motorcycle outfit TVS purchased the historic band Norton last year, promising to bring the British marquee back to life after mismanagement from its prior owner. And the owner before that. And… [+1420 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Dezeen"
    },
    "author": "Tom Ravenscroft",
    "title": "This week we revealed the Dezeen Awards 2024 winners",
    "description": "This week on Dezeen, we revealed all 52 Dezeen Awards 2024 winners including the architecture, interiors and design projects of the year. The Taiwan-Reyhanli Centre for World Citizens was named architecture project of the year, Aesop Diagonal best interior of…",
    "url": "https://www.dezeen.com/2024/11/30/dezeen-awards-2024-winners-this-week/",
    "urlToImage": "https://static.dezeen.com/uploads/2024/11/dezeen-awards-2024-round-up-hero-600x600.jpg",
    "publishedAt": "2024-11-30T06:00:41Z",
    "content": "This week on Dezeen, we revealed all 52 Dezeen Awards 2024 winners including the architecture, interiors and design projects of the year.\r\nThe Taiwan-Reyhanli Centre for World Citizens was named arch… [+3054 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "John L. Dorman",
    "title": "Why Trump is threatening Canada with tariffs",
    "description": "Justin Trudeau, Canada's prime minister, told reporters on Tuesday that he had a \"good\" conversation with Trump following the president-elect's post.",
    "url": "https://www.businessinsider.com/trump-us-canada-tariffs-trudeau-presidency-2024-11",
    "urlToImage": "https://i.insider.com/67463b7efa0140cdd565b043?width=1200&format=jpeg",
    "publishedAt": "2024-11-27T10:00:02Z",
    "content": "Canadian Prime Minister Justin Trudeau focused on his country's longstanding trade relationship with the US when asked about President-elect Donald Trump's tariff threats.NICHOLAS KAMM/AFP via Getty … [+4696 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "India's 'rebel' Muslim princess who shot tigers and drove a Rolls-Royce",
    "description": "Abida Sultaan defied stereotypes around women in general and Muslim women in particular.",
    "url": "https://www.bbc.com/news/articles/cn017r4zw3wo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8303/live/42826ea0-a8a1-11ef-a0a1-979d1f184374.jpg",
    "publishedAt": "2024-11-24T01:27:10Z",
    "content": "Abida Sultaan was nothing like your typical princess.\r\nShe wore her hair short, shot tigers and was an ace polo player. She flew planes and drove herself around in a Rolls-Royce from the age of nine.… [+6307 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Why there's no song and dance around India's killer air",
    "description": "The country's pollution levels are startling but the problem is rarely represented in popular culture.",
    "url": "https://www.bbc.com/news/articles/cgr0enrw0qxo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12c0/live/2cd0a2a0-b2da-11ef-a0f2-fd81ae5962f4.jpg",
    "publishedAt": "2024-12-06T00:37:53Z",
    "content": "Amitabh Bachchan wore a mask in some scenes in the 2016 Bollywood film Pink\r\nIn the 2016 Bollywood hit Pink, a scene introducing Amitabh Bachchans character shows the actor emerging from his home on … [+6629 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Why most Indians choking on smog aren’t in Delhi",
    "description": "Delhi gets all the attention, but other parts of northern India are also dealing with toxic air.",
    "url": "https://www.bbc.com/news/articles/c36pr7wpn78o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a208/live/fab8df10-a593-11ef-b01a-7f094b2599de.jpg",
    "publishedAt": "2024-11-25T22:16:08Z",
    "content": "The iconic Taj Mahal in the northern city of Agra is covered in toxic smog every year\r\nWhen I stepped out of my house, it felt like I was inhaling smoke, says Imran Ahmed Ali, a lawyer in the norther… [+6584 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Delhi shuts schools, bans construction as pollution levels hit new high",
    "description": "Schools go online until further notice because of toxic smog in the latest bid to ease Indian capital's health crisis.",
    "url": "https://www.aljazeera.com/news/2024/11/18/delhi-shuts-schools-bans-construction-as-pollution-levels-hit-new-high",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24323208790875-1731910419.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-18T07:00:12Z",
    "content": "Authorities in Indias capital have shut schools, halted construction and banned non-essential trucks from entering the city after air pollution shot up to its worst level this season.\r\nA thick blanke… [+3590 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Opposition secures landslide victory in Mauritius election",
    "description": "Former Prime Minister Navin Ramgoolam has won a third term in the Indian Ocean nation, official results show.",
    "url": "https://www.aljazeera.com/news/2024/11/12/opposition-secures-landslide-victory-in-mauritius-election",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/mauritius-1731422953.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-12T15:44:15Z",
    "content": "Opposition leader Navin Ramgoolam has won a landslide victory in Mauritiuss parliamentary vote, the election commission said.\r\nThe Office of the Electoral Commissioner said on Tuesday that Rangoolam … [+2839 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Gukesh beats Ding Liren in Game 3; ties World Chess Championship final",
    "description": "Indian teenager makes comeback on day three after losing the opening game and drawing the second one in Singapore.",
    "url": "https://www.aljazeera.com/sports/2024/11/27/gukesh-beats-ding-liren-in-game-3-ties-world-chess-championship-final",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AFP__20241125__36N96CU__v1__HighRes__ChessSinIndChnWorldChampionship-1732714005.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-27T13:48:42Z",
    "content": "Indias Gukesh Dommaraju has won the third game of the ongoing World Chess Championship final against reigning world champion Ding Liren of China to tie the overall score at 1.5-1.5 in Singapore.\r\nThe… [+1852 chars]"
    },
    {
    "source": {
    "id": "lenta",
    "name": "Lenta"
    },
    "author": "Алина Черненко",
    "title": "Самолет с десятками пассажиров совершил вынужденную посадку из-за трещины в лобовом стекле",
    "description": "Самолет авиакомпании SpiceJet с десятками пассажиров на борту совершил вынужденную посадку из-за трещины в лобовом стекле. Об этом пишет The Indian Express",
    "url": "https://lenta.ru/news/2024/12/09/samolet-s-desyatkami-passazhirov-sovershil-vynuzhdennuyu-posadku-iz-za-treschiny-v-lobovom-stekle/",
    "urlToImage": "https://icdn.lenta.ru/images/2024/12/09/17/20241209172127139/share_0d61f0dfdb8f6eb1b3cdba3e69106253.jpg",
    "publishedAt": "2024-12-09T15:45:53Z",
    "content": "SpiceJet - . The Indian Express.\r\n, , 9 , , , . - .\r\n , . 75 .\r\n« , . », .\r\n . , ."
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "Stephan Shemilt",
    "title": "Archer not in IPL auction but Anderson shortlisted",
    "description": "England fast bowler Jofra Archer is not shortlisted for the Indian Premier League auction for 2025 but James Anderson is included.",
    "url": "https://www.bbc.com/sport/cricket/articles/cjw01px1x47o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/6df6/live/7f3a7070-a367-11ef-a4fe-a3e9a6c5d640.jpg",
    "publishedAt": "2024-11-15T15:44:38Z",
    "content": "England fast bowler Jofra Archer has not been shortlisted for the Indian Premier League auction for 2025 but James Anderson is included.\r\nBatter Joe Root and fast bowler Mark Wood are also not among … [+2384 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Simon Sharwood",
    "title": "Binance accused of tax evasion by India's finance minister",
    "description": "Nation wants almost $100 million from 17 crypto exchanges – most of it from Binance\nIndia's Finance Ministry has alleged crypto exchange Binance evaded almost $85 million in tax – the vast majority of around $96 million it claims digi-dollar outfits haven't p…",
    "url": "https://www.theregister.com/2024/12/04/india_binance_crypto_tax_evasion/",
    "urlToImage": "https://regmedia.co.uk/2022/02/01/shutterstock_cryptocurrency_india.jpg",
    "publishedAt": "2024-12-04T05:27:07Z",
    "content": "India's Finance Ministry has alleged crypto exchange Binance evaded almost $85 million in tax the vast majority of around $96 million it claims digi-dollar outfits haven't paid.\r\nBinance's alleged mi… [+2501 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "BBC Sport",
    "title": "Anderson, 42, fails to earn IPL deal but 13-year-old signed",
    "description": "England's all-time leading Test wicket-taker James Anderson is unsuccessful in his bid to get a contract in the Indian Premier League (IPL).",
    "url": "https://www.bbc.com/sport/cricket/articles/cx2lznqkezro",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/e4a6/live/2696bbf0-ab54-11ef-9323-7924a1e1d563.jpg",
    "publishedAt": "2024-11-25T17:38:14Z",
    "content": "There were several deals secured by England players with all-rounder Sam Curran, who became the most expensive player in IPL history in the 2023 season, picked up by former side Chennai Super Kings f… [+1039 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Richard Speed",
    "title": "SpaceX Starship moved to launchpad for 6th flight test",
    "description": "Yes, the heat shield has been tweaked. But there's also a banana for scale\nSpaceX has transported its Starship spacecraft to the launchpad in preparation for a scheduled flight test on November 18.…",
    "url": "https://www.theregister.com/2024/11/14/spacex_starship_flight_test/",
    "urlToImage": "https://regmedia.co.uk/2021/08/10/shutterstock_3d_banana.jpg",
    "publishedAt": "2024-11-14T18:31:06Z",
    "content": "SpaceX has transported its Starship spacecraft to the launchpad in preparation for a scheduled flight test on November 18.\r\nElon Musk's rocketeers posted images on the billionaire's social media mout… [+2240 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Anmol Saxena",
    "title": "Can Indian billionaire Gautam Adani be tried in the US for India ‘crimes’?",
    "description": "The recent allegations by US prosecutors highlight jurisdictional complexities that could determine Adani’s fate.",
    "url": "https://www.aljazeera.com/economy/2024/12/6/what-are-the-legal-options-for-gautam-adani-after-the-us-indictment",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/2024-01-10T065133Z_1860771736_RC2TE5A1HWRW_RTRMADP_3_INDIA-SUMMIT-GUJARAT-1732195289.jpg?resize=1920%2C1440",
    "publishedAt": "2024-12-06T04:54:01Z",
    "content": "It is a tumultuous time for Gautam Adani, the billionaire chairman of one of Indias biggest corporate conglomerates, the Adani Group, and one of the richest people in the world.\r\nThe United States Se… [+4816 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GSMArena.com"
    },
    "author": "Vlad",
    "title": "Xiaomi Pad 7's international launch is nearing",
    "description": "The Xiaomi Pad 7 launched in China alongside the Pad 7 Pro back in October, and if you've been wondering whether either of them would become available internationally, the answer seems to be a resounding yes - at least for the vanilla model.\n\nThat's because a…",
    "url": "https://www.gsmarena.com/xiaomi_pad_7s_international_launch_is_nearing-news-65633.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/12/xiaomi-pad-7-geekbench/-952x498w6/gsmarena_000.jpg",
    "publishedAt": "2024-12-06T04:05:01Z",
    "content": "The Xiaomi Pad 7launched in China alongside the Pad 7 Pro back in October, and if you've been wondering whether either of them would become available internationally, the answer seems to be a resound… [+1112 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Indian wrestler Bajrang Punia handed four-year ban for avoiding dope test",
    "description": "Punia, who was at the forefront of protests against former wrestling body chief Brij Bhushan Singh, says he is innocent.",
    "url": "https://www.aljazeera.com/sports/2024/11/27/indian-wrestler-bajrang-punia-handed-four-year-ban-for-avoiding-dope-test",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/2023-06-07T134355Z_1509287049_RC2CE1ABV4ZS_RTRMADP_3_INDIA-WRESTLING-PROTESTS-1732693514.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-27T08:17:47Z",
    "content": "Indias Olympic medal-winning wrestler Bajrang Punia, who took part in protests against the countrys former wrestling body chief in 2023, has been banned for four years for avoiding a doping test.\r\nPu… [+1584 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": null,
    "title": "Who is Indian billionaire Gautam Adani, charged with fraud by the US?",
    "description": "The US has charged one of India’s richest men, Gautam Adani, with fraud alleging a multibillion-dollar bribery scheme.",
    "url": "https://www.aljazeera.com/program/newsfeed/2024/11/21/who-is-indian-billionaire-gautam-adani-charged-with-fraud-by-the-us",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/2014-04-10T120000Z_1800528616_GM1EA470NIY01_RTRMADP_3_INDIA-ELECTION-ADANI-1-1732194509.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-21T13:09:24Z",
    "content": "NewsFeed\r\nThe US has charged one of Indias richest men, Gautam Adani, with fraud alleging a multibillion-dollar bribery scheme. So, who is Gautam Adani?"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Catherine Gilon",
    "title": "Chennai’s secret: How the Indian city mints world-beating chess champions",
    "description": "As Gukesh Dommaraju aims to win the world championships starting Monday, a city of chess stars cheers him on.",
    "url": "https://www.aljazeera.com/features/2024/11/24/chennais-secret-how-the-indian-city-mints-world-beating-chess-champions",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/DSC09312-1732416567.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-24T05:34:01Z",
    "content": "Chennai, India Giant banners of a smiling teen beamed down on hundreds of students gathered at the school campus of Velammal Nexus to receive the young champion.\r\nIt was August 10, 2024, and the scho… [+16180 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera Staff",
    "title": "Why has Indian billionaire Gautam Adani been charged in a US bribery case?",
    "description": "It's the latest in a recent series of fraud allegations trailing the embattled billionaire's Adani Group.",
    "url": "https://www.aljazeera.com/news/2024/11/22/why-has-indian-billionaire-gautam-adani-been-charged-in-a-us-bribery-case",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24010216956504-1732189186.jpg?resize=1920%2C1440",
    "publishedAt": "2024-11-22T04:23:29Z",
    "content": "United States prosecutors indicted billionaire Gautam Adani, one of the worlds richest people, on Wednesday over his alleged lead role in a bribery scheme linked to a mega-sized solar power plant.\r\nI… [+11248 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera Staff",
    "title": "Waqf bill: Why Indian Muslims worry about Modi plan for $14bn endowments",
    "description": "Muslim land endowments in India span an area twice the size of Mauritius. Now a battle for their control is on.",
    "url": "https://www.aljazeera.com/features/2024/12/6/waqf-bill-why-indian-muslims-worry-about-modi-plan-for-14bn-endowments",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/12/GettyImages-2186710861-1733470447.jpg?resize=1920%2C1440",
    "publishedAt": "2024-12-06T09:40:06Z",
    "content": "A proposal by Indias ruling Hindu nationalist government to change laws governing Muslim endowments in the country has triggered fear and a backlash among the minority community.\r\nThe government of P… [+13403 chars]"
    }
    ]
    }
  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(country, category));
      setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData.articles);
      console.log(parsedData);
      setLoading(false);
    } catch (error) {
      console.error("API request failed, using fallback data.");
      // Use fallback data when API fails
      setLoading(true);
      setArticles(fallbackData.articles); // Use the fallback articles data
      setLoading(false);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{header(capitaLize(category))}</Header>
          <Container>
            <Row>
              {articles.map((element) => {
                 if (element.title !== "[Removed]") {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      published={element.publishedAt}
                      channel={element.source.name}
                      alt="News image"
                      publishedAt={element.publishedAt}
                      imageUrl={
                        element.urlToImage === null ? NullImage : element.urlToImage
                      }
                      urlNews={element.url}
                    />
                  </Col>
                );
              }
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;
