import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBarSpacer: theme.mixins.toolbar
}));

export default function Viewer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.appBarSpacer} />
            <Container>
                <h1>Acts 2</h1>
                <p className="p"><span data-number="1" className="v">1</span>And when the day of Pentecost was fully come, they were all with one accord in one place. <span data-number="2" className="v">2</span>And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting. <span data-number="3" className="v">3</span>And there appeared unto them cloven tongues like as of fire, and it sat upon each of them. <span data-number="4" className="v">4</span>And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance. <span data-number="5" className="v">5</span>And there were dwelling at Jerusalem Jews, devout men, out of every nation under heaven. <span data-number="6" className="v">6</span>Now when this was noised abroad, the multitude came together, and were confounded, because that every man heard them speak in his own language. <span data-number="7" className="v">7</span>And they were all amazed and marvelled, saying one to another, Behold, are not all these which speak Galilæans? <span data-number="8" className="v">8</span>And how hear we every man in our own tongue, wherein we were born? <span data-number="9" className="v">9</span>Parthians, and Medes, and Elamites, and the dwellers in Mesopotamia, and in Judæa, and Cappadocia, in Pontus, and Asia, <span data-number="10" className="v">10</span>Phrygia, and Pamphylia, in Egypt, and in the parts of Libya about Cyrene, and strangers of Rome, Jews and proselytes, <span data-number="11" className="v">11</span>Cretes and Arabians, we do hear them speak in our tongues the wonderful works of God. <span data-number="12" className="v">12</span>And they were all amazed, and were in doubt, saying one to another, What meaneth this? <span data-number="13" className="v">13</span>Others mocking said, These men are full of new wine.</p><p className="p"><span data-number="14" className="v">14</span>¶ But Peter, standing up with the eleven, lifted up his voice, and said unto them, Ye men of Judæa, and all <span className="add">ye</span> that dwell at Jerusalem, be this known unto you, and hearken to my words: <span data-number="15" className="v">15</span>For these are not drunken, as ye suppose, seeing it is <span className="add">but</span> the third hour of the day. <span data-number="16" className="v">16</span>But this is that which was spoken by the prophet Joel; <span data-number="17" className="v">17</span>And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams: <span data-number="18" className="v">18</span>And on my servants and on my handmaidens I will pour out in those days of my Spirit; and they shall prophesy: <span data-number="19" className="v">19</span>And I will shew wonders in heaven above, and signs in the earth beneath; blood, and fire, and vapour of smoke: <span data-number="20" className="v">20</span>The sun shall be turned into darkness, and the moon into blood, before that great and notable day of the Lord come: <span data-number="21" className="v">21</span>And it shall come to pass, <span className="add">that</span> whosoever shall call on the name of the Lord shall be saved. <span data-number="22" className="v">22</span>Ye men of Israel, hear these words; Jesus of Nazareth, a man approved of God among you by miracles and wonders and signs, which God did by him in the midst of you, as ye yourselves also know: <span data-number="23" className="v">23</span>Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain: <span data-number="24" className="v">24</span>Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it. <span data-number="25" className="v">25</span>For David speaketh concerning him, I foresaw the Lord always before my face, for he is on my right hand, that I should not be moved: <span data-number="26" className="v">26</span>Therefore did my heart rejoice, and my tongue was glad; moreover also my flesh shall rest in hope: <span data-number="27" className="v">27</span>Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption. <span data-number="28" className="v">28</span>Thou hast made known to me the ways of life; thou shalt make me full of joy with thy countenance. <span data-number="29" className="v">29</span>Men <span className="add">and</span> brethren, let me freely speak unto you of the patriarch David, that he is both dead and buried, and his sepulchre is with us unto this day. <span data-number="30" className="v">30</span>Therefore being a prophet, and knowing that God had sworn with an oath to him, that of the fruit of his loins, according to the flesh, he would raise up Christ to sit on his throne; <span data-number="31" className="v">31</span>He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption. <span data-number="32" className="v">32</span>This Jesus hath God raised up, whereof we all are witnesses. <span data-number="33" className="v">33</span>Therefore being by the right hand of God exalted, and having received of the Father the promise of the Holy Ghost, he hath shed forth this, which ye now see and hear. <span data-number="34" className="v">34</span>For David is not ascended into the heavens: but he saith himself, The <span className="nd">LORD</span> said unto my Lord, Sit thou on my right hand, <span data-number="35" className="v">35</span>Until I make thy foes thy footstool. <span data-number="36" className="v">36</span>Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ.</p><p className="p"><span data-number="37" className="v">37</span>¶ Now when they heard <span className="add">this</span>, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men <span className="add">and</span> brethren, what shall we do? <span data-number="38" className="v">38</span>Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. <span data-number="39" className="v">39</span>For the promise is unto you, and to your children, and to all that are afar off, <span className="add">even</span> as many as the Lord our God shall call. <span data-number="40" className="v">40</span>And with many other words did he testify and exhort, saying, Save yourselves from this untoward generation.</p><p className="p"><span data-number="41" className="v">41</span>¶ Then they that gladly received his word were baptized: and the same day there were added <span className="add">unto them</span> about three thousand souls. <span data-number="42" className="v">42</span>And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers. <span data-number="43" className="v">43</span>And fear came upon every soul: and many wonders and signs were done by the apostles. <span data-number="44" className="v">44</span>And all that believed were together, and had all things common; <span data-number="45" className="v">45</span>And sold their possessions and goods, and parted them to all <span className="add">men</span>, as every man had need. <span data-number="46" className="v">46</span>And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, <span data-number="47" className="v">47</span>Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.</p>
            </Container>
        </>
    );
}
