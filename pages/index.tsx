import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import SideNav from "../components/SideNav";
import { Project, Sections } from "../utils/types";

const Home = ({ pinnedItems }: { pinnedItems: Project[] }) => {
  const [loading, setLoading] = useState(true);
  const [sectionOnScreen, setOnScreen] = useState<Sections>("Hero");
  const [navInView, setNavInView] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.6, 0.01, -0.05, 0.95],
            },
          }}
        >
          <Menu setNavInView={setNavInView} />
          <SideNav section={sectionOnScreen} navInView={navInView} />
          <div className='container'>
            <Hero setOnScreen={setOnScreen} />
          </div>
          <div className='container'>
            <About setOnScreen={setOnScreen} />
          </div>
          <div className='container'>
            <Projects setOnScreen={setOnScreen} projects={pinnedItems} />
          </div>
          <div className='container'>
            <Contact setOnScreen={setOnScreen} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "bbardi-dev") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  repositoryTopics(first: 10) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                  homepageUrl
                }
              }
            }
          }
        }
      }
    `,
  });

  let pinnedItems: Project[] = data.user.pinnedItems.edges.map(({ node }: any) => node);
  pinnedItems = pinnedItems.filter((p) => p.name !== "my-portfolio");

  return {
    props: {
      pinnedItems,
    },
  };
}

export default Home;
