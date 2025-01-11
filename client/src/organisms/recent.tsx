import { Post } from "../molecules";
import { SectionTemplate } from "../templates";

export const data = [
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yWFcvw0XySGJ7lxijsWGOg.jpeg",
    title:
      "Event Loop Essentials: How Microtasks and Macrotasks Shape JavaScript’s Asynchronous Flow",
    description: "Prioritizing Tasks with Microtask and Macrotask Queues",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yWFcvw0XySGJ7lxijsWGOg.jpeg",
    title:
      "Event Loop Essentials: How Microtasks and Macrotasks Shape JavaScript’s Asynchronous Flow",
    description: "Prioritizing Tasks with Microtask and Macrotask Queues",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NiMMIu-6XJ3O1odkEV7XgA.jpeg",
    title:
      "Why JavaScript Choose Single-Threading and How It Achieves Concurrency",
    description: "Why does JavaScript not offer multithreading support",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IfUaS9GBpgXNiI3f6xaTUQ.png",
    title: "React Design Patterns",
    description:
      "React design patterns help developers write cleaner, more scalable, and maintainable code.",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YvNQ2eusWmFZwqMbHiK-kA.png",
    title:
      "New JavaScript pipeline operator: Transform anything into a one-liner 😲",
    description:
      "Unleash the power of the JavaScript pipeline operator: ditch temporary variables, boost readability, and write cleaner code.",
  },
  {
    img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1bjcy5dhfmaac3dxcxz5.png",
    title: "Exploring Spring boot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur ipsa maiores ex eaque sed veritatis quibusdam.",
  },
];

export const RecentBlogs = () => {
  return (
    <SectionTemplate title="">
      <div className="flex flex-col gap-8 lg:gap-4 2xl:gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <Post {...item} />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
