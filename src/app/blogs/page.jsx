import Link from "next/link";
function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "React Hooks-এর সহজ পাঠ",
      description:
        "Functional component-এ state ম্যানেজ করার জন্য React Hooks বর্তমান সময়ে অপরিহার্য।",
      author: "Amirul",
      date: "এপ্রিল ০৫, ২০২৬",
      category: "React",
      readTime: "৫ মিনিট",
    },
    {
      id: 2,
      title: "Tailwind CSS কেন সেরা?",
      description:
        "Utility-first CSS ফ্রেমওয়ার্ক হিসেবে Tailwind দ্রুত UI ডিজাইনের জন্য দারুণ কার্যকরী।",
      author: "Web Dev Expert",
      date: "এপ্রিল ০৭, ২০২৬",
      category: "CSS",
      readTime: "৪ মিনিট",
    },
    {
      id: 3,
      title: "JavaScript ES6 ফিচারের ব্যবহার",
      description:
        "Arrow functions, Destructuring এবং Template literals আপনার কোডকে করবে আরও ক্লিন।",
      author: "JS Ninja",
      date: "এপ্রিল ০৮, ২০২৬",
      category: "JavaScript",
      readTime: "৬ মিনিট",
    },
    {
      id: 4,
      title: "Responsive Web Design টিপস",
      description:
        "মোবাইল-ফার্স্ট ডিজাইন অ্যাপ্রোচ ব্যবহার করে কীভাবে ওয়েবসাইটকে সব ডিভাইসে সুন্দর রাখা যায়।",
      author: "UI Designer",
      date: "এপ্রিল ০৯, ২০২৬",
      category: "Design",
      readTime: "৭ মিনিট",
    },
  ];
  return (
    <div>
      <h2 className=" text-3xl font-bold text-center">Blogs</h2>

      {/* make a show details button*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">
                  By {blog.author}
                </span>
                <span className="text-sm text-muted-foreground">
                  {blog.date}
                </span>
              </div>
              <div className="card-actions justify-between items-center mt-2">
                <span className="badge badge-outline">{blog.category}</span>
                <span className="text-sm text-muted-foreground">
                  {blog.readTime} read
                </span>
              </div>
              <button className="btn btn-primary p-0 mt-4">
                <Link href={`/blogs/${blog.id}`} className="w-full">
                  Show Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
