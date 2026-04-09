// const blogs = [
//   {
//     id: 1,
//     title: "React Hooks-এর সহজ পাঠ",
//     description:
//       "Functional component-এ state ম্যানেজ করার জন্য React Hooks বর্তমান সময়ে অপরিহার্য।",
//     details:
//       "React Hooks হলো এমন ফাংশন যা আপনাকে class কম্পোনেন্ট না লিখেও React-এর state এবং অন্যান্য ফিচার ব্যবহার করতে দেয়। useState এবং useEffect হলো সবচেয়ে বেশি ব্যবহৃত হুক। এগুলো কোডকে আরও সংক্ষিপ্ত এবং রিডেবল করে তোলে।",
//     author: "Amirul",
//     date: "এপ্রিল ০৫, ২০২৬",
//     category: "React",
//     readTime: "৫ মিনিট",
//   },
//   {
//     id: 2,
//     title: "Tailwind CSS কেন সেরা?",
//     description:
//       "Utility-first CSS ফ্রেমওয়ার্ক হিসেবে Tailwind দ্রুত UI ডিজাইনের জন্য দারুণ কার্যকরী।",
//     details:
//       "Tailwind CSS সরাসরি HTML-এর ভেতরে ক্লাস ব্যবহার করে স্টাইল করার সুবিধা দেয়। এর ফলে আপনাকে আলাদা CSS ফাইল লিখতে হয় না এবং কাস্টম ডিজাইনের ক্ষেত্রে এটি অনেক ফ্লেক্সিবল। এছাড়া এটি অটোমেটিক অব্যবহৃত CSS রিমুভ করে প্রোডাকশন সাইজ কমিয়ে দেয়।",
//     author: "Web Dev Expert",
//     date: "এপ্রিল ০৭, ২০২৬",
//     category: "CSS",
//     readTime: "৪ মিনিট",
//   },
//   {
//     id: 3,
//     title: "JavaScript ES6 ফিচারের ব্যবহার",
//     description:
//       "Arrow functions, Destructuring এবং Template literals আপনার কোডকে করবে আরও ক্লিন।",
//     details:
//       "মডার্ন জাভাস্ক্রিপ্টে ES6 ভার্সনটি বৈপ্লবিক পরিবর্তন এনেছে। Arrow functions কোডকে ছোট করে, আর Destructuring অবজেক্ট বা অ্যারে থেকে ডেটা বের করা সহজ করে। এছাড়া Template literals ব্যবহার করে স্ট্রিং কনক্যাটিনেশন এখন অনেক সহজ।",
//     author: "JS Ninja",
//     date: "এপ্রিল ০৮, ২০২৬",
//     category: "JavaScript",
//     readTime: "৬ মিনিট",
//   },
//   {
//     id: 4,
//     title: "Responsive Web Design টিপস",
//     description:
//       "মোবাইল-ফার্স্ট ডিজাইন অ্যাপ্রোচ ব্যবহার করে কীভাবে ওয়েবসাইটকে সব ডিভাইসে সুন্দর রাখা যায়।",
//     details:
//       "রেসপন্সিভ ডিজাইনের মূল চাবিকাঠি হলো Media Queries এবং Flexible Grids। সবসময় মোবাইল-ফার্স্ট থিঙ্কিং অনুসরণ করা উচিত, অর্থাৎ আগে ছোট স্ক্রিনের জন্য ডিজাইন করে পরে বড় স্ক্রিনের জন্য স্টাইল যোগ করা। Tailwind-এর 'sm', 'md', 'lg' প্রিক্সগুলো এক্ষেত্রে দারুণ কাজ করে।",
//     author: "UI Designer",
//     date: "এপ্রিল ০৯, ২০২৬",
//     category: "Design",
//     readTime: "৭ মিনিট",
//   },
// ];

