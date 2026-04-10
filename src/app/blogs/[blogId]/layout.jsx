import Link from "next/link";
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

const BlogsDetailsLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-2.5 mb-5 flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-3"
          className="btn drawer-button lg:hidden mt-2.5 ml-auto mr-0"
        >
          SideBar
        </label>
        {children}
      </div>
      <div className="drawer-side max-lg:mt-16">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-2.5">
          {/* Sidebar content here */}
          {blogs.map((blog, index) => (
            <li key={blog.id} className="card bg-base-100 shadow-xl">
              <Link href={`/blogs/${blog.id}`} className="w-full">
                {index + 1}. {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogsDetailsLayout;
