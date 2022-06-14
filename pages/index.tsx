import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useState, useEffect, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    if (loading) {
      document.querySelector("body")?.classList.add("loading");
    } else {
      document.querySelector("body")?.classList.add("bg-changed");
      document.querySelector("body")?.classList.remove("loading");
    }
  }, [loading]);

  if (loading) return <Loader setLoading={setLoading} />;

  return (
    <>
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
    </>
  );
};

export async function getStaticProps() {
  try {
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
            pinnedItems(first: 6, types: [REPOSITORY]) {
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
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      pinnedItems: [],
    },
  };
}

export default Home;
