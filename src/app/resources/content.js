import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "S54_lens",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Videography, Photography, Content Creators",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Kannada","Tulu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagran",
    icon: "instagram",
    link: "https://www.instagram.com/s54__v?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:preethamalva1007@@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Photography, Videography, Content Creators</>,
  subline: (
    <>
      We're s54, a <InlineCode>Freelance Videographers</InlineCode>,where we craft intuitive
      user experience. Check out our videos!!
    </>
  ),
};

const about = {
  label: "About",
  title: "About Us",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        -We are a creative team of videographers, photographers, and content creators.  
        Delivering high-quality visuals at unbeatable prices.  
        <br />
        -From stunning car and bike shoots to captivating shop opening videos, we bring your vision to life.  
        <br />
        -Explore our portfolio and let us capture your story like never before!  
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HOUSE WARMING CEREMONY",
        timeframe: "Jan 2025",
        role: "",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Our projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Our photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/s541.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bike1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/friend1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/s544.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/car3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/fish1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/car2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/s542.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bike2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/desert1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/desert2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/falls1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/disco1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/s543.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/sunset1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
