// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";
import blogImg4 from "../images/blog/img-7.jpg";

import blogAvaterImg1 from "../images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "../images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "../images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";
import blogSingleImg4 from "../images/blog/img-8.jpg";

const blogs = [
  {
    id: "1",
    screens: blogImg1,
    title: "The Science of Spring Cleaning!",
    description:
      "Discover the techniques and tips behind effective spring cleaning. Learn how to refresh your home efficiently while maintaining a spotless environment.",
    author: "Elite Spark Team",
    authorTitle: "Cleaning Experts",

    authorImg: blogAvaterImg1,
    create_at: "14 AUG,22",
    blogSingleImg: blogSingleImg1,
    comment: "5,975",
    blClass: "format-standard-image",
  },
  {
    id: "2",
    screens: blogImg2,
    title: "Save Money on Cleaning Supplies",
    description:
      "Learn how to cut down your cleaning costs without compromising on quality. Our guide includes eco-friendly, budget-conscious solutions for every home.",
    author: "Elite Spark Team",
    authorTitle: "Cleaning Experts",

    authorImg: blogAvaterImg2,
    create_at: "16 AUG,22",
    blogSingleImg: blogSingleImg2,
    comment: "7,275",
    blClass: "format-standard-image",
  },
  {
    id: "3",
    screens: blogImg3,
    title: "10 House Cleaners near Auckland",
    description:
      "Looking for trusted house cleaners near Auckland? We’ve compiled a list of top-rated professionals to make your cleaning hassle-free.",
    author: "Elite Spark Team",
    authorTitle: "Service Specialists",

    authorImg: blogAvaterImg3,
    create_at: "18 AUG,22",
    blogSingleImg: blogSingleImg3,
    comment: "6,725",
    blClass: "format-standard-image",
  },
  {
    id: "4",
    screens: blogImg4,
    title: "A Day in the Life of a Cleaning Business",
    description:
      "Get a behind-the-scenes look at how a professional cleaning company operates, from planning to execution, and the dedication that keeps clients satisfied.",
    author: "Jenefer Willy",
    authorTitle: "Cleaner Leader",

    authorImg: blogAvaterImg3,
    create_at: "18 AUG,22",
    blogSingleImg: blogSingleImg4,
    comment: "6,725",
    blClass: "format-video",
  },
];
export default blogs;