const blogs = [
  {
    id: 1,
    title: "Next.js Routing System",
    description:
      "Next.js এ file-based routing কিভাবে কাজ করে এবং dynamic route কিভাবে handle করতে হয়।",
    details: `
<h2>📌 Routing কী?</h2>
<p>Routing মানে হলো URL অনুযায়ী কোন page render হবে তা নির্ধারণ করা। Next.js এ এটি automatic হয় folder structure দিয়ে।</p>

<h3>⚡ File-based Routing</h3>
<ul>
  <li><code>app/about/page.jsx</code> → /about</li>
  <li><code>app/blog/page.jsx</code> → /blog</li>
</ul>

<h3>⚡ Dynamic Routing</h3>
<p><code>app/blog/[id]/page.jsx</code></p>
<p>Example: /blog/1, /blog/2</p>

<h3>⚡ Nested Routing</h3>
<p>Folder এর ভিতরে folder = nested route</p>

<h3>🚀 Best Practice</h3>
<ul>
  <li>Clean folder structure maintain করো</li>
  <li>Meaningful route name ব্যবহার করো</li>
</ul>

<h3>❌ Mistake</h3>
<p>Random folder naming এবং unnecessary deep nesting</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৫ মিনিট",
  },

  {
    id: 2,
    title: "Next.js Layout System",
    description:
      "Reusable layout ব্যবহার করে clean UI structure তৈরি করার best approach।",
    details: `
<h2>📌 Layout কী?</h2>
<p>Layout হলো reusable UI wrapper (Navbar, Footer)।</p>

<h3>⚡ Basic Layout</h3>
<pre><code>export default function Layout({ children }) {
  return (
    &lt;div&gt;
      &lt;Navbar /&gt;
      {children}
      &lt;Footer /&gt;
    &lt;/div&gt;
  )
}</code></pre>

<h3>🎯 কেন গুরুত্বপূর্ণ?</h3>
<ul>
  <li>Code reuse হয়</li>
  <li>Clean structure</li>
</ul>

<h3>🔥 Nested Layout</h3>
<p>Different section এর জন্য আলাদা layout করা যায়</p>

<h3>❌ Mistake</h3>
<p>সবকিছু এক layout এ ঢুকানো</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৪ মিনিট",
  },

  {
    id: 3,
    title: "Next.js Navigation System",
    description:
      "Client-side navigation ব্যবহার করে fast page transition কিভাবে করা যায়।",
    details: `
<h2>📌 Navigation কী?</h2>
<p>এক page থেকে অন্য page এ যাওয়ার system।</p>

<h3>⚡ Link Component</h3>
<pre><code>import Link from "next/link"

&lt;Link href="/about"&gt;About&lt;/Link&gt;</code></pre>

<h3>⚡ useRouter</h3>
<pre><code>"use client"
import { useRouter } from "next/navigation"

const router = useRouter()
router.push("/dashboard")</code></pre>

<h3>🚀 Benefit</h3>
<ul>
  <li>No full page reload</li>
  <li>Fast navigation</li>
</ul>

<h3>❌ Mistake</h3>
<p>&lt;a&gt; tag ব্যবহার করা</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৪ মিনিট",
  },

  {
    id: 4,
    title: "Server vs Client Component",
    description:
      "Next.js এ server component এবং client component এর পার্থক্য এবং ব্যবহার।",
    details: `
<h2>📌 Server Component</h2>
<p>Default component, fast এবং SEO friendly</p>

<h2>📌 Client Component</h2>
<p>"use client" ব্যবহার করতে হয়</p>

<h3>⚖️ Difference</h3>
<table>
<tr><th>Feature</th><th>Server</th><th>Client</th></tr>
<tr><td>Speed</td><td>Fast</td><td>Medium</td></tr>
<tr><td>SEO</td><td>Good</td><td>Limited</td></tr>
<tr><td>Interactivity</td><td>No</td><td>Yes</td></tr>
</table>

<h3>🚀 Usage</h3>
<ul>
  <li>Server → data fetching</li>
  <li>Client → interactivity</li>
</ul>

<h3>❌ Mistake</h3>
<p>সব component client বানানো</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৬ মিনিট",
  },

  {
    id: 5,
    title: "Next.js Data Fetching",
    description: "Server-side data fetching এবং caching system কিভাবে কাজ করে।",
    details: `
<h2>📌 Data Fetching</h2>
<p>Server থেকে data আনা</p>

<h3>⚡ Example</h3>
<pre><code>const data = await fetch("https://api.com/posts")</code></pre>

<h3>⚡ Caching</h3>
<ul>
  <li>force-cache</li>
  <li>no-store</li>
</ul>

<h3>⚡ Revalidation</h3>
<pre><code>fetch(url, { next: { revalidate: 60 } })</code></pre>

<h3>🚀 Benefit</h3>
<ul>
  <li>Fast loading</li>
  <li>SEO friendly</li>
</ul>

<h3>❌ Mistake</h3>
<p>Unnecessary client-side fetch</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৫ মিনিট",
  },

  {
    id: 6,
    title: "Next.js Image Optimization",
    description:
      "Next Image component ব্যবহার করে performance optimize করার উপায়।",
    details: `
<h2>📌 কেন দরকার?</h2>
<p>Image website slow করে</p>

<h3>⚡ Example</h3>
<pre><code>import Image from "next/image"

&lt;Image
  src="/img.jpg"
  width={500}
  height={300}
  alt="image"
/&gt;</code></pre>

<h3>🚀 Benefit</h3>
<ul>
  <li>Lazy loading</li>
  <li>Auto resize</li>
</ul>

<h3>❌ Mistake</h3>
<p>&lt;img&gt; tag ব্যবহার করা</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৪ মিনিট",
  },

  {
    id: 7,
    title: "Next.js SEO Metadata",
    description: "Metadata ব্যবহার করে SEO improve করার best practice।",
    details: `
<h2>📌 SEO Metadata</h2>
<p>Search engine ranking improve করার জন্য ব্যবহৃত হয়</p>

<h3>⚡ Example</h3>
<pre><code>export const metadata = {
  title: "My Page",
  description: "This is my page"
}</code></pre>

<h3>⚡ Dynamic Metadata</h3>
<pre><code>export async function generateMetadata({ params }) {
  return {
    title: params.slug
  }
}</code></pre>

<h3>🚀 Benefit</h3>
<ul>
  <li>Better ranking</li>
  <li>Social preview</li>
</ul>

<h3>❌ Mistake</h3>
<p>Metadata ignore করা</p>
`,
    author: "Amirul",
    date: "এপ্রিল ০৯, ২০২৬",
    category: "Next.js",
    readTime: "৪ মিনিট",
  },
];

