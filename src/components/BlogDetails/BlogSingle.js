import React from "react";
import { Link } from "react-router-dom";
import blog3 from "../../images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../images/blog-details/comments-author/img-3.jpg";
import blog6 from "../../images/blog-details/author.jpg";
import gl1 from "../../images/blog/img-3.jpg";
import gl2 from "../../images/blog/img-2.jpg";
import blogs from "../../api/blogs";
import { useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

const BlogSingle = (props) => {
  const { id } = useParams();

  const BlogDetails = blogs.find((item) => item.id === id);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={BlogDetails.blogSingleImg} alt="" />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link to="/blog-single/1">{BlogDetails.author}</Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {BlogDetails.comment}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {BlogDetails.create_at}
                    </li>
                  </ul>
                </div>
                <h2>{BlogDetails.title}</h2>

                <p>
                  A clean home is more than just appearances — it’s the
                  foundation of comfort, clarity, and well-being. At Elite
                  Spark, we understand that every household has its own needs,
                  which is why our team of expert cleaners delivers tailored
                  solutions for homes across Auckland. From routine maintenance
                  to deep cleans, we bring precision, care, and professionalism
                  to every corner.
                </p>
                <p>
                  Hiring trusted cleaners isn’t just about convenience — it’s
                  about investing in your peace of mind. Our vetted
                  professionals use modern equipment and eco-friendly products,
                  ensuring every surface is spotless without compromising your
                  family’s health or the environment. With Elite Spark, your
                  home isn’t just clean — it’s elevated to a standard of
                  excellence.
                </p>
                <blockquote>
                  “Every sweep, every polish, every detail matters. A spotless
                  home is not luck; it’s the result of expert care and
                  professional dedication.”
                </blockquote>
                <p>
                  Whether you’re preparing for an event, moving out, or simply
                  maintaining a healthy living space, our team works efficiently
                  and meticulously to deliver results you can see and feel. A
                  clean home inspires productivity, relaxation, and a sense of
                  pride — and that’s what we aim to provide every time we step
                  through your door.
                </p>

                <div className="gallery">
                  <div>
                    <img src={gl1} alt="" />
                  </div>
                  <div>
                    <img src={gl2} alt="" />
                  </div>
                </div>
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/1">Plumbing</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Office</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Kitchen</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tag-share-s2 clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/1">facebook</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">twitter</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">linkedin</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">pinterest</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  <Link to="/blog-single/1" target="_blank">
                    <img src={blog6} alt="" />
                  </Link>
                </div>
                <div className="author-content">
                  <Link to="/blog-single/1" className="author-name">
                    Author: Jenny Willy
                  </Link>
                  <p>
                    Jenefer Willy is a seasoned cleaning professional with over
                    a decade of experience leading residential and commercial
                    cleaning teams across New Zealand. As a Cleaner Leader at
                    Elite Spark, she combines expert knowledge, eco-friendly
                    practices, and a commitment to excellence to ensure every
                    home and office shines. Passionate about sharing tips,
                    insights, and industry best practices, Jenefer empowers
                    readers to understand the value of professional cleaning and
                    maintain spaces that inspire comfort and productivity.
                  </p>
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium.
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link to="/blog-left-sidebar">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      Dignissimos ducimus qui blanditiis praesentiu deleniti
                      atque corrupti quos dolores
                    </span>
                  </Link>
                </div>
              </div>

              <div className="comments-area">
                <div className="comments-section">
                  <h3 className="comments-title">Comments</h3>
                  <ol className="comments">
                    <li
                      className="comment even thread-even depth-1"
                      id="comment-1"
                    >
                      <div id="div-comment-1">
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2021 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/1"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="comment">
                          <div>
                            <div className="comment-theme">
                              <div className="comment-image">
                                <img src={blog4} alt="" />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    Lily Watson{" "}
                                    <span className="comments-date">
                                      January 12,2021 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{" "}
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      to="/blog-single/1"
                                    >
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <img src={blog5} alt="" />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        John Abraham{" "}
                                        <span className="comments-date">
                                          January 12,2021 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{" "}
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          to="/blog-single/1"
                                        >
                                          <span>Reply</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="comment">
                      <div>
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2021 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/1"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post Comments</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form"
                  >
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="Write Your Comments..."
                      ></textarea>
                    </div>
                    <div className="form-inputs">
                      <input placeholder="Website" type="url" />
                      <input placeholder="Name" type="text" />
                      <input placeholder="Email" type="email" />
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="Post Comment" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
