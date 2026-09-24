import { SlashList } from "../components/SlashList";

const stackGroups = [
  {
    label: "Backend",
    lines: [
      ["PHP", "Laravel"],
      ["Python", "FastAPI"],
      ["TypeScript", "Node.js", "NestJS", "Express.js"],
    ],
  },
  {
    label: "Frontend",
    lines: [["Next.js", "React"]],
  },
  {
    label: "Data",
    lines: [
      ["MySQL", "PostgreSQL", "MongoDB"],
      ["Redis", "Elasticsearch", "OpenSearch"],
    ],
  },
  {
    label: "Infrastructure",
    lines: [["AWS", "Docker", "RabbitMQ", "SQS"]],
  },
  {
    label: "Exploring",
    lines: [["LLM APIs", "RAG", "Agents", "MCP"]],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="bg-white dark:bg-dark-900 py-20 lg:py-28 border-t border-slate-200 dark:border-dark-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Stack</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Tools &amp; Technologies
          </h2>
        </div>

        <dl>
          {stackGroups.map((group) => (
            <div
              key={group.label}
              className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-8 py-6 border-t border-slate-200 dark:border-dark-600"
            >
              <dt className="text-slate-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest pt-1">
                {group.label}
              </dt>
              <dd className="space-y-2">
                {group.lines.map((line) => (
                  <SlashList
                    key={line.join()}
                    items={line}
                    className="text-slate-800 dark:text-gray-200 text-lg lg:text-xl font-medium"
                  />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
