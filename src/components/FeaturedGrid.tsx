import ArticleCard from "./ArticleCard";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const FeaturedGrid = () => {
  const featuredArticle = {
    image: photo1,
    category: "FEATURED STORY",
    title: "A Parisian Love Story: How Two Strangers Met at the Eiffel Tower",
    excerpt:
      "In the city of lights, destiny brought together two souls from opposite sides of the world. Their story is one of serendipity, romance, and the magic that only Paris can create.",
    author: "Sophie Laurent",
    date: "October 14, 2025",
    time: "2:30 PM",
    views: 45320,
    likes: 2841,
    comments: 389,
  };

  const sidebarArticles = [
    {
      image: photo2,
      category: "RELATIONSHIPS",
      title: "The Secret to Long-Lasting Love According to 50-Year Couples",
      excerpt: "We interviewed couples who've been together for decades.",
      author: "Emma Wilson",
      date: "October 14, 2025",
      time: "11:15 AM",
      views: 23450,
      likes: 1523,
      comments: 234,
    },
    {
      image: event1,
      category: "CELEBRITY",
      title: "Celebrity Wedding of the Year: All the Exclusive Details",
      excerpt: "Inside the most luxurious celebration of 2025.",
      author: "James Rodriguez",
      date: "October 13, 2025",
      time: "4:45 PM",
      views: 67890,
      likes: 4521,
      comments: 892,
    },
    {
      image: photo3,
      category: "TRAVEL",
      title: "Top 10 Most Romantic Destinations for Your Honeymoon",
      excerpt: "From tropical paradises to European getaways.",
      author: "Maria Garcia",
      date: "October 13, 2025",
      time: "9:20 AM",
      views: 34210,
      likes: 2104,
      comments: 445,
    },
  ];

  const mainArticles = [
    {
      image: photo4,
      category: "LIFESTYLE",
      title: "Modern Romance: Dating in the Digital Age",
      excerpt: "How technology is reshaping the way we find love.",
      author: "Alex Chen",
      date: "October 12, 2025",
      time: "3:10 PM",
      views: 28900,
      likes: 1876,
      comments: 312,
    },
    {
      image: event2,
      category: "ENTERTAINMENT",
      title: "The Most Romantic Movies to Watch This Fall",
      excerpt: "Our curated list of love stories that will make you cry.",
      author: "Rachel Green",
      date: "October 12, 2025",
      time: "1:00 PM",
      views: 19450,
      likes: 1234,
      comments: 178,
    },
    {
      image: photo5,
      category: "CULTURE",
      title: "Love Letters Through History: A Timeless Tradition",
      excerpt: "Exploring the art of romantic correspondence.",
      author: "Thomas Miller",
      date: "October 11, 2025",
      time: "5:30 PM",
      views: 15670,
      likes: 987,
      comments: 145,
    },
    {
      image: photo6,
      category: "LIFESTYLE",
      title: "The Psychology of Falling in Love: What Science Says",
      excerpt: "Understanding the chemistry behind attraction.",
      author: "Dr. Sarah Johnson",
      date: "October 11, 2025",
      time: "10:45 AM",
      views: 31200,
      likes: 2345,
      comments: 567,
    },
  ];

  return (
    <section className="pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Featured Article */}
          <div>
            <ArticleCard {...featuredArticle} featured />
          </div>

          {/* Right: Sidebar Articles */}
          <div className="space-y-6">
            {sidebarArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>

        {/* Latest Stories Grid */}
        <div className="border-t border-border pt-8">
          <h2 className="text-2xl font-bold mb-6">LATEST STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
