export default function CTAButtonSimple({ attributes }) {
  if (!attributes) return <></>;
  return (
    <div>
      {/* {attributes.ctaUrl && attributes.ctaText && <div class="h-5 inline-flex align-items mb-16 flex group">
        <a
          class="mt-1 tracking-widest uppercase leading-none text-sm pr-4"
          href={ attributes.ctaUrl }
        >
          {attributes.ctaText}
        </a>
        <a href={attributes.ctaUrl}>
          <svg
            class="group-hover:ml-5 w-10 transition-all duration-200"
            viewbox="0 0 9.414 17.414"
            width="7px"
          >
            <path
              class="stroke-2 stroke-current text-secondary"
              transform="translate(5782.7 8451.2)"
              d="m-5782-8450.5l8 8-8 8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>} */}
    </div>
  );
}
