const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

const CAR = {
  1: {
    question:
      'Give me an example of the project or initiative that you started on your own. It can be a non-business one. What prompted you to get started?',
    answer:
      "I actually LOVE starting new projects. As someone that consume's a lot of media I love making products that represent shows or games. I've started projects from an API-> webapp for the StarTrek Space Federation to a webapp that functions as a Pokidex for my kids to enjoy!",
  },
  2: {
    question:
      'Tell me about a time you had to work on several projects at once. How did you handle this?',
    answer:
      'This is a fairly regular occurance for me, since I typically work on building webapps and websites for multiple clients. One of the first considerations is a due date, but assuming similar due dates I really like to focus down on tasks that I know I can handle easily first. I can often fit in some research for the more complex tasks here and there so I can confidently knock it out when I do address the issue.',
  },
  3: {
    question:
      'Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?',
    answer:
      'When I first started building webpages for I had an unsatisfied client, yet I had built exactly what they had asked for. I scheduled a meeting with them where we would go over the contract, compare it to the finished product, and recontract work to get to the result they wanted. Because of this I often do mock-ups to ensure the client is very clear what they will be receiving as a final product.',
  },
  4: {
    question:
      'Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?',
    answer:
      "Fortunately its been quite a while since I've had to deal with any real conflict on a team. I've had the opportunity to attend many leadership courses throughout my career in the U.S. Army, and part of that includes conflict avoidance/resolution. I think I have a fairly good eye for spotting areas where people may rub each other the wrong way, delegate tasks to both parties, and always follow up with positivity. As per usual, keep it professional and never allow rumors or gossip.",
  },
  5: {
    question:
      'Give me an example of a time you had to take a creative and unusual approach to solve a coding problem. How did this idea come to your mind? Why do you think it was unusual?',
    answer: '',
  },
  6: {
    question:
      "Describe a situation in which you worked digligently on a project and it did not produce the desired results. Why didn't you get the desired results? What did you learn from the experience?",
    answer:
      'When I first started building webpages for I had an unsatisfied client, yet I had built exactly what they had asked for. I scheduled a meeting with them where we would go over the contract, compare it to the finished product, and recontract work to get to the result they wanted. Because of this I often do mock-ups to ensure the client is very clear what they will be receiving as a final product, and have not encountered this issue since then.',
  },
  7: {
    question:
      'Give an example of an important project goal you reached and how you achieved it.',
    answer:
      'I think one of my most important project goals was working on creating my first MERN app. It was something that I was working toward from the start of my programming journey, and to achieve it I had to do countless hours of independent research. This often also included reaching out in the tech community and asking for guidance from my mentors. It was a long and difficulty journey, but I think what helped me the most was how much time I spent practicing, learning, and coding in general.',
  },
  8: {
    question:
      'Describe a situation in which you experienced difficulty in getting others to accept your ideas.',
    answer: '',
  },
  9: {
    question:
      'Tell me about a situation when you were responsible for project planning. Did everything go according to plan? If not, then why and what kind of counteractions did you have to take?',
    answer: '',
  },
  10: {
    question:
      'Tell me about a situation when you were responsible for project planning. Did everything go according to plan? If not, then why and what kind of counteractions did you have to take?',
    answer:
      "Working on updating old legacy code, and didn't set proper variable naming conventions for the project. This resulted in us breaking the website entirely, but I noticed the error, adjusted, and as a result I created a system to prevent that from happenening again.",
  },
  11: {
    question:
      'Tell me about a situation when you made a mistake at work. What happened exactly and how did you deal with it? What steps did you take to improve the situation?',
    answer: '',
  },
  12: {
    question:
      'Describe a situation when you worked effectively under pressure. How did you feel when working under pressure? What was going on, and how did you get through it?',
    answer: '',
  },
  13: {
    question: 'Tell me about yourself',
    answer: '',
  },
  14: {
    question: 'Tell me about your experience at 100Devs',
    answer: '',
  },
  15: {
    question: 'What do you know about our company?',
    answer: '',
  },
  16: {
    question: 'Why do you want to work for us?',
    answer:
      "MONEY! Just kidding. Based on what I see of [company/product] and the tech stack you guys use I am thrilled at the thought of working with your team and that tech! I know [referral name here], so I know I'd already be working amongst great thinkers and developers, and this company would be a great place for me to flex my skills and show my talents as a Software Engineer.",
  },
  17: {
    question: 'Why are you interested in this opportunity?',
    answer:
      "I'm interested in this opportunity because of the incredible product that your SWE work on. I see the all the great things you guys are doing at [company name] and I love what I see. I'm looking forward for an opportunity to leverage my skills to assist in the creation, maintenance, and improvement of applications here!",
  },
  18: {
    question:
      'Tell me about your dream job? What do you really want to do with your career?',
    answer:
      'My dream job is a place where I can write code, interact with other programmers and their work, and work in a positive/encouraging environment. I love discussing interesting code with others, I very much enjoy seeing how what I write combines with others work to form one singlar powerful product, and I thoroughly enjoy a good challenge. All of these are things I think working here will provide, and having met some of the programmers[referral name here] on the team I am confident I would thrive in this environment.',
  },
  19: {
    question: 'Tell me about a time when you failed.',
    answer: '',
  },
  20: {
    question: 'What do you read on a regular basis?',
    answer:
      "I often read to relax, and I don't mind reading non-fiction, so I often find myself reading about things in the tech community. From reading about new and emerging tech, to reading about different implementation of old tech, I love it all! In fact, just the other day I was reading an incredible article about the Quake 3 Inverse Square Root algorithm!",
  },
  21: {
    question: "What is some critical feedback you've gotten recently?",
    answer:
      'I have gotten some rough feedback about design choices recently. Working directly with clients and oftentimes without a designer leaves a good bit of the aesthetic of things open to interpretation. I have struggled with some of these design choices in the past, but I actually have a few cool web-tools to help me overcome these limitations now, like palette generators and I took a brief course in web-page design to shore this weakness up.',
  },
  22: {
    question: 'Do you have any questions?',
    answer: '',
  },
  rip: {
    question: 'There seems to be some kind of issue',
    answer: 'Please notify admin at mingleeng@gmail.com',
  },
};

app.get('/', (request, response) => {
  console.log(request.baseUrl, request.params, request.path, request.query);
  response.sendFile(__dirname + '/index.html');
});
app.get('/css/style.css', (request, response) => {
  console.log('getting css');
  response.sendFile(__dirname + '/css/style.css');
});
app.get('/api/:category/:item', (request, response) => {
  const category = request.params.category.toLowerCase();
  const item = request.params.item.toLowerCase();
  console.log(category, item);

  if (category === 'car') {
    if (CAR[item]) response.json(CAR[item]);
    else response.json(CAR.rip);
  } else response.json(CAR.rip);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
