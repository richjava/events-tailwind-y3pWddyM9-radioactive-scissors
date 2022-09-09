import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import NewsletterForm1 from "@/templates/forms/newsletter-form-1/newsletter-form-1";
import Block4 from "@/templates/blocks/block-4/block-4";
import Block7 from "@/templates/blocks/block-7/block-7";
import Cards1 from "@/templates/cards/cards-1/cards-1";
import HeroCover from "@/templates/covers/hero-cover/hero-cover";
import Block6 from "@/templates/blocks/block-6/block-6";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
    <><Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Block6 content={props.aboutTeaserContent} />
			 <HeroCover content={props.eventsHeroContent} />
			 <Cards1 content={props.eventsListContent} />
			 <Block7 content={props.supportTeaserContent} />
			 <Block4 content={props.sponsorsContent} />
			 <NewsletterForm1 content={props.newsletterLrgContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'home'});
  return {
    props: props,
    revalidate: 10
  };
}