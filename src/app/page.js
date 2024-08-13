"use client";

import Card from "@/Components/card/card";
import config from "@/config";

// const fetchBlogs = async () => {
//    const reqOption = {
//        headers: {
//            Authorization : `Bearer ${process.env.API_TOKEN}`
//        }
//    }
//    const request = await fetch(`${config.api}/api/blogs?populate=*`);
//    const response = await request.json();
//    return response;
// }

const fetchBlogs = async (params) => {
  const token =
    "8e50cdb0b0d2b3c330b9f70ea42fcb046e6b71b77a3ab4c59ead32938c610d347c072e1a15604523cefb84adf6ac2e813ec928c04f7dca6da6435d0b102c678eedf9a795249e930420f5ea0d1daada0fc13ea706d2788caea2b2b1a9509bf1ca8a0a0b4cfd2f1b5697079c0c56afc6d7bad01bd38d0bb6dff76e4eb1ab7661a9";
  const reqOption = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const response = await fetch(
    "http://127.0.0.1:1337/api/blogs?populate=*${params}",
    reqOption
  );
  console.log(response);
  const data = await response.json();
  return data;
};
const Home = async () => {

  useEffect( async () => {
    const [featuredBlog, BLOGS] = await Promise.all([
      fetchBlogs("&filters[IsFeatured][$eq]=true"),
      fetchBlogs("&filters[IsFeatured][$eq]=false"),
    ]);

  } ,[])
  return (
    <div className="container pb-80">
      {featuredBlog.data.map((featuredBlog) => (
        <>
          <Card
            label={featuredBlog.attributes.Category}
            title={featuredBlog.attributes.Title}
            summary={featuredBlog.attributes.Summary}
            href={`/${featuredBlog.attributes.Slug}`}
            imgSrc={
              featuredBlog.attributes.FeaturedImage
                ? `${config.api}${featuredBlog.attributes.FeaturedImage.attributes.url}`
                : "/default-image.jpg"
            }
            imgAlt="Featured Image"
            className="mb-40"
          />
        </>
      ))}

      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card
            label="Featured"
            title="This is the title"
            summary="This is the summary"
            href="https://www.google.com"
            className="mb-40"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Featured"
            title="This is the title"
            summary="This is the summary"
            href="https://www.google.com"
            className="mb-40"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Featured"
            title="This is the title"
            summary="This is the summary"
            href="https://www.google.com"
            className="mb-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
