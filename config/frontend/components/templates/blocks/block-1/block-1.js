import Image from "next/image";
import getConfig from "next/config";
import {LeftAlignedHeadline} from "@/elements";

export default function Block1({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes } = content;
  const getHTML = (content) => {
    return {
      __html: content,
    };
  };

  return (
    <section
      id="block-1"
      className="template"
    >
      <LeftAlignedHeadline attributes={attributes} />
      <div className="max-w-screen-xl px-4 mx-auto pt-5 pb-24 md:pb-32 lg:pb-48">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:mr-10 sm:mx-6 lg:ml-12">
          <p className="text-primary-70 leading-7 text-lg mb-8">
            <strong>
              {attributes.leadingSentence}
            </strong>
          </p>
          <p className="text-primary-70 leading-7" dangerouslySetInnerHTML={getHTML(attributes.body)}>
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          {/* <img className="blurry-load" src="{{ blox.db.about.fields.image1.sizes.w150 }}" data-large="{{ blox.db.about.fields.image1.sizes.w800 }}" alt="About image 1"> */}
          <div
            className="aos-init aos-animate shadow-xl"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
          >
            <Image
              className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                attributes.image.data.attributes.url
              }`}
              width={attributes.image.data.attributes.width}
              height={attributes.image.data.attributes.height}
              alt={attributes.image.data.attributes.alternativeText}
              layout="responsive"
              objectFit="cover"
              priority="true"
            />
          </div>

          <div className="bg-squares"></div>
        </div>
      </div>
      </div>
      
    </section>
  );
}
