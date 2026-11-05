// One entry per project. The ProjectCard component reads this list.
//
// Fields you can still fill in (they show a clear placeholder until you do):
//   image    - screenshot path, e.g. '/projects/taskflow.jpg' (the file lives in the public/projects folder)
//   video    - link to the demo video (e.g. an unlisted YouTube link). Leave null until the video is ready;
//              the "Watch demo" button only appears when this is filled in.
//   features - a list of the real features the project has
//   repo     - the GitHub repository URL
export const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    category: 'Kanban task board',
    description: 'A Kanban-style task board built with the MERN stack.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    features: [],
    image: '/projects/taskflow.jpg',
    video: null,
    demo: 'https://taskflow-mern-3tss.vercel.app',
    repo: 'https://github.com/novelianmen-beep/taskflow-mern',
  },
  {
    id: 'shopwave',
    title: 'ShopWave',
    category: 'E-commerce store',
    description: 'A full-stack e-commerce store built with the MERN stack.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    features: [],
    image: '/projects/shopwave.jpg',
    video: null,
    demo: 'https://shopwave-store-delta.vercel.app',
    repo: null,
  },
  {
    id: 'chatwave',
    title: 'ChatWave',
    category: 'Real-time chat app',
    description: 'A real-time chat application built with React, Node.js and Socket.io.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    features: [],
    image: '/projects/chatwave.jpg',
    video: null,
    demo: 'https://chatwave-client.vercel.app',
    repo: 'https://github.com/novelianmen-beep/Chatwave-',
  },
];
