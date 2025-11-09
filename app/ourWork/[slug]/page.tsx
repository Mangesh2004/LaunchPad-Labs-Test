import CaseStudyClient from "./CaseStudyClient";

const WORK_PAGES: Record<
  string,
  {
    title: string;
    summary: string;
  }
> = {
  fitai: {
    title: "FitAI Case Study",
    summary: "A deep dive into the FitAI experience.",
  },
  billflow: {
    title: "BillFlow Case Study",
    summary: "How we helped BillFlow ship fast and scale confidently.",
  },
  finsub: {
    title: "FinSub Case Study",
    summary: "FinSub’s investor dashboard transformation.",
  },
};

export function generateStaticParams() {
  return Object.keys(WORK_PAGES).map((slug) => ({ slug }));
}

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;
  const content = WORK_PAGES[slug] ?? {
    title: "Case Study",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo totam dolores, saepe officia possimus provident voluptatem sit quo consectetur delectus odio esse alias corrupti nisi maiores ut tempore voluptates fugiat reprehenderit temporibus accusantium numquam praesentium! Suscipit, sequi delectus molestiae sunt animi, quis, iure incidunt odio voluptatem harum deserunt atque. Doloremque culpa aperiam veniam unde voluptates quas, cumque modi nulla, accusantium distinctio iusto? Eum dicta dolorem iusto veniam, voluptatum iste voluptate fuga ipsam sit non rem ratione doloribus nemo alias iure ducimus minima perspiciatis, excepturi temporibus laboriosam fugit. Repellat magni accusamus pariatur fuga quo? Nam quisquam perspiciatis cupiditate dolorum quo!  ",
  };

  return <CaseStudyClient content={content} />;
};

export default CaseStudyPage;

