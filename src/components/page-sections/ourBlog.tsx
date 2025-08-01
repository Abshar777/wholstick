import React from "react";

const highlightedPost = {
  image: "images/post-1.jpg",
  title: "10 Effective Exercises for Weight Loss",
  description:
    "Discover the best workouts to burn fat, boost metabolism, and achieve your weight loss goals faster.",
  link: "blog-single.html",
};

const blogPosts = [
  {
    image: "images/post-2.jpg",
    title: "The Ultimate Guide to Meal Preparing for Fitness Success",
    description: "Learn how to save time and eat healthier....",
    delay: "0.2s",
  },
  {
    image: "images/post-3.jpg",
    title: "Top Benefits of Strength Training for All Ages",
    description: "Strength training isn't just for bodybuilders!...",
    delay: "0.4s",
  },
  {
    image: "images/post-4.jpg",
    title: "How to Stay Motivated in Your Fitness Journey",
    description: "Struggling to stay consistent? These practical...",
    delay: "0.6s",
  },
];

const BlogSection = () => {
  return (
    <div className="our-blog light-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>news</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                latest post
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                stay informed with <span>our latest</span> articles
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {/* Post Item Start */}
            <div className="post-item highlighted-post-item wow fadeInUp">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <a href={highlightedPost.link} data-cursor-text="View">
                  <figure className="image-anime">
                    <img src={highlightedPost.image} alt="" />
                  </figure>
                </a>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                <div className="post-item-content">
                  <h2>
                    <a href={highlightedPost.link}>{highlightedPost.title}</a>
                  </h2>
                  <p>{highlightedPost.description}</p>
                </div>
                <div className="post-item-btn">
                  <a href={highlightedPost.link} className="readmore-btn">
                    learn more
                  </a>
                </div>
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>

          <div className="col-lg-6">
            {blogPosts.map((post, index) => (
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={post.delay}
                key={index}
              >
                <div className="post-featured-image">
                  <a href="blog-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={post.image} alt="" />
                    </figure>
                  </a>
                </div>
                <div className="post-item-body">
                  <div className="post-item-content">
                    <h2>
                      <a href="blog-single.html">{post.title}</a>
                    </h2>
                    <p>{post.description}</p>
                  </div>
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="readmore-btn">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
