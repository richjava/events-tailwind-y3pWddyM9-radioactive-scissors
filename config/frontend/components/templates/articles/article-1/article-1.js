import { format } from "date-fns";
import Image from "next/image";
import getConfig from "next/config";
import {CTAButtonSimple} from "@/elements";
import {CTAButton} from "@/elements";
const getHTML = (content) => {
  return {
    __html: content,
  };
};

export default function Article1({ content }) {
  if (!content) return <></>;
  let { item } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  return (
    <article id="article-1" className="template">
      <div className="pt-64 max-w-screen-xl px-4 mx-auto">

     
      {item && (
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:mr-10">
            <p className="pre-headline-secondary">Event Details</p>
            <h1 className="mb-8 md:mb-16 leading-tight">{item.attributes.title}</h1>
            <img
              className="w-full lg:hidden"
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                item.attributes.featuredImage?.data?.attributes?.url
              }`}
              alt={item.attributes.title}
            />

            <div className="sm:mx-6 lg:ml-12 lg:mr-0">
              <div className="mt-10">
                <p className="text-primary-70 mb-5">
                  <strong className="text-primary">When:&nbsp;</strong>
                  {item.attributes.startTime},&nbsp;
                  <span>
                    {format(new Date(item.attributes.date), "dd LLLL yyyy")}
                  </span>
                </p>
                {item.attributes.venue && (
                  <p className="text-primary-70 mb-5">
                    <strong className="text-primary">Where:&nbsp;</strong>
                    {item.attributes.venue}
                  </p>
                )}
                {item.attributes.genre && (
                  <p className="text-primary-70 mb-5">
                    <strong className="text-primary">Genre:&nbsp;</strong>
                    {item.attributes.genre}
                  </p>
                )}
                {item.attributes.duration && (
                  <p className="text-primary-70 mb-5">
                    <strong className="text-primary">Duration:&nbsp;</strong>
                    {item.attributes.duration}
                  </p>
                )}
                {item.attributes.restrictions && (
                  <p className="text-primary-70 mb-5">
                    <strong className="text-primary">Restrictions:&nbsp;</strong>
                    {item.attributes.restrictions}
                  </p>
                )}
                {item.attributes.infoWebsite && (
                  <p className="text-primary-70 mb-8 lg:mb-12">
                    <strong className="text-primary">Website:&nbsp;</strong>
                    <a
                      className="hover:text-secondary-dark transition-colors duration-200"
                      href={item.attributes.infoWebsite}
                    >
                      {item.attributes.infoWebsite}
                    </a>
                  </p>
                )}
                <CTAButtonSimple attributes={{ctaText: 'Ticket information', ctaUrl: '#booking'}} />
              </div>

              <div className="dropcap text-primary-70 leading-7" dangerouslySetInnerHTML={getHTML(item.attributes.body)}></div>
              {item.attributes.cTABlurb && (
                <div className="mt-10">
                  <p className="leading-7">
                    <strong>{item.attributes.cTABlurb}</strong>
                  </p>
                </div>
              )}
            </div>
            <section
              id="booking"
              className="pt-10 lg:pt-20 mb-24 md:mb-32 lg:mb-48"
            >
              <div className="pt-10 lg:pt-20">
                <p className="pre-headline-secondary">Tickets</p>
                <h2 className="mb-8 md:mb-16 leading-tight">Booking information</h2>
                <div className="sm:ml-6 lg:ml-12">
                  <div className="text-primary-70 leading-7 mb-12" dangerouslySetInnerHTML={getHTML(item.attributes.bookingInfo)}>
                  </div>
                  {item.attributes.ticketUrl && <CTAButton attributes={{ctaUrl: item.attributes.ticketUrl,ctaText: 'Buy tickets online'}} />}
                </div>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full">
            <Image
              className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                item.attributes.featuredImage.data.attributes.url
              }`}
              width={item.attributes.featuredImage.data.attributes.width}
              height={item.attributes.featuredImage.data.attributes.height}
              alt={item.attributes.featuredImage.data.attributes.alternativeText}
              layout="responsive"
              objectFit="cover"
              priority="true"
            />
            </div>
            <div className="bg-squares hidden lg:block -mt-40 lg:mt-32 xl:mt-0"></div>
            <div className="lg:mt-16 mb-32 lg:mb-48">
              {/* {item.attributes.quote &&
                            // {% call blockquote.default({quote: blox.page.item.fields.quote, source: blox.page.item.fields.quoteSource}) %}{% endcall %}
                        } */}
            </div>
          </div>
        </div>
      )}
       </div>
    </article>
  );
}
