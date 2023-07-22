import React from "react";
import img from "../images/services.png";
import Back from "../common/Back";
import "../home/beliefs/beliefs.css";
import FeaturedCard from "../home/beliefs/beliefsCard";
import "./Services.css"; 
import { Link } from "react-router-dom"; 

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Our beliefs' title='Based on the bible ' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>

      
      <div className="black-container">
        <h2>How do I understand the Bible and become a Christian?</h2>
        <h4><span className="orange-text">Simply believe that Jesus dided and resurrected for your sins.</span></h4>
        <p> As John 3:16 says, For God So Loved the World
16 "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.</p>
<h3>FOLLOW INSTRUCTIONS</h3>
        <h3>1.Gather Your Materials:</h3>
        <ul>
          <li>Obtain a Bible: You can purchase a Bible at a bookstore or read it online through various websites or apps.</li>
          <li>Prepare Writing Tools: Have a pen or pencil ready to make notes and underline important passages in your Bible.</li>
          <li>Create a Journal: Use a notebook or journal to record your thoughts, questions, and insights while studying the Bible.</li>
        </ul>

        <h3>2.Start with Prayer:</h3>
        <p>Take a moment to pray and ask God for guidance and understanding as you begin your journey of studying the Bible.</p>

        <h3>3.Choose a Reading Plan:</h3>
        <p>Decide on a structured reading plan to follow. For beginners, starting with the New Testament (e.g., the Gospel of John) or a study guide can be helpful.</p>

        <h3>4.Read with Context in Mind:</h3>
        <p>Before diving into a particular verse or chapter, try to understand the historical and cultural context of the book. Consider the author, audience, and the purpose for which it was written.</p>

        <h3>5.Observe and Reflect:</h3>
        <p>
          Read the selected passages slowly, paying attention to the words, phrases, and messages being conveyed.
          Reflect on what you've read and consider how it relates to your life and the world around you.
        </p>

        <h3>6.Use Cross-References:</h3>
        <p>The Bible is full of cross-references that link related verses and concepts. Follow these references to gain a deeper understanding of the text.</p>

        <h3>7.Study Word Meanings:</h3>
        <p>Use a concordance or Bible dictionary to look up the meanings of unfamiliar words or phrases.</p>

        <h3>8.Consider Different Interpretations:</h3>
        <p>Some passages in the Bible may have different interpretations. Consult commentaries or seek guidance from a pastor or mentor to understand various perspectives.</p>

        <h3>9.Apply to Your Life:</h3>
        <p>Consider how the teachings of the Bible can be applied to your daily life and relationships. Look for ways to grow spiritually and live according to the principles you discover.</p>

        <h3>10.Attend Bible Studies and Church Services:</h3>
        <p>Engage in Bible studies and attend church services to learn from others and strengthen your understanding of the Bible.</p>

        <h3>Becoming a Christian:</h3>
        <h4>1.Understand the Gospel Message:</h4>
        <p>
          The core message of Christianity is the Gospel, which means "good news." It centers on the life, death, and resurrection of Jesus Christ. Recognize that all humans are sinners in need of salvation, and Jesus offers forgiveness and eternal life to those who believe in Him.
        </p>

        <h4>2.Repentance and Faith:</h4>
        <p>Acknowledge your sins and turn away from them through a genuine process of repentance. Embrace faith in Jesus Christ as your Savior and Lord.</p>

        <h4>3.Prayer:</h4>
        <p>Pray to God, expressing your belief in Jesus and asking for forgiveness and guidance. Invite Jesus into your life and heart.</p>

        <h4>4.Seek Christian Community:</h4>
        <p>Connect with a local church or Christian community to grow in your faith, receive support, and learn from experienced believers.</p>

        <h4>5.Baptism (optional):</h4>
        <p>Consider getting baptized as a public declaration of your faith in Jesus Christ. It symbolizes your old life being buried and your new life in Christ.</p>

        <h3>6.Continued Study and Growth:</h3>
        <p>Continue studying the Bible and seeking a deeper relationship with God through prayer and worship.</p>

        <p>Remember that understanding the Bible and growing in faith is a journey, and it may take time to grasp all its complexities fully. Be patient with yourself and rely on God's guidance along the way.</p>
      
        <div>
  <Link to="/booking">
    <button className="schedule-btn">Schedule appointment with pastor</button>
  </Link>
</div>

      </div>
    </>
  );
};

export default Services;
