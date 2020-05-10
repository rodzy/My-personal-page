import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/core";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
    <div className="container">
      
<main>

      <Layout/>
</main>
        {/* <p className="description">
          I'm currently a software enginering student, coursing desco
        </p> */}


          {/* <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
      <Footer/>
    </div>
   
    </Fragment>
  );
}