// const BookDetailsPage = async ({ params }) => {
//   const { blogId } = await params;

//   const blog = blogs.find((b) => b.id === parseInt(blogId));

//   return (
//     <>
//       {blog ? (
//         <div className="max-w-3xl mt-5 mx-auto p-6 bg-white rounded-lg shadow-md">
//           <h2 className="text-3xl font-bold text-center text-black">
//             {blog.title}
//           </h2>
//           <p className="text-lg text-gray-600 text-center">
//             {blog.description}
//           </p>

//           <div className="flex justify-between items-center mt-4">
//             <span className="text-sm text-gray-500">By {blog.author}</span>
//             <span className="text-sm text-gray-500">{blog.date}</span>
//             <span className="text-sm text-gray-500">{blog.readTime}</span>
//           </div>

//           <div className="mt-6">
//             {/* <p className="text-gray-700 leading-relaxed">{blog.details}</p> */}
//             {blog.details}
//           </div>
//         </div>
//       ) : (
//         <div className="text-center text-red-500 text-xl mt-10">
//           Blog not found
//         </div>
//       )}
//     </>
//   );
// };

const BookDetailsPage = async ({ params }) => {
  const { blogId } = await params;
  const blog = blogs.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mt-5 mx-auto">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-5">
            {blog.description}
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>✍️ {blog.author}</span>
            <span>📅 {blog.date}</span>
            <span>⏱️ {blog.readTime}</span>
          </div>
        </div>

        {/* Blog Details — HTML string ঠিকমতো render হবে */}
        <div
          className="p-8 prose prose-sm max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: blog.details }}
        />
      </div>
    </div>
  );
};

export default BookDetailsPage;
