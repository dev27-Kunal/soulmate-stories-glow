import { Eye, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  time: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

const ArticleCard = ({
  image,
  category,
  title,
  excerpt,
  author,
  date,
  time,
  views,
  likes,
  comments,
  featured = false,
}: ArticleCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <article
      className={`group cursor-pointer ${
        featured ? "mb-8" : "mb-6"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Category */}
      <div className="mb-2">
        <span className="text-xs font-bold tracking-wider text-primary">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-bold mb-2 group-hover:text-primary transition-colors ${
          featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl lg:text-2xl"
        }`}
      >
        {title}
      </h3>

      {/* Excerpt */}
      {featured && (
        <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
          {excerpt}
        </p>
      )}

      {/* Author & Date */}
      <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">By {author}</span>
        <span>•</span>
        <time dateTime={date}>
          {date} at {time}
        </time>
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{views.toLocaleString()}</span>
        </div>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${isLiked ? "fill-primary text-primary" : ""}`}
          />
          <span>{likeCount.toLocaleString()}</span>
        </button>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>{comments.toLocaleString()}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
