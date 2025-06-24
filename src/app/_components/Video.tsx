import { Accordion } from "@Rolec-Services/rolec-ui";

export function Video() {
  return (
    <section className="bg-clear mx-auto max-w-[1100px] px-6 py-10 text-gray-900">
      <h2 className="mb-6 text-2xl font-semibold">Watch and Learn</h2>
      <br></br>
      <div className="mx-auto aspect-video w-full max-w-[1100px] overflow-hidden rounded-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/Gzw7bo3_QoY"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
