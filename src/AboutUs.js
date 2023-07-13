import React from "react";
import Card from "./Card";
import image1 from "./assets/image1.webp";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";

function AboutUs() {
  return (
    <div>
      <h2>About Us</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          imageUrl={image1}
          intro="Bhanu comes with over 10 years of experience in Education and Education Technology. As a product manager he has worked closely with multiple functions and has good understanding of workings of an organisation. He has a substantial experience in recruitment across roles and is using his knowledge to guide the fresh graduates set the right professional goals and selecting the right sector/profile given their strengths. Bhanu has a Bachelor’s in Mechanical Engineering from IIT Bombay and worked in finance briefly before moving to the emerging field of Ed-tech"
        />
        <Card
          imageUrl={image2}
          intro="Amit spent the first three years of his professional life working at two different firms. At both his stints and through his interaction with his juniors, he could see that there was a lack of guidance for young professionals. He believes most people are enthusiastic and determined but due to lack of guidance end up wasting their time and energy on wasteful opportunities. Here at Plopdo he is working on his passion project"
        />
        <Card
          imageUrl={image3}
          intro="Mechanical Engineer turned career enthusiast. After graduating with good academic credentials he realised that there were no good opportunities at his campus that would interest him and it was virtually impossible to get in off-campus. Once he realised that he is not the only one facing this issue but one of the thousand of young professional struggling with the same, he decided to work towards solving this problem, which he is now doing at PloPdo"
        />
        <Card
          imageUrl={image1}
          intro="Bhanu comes with over 10 years of experience in Education and Education Technology. As a product manager he has worked closely with multiple functions and has good understanding of workings of an organisation. He has a substantial experience in recruitment across roles and is using his knowledge to guide the fresh graduates set the right professional goals and selecting the right sector/profile given their strengths. Bhanu has a Bachelor’s in Mechanical Engineering from IIT Bombay and worked in finance briefly before moving to the emerging field of Ed-tech"
        />
        <Card
          imageUrl={image2}
          intro="Amit spent the first three years of his professional life working at two different firms. At both his stints and through his interaction with his juniors, he could see that there was a lack of guidance for young professionals. He believes most people are enthusiastic and determined but due to lack of guidance end up wasting their time and energy on wasteful opportunities. Here at Plopdo he is working on his passion project"
        />
        <Card
          imageUrl={image3}
          intro="Mechanical Engineer turned career enthusiast. After graduating with good academic credentials he realised that there were no good opportunities at his campus that would interest him and it was virtually impossible to get in off-campus. Once he realised that he is not the only one facing this issue but one of the thousand of young professional struggling with the same, he decided to work towards solving this problem, which he is now doing at PloPdo"
        />
        <Card
          imageUrl={image1}
          intro="Bhanu comes with over 10 years of experience in Education and Education Technology. As a product manager he has worked closely with multiple functions and has good understanding of workings of an organisation. He has a substantial experience in recruitment across roles and is using his knowledge to guide the fresh graduates set the right professional goals and selecting the right sector/profile given their strengths. Bhanu has a Bachelor’s in Mechanical Engineering from IIT Bombay and worked in finance briefly before moving to the emerging field of Ed-tech"
        />
        <Card
          imageUrl={image2}
          intro="Amit spent the first three years of his professional life working at two different firms. At both his stints and through his interaction with his juniors, he could see that there was a lack of guidance for young professionals. He believes most people are enthusiastic and determined but due to lack of guidance end up wasting their time and energy on wasteful opportunities. Here at Plopdo he is working on his passion project"
        />
        <Card
          imageUrl={image3}
          intro="Mechanical Engineer turned career enthusiast. After graduating with good academic credentials he realised that there were no good opportunities at his campus that would interest him and it was virtually impossible to get in off-campus. Once he realised that he is not the only one facing this issue but one of the thousand of young professional struggling with the same, he decided to work towards solving this problem, which he is now doing at PloPdo"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default AboutUs;
