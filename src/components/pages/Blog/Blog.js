import React from "react";

const Blog = () => {
  return (
    <div className="m-10 bg-emerald-400 gap-8">
      <div>
        <h3>Difference between SQL and NoSQL</h3>
        <hr />
        <p>
          SQL is the programming language used to interface with relational{" "}
          <br />
          databases. Relational databases model data as records in rows and{" "}
          <br />
          tables with logical links between them <br />
        </p>

        <p>
          NoSQL is a class of DBMs that are non-relational and generally do not
          use SQL.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h3>What is JWT, and how does it work?</h3>
        <hr />
        <p>
          JSON Web Token JWT is an open standard RFC 7519 for securely <br />
          transmitting information between parties as JSON object. It is <br />
          compact, readable and digitally signed using a private key/ or a
          <br />
          public key pair by the Identity ProviderIdP <br />
        </p>
      </div>
      <br />
      <br />

      <div>
        <h3> What is the difference between javascript and NodeJS?</h3>
        <hr />
        <p>
          . JavaScript is a client-side scripting language that is lightweight,{" "}
          <br />
          cross-platform, and interpreted. Both Java and HTML include it. <br />
          Node.js, on the other hand, is a V8-based server-side programming
          <br />
          language. As a result, it is used to create network-centric <br />
          applications. It's a networked system made for data-intensivebr <br />
          real-time applications. If we compare node js vs. python, it is clear
          <br />
          that node js will always be the preferred option. <br />
        </p>
      </div>
      <br />
      <br />

      <div>
        <h3>How does NodeJS handle multiple requests at the same time?</h3>
        <hr />
        <p>
          We know NodeJS application is single-threaded. Say, if processing{" "}
          <br />
          involves request A that takes 10 seconds, it does not mean that a{" "}
          <br />
          request which comes after this request needs to wait 10 seconds tob{" "}
          <br />
          start processing because NodeJS event loops are only single-threaded.{" "}
          <br />
          The entire NodeJS architecture is not single-threaded. <br />
        </p>
      </div>
    </div>
  );
};

export default Blog;
