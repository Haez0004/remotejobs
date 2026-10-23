import { notFound } from "next/navigation";
import type { Metadata } from "next";
import sanitizeHtml from "sanitize-html";
import { getJobById } from "@/lib/jobs";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) return { title: "Job not found" };
  return {
    title: `${job.title} at ${job.company_name}`,
    description: job.description.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) notFound();

  let description = sanitizeHtml(job.description, {
    allowedTags: ["p", "br", "ul", "ol", "li", "strong", "b", "em", "i", "a", "h2", "h3", "h4"],
    allowedAttributes: { a: ["href", "target", "rel"] },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        target: "_blank",
        rel: "noopener noreferrer",
      }),
    },
  });

  description = description
    .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/(<br\s*\/?>\s*){2,}/gi, "<br />")
    .replace(/(<br\s*\/?>\s*)+(<\/?(p|ul|ol|li|h2|h3|h4)>)/gi, "$2")
    .replace(/(<\/?(p|ul|ol|li|h2|h3|h4)>)\s*(<br\s*\/?>\s*)+/gi, "$1");

  const posted = new Date(job.publication_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const details = [
    job.candidate_required_location,
    job.job_type?.replace(/_/g, " "),
    job.category,
    job.salary,
    `Posted ${posted}`,
  ].filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="mt-1 text-slate-400">{job.company_name}</p>

      <p className="mt-4 text-sm text-slate-300">{details.join(" · ")}</p>

      {job.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-cyan-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div
        className="mt-6 leading-relaxed [&_a]:text-cyan-400 [&_a]:underline [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mt-4 [&_h3]:font-bold [&_li]:mb-1 [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-900"
      >
        Apply on Remotive
      </a>
    </article>
  );
}
